# Asset Manager for ComfyUI

**Asset Manager** is a sidebar-based image asset browser for ComfyUI. It scans your input, output, and custom directories for PNG/WebP images, reads embedded metadata, and lets you browse, filter, favorite, and reload workflows directly from the sidebar.

Published to the Comfy Registry under publisher `c0dezer019`.

## Features

### Asset Browsing
- **Sidebar integration** — renders as a dedicated ComfyUI sidebar tab with a responsive image grid
- **Multi-source scanning** — browses ComfyUI's input directory, output directory, and any number of user-configured custom folders
- **Configurable output path** — override the default ComfyUI output directory in settings
- **Workflow loading** — click any image to load its embedded ComfyUI workflow, or right-click for more options
- **External viewer** — open images in your system's default image viewer via the context menu

### Filtering & Search
- **Text search** — filter assets by filename
- **Tab navigation** — switch between All, Inputs, Outputs, and Custom folder views
- **Utility type filter** — show only generated images (with workflow metadata) or only input assets (no workflow)
- **Model/LoRA filtering** — filter by specific checkpoints or LoRAs extracted from embedded prompt metadata
- **Workflow-only mode** — show only images that contain embedded workflows
- **NSFW filter** — hide images matching a customizable keyword list (`filters.json`), scans filenames, asset metadata, and prompt data

### Sorting
- Sort by date (newest/oldest), file size (largest/smallest), or name (A-Z / Z-A)
- Left-click the sort button to toggle direction; right-click to pick a different sort field

### Favorites
- **Toggle favorites** — click the bookmark icon on any card or use the right-click context menu to add/remove favorites
- **Filter by favorites** — click the bookmark toolbar button to show only favorited images
- Favorites are persisted in `config.json`

### Asset Metadata (PNG)
- **Embedded metadata editor** — right-click a PNG and select "Edit metadata" to set a title, description, tags, and star rating
- Metadata is stored as custom PNG `tEXt` chunks, so it travels with the file
- NSFW filter also checks asset metadata fields

### Security
- **Secure file proxy** — images are served through a validated proxy route (`/cm-ext-view`) that only allows access to files within configured directories

## Installation

### Via ComfyUI Manager (Recommended)
Search for "Asset Manager" in ComfyUI Manager and install.

### Manual
1. Navigate to your `ComfyUI/custom_nodes/` directory.
2. Clone or symlink this repository.
3. Restart ComfyUI.

No build step required — JavaScript files are served directly.

## Configuration

- **Custom folders**: Click the gear icon in the sidebar to add/remove custom scan directories. You can also use the folder browser to navigate your filesystem.
- **Output directory**: Override the default ComfyUI output path in the settings panel.
- **NSFW filter terms**: Edit `filters.json` to customize the keyword blocklist.
- **Favorites & folders**: Persisted automatically in `config.json`.

## Architecture

This extension has **no Python nodes** — `NODE_CLASS_MAPPINGS` is empty. It consists of:

- **`__init__.py`** — Backend HTTP routes registered on ComfyUI's `PromptServer` under the `/dnh-assetmanager/` prefix
- **`js/sidebar.js`** — Frontend sidebar extension registered as `DefinitelyNotHuman.AssetManager`
- **`js/folderSelector.js`** — Modal directory picker component
- **`js/style.css`** — All styles using the `cm-` class prefix

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/dnh-assetmanager/history` | Main asset listing with filtering |
| GET | `/dnh-assetmanager/tags` | Available checkpoints and LoRAs |
| GET | `/dnh-assetmanager/subdirs` | Directory browser |
| GET | `/dnh-assetmanager/config` | Current configuration |
| GET | `/dnh-assetmanager/metadata` | Read PNG asset metadata |
| POST | `/dnh-assetmanager/folders` | Add/remove custom folders |
| POST | `/dnh-assetmanager/favorite` | Toggle favorite on a file |
| POST | `/dnh-assetmanager/delete` | Delete an asset file |
| POST | `/dnh-assetmanager/settings` | Update settings |
| POST | `/dnh-assetmanager/metadata` | Save PNG asset metadata |
| POST | `/dnh-assetmanager/open` | Open file in system viewer |
| GET | `/cm-ext-view` | Secure file proxy |

## Development

### Linting
```bash
ruff check .
```

Ruff is configured via `pyproject.toml`.

### Requirements
- ComfyUI with `PromptServer`
- Python 3.10+
- No additional Python dependencies
