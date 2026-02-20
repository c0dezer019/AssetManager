import os

from aiohttp import web

from ..utils.config import load_config, save_config
from ..utils.helpers import get_version
from ..utils.watcher import restart_watcher


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


async def get_config_route(request):
    return web.json_response(load_config())


async def serve_version(request):
    return web.json_response({"version": get_version()})
