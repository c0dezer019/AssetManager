import os

from .config import EXTENSION_DIR


def format_file_size(size_bytes):
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024:.1f} KB"
    elif size_bytes < 1024 * 1024 * 1024:
        return f"{size_bytes / (1024 * 1024):.1f} MB"
    return f"{size_bytes / (1024 * 1024 * 1024):.1f} GB"


def get_version():
    """Read version from pyproject.toml."""
    pyproject_path = os.path.join(EXTENSION_DIR, "pyproject.toml")
    try:
        with open(pyproject_path, "r") as f:
            for line in f:
                line = line.strip()
                if line.startswith("version"):
                    # Parse: version = "x.y.z"
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    except Exception:
        pass
    return "unknown"
