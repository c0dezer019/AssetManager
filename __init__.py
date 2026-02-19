import os
import json
import struct
import subprocess
import sys
import threading
import urllib.parse
from server import PromptServer
from aiohttp import web
import folder_paths
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# CRITICAL: Setup paths and load filters/config
EXTENSION_DIR = os.path.dirname(os.path.realpath(__file__))
FILTER_FILE = os.path.join(EXTENSION_DIR, "filters.json")
CONFIG_FILE = os.path.join(EXTENSION_DIR, "config.json")

def load_nsfw_terms():
    try:
        if os.path.exists(FILTER_FILE):
            with open(FILTER_FILE, "r") as f:
                data = json.load(f)
                return set(data.get("nsfw_terms", []))
    except: pass
    return set()

def load_config():
    defaults = {"custom_folders": [], "favorites": [], "output_path": ""}
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r") as f:
                data = json.load(f)
                for key, val in defaults.items():
                    if key not in data:
                        data[key] = val
                return data
        except: pass
    return dict(defaults)

def save_config(config):
    with open(CONFIG_FILE, "w") as f:
        json.dump(config, f)

NSFW_TERMS = load_nsfw_terms()

# Custom tEXt chunk keys for asset metadata embedded directly in PNG files
ASSET_META_KEYS = ("asset_title", "asset_description", "asset_tags", "asset_rating")

def read_png_chunks(full_path):
    """Read all PNG chunks from a file. Returns list of (type_bytes, data_bytes) tuples."""
    chunks = []
    try:
        with open(full_path, "rb") as f:
            signature = f.read(8)
            if signature != b"\x89PNG\r\n\x1a\n": return None
            while True:
                chunk_hdr = f.read(8)
                if not chunk_hdr or len(chunk_hdr) < 8: break
                length, chunk_type = struct.unpack(">I4s", chunk_hdr)
                data = f.read(length)
                crc = f.read(4)
                chunks.append((chunk_type, data, crc))
    except Exception:
        return None
    return chunks

def get_asset_metadata(full_path):
    """Read custom asset metadata (title, description, tags, rating) from PNG tEXt chunks."""
    meta = {"title": "", "description": "", "tags": "", "rating": ""}
    chunks = read_png_chunks(full_path)
    if not chunks:
        return meta
    for chunk_type, data, _ in chunks:
        if chunk_type == b"tEXt" and b"\x00" in data:
            key, value = data.split(b"\x00", 1)
            key_str = key.decode("ascii", errors="replace")
            if key_str == "asset_title":
                meta["title"] = value.decode("utf-8", errors="replace")
            elif key_str == "asset_description":
                meta["description"] = value.decode("utf-8", errors="replace")
            elif key_str == "asset_tags":
                meta["tags"] = value.decode("utf-8", errors="replace")
            elif key_str == "asset_rating":
                meta["rating"] = value.decode("utf-8", errors="replace")
    return meta

def write_asset_metadata(full_path, title="", description="", tags="", rating=""):
    """Write custom asset metadata into PNG tEXt chunks. Preserves all other chunks."""
    chunks = read_png_chunks(full_path)
    if chunks is None:
        return False
    # Filter out existing asset metadata chunks
    filtered = [c for c in chunks if not (c[0] == b"tEXt" and c[1].split(b"\x00", 1)[0].decode("ascii", errors="replace") in ASSET_META_KEYS)]
    # Build new metadata chunks (insert before IEND)
    new_meta = {"asset_title": title, "asset_description": description, "asset_tags": tags, "asset_rating": rating}
    meta_chunks = []
    for key, val in new_meta.items():
        if val:
            chunk_data = key.encode("ascii") + b"\x00" + val.encode("utf-8")
            meta_chunks.append((b"tEXt", chunk_data, None))
    # Rebuild: all chunks except IEND, then meta chunks, then IEND
    iend = [c for c in filtered if c[0] == b"IEND"]
    body = [c for c in filtered if c[0] != b"IEND"]
    final = body + meta_chunks + iend
    # Write file
    try:
        import zlib as _zlib
        with open(full_path, "wb") as f:
            f.write(b"\x89PNG\r\n\x1a\n")
            for chunk_type, data, original_crc in final:
                f.write(struct.pack(">I", len(data)))
                f.write(chunk_type)
                f.write(data)
                if original_crc is not None:
                    f.write(original_crc)
                else:
                    crc = _zlib.crc32(chunk_type + data) & 0xFFFFFFFF
                    f.write(struct.pack(">I", crc))
        return True
    except Exception:
        return False

def get_image_metadata(full_path):
    """Read ComfyUI workflow prompt metadata from PNG tEXt chunks."""
    chunks = read_png_chunks(full_path)
    if not chunks:
        return None
    for chunk_type, data, _ in chunks:
        if chunk_type == b"tEXt" and b"\x00" in data:
            key, value = data.split(b"\x00", 1)
            if key == b"prompt":
                try:
                    prompt = json.loads(value)
                    models = [v['inputs']['ckpt_name'] for k, v in prompt.items() if 'ckpt_name' in v.get('inputs', {})]
                    loras = [v['inputs']['lora_name'] for k, v in prompt.items() if 'lora_name' in v.get('inputs', {})]
                    return {"prompt": prompt, "models": models, "loras": loras}
                except (json.JSONDecodeError, AttributeError):
                    pass
    return None

async def serve_ext_file(request):
    file_path = request.query.get("path")
    if not file_path or not os.path.exists(file_path): return web.Response(status=404)
    config = load_config()
    output_dir = config.get("output_path") or folder_paths.get_output_directory()
    allowed_dirs = [folder_paths.get_input_directory(), output_dir, folder_paths.get_output_directory()] + [f["path"] for f in config["custom_folders"]]
    if not any(os.path.abspath(file_path).startswith(os.path.abspath(d)) for d in allowed_dirs): return web.Response(status=403)
    return web.FileResponse(file_path)

def format_file_size(size_bytes):
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024:.1f} KB"
    elif size_bytes < 1024 * 1024 * 1024:
        return f"{size_bytes / (1024 * 1024):.1f} MB"
    return f"{size_bytes / (1024 * 1024 * 1024):.1f} GB"

async def get_history(request):
    params = request.query
    query, hide_nsfw = params.get("q", "").lower(), params.get("hide_nsfw", "true") == "true"
    tab = params.get("tab", "all")
    utility_type, favorites_only = params.get("utility", "all"), params.get("favorites_only") == "true"
    model_filter_raw = params.get("model_filter", "all")
    lora_filter_raw = params.get("lora_filter", "all")
    target_models = set() if model_filter_raw == "all" else set(model_filter_raw.split(","))
    target_loras = set() if lora_filter_raw == "all" else set(lora_filter_raw.split(","))
    sort_by = params.get("sort", "date")
    workflow_only = params.get("workflow_only") == "true"

    config = load_config()
    favorites = set(config.get("favorites", []))

    input_dir = folder_paths.get_input_directory()
    output_dir = config.get("output_path") or folder_paths.get_output_directory()
    custom_folders = config.get("custom_folders", [])

    scan_targets = []
    if tab == "all":
        scan_targets.append({"id": "input", "path": input_dir})
        scan_targets.append({"id": "output", "path": output_dir})
        for custom in custom_folders:
            scan_targets.append({"id": custom["path"], "path": custom["path"]})
    elif tab == "input":
        scan_targets.append({"id": "input", "path": input_dir})
    elif tab == "output":
        scan_targets.append({"id": "output", "path": output_dir})
    elif tab == "custom":
        for custom in custom_folders:
            scan_targets.append({"id": custom["path"], "path": custom["path"]})

    all_files = []
    for target in scan_targets:
        if os.path.exists(target["path"]):
            for root, _, files in os.walk(target["path"]):
                for f in files:
                    if f.lower().endswith(('.png', '.webp')):
                        fp = os.path.join(root, f)
                        try:
                            stat = os.stat(fp)
                            all_files.append({"filename": f, "path": root, "mtime": stat.st_mtime, "size": stat.st_size})
                        except OSError:
                            pass

    if sort_by == "size_desc":
        all_files.sort(key=lambda x: x['size'], reverse=True)
    elif sort_by == "size_asc":
        all_files.sort(key=lambda x: x['size'])
    elif sort_by == "name_asc":
        all_files.sort(key=lambda x: x['filename'].lower())
    elif sort_by == "name_desc":
        all_files.sort(key=lambda x: x['filename'].lower(), reverse=True)
    elif sort_by == "date_asc":
        all_files.sort(key=lambda x: x['mtime'])
    else:
        # Default: date_desc (newest first)
        all_files.sort(key=lambda x: x['mtime'], reverse=True)

    filtered = []
    for entry in all_files:
        full_path = os.path.normpath(os.path.join(entry['path'], entry['filename']))
        is_fav = full_path in favorites
        if favorites_only and not is_fav: continue
        if query and query not in entry['filename'].lower(): continue
        meta = get_image_metadata(full_path)
        has_workflow = meta is not None
        if workflow_only and not has_workflow: continue
        if utility_type == "generation" and not has_workflow: continue
        if utility_type == "input" and has_workflow: continue
        asset_meta = get_asset_metadata(full_path) if full_path.lower().endswith('.png') else {"title": "", "description": "", "tags": "", "rating": ""}
        if hide_nsfw:
            # Check filename
            name_lower = entry['filename'].lower()
            if any(term in name_lower for term in NSFW_TERMS): continue
            # Check embedded asset metadata (title, description, tags)
            asset_text = f"{asset_meta['title']} {asset_meta['description']} {asset_meta['tags']}".lower()
            if any(term in asset_text for term in NSFW_TERMS): continue
        # If model/lora filters are active, images must have workflow metadata
        if (target_models or target_loras) and not meta:
            continue
        if meta:
            if hide_nsfw:
                searchable = str(meta['prompt']).lower()
                model_lora_tags = " ".join(meta['models'] + meta['loras']).lower()
                searchable += " " + model_lora_tags
                if any(term in searchable for term in NSFW_TERMS): continue
            if target_models and not target_models.intersection(meta['models']):
                continue
            if target_loras and not target_loras.intersection(meta['loras']):
                continue
        ext = os.path.splitext(entry['filename'])[1].lstrip('.').upper()
        filtered.append({
            "filename": entry['filename'],
            "url": f"/cm-ext-view?path={urllib.parse.quote(full_path)}",
            "full_path": full_path,
            "has_workflow": has_workflow,
            "is_favorite": is_fav,
            "file_size": entry['size'],
            "file_size_formatted": format_file_size(entry['size']),
            "file_type": ext,
            "created_at": entry['mtime'],
            "asset_title": asset_meta["title"],
            "asset_description": asset_meta["description"],
            "asset_tags": asset_meta["tags"],
            "asset_rating": asset_meta["rating"],
        })
        if len(filtered) >= 60: break
    return web.json_response({"files": filtered})

async def manage_folders(request):
    data = await request.json()
    config = load_config()
    if data["action"] == "add" and os.path.isdir(data["path"]):
        if not any(f["path"] == data["path"] for f in config["custom_folders"]): config["custom_folders"].append({"path": data["path"]})
    elif data["action"] == "remove": config["custom_folders"] = [f for f in config["custom_folders"] if f["path"] != data["path"]]
    save_config(config)
    restart_watcher()
    return web.json_response(config)

async def toggle_favorite(request):
    data = await request.json()
    path = data.get("path")
    config = load_config()
    if path in config["favorites"]: config["favorites"].remove(path)
    else: config["favorites"].append(path)
    save_config(config)
    return web.json_response({"status": "success"})

async def delete_file(request):
    data = await request.json()
    path = data.get("path")
    if os.path.exists(path):
        os.remove(path)
        return web.json_response({"status": "success"})
    return web.json_response({"status": "error"}, status=404)

async def get_tags(request):
    models = set()
    loras = set()
    config = load_config()
    output_dir = config.get("output_path") or folder_paths.get_output_directory()
    paths = [folder_paths.get_input_directory(), output_dir] + [f["path"] for f in config["custom_folders"]]
    for path in paths:
        if os.path.exists(path):
            for root, _, files in os.walk(path):
                pngs = [f for f in files if f.lower().endswith('.png')]
                recent = sorted(pngs, key=lambda x: os.path.getmtime(os.path.join(root, x)), reverse=True)[:50]
                for f in recent:
                    meta = get_image_metadata(os.path.join(root, f))
                    if meta:
                        models.update(meta['models'])
                        loras.update(meta['loras'])
    return web.json_response({"models": sorted(models), "loras": sorted(loras)})

async def get_subdirectories(request):
    path = request.query.get("path", "")
    if not path: return web.json_response({"dirs": ["/"] if os.name != 'nt' else ["C:\\"]})
    try:
        if os.path.isdir(path):
            dirs = [d for d in os.listdir(path) if os.path.isdir(os.path.join(path, d))]
            return web.json_response({"dirs": sorted(dirs), "current": path})
    except: return web.json_response({"dirs": []})
    return web.json_response({"dirs": []})

async def update_settings(request):
    data = await request.json()
    config = load_config()
    if "output_path" in data:
        path = data["output_path"].strip()
        if path and not os.path.isdir(path):
            return web.json_response({"error": "Directory does not exist"}, status=400)
        config["output_path"] = path
    save_config(config)
    restart_watcher()
    return web.json_response(config)

async def open_file(request):
    data = await request.json()
    path = data.get("path")
    if not path or not os.path.exists(path):
        return web.json_response({"status": "error", "message": "File not found"}, status=404)
    config = load_config()
    output_dir = config.get("output_path") or folder_paths.get_output_directory()
    allowed_dirs = [folder_paths.get_input_directory(), output_dir, folder_paths.get_output_directory()] + [f["path"] for f in config["custom_folders"]]
    if not any(os.path.abspath(path).startswith(os.path.abspath(d)) for d in allowed_dirs):
        return web.json_response({"status": "error", "message": "Access denied"}, status=403)
    try:
        if sys.platform == "win32":
            os.startfile(path)
        elif sys.platform == "darwin":
            subprocess.Popen(["open", path])
        else:
            subprocess.Popen(["xdg-open", path])
        return web.json_response({"status": "success"})
    except Exception as e:
        return web.json_response({"status": "error", "message": str(e)}, status=500)

async def get_metadata(request):
    path = request.query.get("path")
    if not path or not os.path.exists(path):
        return web.json_response({"error": "File not found"}, status=404)
    if not path.lower().endswith('.png'):
        return web.json_response({"error": "Only PNG files support embedded metadata"}, status=400)
    meta = get_asset_metadata(path)
    return web.json_response(meta)

async def save_metadata(request):
    data = await request.json()
    path = data.get("path")
    if not path or not os.path.exists(path):
        return web.json_response({"error": "File not found"}, status=404)
    if not path.lower().endswith('.png'):
        return web.json_response({"error": "Only PNG files support embedded metadata"}, status=400)
    config = load_config()
    output_dir = config.get("output_path") or folder_paths.get_output_directory()
    allowed_dirs = [folder_paths.get_input_directory(), output_dir, folder_paths.get_output_directory()] + [f["path"] for f in config["custom_folders"]]
    if not any(os.path.abspath(path).startswith(os.path.abspath(d)) for d in allowed_dirs):
        return web.json_response({"error": "Access denied"}, status=403)
    ok = write_asset_metadata(
        path,
        title=data.get("title", ""),
        description=data.get("description", ""),
        tags=data.get("tags", ""),
        rating=data.get("rating", ""),
    )
    if ok:
        return web.json_response({"status": "success"})
    return web.json_response({"error": "Failed to write metadata"}, status=500)

def get_version():
    """Read version from pyproject.toml."""
    pyproject_path = os.path.join(EXTENSION_DIR, "pyproject.toml")
    try:
        with open(pyproject_path, "r") as f:
            for line in f:
                line = line.strip()
                if line.startswith("version"):
                    # Parse: version = "x.y.z"
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    except Exception:
        pass
    return "unknown"

async def serve_version(request):
    return web.json_response({"version": get_version()})

# ─── File Watcher ───

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

    def on_created(self, event):
        if not event.is_directory and os.path.splitext(event.src_path)[1].lower() in WATCHED_EXTENSIONS:
            self._debounce_notify()

    def on_deleted(self, event):
        if not event.is_directory and os.path.splitext(event.src_path)[1].lower() in WATCHED_EXTENSIONS:
            self._debounce_notify()

    def on_moved(self, event):
        src_ext = os.path.splitext(event.src_path)[1].lower()
        dest_ext = os.path.splitext(event.dest_path)[1].lower()
        if not event.is_directory and (src_ext in WATCHED_EXTENSIONS or dest_ext in WATCHED_EXTENSIONS):
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

start_watcher()

PromptServer.instance.app.add_routes([
    web.get("/dnh-assetmanager/history", get_history),
    web.get("/dnh-assetmanager/tags", get_tags),
    web.get("/dnh-assetmanager/subdirs", get_subdirectories),
    web.get("/dnh-assetmanager/config", lambda r: web.json_response(load_config())),
    web.post("/dnh-assetmanager/settings", update_settings),
    web.post("/dnh-assetmanager/folders", manage_folders),
    web.post("/dnh-assetmanager/favorite", toggle_favorite),
    web.post("/dnh-assetmanager/delete", delete_file),
    web.get("/dnh-assetmanager/metadata", get_metadata),
    web.post("/dnh-assetmanager/metadata", save_metadata),
    web.post("/dnh-assetmanager/open", open_file),
    web.get("/cm-ext-view", serve_ext_file),
    web.get("/dnh-assetmanager/version", serve_version)
])

WEB_DIRECTORY, NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS = "./js", {}, {}
