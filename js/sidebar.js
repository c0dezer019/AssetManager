import { app } from "../../scripts/app.js";
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

        el.innerHTML = `
          <div class="cm-sidebar-content">
            <header class="cm-top-nav">
                <div class="cm-brand">
                    <span class="pi pi-folder cm-brand-icon"></span>
                    <span class="cm-brand-title">Assets Manager</span>
                    <span class="cm-version-badge">v1.0.8</span>
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
                    <button id="cm-refresh" class="cm-tool-btn" title="Refresh"><span class="pi pi-filter"></span></button>
                    <button id="cm-sort" class="cm-tool-btn"><span class="pi pi-sort-alt"></span></button>
                    <button id="cm-fav-toggle" class="cm-tool-btn"><span class="pi pi-bookmark"></span></button>
                </div>
            </div>

            <div class="cm-status-line">
                <span id="cm-asset-stats" class="cm-stats-text">assets: --/-- | All</span>
                <div id="cm-active-chip" class="cm-filter-chip hidden">
                    Scope: <span id="cm-chip-val">custom</span>
                    <span class="pi pi-times cm-chip-close"></span>
                </div>
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
        const container = el.querySelector("#cm-container");
        const statsText = el.querySelector("#cm-asset-stats");
        const chip = el.querySelector("#cm-active-chip");

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
                if (activeTab === "custom") {
                    chip.classList.remove("hidden");
                } else {
                    chip.classList.add("hidden");
                }
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
            });

            const res = await fetch(`/dnh-assetmanager/history?${params.toString()}`);
            const data = await res.json();
            container.innerHTML = "";
            statsText.textContent = `assets: ${data.files.length}/${data.files.length} | ${tabLabels[activeTab] || activeTab}`;

            data.files.forEach(f => {
                const card = document.createElement("div");
                card.className = "cm-card";
                card.innerHTML = `
                    ${f.is_favorite ? `<div class="cm-star-badge">⭐</div>` : ''}
                    <img src="${f.url}" loading="lazy" />
                `;
                card.onclick = async () => {
                    const blob = await (await fetch(f.url)).blob();
                    await app.handleFile(blob);
                };
                card.oncontextmenu = (e) => showContextMenu(e, f);
                container.appendChild(card);
            });
        };

        el.querySelector("#cm-search").oninput = update;
        update();
      }
    });
  }
});
