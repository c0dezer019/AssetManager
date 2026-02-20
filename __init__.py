from server import PromptServer

from .routes import routes
from .utils.watcher import start_watcher

start_watcher()
PromptServer.instance.app.add_routes(routes)

WEB_DIRECTORY = "./js"
NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}
