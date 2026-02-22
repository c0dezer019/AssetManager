# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AssetManager (display name "Asset Manager", sidebar title "Assets Manager") is a ComfyUI custom node extension that provides a sidebar-based image asset browser. It scans ComfyUI's input/output directories plus user-configured custom folders, reads PNG metadata (workflow/prompt data embedded in tEXt chunks), and lets users filter, search, favorite, and reload workflows from generated images. Published to the Comfy Registry under publisher `c0dezer019`.

**This extension has no Python nodes** — `NODE_CLASS_MAPPINGS` is empty. It is purely a server-side API + frontend sidebar extension.

## Architecture

### Backend (`__init__.py` + `routes/` + `utils/`)
- Registers HTTP routes on `PromptServer` under the `/dnh-assetmanager/` prefix
- Routes are defined in `routes/` package and registered at module import time
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

### Frontend (Vue 3 SFCs — built via Vite into `dist/`)
The frontend is a Vue 3 single-page app built with Vite. Source lives in `src/`, built output in `dist/`. ComfyUI serves `dist/` via `WEB_DIRECTORY = "./dist"`.

**Entry point:** `src/main.js` — Registers extension via `app.registerExtension()` with name `DefinitelyNotHuman.AssetManager`. Uses `type: "custom"` sidebar tab with `render(el)` callback that calls `createApp(App).mount(el)`.

**State management:** `src/composables/useAssetState.js` — Single `reactive()` object shared by all components via composable pattern. No Vuex/Pinia needed.

**API client:** `src/composables/useApi.js` — Pure fetch functions wrapping all `/dnh-assetmanager/` endpoints.

**Component hierarchy:**
```
App.vue
├── TopNav.vue          (brand, version badge, tab buttons, settings toggle)
├── SearchBar.vue       (input, filter/sort/workflow/fav/nsfw buttons)
│   ├── FilterMenu.vue  (teleported dropdown)
│   └── SortMenu.vue    (teleported dropdown)
├── StatusLine.vue
│   └── FilterChips.vue (active filter chip list)
├── SettingsPanel.vue   (v-show toggle)
├── InfoPanel.vue       (metadata editor, v-show toggle)
├── AssetGrid.vue
│   └── AssetCard.vue   (v-for — image, overlay, fav button, badges)
├── ContextMenu.vue     (teleported to body, positioned absolutely)
├── ImageViewer.vue     (teleported to body — overlay)
│   └── GridView.vue    (within viewer, toggle mode)
│       ├── FilterMenu.vue
│       └── SortMenu.vue
└── FolderSelector.vue  (teleported modal)
```

**Styling:** `src/style.css` — All styles use `cm-` prefix. CSS is injected into the JS bundle at build time via a custom Vite plugin (no separate CSS file needed).

### Data Flow
1. Sidebar loads → calls `/dnh-assetmanager/history` with filter params
2. Backend walks configured directories, reads PNG metadata, applies filters, returns up to 60 results
3. Frontend renders image grid reactively; images are served through `/cm-ext-view?path=` proxy
4. Clicking an image fetches it as a blob and calls `app.handleFile()` to load its workflow
5. `dnh-assets-changed` server-sent event triggers auto-refresh

## Development

### Building
```bash
npm install        # Install Vue, Vite, and build deps
npm run build      # Build src/ → dist/assetmanager.js
npm run dev        # Watch mode (rebuild on changes)
```

### Running
This extension runs inside ComfyUI. Place/symlink the repo in `ComfyUI/custom_nodes/` and restart ComfyUI. After making frontend changes, run `npm run build` and refresh the browser.

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
- ComfyUI imports (`app`, `api`) are externalized by Vite and resolved at runtime
- `app` and `api` are passed as props to App.vue and provided via `provide/inject` to all descendants

### Legacy JS Files
The `js/` directory contains the original vanilla JS implementation. It is no longer served by ComfyUI (WEB_DIRECTORY points to `dist/`). These files are kept for reference during migration and can be removed once the Vue implementation is fully validated.

### Current Branch Context
The `vue` branch contains the Vue 3 refactored frontend. The main branch is `main`.
