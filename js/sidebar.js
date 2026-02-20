import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { FolderSelector } from "./folderSelector.js";
import { sidebarTemplate } from "./template.js";
import { state } from "./state.js";
import { fetchHistory, fetchTags, fetchVersion } from "./api.js";
import { postFavorite } from "./api.js";
import { showContextMenu } from "./components/contextMenu.js";
import { initInfoPanel } from "./components/infoPanel.js";
import { renderCards } from "./components/cardRenderer.js";
import { renderActiveFilters } from "./components/filterChips.js";
import { showFilterMenu } from "./components/filterMenu.js";
import { showSortMenu, updateSortButton } from "./components/sortMenu.js";
import { initSettingsPanel } from "./components/settingsPanel.js";

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
        el.innerHTML = sidebarTemplate;

        const container = el.querySelector("#cm-container");
        const statsText = el.querySelector("#cm-asset-stats");
        const activeFiltersEl = el.querySelector("#cm-active-filters");
        const tabLabels = { all: "All", input: "Inputs", output: "Outputs", custom: "Custom" };

        // Initialize sub-components
        const folderSelector = new FolderSelector(() => {});
        const { openInfoPanel, closeInfoPanel } = initInfoPanel(el);
        const { loadSettings } = initSettingsPanel(el, folderSelector, () => update());

        // Toggle favorite helper
        const toggleFavorite = async (file) => {
            const res = await postFavorite(file.full_path);
            if (res.ok) {
                file.is_favorite = !file.is_favorite;
                update();
            }
        };

        // Main update function
        const update = async () => {
            if (state.activeTab === "custom" && state.customFolderCount === 0) {
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
                tab: state.activeTab,
                utility: state.activeUtility,
                favorites_only: state.showFavorites,
                sort: state.sortBy,
                workflow_only: state.workflowOnly,
                hide_nsfw: state.hideNsfw,
                model_filter: state.activeModelFilters.size > 0 ? [...state.activeModelFilters].join(",") : "all",
                lora_filter: state.activeLoraFilters.size > 0 ? [...state.activeLoraFilters].join(",") : "all",
            });

            closeInfoPanel();
            renderActiveFilters(el, activeFiltersEl, update, () => updateSortButton(el));
            const data = await fetchHistory(params);
            renderCards(container, data.files, {
                toggleFavorite,
                showContextMenu: (e, f) => showContextMenu(e, f, { toggleFavorite, openInfoPanel, update, el }),
            });
            statsText.textContent = `assets: ${data.files.length}/${data.files.length} | ${tabLabels[state.activeTab] || state.activeTab}`;
        };

        // Load tags for filter menu
        fetchTags().then(data => {
            state.availableModels = data.models || [];
            state.availableLoras = data.loras || [];
        }).catch(() => {});

        // Load version badge
        fetchVersion().then(data => {
            const badge = el.querySelector("#cm-version-badge");
            if (badge && data.version) badge.textContent = `v${data.version}`;
        }).catch(() => {});

        // Tab switching
        el.querySelectorAll(".cm-nav-btn").forEach(btn => {
            btn.onclick = () => {
                el.querySelectorAll(".cm-nav-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                state.activeTab = btn.dataset.tab;
                update();
            };
        });

        // Search
        el.querySelector("#cm-search").oninput = update;

        // Filter menu
        el.querySelector("#cm-filter").onclick = (e) => showFilterMenu(e, el, update);

        // Favorites toggle
        el.querySelector("#cm-fav-toggle").onclick = () => {
            state.showFavorites = !state.showFavorites;
            el.querySelector("#cm-fav-toggle").classList.toggle("active", state.showFavorites);
            el.querySelector("#cm-fav-toggle").title = state.showFavorites ? "Showing favorites only" : "Show favorites only";
            update();
        };

        // NSFW toggle
        el.querySelector("#cm-nsfw-toggle").onclick = () => {
            state.hideNsfw = !state.hideNsfw;
            const btn = el.querySelector("#cm-nsfw-toggle");
            btn.classList.toggle("active", state.hideNsfw);
            btn.querySelector("span").className = state.hideNsfw ? "pi pi-eye-slash" : "pi pi-eye";
            btn.title = state.hideNsfw ? "NSFW hidden" : "NSFW visible";
            update();
        };

        // Sort: left-click toggles asc/desc, right-click opens full menu
        el.querySelector("#cm-sort").onclick = () => {
            const [field, dir] = state.sortBy.split("_");
            state.sortBy = `${field}_${dir === "desc" ? "asc" : "desc"}`;
            updateSortButton(el);
            update();
        };
        el.querySelector("#cm-sort").oncontextmenu = (e) => showSortMenu(e, el, update);

        // Workflow-only filter toggle
        el.querySelector("#cm-workflow-filter").onclick = () => {
            state.workflowOnly = !state.workflowOnly;
            const btn = el.querySelector("#cm-workflow-filter");
            btn.classList.toggle("active", state.workflowOnly);
            btn.title = state.workflowOnly ? "Showing workflow assets only" : "Show only assets with workflows";
            update();
        };

        // Initial render
        update();

        // Auto-refresh when backend detects file changes
        let watcherTimeout = null;
        api.addEventListener("dnh-assets-changed", () => {
            clearTimeout(watcherTimeout);
            watcherTimeout = setTimeout(() => update(), 300);
        });
      }
    });
  }
});
