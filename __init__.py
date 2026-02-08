import os
import json
import struct
import urllib.parse
from server import PromptServer
from aiohttp import web
import folder_paths

# 1. Setup paths and load filters/config
EXTENSION_DIR = os.path.dirname(os.path.realpath(__file__))
FILTER_FILE = os.path.join(EXTENSION_DIR, "filters.json")
CONFIG_FILE = os.path.join(EXTENSION_DIR, "config.json")

def load_nsfw_terms():
    """Loads restricted terms from filters.json."""
    try:
        if os.path.exists(FILTER_FILE):
            with open(FILTER_FILE, "r") as f:
                data = json.load(f)
                return set(data.get("nsfw_terms", []))
    except Exception as e:
        print(f"GenHistory: Error loading filters.json: {e}")
    return set()

def load_config():
    """Loads persistent custom folder configurations."""
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r") as f:
                return json.load(f)
        except:
            pass
    return {"custom_folders": []}

def save_config(config):
    """Saves folder configuration to disk."""
    with open(CONFIG_FILE, "w") as f:
        json.dump(config, f)

NSFW_TERMS = load_nsfw_terms()

def get_image_metadata(full_path):
    """Extracts workflow prompt and identifies Models/LoRAs from PNG/WebP metadata."""
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
                        # Extract class types for models and specific lora names
                        models = [v['inputs']['ckpt_name'] for k, v in prompt.items() if 'ckpt_name' in v.get('inputs', {})]
                        loras = [v['inputs']['lora_name'] for k, v in prompt.items() if 'lora_name' in v.get('inputs', {})]
                        return {"prompt": prompt, "models": models, "loras": loras}
                else:
                    f.seek(length, 1)
                f.read(4) # Skip CRC
    except:
        pass
    return None

async def serve_ext_file(request):
    """Proxy handler to serve files from authorized absolute paths."""
    file_path = request.query.get("path")
    if not file_path or not os.path.exists(file_path):
        return web.Response(status=404)
    
    config = load_config()
    allowed_dirs = [folder_paths.get_input_directory(), folder_paths.get_output_directory()]
    allowed_dirs.extend([f["path"] for f in config["custom_folders"]])
    
    # Security: Ensure the file is inside an authorized directory
    if not any(os.path.abspath(file_path).startswith(os.path.abspath(d)) for d in allowed_dirs):
        return web.Response(status=403, text="Access Denied")

    return web.FileResponse(file_path)

async def get_history(request):
    """API to fetch assets filtered by utility (Generation vs Input)."""
    params = request.query
    query = params.get("q", "").lower()
    hide_nsfw = params.get("hide_nsfw", "true").lower() == "true"
    enabled_folders = params.get("folders", "").split(",")
    target_model = params.get("model_filter", "all")
    target_lora = params.get("lora_filter", "all")
    utility_type = params.get("utility", "all") # "all", "generation", "input"
    
    config = load_config()
    scan_targets = [
        {"id": "input", "path": folder_paths.get_input_directory()},
        {"id": "output", "path": folder_paths.get_output_directory()}
    ]
    for custom in config["custom_folders"]:
        scan_targets.append({"id": custom["path"], "path": custom["path"]})

    all_files = []
    for target in scan_targets:
        if target["id"] in enabled_folders and os.path.exists(target["path"]):
            for f in os.listdir(target["path"]):
                if f.lower().endswith(('.png', '.webp')):
                    all_files.append({"filename": f, "path": target["path"]})

    # Sort newest first
    all_files.sort(key=lambda x: os.path.getmtime(os.path.join(x['path'], x['filename'])), reverse=True)

    filtered_files = []
    for entry in all_files:
        full_path = os.path.join(entry['path'], entry['filename'])
        if query and query not in entry['filename'].lower(): continue

        meta = get_image_metadata(full_path)
        has_workflow = meta is not None

        # Filter by Utility
        if utility_type == "generation" and not has_workflow: continue
        if utility_type == "input" and has_workflow: continue

        if meta:
            if hide_nsfw and any(term in str(meta['prompt']).lower() for term in NSFW_TERMS): continue
            if target_model != "all" and target_model not in meta['models']: continue
            if target_lora != "all" and target_lora not in meta['loras']: continue
        
        filtered_files.append({
            "filename": entry['filename'], 
            "url": f"/cm-ext-view?path={urllib.parse.quote(full_path)}",
            "has_workflow": has_workflow
        })
        if len(filtered_files) >= 60: break # Limit for UI grid performance
                
    return web.json_response({"files": filtered_files})

async def manage_folders(request):
    """Adds or removes custom directory paths from the config."""
    data = await request.json()
    config = load_config()
    if data["action"] == "add" and os.path.isdir(data["path"]):
        if not any(f["path"] == data["path"] for f in config["custom_folders"]):
            config["custom_folders"].append({"path": data["path"]})
    elif data["action"] == "remove":
        config["custom_folders"] = [f for f in config["custom_folders"] if f["path"] != data["path"]]
    
    save_config(config)
    return web.json_response(config)

async def get_tags(request):
    """Scans recent images to populate Model and LoRA dropdowns."""
    models, loras = set(), set()
    config = load_config()
    paths = [folder_paths.get_input_directory(), folder_paths.get_output_directory()]
    paths.extend([f["path"] for f in config["custom_folders"]])
    
    for path in paths:
        if os.path.exists(path):
            recent = sorted(os.listdir(path), key=lambda x: os.path.getmtime(os.path.join(path, x)), reverse=True)[:50]
            for f in recent:
                meta = get_image_metadata(os.path.join(path, f))
                if meta:
                    models.update(meta['models']); loras.update(meta['loras'])
    return web.json_response({"models": sorted(list(models)), "loras": sorted(list(loras))})

# Register Routes
PromptServer.instance.app.add_routes([
    web.get("/comfymeister/history", get_history),
    web.get("/comfymeister/tags", get_tags),
    web.get("/comfymeister/config", lambda r: web.json_response(load_config())),
    web.post("/comfymeister/folders", manage_folders),
    web.get("/cm-ext-view", serve_ext_file)
])

WEB_DIRECTORY = "./js"
NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}
