import os

from aiohttp import web

from ..utils.indexer import get_index
from ..utils.png_io import get_asset_metadata, write_asset_metadata
from ..utils.security import is_path_allowed


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
    if not is_path_allowed(path):
        return web.json_response({"error": "Access denied"}, status=403)
    ok = write_asset_metadata(
        path,
        title=data.get("title", ""),
        description=data.get("description", ""),
        tags=data.get("tags", ""),
        rating=data.get("rating", ""),
    )
    if ok:
        # Keep index in sync without a full re-read
        try:
            get_index().update_asset_metadata(
                path,
                title=data.get("title", ""),
                description=data.get("description", ""),
                tags=data.get("tags", ""),
                rating=data.get("rating", ""),
            )
        except Exception:
            pass
        return web.json_response({"status": "success"})
    return web.json_response({"error": "Failed to write metadata"}, status=500)
