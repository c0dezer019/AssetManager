/**
 * Reactive state composable — replaces state.js
 * All components import useAssetState() and mutate state.* directly.
 * Vue's reactivity system handles re-renders automatically.
 */

import { reactive } from 'vue'

const state = reactive({
    showFavorites: false,
    activeTab: 'all',
    activeUtility: 'all',
    customFolderCount: 0,
    sortBy: 'date_desc',
    workflowOnly: false,
    hideNsfw: true,
    searchQuery: '',
    availableModels: [],
    availableLoras: [],
    activeModelFilters: new Set(),
    activeLoraFilters: new Set(),
    selectedFile: null,
    currentRating: 0,
    viewerMode: 'carousel', // "carousel" | "grid"
    currentFiles: [],
    totalAssets: 0,
    currentOffset: 0,
    isLoadingMore: false,
    hasMore: false,
    version: '',
    // UI panel visibility
    settingsVisible: false,
    infoPanelVisible: false,
})

export function useAssetState() {
    return { state }
}
