from aiohttp import web

from ..utils.config import load_config, save_config


async def toggle_favorite(request):
    data = await request.json()
    path = data.get("path")
    config = load_config()
    if path in config["favorites"]:
        config["favorites"].remove(path)
    else:
        config["favorites"].append(path)
    save_config(config)
    return web.json_response({"status": "success"})
