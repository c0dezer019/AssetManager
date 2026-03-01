<template>
  <div
    ref="containerRef"
    class="cm-viewer-grid"
    @wheel="onGridWheel"
  >
    <div
      v-for="(file, idx) in files"
      :key="file.full_path"
      ref="itemRefs"
      class="cm-viewer-grid-item"
      :class="{ active: idx === currentIndex }"
      @click.stop="selectItem(idx)"
    >
      <div v-if="visibleSet.has(file.full_path) && !loadedSet.has(file.full_path)" class="cm-card-spinner">
        <span class="pi pi-spin pi-spinner"></span>
      </div>
      <img v-if="visibleSet.has(file.full_path)" v-show="loadedSet.has(file.full_path)" :src="file.url" draggable="false" @load="loadedSet.add(file.full_path)" />
      <span class="cm-viewer-grid-label" :title="file.filename">{{ truncName(file.filename) }}</span>
    </div>
  </div>
  <div class="cm-viewer-grid-toolbar">
    <button class="cm-viewer-grid-close" title="Close grid view" @click="closeViewer">
      <span class="pi pi-times"></span>
    </button>
    <div class="cm-viewer-grid-toolbar-center">
      <div class="cm-viewer-grid-search-wrapper">
        <span class="pi pi-search cm-viewer-grid-search-icon"></span>
        <input
          type="text"
          class="cm-viewer-grid-search"
          placeholder="Search..."
          v-model="searchQuery"
          @input="onSearchInput"
        />
      </div>
      <button
        ref="filterBtnRef"
        class="cm-viewer-grid-btn cm-viewer-grid-filter"
        :class="{ active: hasActiveFilters }"
        title="Filter options"
        @click="showFilter"
      ><span class="pi pi-filter"></span></button>
      <button
        ref="sortBtnRef"
        class="cm-viewer-grid-btn cm-viewer-grid-sort"
        title="Sort by date"
        :class="{ active: state.sortBy !== 'date_desc' }"
        @click="toggleSortDir"
        @contextmenu.prevent="showSort"
      ><span class="pi pi-sort-alt"></span></button>
      <button
        class="cm-viewer-grid-btn cm-viewer-grid-workflow"
        :class="{ active: state.workflowOnly }"
        title="Show only assets with workflows"
        @click="toggleWorkflow"
      ><span class="pi pi-sitemap"></span></button>
      <button
        class="cm-viewer-grid-btn cm-viewer-grid-fav"
        :class="{ active: state.showFavorites }"
        title="Show favorites only"
        @click="toggleFav"
      ><span class="pi pi-bookmark"></span></button>
      <button
        class="cm-viewer-grid-btn cm-viewer-grid-nsfw"
        :class="{ active: state.hideNsfw }"
        :title="state.hideNsfw ? 'NSFW hidden' : 'NSFW visible'"
        @click="toggleNsfw"
      ><span :class="state.hideNsfw ? 'pi pi-eye-slash' : 'pi pi-eye'"></span></button>
    </div>
    <div class="cm-viewer-grid-toolbar-slider">
      <span class="pi pi-search-minus cm-viewer-grid-slider-icon"></span>
      <input
        type="range"
        class="cm-viewer-grid-slider"
        min="80"
        max="400"
        step="10"
        v-model.number="sliderValue"
        @input="applySlider"
      />
      <span class="pi pi-search-plus cm-viewer-grid-slider-icon"></span>
      <span class="cm-viewer-grid-zoom-pct">{{ zoomPct }}%</span>
    </div>
  </div>
  <FilterMenu ref="filterMenuRef" />
  <SortMenu ref="sortMenuRef" />
</template>

<script setup>
import { ref, reactive, computed, inject, provide, nextTick, onUnmounted } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'
import FilterMenu from './FilterMenu.vue'
import SortMenu from './SortMenu.vue'

const props = defineProps({
  files: { type: Array, required: true },
  currentIndex: { type: Number, required: true },
})

const { state } = useAssetState()
const imageViewerRef = inject('imageViewerRef')

const containerRef = ref(null)
const itemRefs = ref([])
const filterBtnRef = ref(null)
const sortBtnRef = ref(null)
const filterMenuRef = ref(null)
const sortMenuRef = ref(null)
const searchQuery = ref('')
const sliderValue = ref(160)
const autoThumbSize = ref(160)
let sliderActive = false

// Override `update` for child FilterMenu/SortMenu so they trigger gridUpdate
provide('update', () => gridUpdate())

// Track which grid items are visible via IntersectionObserver
const visibleSet = reactive(new Set())
const loadedSet = reactive(new Set())
let visObserver = null

function setupVisibilityObserver() {
  visObserver?.disconnect()

  // Prune stale entries for files no longer in the list
  const currentPaths = new Set(props.files.map(f => f.full_path))
  for (const path of visibleSet) {
    if (!currentPaths.has(path)) visibleSet.delete(path)
  }
  for (const path of loadedSet) {
    if (!currentPaths.has(path)) loadedSet.delete(path)
  }

  const root = containerRef.value
  if (!root) return

  visObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const path = entry.target.dataset.vpath
        if (entry.isIntersecting) visibleSet.add(path)
        else { visibleSet.delete(path); loadedSet.delete(path) }
      }
    },
    { root, rootMargin: '400px 0px 400px 0px' }
  )

  nextTick(() => {
    const items = root.querySelectorAll('.cm-viewer-grid-item')
    items.forEach((el, i) => {
      el.dataset.vpath = props.files[i]?.full_path
      visObserver.observe(el)
    })
  })
}

onUnmounted(() => visObserver?.disconnect())

const hasActiveFilters = computed(() =>
  state.activeUtility !== 'all' ||
  state.activeModelFilters.size > 0 ||
  state.activeLoraFilters.size > 0
)

const zoomPct = computed(() => Math.round((sliderValue.value / autoThumbSize.value) * 100))

function truncName(name) {
  return name.length > 18 ? name.substring(0, 15) + '...' : name
}

function selectItem(idx) {
  imageViewerRef.value?.selectFromGrid(idx)
}

function closeViewer() {
  imageViewerRef.value?.close()
}

async function gridUpdate() {
  const newFiles = await imageViewerRef.value?.gridUpdate(searchQuery.value)
  if (newFiles) {
    nextTick(() => {
      render()
    })
  }
}

function onSearchInput() {
  gridUpdate()
}

function showFilter(e) {
  filterMenuRef.value?.show(e, filterBtnRef.value)
}

function toggleSortDir() {
  const [field, dir] = state.sortBy.split('_')
  state.sortBy = `${field}_${dir === 'desc' ? 'asc' : 'desc'}`
  gridUpdate()
}

function showSort(e) {
  sortMenuRef.value?.show(e, sortBtnRef.value)
}

function toggleWorkflow() {
  state.workflowOnly = !state.workflowOnly
  gridUpdate()
}

function toggleFav() {
  state.showFavorites = !state.showFavorites
  gridUpdate()
}

function toggleNsfw() {
  state.hideNsfw = !state.hideNsfw
  gridUpdate()
}

function render() {
  const container = containerRef.value
  if (!container || !props.files.length) return

  // Reset slider mode
  sliderActive = false
  container.classList.remove('cm-grid-slider-active')
  container.style.removeProperty('--grid-thumb-size')

  // Default to 7 columns
  const cols = 7
  container.style.setProperty('--grid-cols', cols)

  // Sync slider to default column width
  const rect = container.getBoundingClientRect()
  const autoThumbPx = Math.round(rect.width / cols)
  autoThumbSize.value = Math.max(80, Math.min(400, autoThumbPx))
  sliderValue.value = autoThumbSize.value

  // Start observing visibility after layout settles
  setupVisibilityObserver()
}

function applySlider() {
  const container = containerRef.value
  if (!container) return
  sliderActive = true
  container.classList.add('cm-grid-slider-active')
  container.style.setProperty('--grid-thumb-size', `${sliderValue.value}px`)
}

function onGridWheel(e) {
  // Zoom only when hovering a focused (active) grid item
  if (state.viewerMode !== 'grid') return
  const item = e.target.closest('.cm-viewer-grid-item.active')
  if (!item) return
  e.preventDefault()
  const step = e.deltaY < 0 ? 20 : -20
  sliderValue.value = Math.max(80, Math.min(400, sliderValue.value + step))
  applySlider()
}

function reset() {
  visObserver?.disconnect()
  visibleSet.clear()
  loadedSet.clear()
  const container = containerRef.value
  if (container) {
    container.classList.remove('cm-grid-slider-active')
    container.style.removeProperty('--grid-thumb-size')
    container.style.removeProperty('--grid-cols')
  }
  searchQuery.value = ''
}

defineExpose({ render, reset })
</script>
