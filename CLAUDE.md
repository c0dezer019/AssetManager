# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AssetManager (display name "Asset Manager", sidebar title "Assets Manager") is a ComfyUI custom node extension that provides a sidebar-based image asset browser. It scans ComfyUI's input/output directories plus user-configured custom folders, reads PNG metadata (workflow/prompt data embedded in tEXt chunks), and lets users filter, search, favorite, and reload workflows from generated images. Published to the Comfy Registry under publisher `c0dezer019`.

**This extension has no Python nodes** — `NODE_CLASS_MAPPINGS` is empty. It is purely a server-side API + frontend sidebar extension.

## Architecture

### Backend (`__init__.py` — single file)
- Registers HTTP routes on `PromptServer` under the `/dnh-assetmanager/` prefix
- All routes are registered at module import time (bottom of file)
- Key API endpoints:
  - `GET /dnh-assetmanager/history` — main asset listing with filtering (query, utility type, model/lora, NSFW, favorites)
  - `GET /dnh-assetmanager/tags` — returns available checkpoints and LoRAs extracted from image metadata
  - `GET /dnh-assetmanager/subdirs` — directory browser for custom folder picker
  - `POST /dnh-assetmanager/folders` — add/remove custom scan directories
  - `POST /dnh-assetmanager/favorite` — toggle favorite on a file path
  - `POST /dnh-assetmanager/delete` — delete an asset file
  - `GET /cm-ext-view` — secure file proxy (validates path is within allowed directories)
- PNG metadata extraction: manually parses PNG chunks looking for `tEXt` with key `prompt`, extracts `ckpt_name` and `lora_name` from the prompt JSON
- Persistent state stored in `config.json` (custom folders, favorites) and `filters.json` (NSFW keyword list)

### Frontend (`js/` — served via `WEB_DIRECTORY = "./js"`)
- `sidebar.js` — Main extension entry point. Registers via `app.registerExtension()` with name `DefinitelyNotHuman.AssetManager`. Creates a sidebar tab using `app.extensionManager.registerSidebarTab()` with PrimeVue icon classes (`pi pi-*`).
- `folderSelector.js` — Modal directory picker component that calls `/dnh-assetmanager/subdirs` for filesystem navigation.
- `style.css` — All styles use the `cm-` prefix. Loaded dynamically via `import.meta.url` in the extension init.

### Data Flow
1. Sidebar loads → calls `/dnh-assetmanager/history` with filter params
2. Backend walks configured directories, reads PNG metadata, applies filters, returns up to 60 results
3. Frontend renders image grid; images are served through `/cm-ext-view?path=` proxy
4. Clicking an image fetches it as a blob and calls `app.handleFile()` to load its workflow

## Development

### Running
This extension runs inside ComfyUI. Place/symlink the repo in `ComfyUI/custom_nodes/` and restart ComfyUI. No build step is required — JS files are served directly.

### Linting
```
ruff check .
```
Ruff is configured via `pyproject.toml` (cache exists in `.ruff_cache/`).

### Key Conventions
- CSS class prefix: `cm-` (e.g., `cm-card`, `cm-sidebar-content`)
- API route prefix: `/dnh-assetmanager/`
- Extension registration name: `DefinitelyNotHuman.AssetManager`
- The file proxy route `/cm-ext-view` enforces path-based access control: only files under input dir, output dir, or configured custom folders are served
- Results are hard-capped at 60 items in `get_history()`

### Current Branch Context
The `vue-integration` branch is actively being developed. The main branch is `main`.
