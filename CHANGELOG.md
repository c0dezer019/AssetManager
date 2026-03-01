# Changelog

All notable changes to Asset Manager are documented here, ordered from newest to oldest.

---

## [3.1.0] — 2026-03-01

### Added
- **Infinite scroll pagination** in the sidebar `AssetGrid` — a sentinel `IntersectionObserver` triggers additional page fetches as the user scrolls to the bottom, replacing manual load-more interaction.
- Pagination state fields (`offset`, `total`, `loading`, `hasMore`) added to the shared `useAssetState` composable.
- `.github/copilot-instructions.md` for Copilot workspace context.

### Changed
- `GridView` refactored with improved layout, controls placement, and filter/sort integration.
- `AssetCard` overlay behaviour and styles updated for cleaner hover interaction.
- `FolderSelector` UX improvements (better feedback and layout).
- `src/style.css` updated to support new layout adjustments across components.
- Minor fix to the folders route (`routes/folders.py`).
- Rebuilt `dist/assetmanager.js` bundle.

---

## [3.0.0] — 2026-02-22

### Added
- **SQLite indexing layer** (`utils/indexer.py`) — replaces per-request filesystem walks with a persistent `index.db` that caches all file metadata. Eliminates hundreds of disk reads per search/filter request.
- File watcher (`utils/watcher.py`) now keeps the SQLite index in sync automatically on file create/modify/delete events.
- Index health dashboard in the Settings panel showing record counts and last-rebuild time.
- "Rebuild Index" button in the Settings panel (`src/components/SettingsPanel.vue`).
- `useApi.js` extended with index-related API calls.
- Additional CSS in `src/style.css` for the index dashboard UI.

### Changed
- **Full frontend rewrite from vanilla JS to Vue 3 + Vite.** All previous `js/` components were ported to Vue Single-File Components under `src/`:
  - `src/main.js` — extension entry point using `app.registerExtension()` with a `type: "custom"` sidebar tab.
  - `src/App.vue` — root component; owns data fetching and provides `app`/`api`/`state` via `provide/inject`.
  - `src/components/`: `AssetCard`, `AssetGrid`, `ContextMenu`, `FilterChips`, `FilterMenu`, `FolderSelector`, `GridView`, `ImageViewer`, `InfoPanel`, `SearchBar`, `SettingsPanel`, `SortMenu`, `StatusLine`, `TopNav`.
  - `src/composables/useApi.js` and `src/composables/useAssetState.js` replace the old `js/api.js` and `js/state.js`.
  - CSS moved to `src/style.css` and injected into the JS bundle via a custom Vite plugin (no separate CSS file).
- Build toolchain added: Vite + `package.json`; output is `dist/assetmanager.js` (single ES module). `WEB_DIRECTORY` now points to `dist/`.
- `routes/history.py` updated to query SQLite index instead of walking the filesystem directly.
- `routes/tags.py`, `routes/folders.py`, `routes/settings.py`, `routes/metadata.py`, `routes/files.py` updated for index integration.
- All previous `js/` source files removed (kept in git history for reference).
- `CLAUDE.md` updated to reflect the Vue architecture.
- `pyproject.toml` description and version updated to `3.0.0`.

### Breaking
- Frontend is no longer served from `js/`; `WEB_DIRECTORY` points to `dist/`. Old JS files are no longer loaded by ComfyUI.

---

## [2.5.0] — 2026-02-21

### Added
- **GridView** (`js/components/gridView.js`) — a scalable full-screen grid mode accessible from within the image viewer, with its own filter/sort controls.
- Corresponding CSS for the grid view layout (`js/style.css`).
- `js/state.js` extended with grid-view state flag.
- `js/template.js` updated with grid-view template markup.

### Changed
- `js/components/imageViewer.js` updated to integrate and toggle `GridView`.
- `js/components/filterMenu.js` and `js/components/sortMenu.js` updated for reuse inside the grid view.

---

## [2.4.0] — 2026-02-20

### Added
- **Integrated image viewer** (`js/components/imageViewer.js`) — a full-screen overlay to preview assets, navigate between images, and trigger workflow loading without leaving the sidebar.
- Extensive CSS additions for the viewer overlay, controls, and transitions.

### Changed
- `js/components/cardRenderer.js` and `js/components/contextMenu.js` updated to open the image viewer on card/context interactions.
- `js/sidebar.js` updated to wire up viewer open/close events.
- README updated with image viewer documentation.
- `pyproject.toml` version bumped.

---

## [2.3.0] — 2026-02-19

### Changed
- **Major code reorganisation** — the monolithic `__init__.py` and `js/sidebar.js` were split into dedicated modules for long-term maintainability:
  - **Backend routes** extracted into the `routes/` package: `favorites.py`, `files.py`, `folders.py`, `history.py`, `metadata.py`, `settings.py`, `tags.py`.
  - **Backend utilities** extracted into the `utils/` package: `config.py`, `helpers.py`, `metadata.py`, `png_io.py`, `search.py`, `security.py`, `watcher.py`.
  - **Frontend** split into: `js/api.js` (fetch helpers), `js/state.js` (shared state object), `js/template.js` (HTML templates), and `js/components/` containing `cardRenderer.js`, `contextMenu.js`, `filterChips.js`, `filterMenu.js`, `infoPanel.js`, `settingsPanel.js`, `sortMenu.js`.
- `js/sidebar.js` reduced to orchestration/routing logic only.
- `pyproject.toml` version bumped to `2.3.0`.

---

## [2.2.0] — 2026-02-19

### Added
- **Advanced search** — users can now search by arbitrary workflow values using free-text or a `key:value` syntax (e.g. `sampler_name:euler`). Implemented in `utils/search.py` and surfaced through the history endpoint.
- **Copy metadata via context menu** — right-clicking a card now offers "Copy value" options for metadata fields.
- `.gitignore` updated to exclude `__pycache__`.
- README significantly expanded with search syntax documentation and examples.

### Changed
- `__init__.py` refactored to support the new search parsing logic.
- `js/sidebar.js` and `js/style.css` updated to support copy-from-context-menu and display search hints.
- `pyproject.toml` version bumped to `2.2.0`.

---

## [2.1.2] — 2026-02-19

### Added
- **Filesystem watcher** (`watchdog`-based) integrated into `__init__.py` — monitors input/output and custom directories for file create/modify/delete events and emits `dnh-assets-changed` SSE events so the sidebar auto-refreshes without a page reload.
- Corresponding CSS tweaks in `js/style.css` for live-update status indicator.

### Changed
- `js/sidebar.js` updated to subscribe to the SSE event and trigger a reload.
- `pyproject.toml` dependency on `watchdog` added; version bumped to `2.1.2`.

---

## [2.1.1] — 2026-02-19 _(tag: v2.1.0 / V2.1.1)_

### Added
- LICENSE file added (MIT, copyright updated to correct holder).

### Fixed
- **Sorting behaviour** corrected — ascending/descending sort order now applied reliably.
- **Bookmarking/favorites** fixed — toggling a favorite no longer loses the current filter state.
- **Version chip** in the sidebar header now displays the correct extension version.
- Asset creation date surfaced in card metadata display.

### Changed
- README substantially updated with feature descriptions and screenshots.
- `__init__.py` updated to return `ctime` in the file listing response.
- `js/sidebar.js` and `js/style.css` updated for sort/bookmark fixes and creation-date display.
- `pyproject.toml` version bumped.

---

## [2.1.0] — 2026-02-18

### Added
- **Metadata scanning** — PNG `tEXt` chunks are parsed at index time to extract embedded workflow/prompt JSON.
- **NSFW detection** — image metadata is checked against `filters.json` keyword list; matching assets can be hidden via the NSFW filter toggle.
- **Metadata editor** — an info panel accessible from the card overlay allows viewing and editing embedded metadata fields directly in the sidebar.
- Filtering bugs that previously prevented the filter UI from applying correctly were resolved.

### Changed
- `__init__.py` substantially extended with PNG chunk parsing and NSFW keyword matching logic.
- `js/sidebar.js` updated with metadata editor UI and NSFW toggle wiring.
- `js/style.css` expanded with editor and info-panel styles.
- `filters.json` updated.
- `pyproject.toml` version bumped to `2.1.0`.

---

## [2.0.0] — 2026-02-17

### Added
- **Visual redesign** — UI style overhauled to match ComfyUI's native look and feel. All styles moved to a dedicated `js/style.css` stylesheet.
- **Custom folder picker** (`js/folderSelector.js`) — users can now add arbitrary directories to the scan list through a folder-browser modal.
- **Right-click context menu** on asset cards — initial implementation with card-level actions.
- `CLAUDE.md` added with developer guidance for the project.
- `config.json` introduced for persistent storage of custom folders and favorites.

### Fixed
- Adding custom scan paths now works correctly end-to-end (backend and UI).

### Changed
- `__init__.py` modernised; route handlers cleaned up.
- `js/sidebar.js` significantly refactored and expanded.
- `pyproject.toml` version bumped to `2.0.0`.

---

## [1.0.0] — 2026-02-08

### Added
- Initial release of Asset Manager.
- `__init__.py` — Python backend registering HTTP routes on `PromptServer` under `/dnh-assetmanager/`. Core endpoint: `GET /dnh-assetmanager/history` walks ComfyUI input/output directories and returns PNG file metadata.
- `js/sidebar.js` — vanilla JS frontend registering a `type: "custom"` ComfyUI sidebar tab. Renders an image grid, supports basic search, favorites toggling, and loading a workflow from an image via `app.handleFile()`.
- `filters.json` — initial NSFW keyword filter list.
- `pyproject.toml` — Comfy Registry package definition (`c0dezer019/assetmanager`).
- `README.md` added.
