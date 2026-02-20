import os

from aiohttp import web

from ..utils.config import load_config, save_config
from ..utils.watcher import restart_watcher


async def manage_folders(request):
    data = await request.json()
    config = load_config()
    if data["action"] == "add" and os.path.isdir(data["path"]):
        if not any(f["path"] == data["path"] for f in config["custom_folders"]):
            config["custom_folders"].append({"path": data["path"]})
    elif data["action"] == "remove":
        config["custom_folders"] = [f for f in config["custom_folders"] if f["path"] != data["path"]]
    save_config(config)
    restart_watcher()
    return web.json_response(config)


async def get_subdirectories(request):
    path = request.query.get("path", "")
    if not path:
        return web.json_response({"dirs": ["/"] if os.name != 'nt' else ["C:\\"]})
    try:
        if os.path.isdir(path):
            dirs = [d for d in os.listdir(path) if os.path.isdir(os.path.join(path, d))]
            return web.json_response({"dirs": sorted(dirs), "current": path})
    except Exception:
        return web.json_response({"dirs": []})
    return web.json_response({"dirs": []})
