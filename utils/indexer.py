"""SQLite-backed asset index for fast metadata queries.

Replaces per-request filesystem walks with database lookups. The index is
populated during startup reconciliation and kept in sync by the file watcher.
"""

import datetime
import json
import logging
import os
import sqlite3
import threading

from .config import EXTENSION_DIR
from .helpers import format_file_size
from .metadata import get_all_metadata

logger = logging.getLogger("AssetManager.indexer")

SCHEMA_VERSION = 1
DB_PATH = os.path.join(EXTENSION_DIR, "index.db")
IMAGE_EXTENSIONS = {".png", ".webp"}


class AssetIndex:
    """Thread-safe SQLite index of image assets and their metadata."""

    def __init__(self, db_path: str = DB_PATH):
        self._db_path = db_path
        self._conn: sqlite3.Connection | None = None
        self._lock = threading.Lock()

    # ------------------------------------------------------------------ #
    # Lifecycle
    # ------------------------------------------------------------------ #

    def open(self):
        """Open (or create) the database and ensure the schema exists."""
        with self._lock:
            self._conn = sqlite3.connect(self._db_path, check_same_thread=False)
            self._conn.execute("PRAGMA journal_mode=WAL")
            self._conn.execute("PRAGMA synchronous=NORMAL")
            self._conn.execute("PRAGMA foreign_keys=ON")
            self._conn.row_factory = sqlite3.Row
            self._ensure_schema()

    def close(self):
        with self._lock:
            if self._conn:
                self._conn.close()
                self._conn = None

    def _ensure_schema(self):
        """Create tables if they don't exist; handle migrations via schema version."""
        cur = self._conn.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='meta'"
        )
        if cur.fetchone() is None:
            self._create_tables()
            return

        row = self._conn.execute(
            "SELECT value FROM meta WHERE key='schema_version'"
        ).fetchone()
        version = int(row["value"]) if row else 0
        if version < SCHEMA_VERSION:
            # For now, recreate on schema bump
            self._conn.execute("DROP TABLE IF EXISTS asset_tags")
            self._conn.execute("DROP TABLE IF EXISTS assets")
            self._conn.execute("DROP TABLE IF EXISTS meta")
            self._create_tables()

    def _create_tables(self):
        self._conn.executescript("""
            CREATE TABLE IF NOT EXISTS meta (
                key   TEXT PRIMARY KEY,
                value TEXT
            );

            CREATE TABLE IF NOT EXISTS assets (
                path             TEXT PRIMARY KEY,
                directory        TEXT NOT NULL,
                filename         TEXT NOT NULL,
                extension        TEXT NOT NULL,
                mtime            REAL NOT NULL,
                size             INTEGER NOT NULL,
                has_workflow      INTEGER NOT NULL DEFAULT 0,
                prompt_json      TEXT,
                models_json      TEXT,
                loras_json       TEXT,
                seeds_json       TEXT,
                sampler_names_json TEXT,
                schedulers_json  TEXT,
                steps_json       TEXT,
                cfg_json         TEXT,
                prompt_texts_json TEXT,
                node_types_json  TEXT,
                searchable_text  TEXT NOT NULL DEFAULT '',
                asset_title      TEXT NOT NULL DEFAULT '',
                asset_description TEXT NOT NULL DEFAULT '',
                asset_tags       TEXT NOT NULL DEFAULT '',
                asset_rating     TEXT NOT NULL DEFAULT '',
                size_formatted   TEXT NOT NULL DEFAULT '',
                date_formatted   TEXT NOT NULL DEFAULT ''
            );

            CREATE TABLE IF NOT EXISTS asset_tags (
                path      TEXT NOT NULL,
                tag_type  TEXT NOT NULL,
                tag_value TEXT NOT NULL,
                FOREIGN KEY (path) REFERENCES assets(path) ON DELETE CASCADE
            );

            CREATE INDEX IF NOT EXISTS idx_assets_directory ON assets(directory);
            CREATE INDEX IF NOT EXISTS idx_assets_mtime ON assets(mtime);
            CREATE INDEX IF NOT EXISTS idx_assets_filename ON assets(filename);
            CREATE INDEX IF NOT EXISTS idx_assets_has_workflow ON assets(has_workflow);
            CREATE INDEX IF NOT EXISTS idx_asset_tags_type_value ON asset_tags(tag_type, tag_value);
            CREATE INDEX IF NOT EXISTS idx_asset_tags_path ON asset_tags(path);
        """)
        self._conn.execute(
            "INSERT OR REPLACE INTO meta (key, value) VALUES ('schema_version', ?)",
            (str(SCHEMA_VERSION),),
        )
        self._conn.commit()

    # ------------------------------------------------------------------ #
    # Single-file operations
    # ------------------------------------------------------------------ #

    def index_file(self, path: str):
        """Index or re-index a single file. Reads metadata from disk."""
        path = os.path.normpath(path)
        with self._lock:
            self._index_file_inner(path)
            self._conn.commit()

    def _index_file_inner(self, path: str):
        """Internal upsert — caller must hold self._lock and commit."""
        try:
            stat = os.stat(path)
        except OSError:
            return

        filename = os.path.basename(path)
        directory = os.path.dirname(path)
        extension = os.path.splitext(filename)[1].lower()

        workflow_meta, asset_meta = get_all_metadata(path)
        has_workflow = workflow_meta is not None

        size_formatted = format_file_size(stat.st_size)
        date_formatted = datetime.datetime.fromtimestamp(stat.st_mtime).strftime(
            "%b %d, %Y %H:%M"
        )

        prompt_json = None
        models_json = "[]"
        loras_json = "[]"
        seeds_json = "[]"
        sampler_names_json = "[]"
        schedulers_json = "[]"
        steps_json = "[]"
        cfg_json = "[]"
        prompt_texts_json = "[]"
        node_types_json = "[]"
        searchable_text = ""

        if workflow_meta:
            prompt_json = json.dumps(workflow_meta["prompt"])
            models_json = json.dumps(workflow_meta["models"])
            loras_json = json.dumps(workflow_meta["loras"])
            seeds_json = json.dumps(workflow_meta["seeds"])
            sampler_names_json = json.dumps(workflow_meta["sampler_names"])
            schedulers_json = json.dumps(workflow_meta["schedulers"])
            steps_json = json.dumps(workflow_meta["steps"])
            cfg_json = json.dumps(workflow_meta["cfg"])
            prompt_texts_json = json.dumps(workflow_meta["prompt_texts"])
            node_types_json = json.dumps(workflow_meta["node_types"])
            searchable_text = workflow_meta["searchable_text"]

        self._conn.execute(
            """INSERT OR REPLACE INTO assets (
                path, directory, filename, extension, mtime, size,
                has_workflow, prompt_json,
                models_json, loras_json, seeds_json,
                sampler_names_json, schedulers_json, steps_json, cfg_json,
                prompt_texts_json, node_types_json, searchable_text,
                asset_title, asset_description, asset_tags, asset_rating,
                size_formatted, date_formatted
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
            (
                path, directory, filename, extension, stat.st_mtime, stat.st_size,
                int(has_workflow), prompt_json,
                models_json, loras_json, seeds_json,
                sampler_names_json, schedulers_json, steps_json, cfg_json,
                prompt_texts_json, node_types_json, searchable_text,
                asset_meta["title"], asset_meta["description"],
                asset_meta["tags"], asset_meta["rating"],
                size_formatted, date_formatted,
            ),
        )

        # Rebuild denormalized tags
        self._conn.execute("DELETE FROM asset_tags WHERE path = ?", (path,))
        if workflow_meta:
            tag_rows = []
            for model in workflow_meta["models"]:
                tag_rows.append((path, "model", model))
            for lora in workflow_meta["loras"]:
                tag_rows.append((path, "lora", lora))
            if tag_rows:
                self._conn.executemany(
                    "INSERT INTO asset_tags (path, tag_type, tag_value) VALUES (?, ?, ?)",
                    tag_rows,
                )

    def remove_file(self, path: str):
        """Remove a file from the index."""
        path = os.path.normpath(path)
        with self._lock:
            self._conn.execute("DELETE FROM assets WHERE path = ?", (path,))
            self._conn.commit()

    def rename_file(self, old_path: str, new_path: str):
        """Handle a file move/rename by removing old and indexing new."""
        old_path = os.path.normpath(old_path)
        new_path = os.path.normpath(new_path)
        with self._lock:
            self._conn.execute("DELETE FROM assets WHERE path = ?", (old_path,))
            self._index_file_inner(new_path)
            self._conn.commit()

    # ------------------------------------------------------------------ #
    # Bulk reconciliation
    # ------------------------------------------------------------------ #

    def reconcile(self, directories: list[str]):
        """Synchronize the index with the filesystem.

        - Walks all directories and compares mtime/size with indexed rows.
        - Batch-upserts new or stale files, deletes removed files.
        - Commits every 100 files to keep memory bounded.
        """
        logger.info("Reconciliation started for %d directories", len(directories))

        # Collect filesystem state
        fs_files: dict[str, tuple[float, int]] = {}  # path -> (mtime, size)
        for directory in directories:
            directory = os.path.abspath(directory)
            if not os.path.isdir(directory):
                continue
            for root, _, files in os.walk(directory):
                for f in files:
                    if os.path.splitext(f)[1].lower() in IMAGE_EXTENSIONS:
                        fp = os.path.normpath(os.path.join(root, f))
                        try:
                            stat = os.stat(fp)
                            fs_files[fp] = (stat.st_mtime, stat.st_size)
                        except OSError:
                            pass

        with self._lock:
            # Load indexed state
            indexed: dict[str, tuple[float, int]] = {}
            for row in self._conn.execute("SELECT path, mtime, size FROM assets"):
                indexed[row["path"]] = (row["mtime"], row["size"])

            # Determine work
            to_index = []
            for fp, (mtime, size) in fs_files.items():
                cached = indexed.get(fp)
                if cached is None or cached[0] != mtime or cached[1] != size:
                    to_index.append(fp)

            to_remove = [p for p in indexed if p not in fs_files]

            # Remove stale entries
            if to_remove:
                # Batch delete in chunks of 500
                for i in range(0, len(to_remove), 500):
                    batch = to_remove[i:i + 500]
                    placeholders = ",".join("?" * len(batch))
                    self._conn.execute(
                        f"DELETE FROM assets WHERE path IN ({placeholders})", batch
                    )
                self._conn.commit()
                logger.info("Removed %d stale entries", len(to_remove))

            # Index new/stale files
            count = 0
            for fp in to_index:
                self._index_file_inner(fp)
                count += 1
                if count % 100 == 0:
                    self._conn.commit()
                    logger.info("Indexed %d / %d files...", count, len(to_index))

            self._conn.commit()
            logger.info(
                "Reconciliation complete: %d indexed, %d removed, %d unchanged",
                len(to_index), len(to_remove),
                len(fs_files) - len(to_index),
            )

    def rebuild(self):
        """Drop all data for corruption recovery. Call reconcile() after."""
        with self._lock:
            self._conn.execute("DELETE FROM asset_tags")
            self._conn.execute("DELETE FROM assets")
            self._conn.commit()
        logger.info("Index cleared — call reconcile() to rebuild")

    # ------------------------------------------------------------------ #
    # Queries
    # ------------------------------------------------------------------ #

    def query_assets(
        self,
        directories: list[str] | None = None,
        search_terms: list[dict] | None = None,
        hide_nsfw: bool = True,
        nsfw_terms: set[str] | None = None,
        workflow_only: bool = False,
        utility_type: str = "all",
        target_models: set[str] | None = None,
        target_loras: set[str] | None = None,
        favorites: set[str] | None = None,
        favorites_only: bool = False,
        sort_by: str = "date",
        offset: int = 0,
        limit: int = 60,
    ) -> tuple[list[sqlite3.Row], int]:
        """Query the asset index with full filtering and sorting.

        Returns (rows, total_count) where rows are limited by offset/limit
        and total_count is the unpagged match count.
        """
        where_clauses = []
        params = []

        # Directory filter
        if directories:
            dir_conditions = []
            for d in directories:
                d = os.path.normpath(d)
                dir_conditions.append("(a.path LIKE ? OR a.path LIKE ?)")
                # Match exact dir or any subdir
                params.append(d + os.sep + "%")
                params.append(d + "%")
            where_clauses.append("(" + " OR ".join(dir_conditions) + ")")

        # Extension filter (only image types)
        where_clauses.append("a.extension IN ('.png', '.webp')")

        # Workflow filter
        if workflow_only:
            where_clauses.append("a.has_workflow = 1")
        if utility_type == "generation":
            where_clauses.append("a.has_workflow = 1")
        elif utility_type == "input":
            where_clauses.append("a.has_workflow = 0")

        # Favorites filter
        if favorites_only and favorites:
            placeholders = ",".join("?" * len(favorites))
            where_clauses.append(f"a.path IN ({placeholders})")
            params.extend(favorites)
        elif favorites_only:
            # No favorites at all — return empty
            return [], 0

        # Model/Lora filters via subquery on asset_tags
        if target_models:
            model_ph = ",".join("?" * len(target_models))
            where_clauses.append(
                f"EXISTS (SELECT 1 FROM asset_tags t WHERE t.path = a.path "
                f"AND t.tag_type = 'model' AND t.tag_value IN ({model_ph}))"
            )
            params.extend(target_models)
        if target_loras:
            lora_ph = ",".join("?" * len(target_loras))
            where_clauses.append(
                f"EXISTS (SELECT 1 FROM asset_tags t WHERE t.path = a.path "
                f"AND t.tag_type = 'lora' AND t.tag_value IN ({lora_ph}))"
            )
            params.extend(target_loras)

        # NSFW filter
        if hide_nsfw and nsfw_terms:
            for term in nsfw_terms:
                where_clauses.append(
                    "LOWER(a.filename) NOT LIKE ? "
                    "AND LOWER(a.asset_title || ' ' || a.asset_description || ' ' || a.asset_tags) NOT LIKE ? "
                    "AND LOWER(a.searchable_text) NOT LIKE ?"
                )
                pattern = f"%{term}%"
                params.extend([pattern, pattern, pattern])

        # Search terms — all handled in SQL with LIKE patterns
        if search_terms:
            for term in search_terms:
                key, value = term.get("key"), term.get("value", "")
                if not value:
                    continue
                if key is None:
                    # Broad substring: search across filename, asset meta, searchable_text, path
                    where_clauses.append(
                        "(LOWER(a.filename) LIKE ? "
                        "OR LOWER(a.asset_title) LIKE ? "
                        "OR LOWER(a.asset_description) LIKE ? "
                        "OR LOWER(a.asset_tags) LIKE ? "
                        "OR a.searchable_text LIKE ? "
                        "OR LOWER(a.path) LIKE ? "
                        "OR LOWER(a.size_formatted) LIKE ? "
                        "OR LOWER(a.date_formatted) LIKE ?)"
                    )
                    pattern = f"%{value}%"
                    params.extend([pattern] * 8)
                elif key in ("filename", "name"):
                    where_clauses.append("LOWER(a.filename) LIKE ?")
                    params.append(f"%{value}%")
                elif key == "type":
                    # Exact extension match (value like "png")
                    where_clauses.append("LOWER(a.extension) = ?")
                    params.append(f".{value}")
                elif key == "size":
                    where_clauses.append("LOWER(a.size_formatted) LIKE ?")
                    params.append(f"%{value}%")
                elif key == "path":
                    where_clauses.append("LOWER(a.path) LIKE ?")
                    params.append(f"%{value}%")
                elif key == "date":
                    where_clauses.append("LOWER(a.date_formatted) LIKE ?")
                    params.append(f"%{value}%")
                elif key == "seed":
                    where_clauses.append("a.seeds_json LIKE ?")
                    params.append(f'%"{value}"%')
                elif key == "model":
                    where_clauses.append("LOWER(a.models_json) LIKE ?")
                    params.append(f"%{value}%")
                elif key == "lora":
                    where_clauses.append("LOWER(a.loras_json) LIKE ?")
                    params.append(f"%{value}%")
                elif key == "node":
                    where_clauses.append("LOWER(a.node_types_json) LIKE ?")
                    params.append(f"%{value}%")
                elif key == "sampler":
                    where_clauses.append("LOWER(a.sampler_names_json) LIKE ?")
                    params.append(f"%{value}%")
                elif key == "scheduler":
                    where_clauses.append("LOWER(a.schedulers_json) LIKE ?")
                    params.append(f"%{value}%")
                elif key == "steps":
                    where_clauses.append("a.steps_json LIKE ?")
                    params.append(f'%"{value}"%')
                elif key == "cfg":
                    where_clauses.append("a.cfg_json LIKE ?")
                    params.append(f'%"{value}"%')
                elif key == "prompt":
                    where_clauses.append("LOWER(a.prompt_texts_json) LIKE ?")
                    params.append(f"%{value}%")
                else:
                    # Unknown prefix — broad search with key:value
                    prefixed = f"{key}:{value}"
                    where_clauses.append(
                        "(a.searchable_text LIKE ? OR LOWER(a.filename) LIKE ?)"
                    )
                    params.extend([f"%{prefixed}%", f"%{prefixed}%"])

        # Build ORDER BY
        order_map = {
            "size_desc": "a.size DESC",
            "size_asc": "a.size ASC",
            "name_asc": "LOWER(a.filename) ASC",
            "name_desc": "LOWER(a.filename) DESC",
            "date_asc": "a.mtime ASC",
        }
        order_by = order_map.get(sort_by, "a.mtime DESC")

        where_sql = " AND ".join(where_clauses) if where_clauses else "1=1"

        # Count query
        count_sql = f"SELECT COUNT(*) as cnt FROM assets a WHERE {where_sql}"
        # Data query
        data_sql = (
            f"SELECT a.* FROM assets a WHERE {where_sql} "
            f"ORDER BY {order_by} LIMIT ? OFFSET ?"
        )

        with self._lock:
            total = self._conn.execute(count_sql, params).fetchone()["cnt"]
            rows = self._conn.execute(
                data_sql, params + [limit, offset]
            ).fetchall()

        return rows, total

    def query_tags(self) -> dict[str, list[str]]:
        """Return distinct model and lora tag values from the index."""
        with self._lock:
            models = [
                row["tag_value"]
                for row in self._conn.execute(
                    "SELECT DISTINCT tag_value FROM asset_tags "
                    "WHERE tag_type = 'model' ORDER BY tag_value"
                )
            ]
            loras = [
                row["tag_value"]
                for row in self._conn.execute(
                    "SELECT DISTINCT tag_value FROM asset_tags "
                    "WHERE tag_type = 'lora' ORDER BY tag_value"
                )
            ]
        return {"models": models, "loras": loras}

    def get_stats(self) -> dict:
        """Return index health/statistics."""
        with self._lock:
            total_assets = self._conn.execute(
                "SELECT COUNT(*) as cnt FROM assets"
            ).fetchone()["cnt"]
            with_workflow = self._conn.execute(
                "SELECT COUNT(*) as cnt FROM assets WHERE has_workflow = 1"
            ).fetchone()["cnt"]
            total_tags = self._conn.execute(
                "SELECT COUNT(*) as cnt FROM asset_tags"
            ).fetchone()["cnt"]
            distinct_models = self._conn.execute(
                "SELECT COUNT(DISTINCT tag_value) as cnt FROM asset_tags WHERE tag_type = 'model'"
            ).fetchone()["cnt"]
            distinct_loras = self._conn.execute(
                "SELECT COUNT(DISTINCT tag_value) as cnt FROM asset_tags WHERE tag_type = 'lora'"
            ).fetchone()["cnt"]
            # Extension breakdown
            ext_rows = self._conn.execute(
                "SELECT extension, COUNT(*) as cnt FROM assets GROUP BY extension ORDER BY cnt DESC"
            ).fetchall()
            extensions = {row["extension"]: row["cnt"] for row in ext_rows}
            # Directory breakdown
            dir_rows = self._conn.execute(
                "SELECT directory, COUNT(*) as cnt FROM assets GROUP BY directory ORDER BY cnt DESC"
            ).fetchall()
            directories = {row["directory"]: row["cnt"] for row in dir_rows}

        # DB file size
        try:
            db_size = os.path.getsize(self._db_path)
        except OSError:
            db_size = 0

        return {
            "total_assets": total_assets,
            "with_workflow": with_workflow,
            "without_workflow": total_assets - with_workflow,
            "total_tags": total_tags,
            "distinct_models": distinct_models,
            "distinct_loras": distinct_loras,
            "extensions": extensions,
            "directories": directories,
            "db_size": db_size,
            "db_path": self._db_path,
        }

    def update_asset_metadata(
        self, path: str, title: str, description: str, tags: str, rating: str
    ):
        """Update only the asset metadata fields for a given path."""
        path = os.path.normpath(path)
        with self._lock:
            self._conn.execute(
                """UPDATE assets SET
                    asset_title = ?, asset_description = ?,
                    asset_tags = ?, asset_rating = ?
                WHERE path = ?""",
                (title, description, tags, rating, path),
            )
            self._conn.commit()


# ------------------------------------------------------------------ #
# Module-level singleton
# ------------------------------------------------------------------ #

_index: AssetIndex | None = None
_index_lock = threading.Lock()


def get_index() -> AssetIndex:
    """Return the lazily-initialized global AssetIndex instance."""
    global _index
    if _index is None:
        with _index_lock:
            if _index is None:
                _index = AssetIndex()
                _index.open()
    return _index
