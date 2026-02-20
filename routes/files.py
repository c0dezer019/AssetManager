import os
import subprocess
import sys

from aiohttp import web

from ..utils.security import is_path_allowed


async def delete_file(request):
    data = await request.json()
    path = data.get("path")
    if os.path.exists(path):
        os.remove(path)
        return web.json_response({"status": "success"})
    return web.json_response({"status": "error"}, status=404)


async def open_file(request):
    data = await request.json()
    path = data.get("path")
    if not path or not os.path.exists(path):
        return web.json_response({"status": "error", "message": "File not found"}, status=404)
    if not is_path_allowed(path):
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
