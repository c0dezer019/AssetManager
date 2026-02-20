from aiohttp import web

from .favorites import toggle_favorite
from .files import delete_file, open_file
from .folders import get_subdirectories, manage_folders
from .history import get_history, serve_ext_file
from .metadata import get_metadata, save_metadata
from .settings import get_config_route, serve_version, update_settings
from .tags import get_tags

routes = [
    web.get("/dnh-assetmanager/history", get_history),
    web.get("/dnh-assetmanager/tags", get_tags),
    web.get("/dnh-assetmanager/subdirs", get_subdirectories),
    web.get("/dnh-assetmanager/config", get_config_route),
    web.post("/dnh-assetmanager/settings", update_settings),
    web.post("/dnh-assetmanager/folders", manage_folders),
    web.post("/dnh-assetmanager/favorite", toggle_favorite),
    web.post("/dnh-assetmanager/delete", delete_file),
    web.get("/dnh-assetmanager/metadata", get_metadata),
    web.post("/dnh-assetmanager/metadata", save_metadata),
    web.post("/dnh-assetmanager/open", open_file),
    web.get("/cm-ext-view", serve_ext_file),
    web.get("/dnh-assetmanager/version", serve_version),
]
