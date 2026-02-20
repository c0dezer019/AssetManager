/**
 * Active filter chip rendering.
 */

import { state } from "../state.js";

/**
 * Render active filter chips into the given element.
 * @param {HTMLElement} el - The sidebar root element
 * @param {HTMLElement} activeFiltersEl - The container for filter chips
 * @param {Function} update - Callback to refresh the grid
 * @param {Function} updateSortButton - Callback to refresh the sort button state
 */
export function renderActiveFilters(el, activeFiltersEl, update, updateSortButton) {
    activeFiltersEl.innerHTML = "";
    const filters = [];

    if (state.activeUtility !== "all") {
        filters.push({ label: `Type: ${state.activeUtility}`, clear: () => { state.activeUtility = "all"; } });
    }
    state.activeModelFilters.forEach(m => {
        const shortName = m.split(/[\\/]/).pop();
        filters.push({ label: `Model: ${shortName}`, clear: () => { state.activeModelFilters.delete(m); } });
    });
    state.activeLoraFilters.forEach(l => {
        const shortName = l.split(/[\\/]/).pop();
        filters.push({ label: `LoRA: ${shortName}`, clear: () => { state.activeLoraFilters.delete(l); } });
    });
    if (state.showFavorites) {
        filters.push({ label: "Favorites", clear: () => { state.showFavorites = false; el.querySelector("#cm-fav-toggle").classList.remove("active"); } });
    }
    if (state.workflowOnly) {
        filters.push({ label: "Workflows only", clear: () => { state.workflowOnly = false; el.querySelector("#cm-workflow-filter").classList.remove("active"); } });
    }
    if (state.sortBy !== "date_desc") {
        const sortLabel = { date_asc: "Oldest first", size_desc: "Largest first", size_asc: "Smallest first", name_asc: "Name A\u2192Z", name_desc: "Name Z\u2192A" };
        filters.push({ label: `Sort: ${sortLabel[state.sortBy] || state.sortBy}`, clear: () => { state.sortBy = "date_desc"; updateSortButton(); } });
    }

    filters.forEach(f => {
        const chip = document.createElement("div");
        chip.className = "cm-filter-chip";
        chip.innerHTML = `${f.label} <span class="pi pi-times cm-chip-close"></span>`;
        chip.querySelector(".cm-chip-close").onclick = () => { f.clear(); renderActiveFilters(el, activeFiltersEl, update, updateSortButton); update(); };
        activeFiltersEl.appendChild(chip);
    });

    // Update filter button active state
    const hasFilters = state.activeUtility !== "all" || state.activeModelFilters.size > 0 || state.activeLoraFilters.size > 0;
    el.querySelector("#cm-filter").classList.toggle("active", hasFilters);
}
