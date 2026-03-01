# Copilot Instructions — AssetManager

## What This Is

A ComfyUI sidebar extension (no Python nodes — `NODE_CLASS_MAPPINGS` is empty). It provides an image asset browser with search, filtering, favorites, and workflow loading. Published to Comfy Registry under publisher `c0dezer019`.

## Commands

```bash
npm install          # Install frontend deps
npm run build        # Build src/ → dist/assetmanager.js (single ES module)
npm run dev          # Watch mode (rebuild on save)
ruff check .         # Lint Python (configured in pyproject.toml)
ruff check <file>    # Lint single file
```

No test suite exists. After frontend changes, run `npm run build` and refresh ComfyUI in the browser.

## Architecture

**Backend** (Python/aiohttp): `__init__.py` bootstraps routes + SQLite indexer + filesystem watcher. Routes live in `routes/` and register on `PromptServer` under the `/dnh-assetmanager/` prefix. `utils/indexer.py` maintains a SQLite index of image metadata. `utils/watcher.py` uses `watchdog` for filesystem change detection and emits `dnh-assets-changed` SSE events.

**Frontend** (Vue 3/Vite): Source in `src/`, built output in `dist/`. ComfyUI serves `dist/` via `WEB_DIRECTORY = "./dist"`. A custom Vite plugin in `vite.config.js` injects CSS into the JS bundle (no separate CSS file).

**Entry point**: `src/main.js` registers via `app.registerExtension()` with name `DefinitelyNotHuman.AssetManager`, creates a `type: "custom"` sidebar tab, and mounts the Vue app.

**State**: Single `reactive()` object in `src/composables/useAssetState.js` — no Vuex/Pinia. All components share state via composable import.

**ComfyUI imports**: `app` and `api` from `../../scripts/app.js` and `../../scripts/api.js` are externalized by Vite (`rollupOptions.external`) and resolved at ComfyUI runtime. They are passed as props to `App.vue` and distributed via `provide/inject`.

**Image loading**: Both `AssetGrid` (sidebar) and `GridView` (fullscreen viewer) use `IntersectionObserver` to lazily load/unload images based on viewport proximity. Cards show a spinner until the image's `@load` event fires. The sidebar also uses a sentinel-based infinite scroll observer to paginate metadata from the backend.

**File proxy**: All images are served through `/cm-ext-view?path=` which validates the path is within allowed directories (`utils/security.py`).

## Key Conventions

- **CSS prefix**: `cm-` for all class names (e.g., `cm-card`, `cm-sidebar-content`)
- **API prefix**: `/dnh-assetmanager/` for all backend endpoints
- **Provide/inject keys**: `comfyApp`, `comfyApi`, `api`, `state`, `update`, `loadMore`, `registerVisibility`, and component refs like `imageViewerRef`
- **Persistent config**: `config.json` (folders, favorites, settings) and `filters.json` (NSFW keywords) — both in repo root at runtime
- **Backend pagination**: `/dnh-assetmanager/history` accepts `offset` and `limit` query params, returns `{ files, total, offset, limit }`
- **Metadata batch size**: Frontend fetches metadata in batches of 60 (`PAGE_SIZE` in `App.vue`), but actual image loading is viewport-driven
