import os

import folder_paths
from aiohttp import web

from ..utils.config import load_config
from ..utils.metadata import get_image_metadata


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
