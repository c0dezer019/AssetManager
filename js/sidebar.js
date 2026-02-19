import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { FolderSelector } from "./folderSelector.js";

app.registerExtension({
  name: "DefinitelyNotHuman.AssetManager",
  async init() {
    const link = document.createElement("link");
    link.rel = "stylesheet"; 
    link.href = new URL("./style.css", import.meta.url).href;
    document.head.appendChild(link);

    app.extensionManager.registerSidebarTab({
      id: "assetmanager.history.tab",
      icon: "pi pi-history",
      title: "History",
      type: "custom",
      render: (el) => {
        let showFavorites = false;
        let activeTab = "all";
        let activeUtility = "all";
        let customFolderCount = 0;
        let sortBy = "date_desc";
        let workflowOnly = false;

        el.innerHTML = `
          <div class="cm-sidebar-content">
            <header class="cm-top-nav">
                <div class="cm-brand">
                    <span class="pi pi-folder cm-brand-icon"></span>
                    <span class="cm-brand-title">Assets Manager</span>
                    <span class="cm-version-badge" id="cm-version-badge">v...</span>
                </div>
                <nav class="cm-nav-tabs">
                    <button class="cm-nav-btn active" data-tab="all">All</button>
                    <button class="cm-nav-btn" data-tab="input">Inputs</button>
                    <button class="cm-nav-btn" data-tab="output">Outputs</button>
                    <button class="cm-nav-btn" data-tab="custom">Custom</button>
                    <button id="cm-settings-toggle" class="cm-icon-only-btn"><span class="pi pi-cog"></span></button>
                </nav>
            </header>

            <div class="cm-search-container">
                <div class="cm-search-wrapper">
                    <span class="pi pi-search cm-search-icon"></span>
                    <input id="cm-search" type="text" placeholder="Search assets..." class="cm-search-input" />
                </div>
                <div class="cm-action-buttons">
                    <button id="cm-filter" class="cm-tool-btn" title="Filter options"><span class="pi pi-filter"></span></button>
                    <button id="cm-sort" class="cm-tool-btn" title="Sort by date"><span class="pi pi-sort-alt"></span></button>
                    <button id="cm-workflow-filter" class="cm-tool-btn" title="Show only assets with workflows"><span class="pi pi-sitemap"></span></button>
                    <button id="cm-fav-toggle" class="cm-tool-btn" title="Show favorites only"><span class="pi pi-bookmark"></span></button>
                    <button id="cm-nsfw-toggle" class="cm-tool-btn active" title="NSFW hidden"><span class="pi pi-eye-slash"></span></button>
                </div>
            </div>

            <div class="cm-status-line">
                <span id="cm-asset-stats" class="cm-stats-text">assets: --/-- | All</span>
                <div id="cm-active-filters" class="cm-active-filters"></div>
            </div>

            <section id="cm-advanced-panel" class="cm-advanced-panel">
              <div class="cm-settings-group">
                <label class="cm-settings-label">Output Directory</label>
                <div class="cm-settings-row">
                  <input id="cm-output-path" type="text" placeholder="Default: ComfyUI output folder" class="comfy-input" />
                  <button id="cm-output-browse-btn" class="comfy-btn comfy-btn-secondary">📂</button>
                  <button id="cm-output-save-btn" class="comfy-btn comfy-btn-primary">Save</button>
                </div>
              </div>
              <hr class="cm-settings-divider" />
              <div class="cm-settings-group">
                <label class="cm-settings-label">Custom Folders</label>
                <div id="cm-folder-list" class="cm-folder-list"></div>
                <div class="cm-add-folder-row">
                  <input id="cm-new-path" type="text" placeholder="Add custom path..." class="comfy-input" />
                  <button id="cm-browse-btn" class="comfy-btn comfy-btn-secondary">📂</button>
                  <button id="cm-add-btn" class="comfy-btn comfy-btn-primary">+</button>
                </div>
              </div>
            </section>

            <section id="cm-info-panel" class="cm-info-panel">
              <div class="cm-info-panel-header">
                <span class="cm-info-panel-title" id="cm-info-filename"></span>
                <button class="cm-info-close-btn" id="cm-info-close"><span class="pi pi-times"></span></button>
              </div>
              <img id="cm-info-preview" class="cm-info-preview" src="" alt="" />
              <div class="cm-info-file-meta" id="cm-info-file-meta"></div>
              <div class="cm-info-field">
                <label class="cm-info-label">Title</label>
                <input id="cm-info-title" class="cm-info-input" type="text" placeholder="Image title..." />
              </div>
              <div class="cm-info-field">
                <label class="cm-info-label">Description</label>
                <textarea id="cm-info-description" class="cm-info-input" placeholder="Image description..." rows="2"></textarea>
              </div>
              <div class="cm-info-field">
                <label class="cm-info-label">Tags</label>
                <input id="cm-info-tags" class="cm-info-input" type="text" placeholder="Comma-separated tags..." />
              </div>
              <div class="cm-info-field">
                <label class="cm-info-label">Rating</label>
                <div class="cm-info-rating" id="cm-info-rating">
                  <button class="cm-info-star" data-val="1">★</button>
                  <button class="cm-info-star" data-val="2">★</button>
                  <button class="cm-info-star" data-val="3">★</button>
                  <button class="cm-info-star" data-val="4">★</button>
                  <button class="cm-info-star" data-val="5">★</button>
                </div>
              </div>
              <div class="cm-info-actions">
                <button id="cm-info-save" class="cm-info-save-btn">Save Metadata</button>
              </div>
              <div id="cm-info-saved-msg" class="cm-info-saved-msg">Saved!</div>
            </section>

            <section id="cm-container" class="cm-asset-grid"></section>
          </div>`;

        // Context menu helper
        let activeContextMenu = null;
        const dismissContextMenu = () => {
            if (activeContextMenu) {
                activeContextMenu.remove();
                activeContextMenu = null;
            }
        };
        document.addEventListener("click", dismissContextMenu);
        document.addEventListener("contextmenu", dismissContextMenu);

        const showContextMenu = (e, file) => {
            e.preventDefault();
            e.stopPropagation();
            dismissContextMenu();

            const menu = document.createElement("div");
            menu.className = "cm-context-menu";

            // Toggle favorite
            const favBtn = document.createElement("button");
            favBtn.className = "cm-context-menu-item";
            favBtn.innerHTML = `<span class="pi ${file.is_favorite ? 'pi-bookmark-fill' : 'pi-bookmark'}"></span> ${file.is_favorite ? 'Remove from favorites' : 'Add to favorites'}`;
            favBtn.onclick = async (ev) => {
                ev.stopPropagation();
                dismissContextMenu();
                await toggleFavorite(file);
            };
            menu.appendChild(favBtn);

            // Separator
            const favSep = document.createElement("div");
            favSep.className = "cm-context-menu-separator";
            menu.appendChild(favSep);

            // Load workflow
            const loadBtn = document.createElement("button");
            loadBtn.className = "cm-context-menu-item";
            loadBtn.innerHTML = `<span class="pi pi-download"></span> Load workflow`;
            loadBtn.onclick = async (ev) => {
                ev.stopPropagation();
                dismissContextMenu();
                const blob = await (await fetch(file.url)).blob();
                await app.handleFile(blob);
            };
            menu.appendChild(loadBtn);

            // Open in external viewer
            const openBtn = document.createElement("button");
            openBtn.className = "cm-context-menu-item";
            openBtn.innerHTML = `<span class="pi pi-external-link"></span> Open in external viewer`;
            openBtn.onclick = async (ev) => {
                ev.stopPropagation();
                dismissContextMenu();
                await fetch("/dnh-assetmanager/open", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ path: file.full_path })
                });
            };
            menu.appendChild(openBtn);

            // Edit metadata
            if (file.file_type === "PNG") {
                const editBtn = document.createElement("button");
                editBtn.className = "cm-context-menu-item";
                editBtn.innerHTML = `<span class="pi pi-pencil"></span> Edit metadata`;
                editBtn.onclick = (ev) => {
                    ev.stopPropagation();
                    dismissContextMenu();
                    el.querySelectorAll(".cm-card").forEach(c => c.classList.remove("selected"));
                    // Find and highlight the card for this file
                    const cards = el.querySelectorAll(".cm-card");
                    cards.forEach(c => {
                        if (c.querySelector("img")?.src?.includes(encodeURIComponent(file.full_path))) {
                            c.classList.add("selected");
                        }
                    });
                    openInfoPanel(file);
                };
                menu.appendChild(editBtn);
            }

            // Separator
            const sep = document.createElement("div");
            sep.className = "cm-context-menu-separator";
            menu.appendChild(sep);

            // Delete
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "cm-context-menu-item cm-danger";
            deleteBtn.innerHTML = `<span class="pi pi-trash"></span> Delete`;
            deleteBtn.onclick = async (ev) => {
                ev.stopPropagation();
                dismissContextMenu();
                if (!confirm(`Delete "${file.filename}"? This cannot be undone.`)) return;
                const res = await fetch("/dnh-assetmanager/delete", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ path: file.full_path })
                });
                if (res.ok) update();
            };
            menu.appendChild(deleteBtn);

            document.body.appendChild(menu);
            activeContextMenu = menu;

            // Position: keep within viewport
            const rect = menu.getBoundingClientRect();
            let x = e.clientX;
            let y = e.clientY;
            if (x + rect.width > window.innerWidth) x = window.innerWidth - rect.width - 4;
            if (y + rect.height > window.innerHeight) y = window.innerHeight - rect.height - 4;
            menu.style.left = `${x}px`;
            menu.style.top = `${y}px`;
        };

        let activeFolderSelector = null;
        const folderSelector = new FolderSelector((path) => {
          if (activeFolderSelector === "output") {
            el.querySelector("#cm-output-path").value = path;
          } else {
            el.querySelector("#cm-new-path").value = path;
          }
        });
        // ─── Info Panel State & Logic ───
        const infoPanel = el.querySelector("#cm-info-panel");
        const infoFilename = el.querySelector("#cm-info-filename");
        const infoPreview = el.querySelector("#cm-info-preview");
        const infoFileMeta = el.querySelector("#cm-info-file-meta");
        const infoTitle = el.querySelector("#cm-info-title");
        const infoDesc = el.querySelector("#cm-info-description");
        const infoTags = el.querySelector("#cm-info-tags");
        const infoRating = el.querySelector("#cm-info-rating");
        const infoSave = el.querySelector("#cm-info-save");
        const infoSavedMsg = el.querySelector("#cm-info-saved-msg");
        let selectedFile = null;
        let currentRating = 0;

        const setRatingDisplay = (val) => {
            currentRating = val;
            infoRating.querySelectorAll(".cm-info-star").forEach(star => {
                star.classList.toggle("active", parseInt(star.dataset.val) <= val);
            });
        };

        infoRating.querySelectorAll(".cm-info-star").forEach(star => {
            star.onclick = () => {
                const val = parseInt(star.dataset.val);
                setRatingDisplay(val === currentRating ? 0 : val);
            };
        });

        const openInfoPanel = (file) => {
            selectedFile = file;
            infoFilename.textContent = file.filename;
            infoFilename.title = file.filename;
            infoPreview.src = file.url;
            infoFileMeta.innerHTML = `<span>${file.file_type}</span><span>${file.file_size_formatted}</span>`;
            infoTitle.value = file.asset_title || "";
            infoDesc.value = file.asset_description || "";
            infoTags.value = file.asset_tags || "";
            setRatingDisplay(parseInt(file.asset_rating) || 0);
            infoSavedMsg.classList.remove("show");
            infoPanel.classList.add("visible");

            // Highlight selected card
            el.querySelectorAll(".cm-card").forEach(c => c.classList.remove("selected"));
        };

        const closeInfoPanel = () => {
            selectedFile = null;
            infoPanel.classList.remove("visible");
            el.querySelectorAll(".cm-card").forEach(c => c.classList.remove("selected"));
        };

        el.querySelector("#cm-info-close").onclick = closeInfoPanel;

        infoSave.onclick = async () => {
            if (!selectedFile) return;
            infoSave.disabled = true;
            infoSave.textContent = "Saving...";
            try {
                const res = await fetch("/dnh-assetmanager/metadata", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        path: selectedFile.full_path,
                        title: infoTitle.value,
                        description: infoDesc.value,
                        tags: infoTags.value,
                        rating: currentRating > 0 ? String(currentRating) : "",
                    })
                });
                if (res.ok) {
                    infoSavedMsg.classList.add("show");
                    setTimeout(() => infoSavedMsg.classList.remove("show"), 2000);
                    // Update the cached file data
                    selectedFile.asset_title = infoTitle.value;
                    selectedFile.asset_description = infoDesc.value;
                    selectedFile.asset_tags = infoTags.value;
                    selectedFile.asset_rating = currentRating > 0 ? String(currentRating) : "";
                } else {
                    const err = await res.json();
                    alert(err.error || "Failed to save metadata");
                }
            } finally {
                infoSave.disabled = false;
                infoSave.textContent = "Save Metadata";
            }
        };

        // Toggle favorite helper
        const toggleFavorite = async (file) => {
            const res = await fetch("/dnh-assetmanager/favorite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ path: file.full_path })
            });
            if (res.ok) {
                file.is_favorite = !file.is_favorite;
                // Re-render to reflect change (or remove card if filtering favorites)
                update();
            }
        };

        const container = el.querySelector("#cm-container");
        const statsText = el.querySelector("#cm-asset-stats");
        const activeFiltersEl = el.querySelector("#cm-active-filters");

        // Track available tags for filter menu
        let availableModels = [];
        let availableLoras = [];
        let activeModelFilters = new Set();
        let activeLoraFilters = new Set();
        let hideNsfw = true;

        // Fetch available filter tags from backend
        const loadTags = async () => {
            try {
                const res = await fetch("/dnh-assetmanager/tags");
                const data = await res.json();
                availableModels = data.models || [];
                availableLoras = data.loras || [];
            } catch (e) {
                console.warn("Failed to load tags:", e);
            }
        };
        loadTags();

        // Fetch version from pyproject.toml via backend
        fetch("/dnh-assetmanager/version")
            .then(r => r.json())
            .then(data => {
                const badge = el.querySelector("#cm-version-badge");
                if (badge && data.version) badge.textContent = `v${data.version}`;
            })
            .catch(() => {});

        // Render active filter chips
        const renderActiveFilters = () => {
            activeFiltersEl.innerHTML = "";
            const filters = [];
            if (activeUtility !== "all") filters.push({ label: `Type: ${activeUtility}`, clear: () => { activeUtility = "all"; } });
            activeModelFilters.forEach(m => {
                const shortName = m.split(/[\\/]/).pop();
                filters.push({ label: `Model: ${shortName}`, clear: () => { activeModelFilters.delete(m); } });
            });
            activeLoraFilters.forEach(l => {
                const shortName = l.split(/[\\/]/).pop();
                filters.push({ label: `LoRA: ${shortName}`, clear: () => { activeLoraFilters.delete(l); } });
            });
            if (showFavorites) filters.push({ label: "Favorites", clear: () => { showFavorites = false; el.querySelector("#cm-fav-toggle").classList.remove("active"); } });
            if (workflowOnly) filters.push({ label: "Workflows only", clear: () => { workflowOnly = false; el.querySelector("#cm-workflow-filter").classList.remove("active"); } });
            if (sortBy !== "date_desc") {
                const sortLabel = { date_asc: "Oldest first", size_desc: "Largest first", size_asc: "Smallest first", name_asc: "Name A\u2192Z", name_desc: "Name Z\u2192A" };
                filters.push({ label: `Sort: ${sortLabel[sortBy] || sortBy}`, clear: () => { sortBy = "date_desc"; updateSortButton(); } });
            }

            filters.forEach(f => {
                const chip = document.createElement("div");
                chip.className = "cm-filter-chip";
                chip.innerHTML = `${f.label} <span class="pi pi-times cm-chip-close"></span>`;
                chip.querySelector(".cm-chip-close").onclick = () => { f.clear(); renderActiveFilters(); update(); };
                activeFiltersEl.appendChild(chip);
            });

            // Update filter button active state
            const hasFilters = activeUtility !== "all" || activeModelFilters.size > 0 || activeLoraFilters.size > 0;
            el.querySelector("#cm-filter").classList.toggle("active", hasFilters);
        };

        // Render the custom folder list with remove buttons
        const renderFolderList = (folders) => {
            const listEl = el.querySelector("#cm-folder-list");
            listEl.innerHTML = "";
            folders.forEach(f => {
                const item = document.createElement("div");
                item.className = "cm-folder-item";
                item.innerHTML = `<span>${f.path}</span>`;
                const removeBtn = document.createElement("button");
                removeBtn.className = "cm-folder-remove-btn";
                removeBtn.innerHTML = `<span class="pi pi-times"></span>`;
                removeBtn.title = "Remove folder";
                removeBtn.onclick = async () => {
                    await fetch("/dnh-assetmanager/folders", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ action: "remove", path: f.path })
                    });
                    await loadSettings();
                    update();
                };
                item.appendChild(removeBtn);
                listEl.appendChild(item);
            });
        };

        // Load config to populate settings and get custom folder count
        const loadSettings = async () => {
            const res = await fetch("/dnh-assetmanager/config");
            const config = await res.json();
            const folders = config.custom_folders || [];
            customFolderCount = folders.length;
            el.querySelector("#cm-output-path").value = config.output_path || "";
            renderFolderList(folders);
        };
        loadSettings();

        // UI Listeners
        el.querySelector("#cm-browse-btn").onclick = () => { activeFolderSelector = "custom"; folderSelector.show(); };
        el.querySelector("#cm-output-browse-btn").onclick = () => { activeFolderSelector = "output"; folderSelector.show(); };
        el.querySelector("#cm-settings-toggle").onclick = () => {
            el.querySelector("#cm-advanced-panel").classList.toggle("visible");
            el.querySelector("#cm-settings-toggle").classList.toggle("active");
        };

        // Save output path setting
        el.querySelector("#cm-output-save-btn").onclick = async () => {
            const outputPath = el.querySelector("#cm-output-path").value.trim();
            const res = await fetch("/dnh-assetmanager/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ output_path: outputPath })
            });
            if (res.ok) {
                update();
            } else {
                const err = await res.json();
                alert(err.error || "Failed to save setting");
            }
        };

        // Add custom folder
        el.querySelector("#cm-add-btn").onclick = async () => {
            const path = el.querySelector("#cm-new-path").value.trim();
            if (!path) return;
            const res = await fetch("/dnh-assetmanager/folders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "add", path })
            });
            if (res.ok) {
                el.querySelector("#cm-new-path").value = "";
                await loadSettings();
                update();
            }
        };

        // Tab Switching Logic
        const tabLabels = { all: "All", input: "Inputs", output: "Outputs", custom: "Custom" };
        el.querySelectorAll(".cm-nav-btn").forEach(btn => {
            btn.onclick = () => {
                el.querySelectorAll(".cm-nav-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                activeTab = btn.dataset.tab;
                update();
            };
        });

        const update = async () => {
            // Custom tab with no folders: show empty state
            if (activeTab === "custom" && customFolderCount === 0) {
                container.innerHTML = `
                    <div class="cm-empty-state">
                        <span class="pi pi-folder-open cm-empty-icon"></span>
                        <p class="cm-empty-text">No custom folders configured</p>
                        <p class="cm-empty-hint">Click the <span class="pi pi-cog"></span> settings button to add custom paths.</p>
                    </div>`;
                statsText.textContent = `assets: 0/0 | Custom`;
                return;
            }

            const params = new URLSearchParams({
                q: el.querySelector("#cm-search").value,
                tab: activeTab,
                utility: activeUtility,
                favorites_only: showFavorites,
                sort: sortBy,
                workflow_only: workflowOnly,
                hide_nsfw: hideNsfw,
                model_filter: activeModelFilters.size > 0 ? [...activeModelFilters].join(",") : "all",
                lora_filter: activeLoraFilters.size > 0 ? [...activeLoraFilters].join(",") : "all",
            });

            closeInfoPanel();
            renderActiveFilters();
            const res = await fetch(`/dnh-assetmanager/history?${params.toString()}`);
            const data = await res.json();
            container.innerHTML = "";
            statsText.textContent = `assets: ${data.files.length}/${data.files.length} | ${tabLabels[activeTab] || activeTab}`;

            data.files.forEach(f => {
                const card = document.createElement("div");
                card.className = "cm-card";

                const truncName = f.filename.length > 20
                    ? f.filename.substring(0, 17) + "..."
                    : f.filename;

                const createdDate = f.created_at
                    ? new Date(f.created_at * 1000).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
                    : "";

                card.innerHTML = `
                    <button class="cm-fav-btn${f.is_favorite ? ' active' : ''}" title="${f.is_favorite ? 'Remove from favorites' : 'Add to favorites'}"><span class="pi ${f.is_favorite ? 'pi-bookmark-fill' : 'pi-bookmark'}"></span></button>
                    ${f.has_workflow ? `<div class="cm-workflow-badge" title="Has embedded workflow"><span class="pi pi-sitemap"></span></div>` : ''}
                    ${createdDate ? `<div class="cm-date-badge">${createdDate}</div>` : ''}
                    <img src="${f.url}" loading="lazy" />
                    <div class="cm-card-overlay">
                        <span class="cm-overlay-name" title="${f.filename}">${truncName}</span>
                        <div class="cm-overlay-meta">
                            <span class="cm-overlay-type">${f.file_type}</span>
                            <span class="cm-overlay-size">${f.file_size_formatted}</span>
                        </div>
                    </div>
                `;
                card.querySelector(".cm-fav-btn").onclick = (e) => {
                    e.stopPropagation();
                    toggleFavorite(f);
                };
                card.onclick = async () => {
                    const blob = await (await fetch(f.url)).blob();
                    await app.handleFile(blob);
                };
                card.oncontextmenu = (e) => showContextMenu(e, f);
                container.appendChild(card);
            });
        };

        el.querySelector("#cm-search").oninput = update;

        // Filter menu
        el.querySelector("#cm-filter").onclick = (e) => {
            e.stopPropagation();
            dismissContextMenu();

            const menu = document.createElement("div");
            menu.className = "cm-context-menu";

            // Section: Utility type
            const utilLabel = document.createElement("div");
            utilLabel.className = "cm-context-menu-label";
            utilLabel.textContent = "Asset Type";
            menu.appendChild(utilLabel);

            [{ value: "all", label: "All types" }, { value: "generation", label: "Generated (has workflow)" }, { value: "input", label: "Input (no workflow)" }].forEach(opt => {
                const btn = document.createElement("button");
                btn.className = "cm-context-menu-item" + (activeUtility === opt.value ? " cm-active" : "");
                btn.innerHTML = `${activeUtility === opt.value ? '<span class="pi pi-check"></span> ' : '<span style="width:16px;display:inline-block"></span> '}${opt.label}`;
                btn.onclick = (ev) => { ev.stopPropagation(); activeUtility = opt.value; dismissContextMenu(); update(); };
                menu.appendChild(btn);
            });

            // Helper to build a multi-select checkbox menu item
            const makeCheckItem = (label, isChecked, onToggle, title) => {
                const btn = document.createElement("button");
                btn.className = "cm-context-menu-item" + (isChecked ? " cm-active" : "");
                const icon = isChecked ? "pi-check-square" : "pi-stop";
                btn.innerHTML = `<span class="pi ${icon} cm-check-icon"></span> ${label}`;
                if (title) btn.title = title;
                btn.onclick = (ev) => {
                    ev.stopPropagation();
                    onToggle();
                    // Rebuild menu in-place by re-clicking the filter button
                    dismissContextMenu();
                    update();
                    // Re-open the menu after a tick so the user can keep selecting
                    setTimeout(() => el.querySelector("#cm-filter").click(), 0);
                };
                return btn;
            };

            // Section: Model filter
            if (availableModels.length > 0) {
                const sep1 = document.createElement("div");
                sep1.className = "cm-context-menu-separator";
                menu.appendChild(sep1);

                const modelHeader = document.createElement("div");
                modelHeader.className = "cm-context-menu-label";
                modelHeader.textContent = `Checkpoint${activeModelFilters.size > 0 ? ` (${activeModelFilters.size})` : ""}`;
                menu.appendChild(modelHeader);

                if (activeModelFilters.size > 0) {
                    menu.appendChild(makeCheckItem("Clear all", false, () => { activeModelFilters.clear(); }));
                }

                availableModels.slice(0, 15).forEach(m => {
                    const shortName = m.split(/[\\/]/).pop();
                    const checked = activeModelFilters.has(m);
                    menu.appendChild(makeCheckItem(shortName, checked, () => {
                        if (checked) activeModelFilters.delete(m);
                        else activeModelFilters.add(m);
                    }, m));
                });
            }

            // Section: LoRA filter
            if (availableLoras.length > 0) {
                const sep2 = document.createElement("div");
                sep2.className = "cm-context-menu-separator";
                menu.appendChild(sep2);

                const loraHeader = document.createElement("div");
                loraHeader.className = "cm-context-menu-label";
                loraHeader.textContent = `LoRA${activeLoraFilters.size > 0 ? ` (${activeLoraFilters.size})` : ""}`;
                menu.appendChild(loraHeader);

                if (activeLoraFilters.size > 0) {
                    menu.appendChild(makeCheckItem("Clear all", false, () => { activeLoraFilters.clear(); }));
                }

                availableLoras.slice(0, 15).forEach(l => {
                    const shortName = l.split(/[\\/]/).pop();
                    const checked = activeLoraFilters.has(l);
                    menu.appendChild(makeCheckItem(shortName, checked, () => {
                        if (checked) activeLoraFilters.delete(l);
                        else activeLoraFilters.add(l);
                    }, l));
                });
            }

            document.body.appendChild(menu);
            activeContextMenu = menu;

            // Position below the filter button
            const btnRect = el.querySelector("#cm-filter").getBoundingClientRect();
            const menuRect = menu.getBoundingClientRect();
            let x = btnRect.left;
            let y = btnRect.bottom + 4;
            if (x + menuRect.width > window.innerWidth) x = window.innerWidth - menuRect.width - 4;
            if (y + menuRect.height > window.innerHeight) y = btnRect.top - menuRect.height - 4;
            menu.style.left = `${x}px`;
            menu.style.top = `${y}px`;
        };

        // Favorites toggle
        el.querySelector("#cm-fav-toggle").onclick = () => {
            showFavorites = !showFavorites;
            el.querySelector("#cm-fav-toggle").classList.toggle("active", showFavorites);
            el.querySelector("#cm-fav-toggle").title = showFavorites ? "Showing favorites only" : "Show favorites only";
            update();
        };

        // NSFW toggle
        el.querySelector("#cm-nsfw-toggle").onclick = () => {
            hideNsfw = !hideNsfw;
            const btn = el.querySelector("#cm-nsfw-toggle");
            btn.classList.toggle("active", hideNsfw);
            btn.querySelector("span").className = hideNsfw ? "pi pi-eye-slash" : "pi pi-eye";
            btn.title = hideNsfw ? "NSFW hidden" : "NSFW visible";
            update();
        };

        // Sort options
        const sortOptions = [
            { value: "date_desc", label: "Date (newest first)", icon: "pi-sort-amount-down" },
            { value: "date_asc",  label: "Date (oldest first)", icon: "pi-sort-amount-up" },
            { value: "size_desc", label: "Size (largest first)", icon: "pi-sort-amount-down" },
            { value: "size_asc",  label: "Size (smallest first)", icon: "pi-sort-amount-up" },
            { value: "name_asc",  label: "Name (A \u2192 Z)", icon: "pi-sort-alpha-down" },
            { value: "name_desc", label: "Name (Z \u2192 A)", icon: "pi-sort-alpha-up" },
        ];

        const updateSortButton = () => {
            const btn = el.querySelector("#cm-sort");
            const current = sortOptions.find(o => o.value === sortBy);
            btn.title = current ? current.label : "Sort";
            btn.classList.toggle("active", sortBy !== "date_desc");
        };

        const showSortMenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            dismissContextMenu();

            const menu = document.createElement("div");
            menu.className = "cm-context-menu";

            const header = document.createElement("div");
            header.className = "cm-context-menu-label";
            header.textContent = "Sort By";
            menu.appendChild(header);

            sortOptions.forEach(opt => {
                const btn = document.createElement("button");
                btn.className = "cm-context-menu-item" + (sortBy === opt.value ? " cm-active" : "");
                btn.innerHTML = `${sortBy === opt.value ? '<span class="pi pi-check"></span> ' : '<span style="width:16px;display:inline-block"></span> '}${opt.label}`;
                btn.onclick = (ev) => {
                    ev.stopPropagation();
                    sortBy = opt.value;
                    updateSortButton();
                    dismissContextMenu();
                    update();
                };
                menu.appendChild(btn);
            });

            document.body.appendChild(menu);
            activeContextMenu = menu;

            const btnRect = el.querySelector("#cm-sort").getBoundingClientRect();
            const menuRect = menu.getBoundingClientRect();
            let x = btnRect.left;
            let y = btnRect.bottom + 4;
            if (x + menuRect.width > window.innerWidth) x = window.innerWidth - menuRect.width - 4;
            if (y + menuRect.height > window.innerHeight) y = btnRect.top - menuRect.height - 4;
            menu.style.left = `${x}px`;
            menu.style.top = `${y}px`;
        };

        // Left-click: toggle sort order (asc/desc). Right-click: open full menu.
        el.querySelector("#cm-sort").onclick = () => {
            const [field, dir] = sortBy.split("_");
            sortBy = `${field}_${dir === "desc" ? "asc" : "desc"}`;
            updateSortButton();
            update();
        };
        el.querySelector("#cm-sort").oncontextmenu = showSortMenu;

        // Workflow-only filter toggle
        el.querySelector("#cm-workflow-filter").onclick = () => {
            workflowOnly = !workflowOnly;
            const btn = el.querySelector("#cm-workflow-filter");
            btn.classList.toggle("active", workflowOnly);
            btn.title = workflowOnly ? "Showing workflow assets only" : "Show only assets with workflows";
            update();
        };

        update();

        // Auto-refresh when backend detects file changes (debounced 300ms)
        let watcherTimeout = null;
        api.addEventListener("dnh-assets-changed", () => {
            clearTimeout(watcherTimeout);
            watcherTimeout = setTimeout(() => update(), 300);
        });
      }
    });
  }
});
