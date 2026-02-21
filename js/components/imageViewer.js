/**
 * Fullscreen image viewer with zoom/pan, navigation, and metadata side panel.
 */

import { copyToClipboard } from "./contextMenu.js";
import { app } from "../../../scripts/app.js";
import { state } from "../state.js";
import { GridView } from "./gridView.js";

const VALUE_TRUNCATE_LEN = 32;
const ZOOM_PRESETS = [25, 50, 75, 100, 150, 200, 300, 500];

export class ImageViewer {
    constructor() {
        this.files = [];
        this.currentIndex = 0;
        this.scale = 1;
        this.translateX = 0;
        this.translateY = 0;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.lastTranslateX = 0;
        this.lastTranslateY = 0;
        this.panelOpen = false;
        this.isFullscreen = false;
        this.defaultScale = 1;

        // Carousel state
        this.carouselActive = false;
        this.carouselDragging = false;
        this.carouselStartX = 0;
        this.carouselDelta = 0;
        this.isAnimating = false;

        this._buildDOM();
        this._bindEvents();
    }

    _buildDOM() {
        this.overlay = document.createElement("div");
        this.overlay.className = "cm-viewer-overlay";

        this.overlay.innerHTML = `
            <div class="cm-viewer-body">
                <div class="cm-viewer-topbar">
                    <span class="cm-viewer-topbar-name"></span>
                    <span class="cm-viewer-topbar-size"></span>
                    <span class="cm-viewer-topbar-counter"></span>
                    <div class="cm-viewer-topbar-actions">
                        <button class="cm-viewer-grid-toggle" title="Toggle grid view (G)"><span class="pi pi-th-large"></span></button>
                        <button class="cm-viewer-panel-toggle" title="Toggle details (I)"><span class="pi pi-info-circle"></span></button>
                        <button class="cm-viewer-fullscreen-toggle" title="Toggle fullscreen (F)"><span class="pi pi-expand"></span></button>
                        <button class="cm-viewer-close" title="Close (Esc)"><span class="pi pi-times"></span></button>
                    </div>
                </div>
                <button class="cm-viewer-nav cm-viewer-prev" title="Previous (Left arrow)"><span class="pi pi-chevron-left"></span></button>
                <div class="cm-viewer-img-container">
                    <img class="cm-viewer-img" draggable="false" />
                </div>
                <button class="cm-viewer-nav cm-viewer-next" title="Next (Right arrow)"><span class="pi pi-chevron-right"></span></button>
                <div class="cm-viewer-carousel-prev cm-viewer-carousel-ghost"><img draggable="false" /></div>
                <div class="cm-viewer-carousel-next cm-viewer-carousel-ghost"><img draggable="false" /></div>
                <div class="cm-viewer-zoom-chip">
                    <span class="cm-viewer-zoom-value">100%</span>
                    <button class="cm-viewer-zoom-reset" title="Reset zoom (0)"><span class="pi pi-replay"></span></button>
                    <div class="cm-viewer-zoom-menu"></div>
                </div>
                <div class="cm-viewer-grid"></div>
                <div class="cm-viewer-grid-toolbar">
                    <button class="cm-viewer-grid-close" title="Close grid view"><span class="pi pi-times"></span></button>
                    <div class="cm-viewer-grid-toolbar-center">
                        <div class="cm-viewer-grid-search-wrapper">
                            <span class="pi pi-search cm-viewer-grid-search-icon"></span>
                            <input type="text" class="cm-viewer-grid-search" placeholder="Search..." />
                        </div>
                        <button class="cm-viewer-grid-btn cm-viewer-grid-filter" title="Filter options"><span class="pi pi-filter"></span></button>
                        <button class="cm-viewer-grid-btn cm-viewer-grid-sort" title="Sort by date"><span class="pi pi-sort-alt"></span></button>
                        <button class="cm-viewer-grid-btn cm-viewer-grid-workflow" title="Show only assets with workflows"><span class="pi pi-sitemap"></span></button>
                        <button class="cm-viewer-grid-btn cm-viewer-grid-fav" title="Show favorites only"><span class="pi pi-bookmark"></span></button>
                        <button class="cm-viewer-grid-btn cm-viewer-grid-nsfw${state.hideNsfw ? ' active' : ''}" title="${state.hideNsfw ? 'NSFW hidden' : 'NSFW visible'}"><span class="pi ${state.hideNsfw ? 'pi-eye-slash' : 'pi-eye'}"></span></button>
                    </div>
                    <div class="cm-viewer-grid-toolbar-slider">
                        <span class="pi pi-search-minus cm-viewer-grid-slider-icon"></span>
                        <input type="range" class="cm-viewer-grid-slider" min="80" max="400" value="160" step="10" />
                        <span class="pi pi-search-plus cm-viewer-grid-slider-icon"></span>
                    </div>
                </div>
                <div class="cm-viewer-panel">
                    <div class="cm-viewer-section">
                        <button class="cm-viewer-section-header" data-section="file">
                            <span class="pi pi-chevron-right cm-viewer-section-chevron"></span>
                            <span>File Info</span>
                        </button>
                        <div class="cm-viewer-section-body" data-section="file"></div>
                    </div>
                    <div class="cm-viewer-section">
                        <button class="cm-viewer-section-header expanded" data-section="workflow">
                            <span class="pi pi-chevron-down cm-viewer-section-chevron"></span>
                            <span>Workflow</span>
                        </button>
                        <div class="cm-viewer-section-body expanded" data-section="workflow"></div>
                    </div>
                </div>
            </div>
        `;

        this.img = this.overlay.querySelector(".cm-viewer-img");
        this.imgContainer = this.overlay.querySelector(".cm-viewer-img-container");
        this.topbarName = this.overlay.querySelector(".cm-viewer-topbar-name");
        this.topbarSize = this.overlay.querySelector(".cm-viewer-topbar-size");
        this.topbarCounter = this.overlay.querySelector(".cm-viewer-topbar-counter");
        this.panel = this.overlay.querySelector(".cm-viewer-panel");
        this.fileSectionBody = this.overlay.querySelector('.cm-viewer-section-body[data-section="file"]');
        this.workflowSectionBody = this.overlay.querySelector('.cm-viewer-section-body[data-section="workflow"]');
        this.zoomValue = this.overlay.querySelector(".cm-viewer-zoom-value");
        this.zoomReset = this.overlay.querySelector(".cm-viewer-zoom-reset");
        this.zoomMenu = this.overlay.querySelector(".cm-viewer-zoom-menu");
        this.ghostPrev = this.overlay.querySelector(".cm-viewer-carousel-prev");
        this.ghostNext = this.overlay.querySelector(".cm-viewer-carousel-next");
        this.ghostPrevImg = this.ghostPrev.querySelector("img");
        this.ghostNextImg = this.ghostNext.querySelector("img");

        // Grid view (delegated to GridView)
        this.gridView = new GridView(this.overlay);

        ZOOM_PRESETS.forEach(pct => {
            const item = document.createElement("button");
            item.className = "cm-viewer-zoom-menu-item";
            item.dataset.zoom = pct;
            item.textContent = `${pct}%`;
            this.zoomMenu.appendChild(item);
        });

        document.body.appendChild(this.overlay);
    }

    _bindEvents() {
        // Close button
        this.overlay.querySelector(".cm-viewer-close").onclick = () => this.close();

        // Grid toggle (delegates to GridView)
        this.overlay.querySelector(".cm-viewer-grid-toggle").onclick = () => this.gridView.toggle();

        // Panel toggle
        this.overlay.querySelector(".cm-viewer-panel-toggle").onclick = () => this._togglePanel();

        // Fullscreen toggle
        this.overlay.querySelector(".cm-viewer-fullscreen-toggle").onclick = () => this._toggleFullscreen();

        // Zoom reset
        this.zoomReset.onclick = () => this._resetZoom();

        // Zoom percentage click — toggle menu
        this.zoomValue.onclick = (e) => {
            e.stopPropagation();
            this._toggleZoomMenu();
        };

        // Zoom menu item selection
        this.zoomMenu.onclick = (e) => {
            const item = e.target.closest(".cm-viewer-zoom-menu-item");
            if (!item) return;
            e.stopPropagation();
            const pct = parseInt(item.dataset.zoom);
            this.scale = pct / 100;
            this.translateX = 0;
            this.translateY = 0;
            this._applyTransform();
            this.imgContainer.style.cursor = this.scale > this.defaultScale ? "grab" : "";
            this._updateCarousel();
            this._closeZoomMenu();
        };

        // Close zoom menu on outside click
        this.overlay.addEventListener("mousedown", (e) => {
            if (!e.target.closest(".cm-viewer-zoom-chip")) this._closeZoomMenu();
        });

        // Set initial zoom when image loads
        this.img.onload = () => {
            this.topbarSize.textContent = `${this.img.naturalWidth} × ${this.img.naturalHeight}`;
            if (!this.isFullscreen) {
                this._applyDefaultZoom();
                this.img.style.transition = "none";
                this._applyTransform();
                this.img.offsetHeight;
                this.img.style.transition = "";
            } else {
                this._applyTransform();
            }
            this._updateCarousel();
        };

        // Collapsible section headers
        this.overlay.querySelectorAll(".cm-viewer-section-header").forEach(header => {
            header.onclick = () => {
                const section = header.dataset.section;
                const body = this.overlay.querySelector(`.cm-viewer-section-body[data-section="${section}"]`);
                const chevron = header.querySelector(".cm-viewer-section-chevron");
                const isExpanded = header.classList.toggle("expanded");
                body.classList.toggle("expanded", isExpanded);
                chevron.className = `pi ${isExpanded ? "pi-chevron-down" : "pi-chevron-right"} cm-viewer-section-chevron`;
            };
        });

        // Nav buttons
        this.overlay.querySelector(".cm-viewer-prev").onclick = (e) => {
            e.stopPropagation();
            this._navigate(-1);
        };
        this.overlay.querySelector(".cm-viewer-next").onclick = (e) => {
            e.stopPropagation();
            this._navigate(1);
        };

        // Click outside image/panel to close (suppress after carousel drag)
        this.overlay.querySelector(".cm-viewer-body").onclick = (e) => {
            if (this._suppressClick) { this._suppressClick = false; return; }
            if (state.viewerMode === "grid") return;
            const clickedInteractive = e.target.closest(".cm-viewer-img, .cm-viewer-panel, .cm-viewer-nav, .cm-viewer-topbar, .cm-viewer-zoom-chip, .cm-viewer-carousel-ghost");
            if (!clickedInteractive) this.close();
        };

        // Mouse wheel zoom
        this.imgContainer.addEventListener("wheel", (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.15 : 0.15;
            this._zoom(delta, e.clientX, e.clientY);
        }, { passive: false });

        // Drag to pan (zoomed) or carousel swipe (default zoom)
        this.imgContainer.addEventListener("mousedown", (e) => {
            if (this.carouselActive && !this.isAnimating) {
                // Carousel drag mode
                e.preventDefault();
                this.carouselDragging = true;
                this.carouselStartX = e.clientX;
                this.carouselDelta = 0;
                this.overlay.classList.add("cm-carousel-dragging");
                this.imgContainer.style.cursor = "grabbing";
            } else if (this.scale > this.defaultScale) {
                // Pan mode
                e.preventDefault();
                this.isDragging = true;
                this.dragStartX = e.clientX;
                this.dragStartY = e.clientY;
                this.lastTranslateX = this.translateX;
                this.lastTranslateY = this.translateY;
                this.imgContainer.style.cursor = "grabbing";
            }
        });

        document.addEventListener("mousemove", (e) => {
            if (this.carouselDragging) {
                this.carouselDelta = e.clientX - this.carouselStartX;
                // Translate main image and ghosts by delta
                this.img.style.transform = `translateX(${this.carouselDelta}px) scale(${this.scale})`;
                this.ghostPrev.style.transform = `translateX(calc(-50% + ${this.carouselDelta}px))`;
                this.ghostNext.style.transform = `translateX(calc(50% + ${this.carouselDelta}px))`;
                return;
            }
            if (!this.isDragging) return;
            this.translateX = this.lastTranslateX + (e.clientX - this.dragStartX);
            this.translateY = this.lastTranslateY + (e.clientY - this.dragStartY);
            this._applyTransform();
        });

        document.addEventListener("mouseup", () => {
            if (this.carouselDragging) {
                this.carouselDragging = false;
                this._suppressClick = true;
                this.overlay.classList.remove("cm-carousel-dragging");

                // Reset ghost transforms
                this.ghostPrev.style.transform = "";
                this.ghostNext.style.transform = "";

                if (Math.abs(this.carouselDelta) > 50) {
                    // Swipe threshold met — swap image and slide in from drag direction
                    const dir = this.carouselDelta < 0 ? 1 : -1;
                    this.currentIndex = (this.currentIndex + dir + this.files.length) % this.files.length;
                    this._resetZoom();
                    this._showCurrent();

                    const inClass = dir > 0 ? "cm-slide-in-from-right" : "cm-slide-in-from-left";
                    this.isAnimating = true;
                    this.imgContainer.classList.add(inClass);
                    this.imgContainer.addEventListener("animationend", () => {
                        this.imgContainer.classList.remove(inClass);
                        this.isAnimating = false;
                    }, { once: true });
                } else {
                    // Snap back
                    this.img.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
                }
                this.imgContainer.style.cursor = "";
                this.carouselDelta = 0;
                return;
            }
            if (!this.isDragging) return;
            this.isDragging = false;
            this.imgContainer.style.cursor = this.scale > this.defaultScale ? "grab" : "";
        });

        // Keyboard shortcuts
        this._keyHandler = (e) => {
            if (!this.overlay.classList.contains("visible")) return;
            if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

            switch (e.key) {
                case "Escape":
                    this.close();
                    break;
                case "ArrowLeft":
                    e.preventDefault();
                    this._navigate(-1);
                    break;
                case "ArrowRight":
                    e.preventDefault();
                    this._navigate(1);
                    break;
                case "+":
                case "=":
                    e.preventDefault();
                    this._zoom(0.25);
                    break;
                case "-":
                    e.preventDefault();
                    this._zoom(-0.25);
                    break;
                case "0":
                    e.preventDefault();
                    this._resetZoom();
                    break;
                case "i":
                case "I":
                    e.preventDefault();
                    this._togglePanel();
                    break;
                case "f":
                case "F":
                    e.preventDefault();
                    this._toggleFullscreen();
                    break;
                case "g":
                case "G":
                    e.preventDefault();
                    this.gridView.toggle();
                    break;
            }
        };
        document.addEventListener("keydown", this._keyHandler);
    }

    _togglePanel() {
        this.panelOpen = !this.panelOpen;
        this.panel.classList.toggle("open", this.panelOpen);
        this.overlay.querySelector(".cm-viewer-panel-toggle").classList.toggle("active", this.panelOpen);
        setTimeout(() => this._updateZoomDisplay(), 260);
    }

    _toggleFullscreen() {
        this.isFullscreen = !this.isFullscreen;
        this.overlay.classList.toggle("fullscreen", this.isFullscreen);
        const btn = this.overlay.querySelector(".cm-viewer-fullscreen-toggle");
        btn.classList.toggle("active", this.isFullscreen);
        btn.querySelector("span").className = `pi ${this.isFullscreen ? "pi-compress" : "pi-expand"}`;
        if (this.isFullscreen) {
            this.defaultScale = 1;
            this.scale = 1;
            this.translateX = 0;
            this.translateY = 0;
            this._applyTransform();
            this.imgContainer.style.cursor = "";
            if (this.panelOpen) this._togglePanel();
        } else {
            this._resetZoom();
        }
        this._updateCarousel();
        setTimeout(() => this._updateZoomDisplay(), 260);
    }

    _zoom(delta, originX, originY) {
        const oldScale = this.scale;
        this.scale = Math.max(0.1, Math.min(10, this.scale + delta));

        if (originX !== undefined && originY !== undefined) {
            const rect = this.imgContainer.getBoundingClientRect();
            const cx = originX - rect.left - rect.width / 2;
            const cy = originY - rect.top - rect.height / 2;
            const ratio = 1 - this.scale / oldScale;
            this.translateX += cx * ratio;
            this.translateY += cy * ratio;
        }

        this._applyTransform();
        this.imgContainer.style.cursor = this.scale > this.defaultScale ? "grab" : "";
        this._updateCarousel();
    }

    _resetZoom() {
        this.scale = 1;
        this.translateX = 0;
        this.translateY = 0;
        if (!this.isFullscreen && this.img.naturalWidth) {
            this._applyDefaultZoom();
            // Skip transition so image doesn't animate from 100% to default
            this.img.style.transition = "none";
            this._applyTransform();
            this.img.offsetHeight; // force reflow
            this.img.style.transition = "";
        } else {
            this._applyTransform();
        }
        this.imgContainer.style.cursor = "";
        this._updateCarousel();
    }

    /** In non-fullscreen mode, scale so that images larger than 512px
     *  appear as though they were 512×512.  Small images stay at 100%. */
    _applyDefaultZoom() {
        const natW = this.img.naturalWidth;
        const natH = this.img.naturalHeight;
        if (!natW || !natH) return;

        const rect = this.imgContainer.getBoundingClientRect();
        // How the browser fits the image at scale=1 (object-fit: contain)
        const fittedScale = Math.min(rect.width / natW, rect.height / natH, 1);
        const displayW = natW * fittedScale;
        const displayH = natH * fittedScale;

        // Target: the image should appear no larger than 512px on its longest side
        const TARGET = 512;
        const longest = Math.max(displayW, displayH);
        if (longest > TARGET) {
            this.scale = TARGET / longest;
        }
        this.defaultScale = this.scale;
    }

    _applyTransform() {
        this.img.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
        this._updateZoomDisplay();
    }

    _toggleZoomMenu() {
        this.zoomMenu.classList.toggle("open");
        if (this.zoomMenu.classList.contains("open")) this._updateZoomDisplay();
    }

    _closeZoomMenu() {
        this.zoomMenu.classList.remove("open");
    }

    _updateZoomDisplay() {
        const currentPct = Math.round(this.scale * 100);
        this.zoomValue.textContent = `${currentPct}%`;
        const isDefault = this.scale === this.defaultScale && this.translateX === 0 && this.translateY === 0;
        this.zoomReset.style.display = isDefault ? "none" : "";
        this.zoomMenu.querySelectorAll(".cm-viewer-zoom-menu-item").forEach(item => {
            item.classList.toggle("active", parseInt(item.dataset.zoom) === currentPct);
        });
    }

    _updateCarousel() {
        const shouldActivate = this.scale <= this.defaultScale && this.files.length > 1 && !this.isFullscreen && state.viewerMode !== "grid";
        this.carouselActive = shouldActivate;
        this.overlay.classList.toggle("cm-carousel-active", shouldActivate);

        if (shouldActivate) {
            const prevIdx = (this.currentIndex - 1 + this.files.length) % this.files.length;
            const nextIdx = (this.currentIndex + 1) % this.files.length;
            this.ghostPrevImg.src = this.files[prevIdx].url;
            this.ghostNextImg.src = this.files[nextIdx].url;
        } else {
            this.ghostPrevImg.src = "";
            this.ghostNextImg.src = "";
        }
    }

    _navigate(dir) {
        if (this.files.length <= 1) return;
        if (this.isAnimating) return;

        if (this.carouselActive) {
            this.isAnimating = true;
            const outClass = dir > 0 ? "cm-slide-out-left" : "cm-slide-out-right";
            const inClass = dir > 0 ? "cm-slide-in-from-right" : "cm-slide-in-from-left";

            this.imgContainer.classList.add(outClass);

            const onOutEnd = () => {
                this.imgContainer.removeEventListener("animationend", onOutEnd);
                this.imgContainer.classList.remove(outClass);

                this.currentIndex = (this.currentIndex + dir + this.files.length) % this.files.length;
                this._resetZoom();
                this._showCurrent();

                this.imgContainer.classList.add(inClass);
                const onInEnd = () => {
                    this.imgContainer.removeEventListener("animationend", onInEnd);
                    this.imgContainer.classList.remove(inClass);
                    this.isAnimating = false;
                };
                this.imgContainer.addEventListener("animationend", onInEnd, { once: true });
            };
            this.imgContainer.addEventListener("animationend", onOutEnd, { once: true });
        } else {
            this.currentIndex = (this.currentIndex + dir + this.files.length) % this.files.length;
            this._resetZoom();
            this._showCurrent();
        }
    }

    _showCurrent() {
        const file = this.files[this.currentIndex];
        if (!file) return;

        this.img.src = file.url;

        // Top bar
        this.topbarName.textContent = file.filename;
        this.topbarName.title = file.filename;
        this.topbarCounter.textContent = `${this.currentIndex + 1} / ${this.files.length}`;

        // File info section
        this._renderFileSection(file);

        // Workflow section
        this._renderWorkflowSection(file);

        // Show/hide nav arrows
        const showNav = this.files.length > 1;
        this.overlay.querySelector(".cm-viewer-prev").style.display = showNav ? "" : "none";
        this.overlay.querySelector(".cm-viewer-next").style.display = showNav ? "" : "none";

        this._updateCarousel();

        // Update grid thumbnail highlight
        this.gridView.updateActiveThumb(this.currentIndex);
    }

    _createRow(label, value) {
        const strVal = String(value);
        const isTruncated = strVal.length > VALUE_TRUNCATE_LEN;

        const row = document.createElement("div");
        row.className = "cm-viewer-row";

        const labelEl = document.createElement("span");
        labelEl.className = "cm-viewer-row-label";
        labelEl.textContent = label;

        const valueEl = document.createElement("span");
        valueEl.className = "cm-viewer-row-value";
        valueEl.title = strVal;
        valueEl.textContent = isTruncated ? strVal.substring(0, VALUE_TRUNCATE_LEN - 1) + "\u2026" : strVal;

        if (isTruncated) {
            valueEl.classList.add("cm-viewer-truncated");
            valueEl.onclick = (e) => {
                e.stopPropagation();
                const expanded = valueEl.classList.toggle("cm-viewer-expanded");
                valueEl.textContent = expanded ? strVal : strVal.substring(0, VALUE_TRUNCATE_LEN - 1) + "\u2026";
            };
        }

        const copyBtn = document.createElement("button");
        copyBtn.className = "cm-viewer-copy-btn";
        copyBtn.title = "Copy value";
        copyBtn.innerHTML = `<span class="pi pi-clone"></span>`;
        copyBtn.onclick = (e) => {
            e.stopPropagation();
            copyToClipboard(strVal);
        };

        row.appendChild(labelEl);
        row.appendChild(valueEl);
        row.appendChild(copyBtn);
        return row;
    }

    _renderFileSection(file) {
        this.fileSectionBody.innerHTML = "";
        const fm = file.file_metadata || {};
        const entries = [];

        const add = (label, value) => { if (value) entries.push([label, value]); };
        add("Filename", fm.filename || file.filename);
        add("Type", fm.file_type || file.file_type);
        add("Size", fm.file_size || file.file_size_formatted);
        add("Created", fm.created_date || (file.created_at
            ? new Date(file.created_at * 1000).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
            : ""));
        add("Path", fm.full_path || file.full_path);

        if (entries.length === 0) {
            this.fileSectionBody.innerHTML = `<div class="cm-viewer-empty">No file info available</div>`;
            return;
        }

        entries.forEach(([label, value]) => {
            this.fileSectionBody.appendChild(this._createRow(label, value));
        });
    }

    _renderWorkflowSection(file) {
        this.workflowSectionBody.innerHTML = "";

        if (!file.has_workflow || !file.workflow_nodes || file.workflow_nodes.length === 0) {
            this.workflowSectionBody.innerHTML = `<div class="cm-viewer-empty">No workflow data</div>`;
            return;
        }

        file.workflow_nodes.forEach(node => {
            const title = `${node.class_type || "Node"} #${node.id}`;
            const nodeEl = document.createElement("div");
            nodeEl.className = "cm-viewer-node";

            const titleBar = document.createElement("div");
            titleBar.className = "cm-viewer-node-title";

            const titleText = document.createElement("span");
            titleText.textContent = title;

            const copyNodeBtn = document.createElement("button");
            copyNodeBtn.className = "cm-viewer-copy-btn cm-viewer-copy-node";
            copyNodeBtn.title = "Add node to canvas";
            copyNodeBtn.innerHTML = `<span class="pi pi-plus-circle"></span>`;
            copyNodeBtn.onclick = (e) => {
                e.stopPropagation();
                const clipData = JSON.stringify({
                    nodes: [{ type: node.class_type, pos: [0, 0] }],
                    links: []
                });
                const prev = localStorage.getItem("litegrapheditor_clipboard");
                localStorage.setItem("litegrapheditor_clipboard", clipData);
                app.canvas.pasteFromClipboard();
                if (prev !== null) localStorage.setItem("litegrapheditor_clipboard", prev);
                else localStorage.removeItem("litegrapheditor_clipboard");

                // Set widget values on the newly pasted node
                const selected = app.canvas.selected_nodes;
                if (selected) {
                    for (const id in selected) {
                        const graphNode = selected[id];
                        if (graphNode.widgets) {
                            for (const widget of graphNode.widgets) {
                                if (widget.name in node.inputs) {
                                    widget.value = node.inputs[widget.name];
                                    widget.callback?.(widget.value);
                                }
                            }
                        }
                    }
                }
            };

            titleBar.appendChild(titleText);
            titleBar.appendChild(copyNodeBtn);
            nodeEl.appendChild(titleBar);

            Object.entries(node.inputs).forEach(([k, v]) => {
                nodeEl.appendChild(this._createRow(k, v));
            });

            this.workflowSectionBody.appendChild(nodeEl);
        });
    }

    open(files, index) {
        this.files = files;
        this.currentIndex = Math.max(0, Math.min(index, files.length - 1));
        this._resetZoom();
        this._showCurrent();
        this.overlay.classList.add("visible");
    }

    /**
     * Open the viewer directly in grid mode.
     * @param {Array} files - current file list
     * @param {Function} onUpdate - async callback(searchQuery) => files[] to re-fetch with filters
     */
    openGrid(files, onUpdate) {
        this.files = files;
        this.currentIndex = 0;
        this._resetZoom();
        this._showCurrent();
        this.overlay.classList.add("visible");
        this.gridView.activate(this, onUpdate);
        this._updateCarousel();
    }

    close() {
        this.overlay.classList.remove("visible", "fullscreen", "cm-carousel-active", "cm-carousel-dragging", "cm-viewer-grid-mode");
        this.isFullscreen = false;
        this.carouselActive = false;
        this.isAnimating = false;
        this.carouselDragging = false;
        state.viewerMode = "carousel";
        this._closeZoomMenu();
        this.img.src = "";
        this.ghostPrevImg.src = "";
        this.ghostNextImg.src = "";
        this.ghostPrev.style.transform = "";
        this.ghostNext.style.transform = "";
        this.gridView.reset();
    }
}
