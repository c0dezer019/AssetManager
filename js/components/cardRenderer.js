/**
 * Asset card creation + grid rendering.
 */

import { app } from "../../../scripts/app.js";

/**
 * Render asset cards into the container.
 * @param {HTMLElement} container
 * @param {Array} files - Array of file data objects from the API
 * @param {Object} callbacks - { toggleFavorite, showContextMenu }
 */
export function renderCards(container, files, { toggleFavorite, showContextMenu }) {
    container.innerHTML = "";

    files.forEach(f => {
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
}
