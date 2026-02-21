/**
 * Grid view overlay for the image viewer.
 * Manages the thumbnail grid, toolbar controls (search, filter, sort, etc.),
 * and the size slider.
 */

import { state } from "../state.js";
import { showFilterMenu } from "./filterMenu.js";
import { showSortMenu } from "./sortMenu.js";

/**
 * @param {HTMLElement} overlay - The viewer overlay element containing grid DOM
 */
export class GridView {
    constructor(overlay) {
        this.overlay = overlay;
        this.container = overlay.querySelector(".cm-viewer-grid");
        this.slider = overlay.querySelector(".cm-viewer-grid-slider");
        this.search = overlay.querySelector(".cm-viewer-grid-search");

        /** @type {Function|null} async (searchQuery) => files[] */
        this._updateCallback = null;

        /** @type {{ files: Array, currentIndex: number }|null} reference to viewer state */
        this._viewer = null;

        this._bindEvents();
    }

    // ── Events ──────────────────────────────────────────────

    _bindEvents() {
        // Close button
        this.overlay.querySelector(".cm-viewer-grid-close").onclick = () => {
            this._viewer?.close();
        };

        // Search
        this.search.oninput = () => this._update();

        // Filter
        const filterBtn = this.overlay.querySelector(".cm-viewer-grid-filter");
        filterBtn.onclick = (e) => {
            showFilterMenu(e, this.overlay, () => this._update(), filterBtn);
        };

        // Sort: left-click toggles asc/desc, right-click opens full menu
        const sortBtn = this.overlay.querySelector(".cm-viewer-grid-sort");
        sortBtn.onclick = () => {
            const [field, dir] = state.sortBy.split("_");
            state.sortBy = `${field}_${dir === "desc" ? "asc" : "desc"}`;
            this._update();
        };
        sortBtn.oncontextmenu = (e) => {
            showSortMenu(e, this.overlay, () => this._update(), sortBtn);
        };

        // Workflow-only toggle
        this.overlay.querySelector(".cm-viewer-grid-workflow").onclick = () => {
            state.workflowOnly = !state.workflowOnly;
            this.overlay.querySelector(".cm-viewer-grid-workflow").classList.toggle("active", state.workflowOnly);
            this._update();
        };

        // Favorites toggle
        this.overlay.querySelector(".cm-viewer-grid-fav").onclick = () => {
            state.showFavorites = !state.showFavorites;
            this.overlay.querySelector(".cm-viewer-grid-fav").classList.toggle("active", state.showFavorites);
            this._update();
        };

        // NSFW toggle
        this.overlay.querySelector(".cm-viewer-grid-nsfw").onclick = () => {
            state.hideNsfw = !state.hideNsfw;
            const btn = this.overlay.querySelector(".cm-viewer-grid-nsfw");
            btn.classList.toggle("active", state.hideNsfw);
            btn.querySelector("span").className = state.hideNsfw ? "pi pi-eye-slash" : "pi pi-eye";
            btn.title = state.hideNsfw ? "NSFW hidden" : "NSFW visible";
            this._update();
        };

        // Thumbnail size slider
        this.slider.oninput = () => this._applySlider(parseInt(this.slider.value));

        // Mouse wheel scaling
        this.container.addEventListener("wheel", (e) => {
            if (state.viewerMode !== "grid") return;
            e.preventDefault();
            const step = e.deltaY < 0 ? 20 : -20;
            const val = Math.max(80, Math.min(400, parseInt(this.slider.value) + step));
            this.slider.value = val;
            this._applySlider(val);
        }, { passive: false });
    }

    // ── Public API ──────────────────────────────────────────

    /**
     * Activate grid mode.
     * @param {object} viewer - The ImageViewer instance (must have files, currentIndex, close(), _resetZoom(), _showCurrent(), _updateCarousel())
     * @param {Function} onUpdate - async (searchQuery) => files[]
     */
    activate(viewer, onUpdate) {
        this._viewer = viewer;
        this._updateCallback = onUpdate || null;

        state.viewerMode = "grid";
        this.overlay.classList.add("cm-viewer-grid-mode");
        this.overlay.querySelector(".cm-viewer-grid-toggle").classList.add("active");

        this.search.value = "";
        this._syncToolbarState();
        this.render();
    }

    /** Deactivate grid mode and switch back to carousel. */
    deactivate() {
        state.viewerMode = "carousel";
        this.overlay.classList.remove("cm-viewer-grid-mode");
        this.overlay.querySelector(".cm-viewer-grid-toggle").classList.remove("active");
        this._viewer?._updateCarousel();
    }

    /** Toggle between grid and carousel modes. */
    toggle() {
        if (state.viewerMode === "grid") {
            this.deactivate();
        } else {
            this.activate(this._viewer, this._updateCallback);
        }
    }

    /**
     * Bind the viewer reference without activating.
     * Used when opening the viewer in carousel mode so that the G key toggle works.
     */
    setViewer(viewer, onUpdate) {
        this._viewer = viewer;
        this._updateCallback = onUpdate || null;
    }

    /** Render the thumbnail grid from the current viewer file list. */
    render() {
        if (!this._viewer) return;

        this.container.innerHTML = "";
        this.container.classList.remove("cm-grid-slider-active");
        this.container.style.removeProperty("--grid-thumb-size");

        const files = this._viewer.files;
        const count = files.length;
        if (count === 0) return;

        // Auto-calculate columns so thumbnails fill the viewport
        const rect = this.container.getBoundingClientRect();
        const area = rect.width * rect.height;
        const thumbSize = Math.sqrt(area / count);
        const cols = Math.max(1, Math.min(
            Math.floor(rect.width / Math.max(thumbSize, 100)),
            Math.floor(rect.width / 100)
        ));
        this.container.style.setProperty("--grid-cols", cols);

        // Sync slider to the auto-calculated thumb width
        const autoThumbPx = Math.round(rect.width / cols);
        this.slider.value = Math.max(80, Math.min(400, autoThumbPx));

        files.forEach((file, idx) => {
            const thumb = document.createElement("div");
            thumb.className = "cm-viewer-grid-item";
            if (idx === this._viewer.currentIndex) thumb.classList.add("active");

            const img = document.createElement("img");
            img.src = file.url;
            img.loading = "lazy";
            img.draggable = false;

            const label = document.createElement("span");
            label.className = "cm-viewer-grid-label";
            label.textContent = file.filename.length > 18
                ? file.filename.substring(0, 15) + "..."
                : file.filename;
            label.title = file.filename;

            thumb.appendChild(img);
            thumb.appendChild(label);

            thumb.onclick = (e) => {
                e.stopPropagation();
                this._viewer.currentIndex = idx;
                this._viewer._resetZoom();
                this._viewer._showCurrent();
                this.deactivate();
            };

            this.container.appendChild(thumb);
        });
    }

    /** Update the active thumbnail highlight (called by viewer on navigate). */
    updateActiveThumb(currentIndex) {
        this.container.querySelectorAll(".cm-viewer-grid-item").forEach((el, i) => {
            el.classList.toggle("active", i === currentIndex);
        });
        const active = this.container.querySelector(".cm-viewer-grid-item.active");
        if (active) active.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    /** Clean up grid state on viewer close. */
    reset() {
        this.container.innerHTML = "";
        this.container.classList.remove("cm-grid-slider-active");
        this.container.style.removeProperty("--grid-thumb-size");
        this.container.style.removeProperty("--grid-cols");
        this._updateCallback = null;
        this._viewer = null;
        this.search.value = "";
    }

    // ── Internal ────────────────────────────────────────────

    /** Re-fetch files via the callback, then re-render. */
    async _update() {
        if (!this._updateCallback || !this._viewer) return;
        const files = await this._updateCallback(this.search.value);
        if (files) {
            this._viewer.files = files;
            this._viewer.currentIndex = Math.max(0, Math.min(this._viewer.currentIndex, files.length - 1));
            this.render();
            this._syncToolbarState();
        }
    }

    /** Sync toolbar button active states with current shared state. */
    _syncToolbarState() {
        this.overlay.querySelector(".cm-viewer-grid-workflow").classList.toggle("active", state.workflowOnly);
        this.overlay.querySelector(".cm-viewer-grid-fav").classList.toggle("active", state.showFavorites);
        const nsfwBtn = this.overlay.querySelector(".cm-viewer-grid-nsfw");
        nsfwBtn.classList.toggle("active", state.hideNsfw);
        nsfwBtn.querySelector("span").className = state.hideNsfw ? "pi pi-eye-slash" : "pi pi-eye";
    }

    /** Switch to slider-driven column sizing. */
    _applySlider(px) {
        this.container.classList.add("cm-grid-slider-active");
        this.container.style.setProperty("--grid-thumb-size", `${px}px`);
    }
}
