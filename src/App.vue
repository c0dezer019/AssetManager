<template>
  <div class="cm-sidebar-content">
    <TopNav />
    <SearchBar />
    <StatusLine />
    <button class="cm-grid-view-btn" title="Open grid view" @click="openGridView">
      <span class="pi pi-th-large"></span> Grid View
    </button>
    <SettingsPanel />
    <InfoPanel />
    <AssetGrid
      @open-viewer="openViewer"
      @toggle-favorite="toggleFavorite"
      @context-menu="onContextMenu"
    />
    <ContextMenu ref="contextMenuRef" />
    <ImageViewer ref="imageViewerRef" />
    <FolderSelector ref="folderSelectorRef" />
  </div>
</template>

<script setup>
import { provide, ref, onMounted, onUnmounted, inject } from 'vue'
import { useAssetState } from './composables/useAssetState.js'
import { useApi } from './composables/useApi.js'
import TopNav from './components/TopNav.vue'
import SearchBar from './components/SearchBar.vue'
import StatusLine from './components/StatusLine.vue'
import AssetGrid from './components/AssetGrid.vue'
import SettingsPanel from './components/SettingsPanel.vue'
import InfoPanel from './components/InfoPanel.vue'
import ContextMenu from './components/ContextMenu.vue'
import ImageViewer from './components/ImageViewer.vue'
import FolderSelector from './components/FolderSelector.vue'

const props = defineProps({
  comfyApp: { type: Object, required: true },
  comfyApi: { type: Object, required: true },
})

const { state } = useAssetState()
const api = useApi()

const PAGE_SIZE = 60 // metadata batch size (lightweight JSON)

// Provide app-level dependencies to all descendants
provide('comfyApp', props.comfyApp)
provide('comfyApi', props.comfyApi)
provide('api', api)
provide('state', state)
provide('update', update)
provide('loadMore', loadMore)
provide('openViewer', openViewer)
provide('toggleFavorite', toggleFavorite)

const contextMenuRef = ref(null)
const imageViewerRef = ref(null)
const folderSelectorRef = ref(null)

provide('contextMenuRef', contextMenuRef)
provide('imageViewerRef', imageViewerRef)
provide('folderSelectorRef', folderSelectorRef)

// Build URLSearchParams from current state
function buildParams(searchOverride, offset = 0) {
  const p = new URLSearchParams({
    q: searchOverride !== undefined ? searchOverride : state.searchQuery,
    tab: state.activeTab,
    utility: state.activeUtility,
    favorites_only: state.showFavorites,
    sort: state.sortBy,
    workflow_only: state.workflowOnly,
    hide_nsfw: state.hideNsfw,
    model_filter: state.activeModelFilters.size > 0 ? [...state.activeModelFilters].join(',') : 'all',
    lora_filter: state.activeLoraFilters.size > 0 ? [...state.activeLoraFilters].join(',') : 'all',
    offset,
    limit: PAGE_SIZE,
  })
  return p
}

// Main update function — resets to first page and replaces files
async function update() {
  if (state.activeTab === 'custom' && state.customFolderCount === 0) {
    state.currentFiles = []
    state.totalAssets = 0
    state.currentOffset = 0
    state.hasMore = false
    return
  }

  state.infoPanelVisible = false
  state.selectedFile = null

  const params = buildParams(undefined, 0)
  const data = await api.fetchHistory(params)
  state.currentFiles = data.files
  state.totalAssets = data.total ?? data.files.length
  state.currentOffset = data.files.length
  state.hasMore = state.currentOffset < state.totalAssets
}

// Append next batch — called by the IntersectionObserver in AssetGrid
async function loadMore() {
  if (state.isLoadingMore || !state.hasMore) return

  state.isLoadingMore = true
  try {
    const params = buildParams(undefined, state.currentOffset)
    const data = await api.fetchHistory(params)
    state.currentFiles = [...state.currentFiles, ...data.files]
    state.totalAssets = data.total ?? state.totalAssets
    state.currentOffset += data.files.length
    state.hasMore = state.currentOffset < state.totalAssets
  } finally {
    state.isLoadingMore = false
  }
}

// Grid fetch for ImageViewer — fetches all matching files (no pagination)
async function gridFetch(searchQuery) {
  const params = buildParams(searchQuery || '', 0)
  params.set('limit', '9999')
  params.set('offset', '0')
  const data = await api.fetchHistory(params)
  state.currentFiles = data.files
  return data.files
}

provide('gridFetch', gridFetch)

function openViewer(file) {
  const index = state.currentFiles.indexOf(file)
  imageViewerRef.value?.open(state.currentFiles, index >= 0 ? index : 0, gridFetch)
}

async function toggleFavorite(file) {
  const res = await api.postFavorite(file.full_path)
  if (res.ok) {
    file.is_favorite = !file.is_favorite
    update()
  }
}

function onContextMenu(e, file) {
  contextMenuRef.value?.show(e, file)
}

function openGridView() {
  if (state.currentFiles.length > 0) {
    imageViewerRef.value?.openGrid(state.currentFiles, gridFetch)
  }
}

// Load tags + version on mount
onMounted(() => {
  api.fetchTags().then(data => {
    state.availableModels = data.models || []
    state.availableLoras = data.loras || []
  }).catch(() => {})

  api.fetchVersion().then(data => {
    if (data.version) state.version = data.version
  }).catch(() => {})

  // Initial render
  update()

  // Auto-refresh when backend detects file changes
  const handler = () => {
    clearTimeout(_watcherTimeout)
    _watcherTimeout = setTimeout(() => update(), 300)
  }
  props.comfyApi.addEventListener('dnh-assets-changed', handler)
  _cleanupWatcher = () => props.comfyApi.removeEventListener('dnh-assets-changed', handler)
})

let _watcherTimeout = null
let _cleanupWatcher = null

onUnmounted(() => {
  clearTimeout(_watcherTimeout)
  _cleanupWatcher?.()
})
</script>
