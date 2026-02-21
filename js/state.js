/**
 * Shared state object + pub/sub notification.
 */

export const state = {
    showFavorites: false,
    activeTab: "all",
    activeUtility: "all",
    customFolderCount: 0,
    sortBy: "date_desc",
    workflowOnly: false,
    hideNsfw: true,
    availableModels: [],
    availableLoras: [],
    activeModelFilters: new Set(),
    activeLoraFilters: new Set(),
    selectedFile: null,
    currentRating: 0,
    viewerMode: "carousel", // "carousel" | "grid"
};

const _listeners = [];

export function subscribe(fn) {
    _listeners.push(fn);
    return () => {
        const idx = _listeners.indexOf(fn);
        if (idx >= 0) _listeners.splice(idx, 1);
    };
}

export function notify() {
    _listeners.forEach(fn => fn(state));
}
