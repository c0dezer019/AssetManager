/**
 * Settings panel + folder list management.
 */

import { state } from "../state.js";
import { fetchConfig, postFolder, postSettings } from "../api.js";

/**
 * Render the custom folder list with remove buttons.
 * @param {HTMLElement} el - The sidebar root element
 * @param {Array} folders
 * @param {Function} loadSettings - Callback to reload settings
 * @param {Function} update - Callback to refresh the grid
 */
function renderFolderList(el, folders, loadSettings, update) {
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
            await postFolder("remove", f.path);
            await loadSettings();
            update();
        };
        item.appendChild(removeBtn);
        listEl.appendChild(item);
    });
}

/**
 * Initialize the settings panel: wire up buttons, load config.
 * @param {HTMLElement} el - The sidebar root element
 * @param {Object} folderSelector - The FolderSelector instance
 * @param {Function} update - Callback to refresh the grid
 * @returns {{ loadSettings }}
 */
export function initSettingsPanel(el, folderSelector, update) {
    let activeFolderSelector = null;

    const loadSettings = async () => {
        const config = await fetchConfig();
        const folders = config.custom_folders || [];
        state.customFolderCount = folders.length;
        el.querySelector("#cm-output-path").value = config.output_path || "";
        renderFolderList(el, folders, loadSettings, update);
    };

    // Folder selector callbacks
    folderSelector.onSelect = (path) => {
        if (activeFolderSelector === "output") {
            el.querySelector("#cm-output-path").value = path;
        } else {
            el.querySelector("#cm-new-path").value = path;
        }
    };

    el.querySelector("#cm-browse-btn").onclick = () => { activeFolderSelector = "custom"; folderSelector.show(); };
    el.querySelector("#cm-output-browse-btn").onclick = () => { activeFolderSelector = "output"; folderSelector.show(); };
    el.querySelector("#cm-settings-toggle").onclick = () => {
        el.querySelector("#cm-advanced-panel").classList.toggle("visible");
        el.querySelector("#cm-settings-toggle").classList.toggle("active");
    };

    // Save output path setting
    el.querySelector("#cm-output-save-btn").onclick = async () => {
        const outputPath = el.querySelector("#cm-output-path").value.trim();
        const res = await postSettings({ output_path: outputPath });
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
        const res = await postFolder("add", path);
        if (res.ok) {
            el.querySelector("#cm-new-path").value = "";
            await loadSettings();
            update();
        }
    };

    // Load initial settings
    loadSettings();

    return { loadSettings };
}
