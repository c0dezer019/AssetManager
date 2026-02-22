import logging
import os
import threading

import folder_paths
from server import PromptServer
from watchdog.events import FileSystemEventHandler
from watchdog.observers import Observer

from .config import load_config

logger = logging.getLogger("AssetManager.watcher")

WATCHED_EXTENSIONS = {".png", ".webp"}


class AssetFileHandler(FileSystemEventHandler):
    """Watches for image file creation/deletion and notifies the frontend via WebSocket."""

    def __init__(self):
        super().__init__()
        self._timer = None
        self._lock = threading.Lock()

    def _debounce_notify(self):
        """Coalesce rapid file events into a single notification (500ms window)."""
        with self._lock:
            if self._timer is not None:
                self._timer.cancel()
            self._timer = threading.Timer(0.5, self._send_notification)
            self._timer.start()

    def _send_notification(self):
        try:
            PromptServer.instance.send_sync("dnh-assets-changed", {})
        except Exception:
            pass

    def _update_index_add(self, path):
        """Index a new or modified file, swallowing errors."""
        try:
            from .indexer import get_index
            get_index().index_file(path)
        except Exception:
            logger.exception("Failed to index file: %s", path)

    def _update_index_remove(self, path):
        """Remove a file from the index, swallowing errors."""
        try:
            from .indexer import get_index
            get_index().remove_file(path)
        except Exception:
            logger.exception("Failed to remove file from index: %s", path)

    def _update_index_rename(self, old_path, new_path):
        """Handle a file rename in the index, swallowing errors."""
        try:
            from .indexer import get_index
            get_index().rename_file(old_path, new_path)
        except Exception:
            logger.exception("Failed to rename file in index: %s -> %s", old_path, new_path)

    def on_created(self, event):
        if not event.is_directory and os.path.splitext(event.src_path)[1].lower() in WATCHED_EXTENSIONS:
            self._update_index_add(event.src_path)
            self._debounce_notify()

    def on_deleted(self, event):
        if not event.is_directory and os.path.splitext(event.src_path)[1].lower() in WATCHED_EXTENSIONS:
            self._update_index_remove(event.src_path)
            self._debounce_notify()

    def on_moved(self, event):
        src_ext = os.path.splitext(event.src_path)[1].lower()
        dest_ext = os.path.splitext(event.dest_path)[1].lower()
        if not event.is_directory and (src_ext in WATCHED_EXTENSIONS or dest_ext in WATCHED_EXTENSIONS):
            self._update_index_rename(event.src_path, event.dest_path)
            self._debounce_notify()


_observer = None


def _get_watched_dirs():
    """Collect all directories that should be monitored."""
    config = load_config()
    dirs = [
        folder_paths.get_input_directory(),
        config.get("output_path") or folder_paths.get_output_directory(),
    ]
    for f in config.get("custom_folders", []):
        dirs.append(f["path"])
    # Deduplicate and filter to existing directories
    seen = set()
    result = []
    for d in dirs:
        d = os.path.abspath(d)
        if d not in seen and os.path.isdir(d):
            seen.add(d)
            result.append(d)
    return result


def start_watcher():
    """Start the file system observer on all configured directories."""
    global _observer
    if _observer is not None:
        try:
            _observer.stop()
            _observer.join(timeout=2)
        except Exception:
            pass

    handler = AssetFileHandler()
    _observer = Observer()
    for directory in _get_watched_dirs():
        try:
            _observer.schedule(handler, directory, recursive=True)
        except Exception:
            pass
    _observer.daemon = True
    _observer.start()


def restart_watcher():
    """Restart the watcher to pick up added/removed directories."""
    start_watcher()
