import os

import folder_paths

from .config import load_config


def get_allowed_dirs():
    """Return list of all directories that files may be served from."""
    config = load_config()
    output_dir = config.get("output_path") or folder_paths.get_output_directory()
    return [
        folder_paths.get_input_directory(),
        output_dir,
        folder_paths.get_output_directory(),
    ] + [f["path"] for f in config["custom_folders"]]


def is_path_allowed(path):
    """Check whether the given path is within one of the allowed directories."""
    allowed_dirs = get_allowed_dirs()
    return any(
        os.path.abspath(path).startswith(os.path.abspath(d))
        for d in allowed_dirs
    )
