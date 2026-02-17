import os
import json
import struct
import subprocess
import sys
import urllib.parse
from server import PromptServer
from aiohttp import web
import folder_paths

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

def get_image_metadata(full_path):
    try:
        with open(full_path, "rb") as f:
            signature = f.read(8)
            if signature != b"\x89PNG\r\n\x1a\n": return None
            while True:
                chunk_hdr = f.read(8)
                if not chunk_hdr or len(chunk_hdr) < 8: break
                length, chunk_type = struct.unpack(">I4s", chunk_hdr)
                if chunk_type == b"tEXt":
                    data = f.read(length)
                    key, value = data.split(b"\x00", 1)
                    if key == b"prompt":
                        prompt = json.loads(value)
                        models = [v['inputs']['ckpt_name'] for k, v in prompt.items() if 'ckpt_name' in v.get('inputs', {})]
                        loras = [v['inputs']['lora_name'] for k, v in prompt.items() if 'lora_name' in v.get('inputs', {})]
                        return {"prompt": prompt, "models": models, "loras": loras}
                else: f.seek(length, 1)
                f.read(4)
    except: pass
    return None

async def serve_ext_file(request):
    file_path = request.query.get("path")
    if not file_path or not os.path.exists(file_path): return web.Response(status=404)
    config = load_config()
    output_dir = config.get("output_path") or folder_paths.get_output_directory()
    allowed_dirs = [folder_paths.get_input_directory(), output_dir, folder_paths.get_output_directory()] + [f["path"] for f in config["custom_folders"]]
    if not any(os.path.abspath(file_path).startswith(os.path.abspath(d)) for d in allowed_dirs): return web.Response(status=403)
    return web.FileResponse(file_path)

async def get_history(request):
    params = request.query
    query, hide_nsfw = params.get("q", "").lower(), params.get("hide_nsfw", "true") == "true"
    tab = params.get("tab", "all")
    utility_type, favorites_only = params.get("utility", "all"), params.get("favorites_only") == "true"
    target_model, target_lora = params.get("model_filter", "all"), params.get("lora_filter", "all")

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
                    if f.lower().endswith(('.png', '.webp')): all_files.append({"filename": f, "path": root})

    all_files.sort(key=lambda x: os.path.getmtime(os.path.join(x['path'], x['filename'])), reverse=True)
    filtered = []
    for entry in all_files:
        full_path = os.path.normpath(os.path.join(entry['path'], entry['filename']))
        is_fav = full_path in favorites
        if favorites_only and not is_fav: continue
        if query and query not in entry['filename'].lower(): continue
        meta = get_image_metadata(full_path)
        has_workflow = meta is not None
        if utility_type == "generation" and not has_workflow: continue
        if utility_type == "input" and has_workflow: continue
        if meta:
            if hide_nsfw and any(term in str(meta['prompt']).lower() for term in NSFW_TERMS): continue
            if target_model != "all" and target_model not in meta['models']: continue
            if target_lora != "all" and target_lora not in meta['loras']: continue
        filtered.append({"filename": entry['filename'], "url": f"/cm-ext-view?path={urllib.parse.quote(full_path)}", "full_path": full_path, "has_workflow": has_workflow, "is_favorite": is_fav})
        if len(filtered) >= 60: break
    return web.json_response({"files": filtered})

async def manage_folders(request):
    data = await request.json()
    config = load_config()
    if data["action"] == "add" and os.path.isdir(data["path"]):
        if not any(f["path"] == data["path"] for f in config["custom_folders"]): config["custom_folders"].append({"path": data["path"]})
    elif data["action"] == "remove": config["custom_folders"] = [f for f in config["custom_folders"] if f["path"] != data["path"]]
    save_config(config)
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
    loras = set()
    all_models = folder_paths.get_filename_list("checkpoints")
    config = load_config()
    paths = [folder_paths.get_input_directory(), folder_paths.get_output_directory()] + [f["path"] for f in config["custom_folders"]]
    for path in paths:
        if os.path.exists(path):
            for root, _, files in os.walk(path):
                recent = sorted(files, key=lambda x: os.path.getmtime(os.path.join(root, x)), reverse=True)[:50]
                for f in recent:
                    meta = get_image_metadata(os.path.join(root, f))
                    if meta: loras.update(meta['loras'])
    return web.json_response({"models": sorted(all_models), "loras": sorted(list(loras))})

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

PromptServer.instance.app.add_routes([
    web.get("/dnh-assetmanager/history", get_history),
    web.get("/dnh-assetmanager/tags", get_tags),
    web.get("/dnh-assetmanager/subdirs", get_subdirectories),
    web.get("/dnh-assetmanager/config", lambda r: web.json_response(load_config())),
    web.post("/dnh-assetmanager/settings", update_settings),
    web.post("/dnh-assetmanager/folders", manage_folders),
    web.post("/dnh-assetmanager/favorite", toggle_favorite),
    web.post("/dnh-assetmanager/delete", delete_file),
    web.post("/dnh-assetmanager/open", open_file),
    web.get("/cm-ext-view", serve_ext_file)
])

WEB_DIRECTORY, NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS = "./js", {}, {}
