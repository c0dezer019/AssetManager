import json
import os

EXTENSION_DIR = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
FILTER_FILE = os.path.join(EXTENSION_DIR, "filters.json")
CONFIG_FILE = os.path.join(EXTENSION_DIR, "config.json")

# Custom tEXt chunk keys for asset metadata embedded directly in PNG files
ASSET_META_KEYS = ("asset_title", "asset_description", "asset_tags", "asset_rating")


def load_nsfw_terms():
    try:
        if os.path.exists(FILTER_FILE):
            with open(FILTER_FILE, "r") as f:
                data = json.load(f)
                return set(data.get("nsfw_terms", []))
    except Exception:
        pass
    return set()


def load_config():
    defaults = {"custom_folders": [], "favorites": [], "output_path": ""}
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r") as f:
                data = json.load(f)
                for key, val in defaults.items():
                    if key not in data:
                        data[key] = val
                return data
        except Exception:
            pass
    return dict(defaults)


def save_config(config):
    with open(CONFIG_FILE, "w") as f:
        json.dump(config, f)


NSFW_TERMS = load_nsfw_terms()
