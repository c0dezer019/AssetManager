import logging
import os
import threading

import folder_paths
from aiohttp import web

from ..utils.config import load_config, save_config
from ..utils.helpers import format_file_size, get_version
from ..utils.indexer import get_index
from ..utils.watcher import restart_watcher

logger = logging.getLogger("AssetManager.settings")


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


async def get_index_stats(request):
    """Return index health statistics."""
    stats = get_index().get_stats()
    stats["db_size_formatted"] = format_file_size(stats["db_size"])
    return web.json_response(stats)


async def rebuild_index(request):
    """Drop and rebuild the entire index in a background thread."""
    def _rebuild():
        try:
            index = get_index()
            index.rebuild()
            config = load_config()
            dirs = [
                folder_paths.get_input_directory(),
                config.get("output_path") or folder_paths.get_output_directory(),
            ] + [f["path"] for f in config.get("custom_folders", [])]
            index.reconcile(dirs)
            from server import PromptServer
            try:
                PromptServer.instance.send_sync("dnh-assets-changed", {})
            except Exception:
                pass
        except Exception:
            logger.exception("Index rebuild failed")

    threading.Thread(target=_rebuild, daemon=True).start()
    return web.json_response({"status": "rebuilding"})
