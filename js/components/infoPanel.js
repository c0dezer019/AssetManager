/**
 * Info panel (metadata editor) for a selected asset.
 */

import { state } from "../state.js";
import { postMetadata } from "../api.js";

/**
 * Initialize the info panel: wire up star buttons, close button, save button.
 * @param {HTMLElement} el - The sidebar root element
 * @returns {{ openInfoPanel, closeInfoPanel }}
 */
export function initInfoPanel(el) {
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

    const setRatingDisplay = (val) => {
        state.currentRating = val;
        infoRating.querySelectorAll(".cm-info-star").forEach(star => {
            star.classList.toggle("active", parseInt(star.dataset.val) <= val);
        });
    };

    infoRating.querySelectorAll(".cm-info-star").forEach(star => {
        star.onclick = () => {
            const val = parseInt(star.dataset.val);
            setRatingDisplay(val === state.currentRating ? 0 : val);
        };
    });

    const openInfoPanel = (file) => {
        state.selectedFile = file;
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
        state.selectedFile = null;
        infoPanel.classList.remove("visible");
        el.querySelectorAll(".cm-card").forEach(c => c.classList.remove("selected"));
    };

    el.querySelector("#cm-info-close").onclick = closeInfoPanel;

    infoSave.onclick = async () => {
        if (!state.selectedFile) return;
        infoSave.disabled = true;
        infoSave.textContent = "Saving...";
        try {
            const res = await postMetadata({
                path: state.selectedFile.full_path,
                title: infoTitle.value,
                description: infoDesc.value,
                tags: infoTags.value,
                rating: state.currentRating > 0 ? String(state.currentRating) : "",
            });
            if (res.ok) {
                infoSavedMsg.classList.add("show");
                setTimeout(() => infoSavedMsg.classList.remove("show"), 2000);
                // Update the cached file data
                state.selectedFile.asset_title = infoTitle.value;
                state.selectedFile.asset_description = infoDesc.value;
                state.selectedFile.asset_tags = infoTags.value;
                state.selectedFile.asset_rating = state.currentRating > 0 ? String(state.currentRating) : "";
            } else {
                const err = await res.json();
                alert(err.error || "Failed to save metadata");
            }
        } finally {
            infoSave.disabled = false;
            infoSave.textContent = "Save Metadata";
        }
    };

    return { openInfoPanel, closeInfoPanel };
}
