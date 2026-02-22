import logging
import os
import threading

import folder_paths
from server import PromptServer

from .routes import routes
from .utils.config import load_config
from .utils.indexer import get_index
from .utils.watcher import start_watcher

logger = logging.getLogger("AssetManager")


def _get_scan_directories():
    """Collect all directories that should be indexed."""
    config = load_config()
    dirs = [
        folder_paths.get_input_directory(),
        config.get("output_path") or folder_paths.get_output_directory(),
    ]
    for f in config.get("custom_folders", []):
        dirs.append(f["path"])
    # Deduplicate and filter to existing
    seen = set()
    result = []
    for d in dirs:
        d = os.path.abspath(d)
        if d not in seen and os.path.isdir(d):
            seen.add(d)
            result.append(d)
    return result


def _background_reconcile():
    """Run index reconciliation in a background daemon thread."""
    try:
        index = get_index()
        dirs = _get_scan_directories()
        index.reconcile(dirs)
        # Notify frontend that indexing is complete
        try:
            PromptServer.instance.send_sync("dnh-assets-changed", {})
        except Exception:
            pass
    except Exception:
        logger.exception("Background reconciliation failed")


# Initialize index and start background reconciliation
get_index()
reconcile_thread = threading.Thread(target=_background_reconcile, daemon=True)
reconcile_thread.start()

start_watcher()
PromptServer.instance.app.add_routes(routes)

WEB_DIRECTORY = "./dist"
NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}
