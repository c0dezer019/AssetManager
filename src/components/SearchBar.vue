<template>
  <div class="cm-search-container">
    <div class="cm-search-wrapper">
      <span class="pi pi-search cm-search-icon"></span>
      <input
        type="text"
        placeholder='Search: name, seed:, model:, prompt:&quot;...&quot;'
        title='Search tips: type freely to search all fields, or use prefixes like seed:12345 model:sdxl prompt:&quot;a brown kitty&quot; lora:detail node:KSampler steps:20 cfg:7 sampler:euler filename:img type:png size:2.3 path:/output date:&quot;Jan 15&quot;. Wrap values with spaces/commas in quotes. Multiple terms are AND-matched.'
        class="cm-search-input"
        v-model="state.searchQuery"
        @input="update()"
      />
    </div>
    <div class="cm-action-buttons">
      <button
        ref="filterBtnRef"
        class="cm-tool-btn"
        :class="{ active: hasActiveFilters }"
        title="Filter options"
        @click="showFilter"
      >
        <span class="pi pi-filter"></span>
      </button>
      <button
        ref="sortBtnRef"
        class="cm-tool-btn"
        :class="{ active: state.sortBy !== 'date_desc' }"
        :title="currentSortLabel"
        @click="toggleSortDir"
        @contextmenu.prevent="showSort"
      >
        <span class="pi pi-sort-alt"></span>
      </button>
      <button
        class="cm-tool-btn"
        :class="{ active: state.workflowOnly }"
        :title="state.workflowOnly ? 'Showing workflow assets only' : 'Show only assets with workflows'"
        @click="toggleWorkflow"
      >
        <span class="pi pi-sitemap"></span>
      </button>
      <button
        class="cm-tool-btn"
        :class="{ active: state.showFavorites }"
        :title="state.showFavorites ? 'Showing favorites only' : 'Show favorites only'"
        @click="toggleFavorites"
      >
        <span class="pi pi-bookmark"></span>
      </button>
      <button
        class="cm-tool-btn cm-nsfw-toggle"
        :class="{ active: state.hideNsfw }"
        :title="state.hideNsfw ? 'NSFW hidden' : 'NSFW visible'"
        @click="toggleNsfw"
      >
        <span :class="state.hideNsfw ? 'pi pi-eye-slash' : 'pi pi-eye'"></span>
      </button>
    </div>
  </div>
  <FilterMenu ref="filterMenuRef" />
  <SortMenu ref="sortMenuRef" />
</template>

<script setup>
import { inject, ref, computed } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'
import FilterMenu from './FilterMenu.vue'
import SortMenu from './SortMenu.vue'

const { state } = useAssetState()
const update = inject('update')

const filterBtnRef = ref(null)
const sortBtnRef = ref(null)
const filterMenuRef = ref(null)
const sortMenuRef = ref(null)

const sortOptions = [
  { value: 'date_desc', label: 'Date (newest first)' },
  { value: 'date_asc', label: 'Date (oldest first)' },
  { value: 'size_desc', label: 'Size (largest first)' },
  { value: 'size_asc', label: 'Size (smallest first)' },
  { value: 'name_asc', label: 'Name (A \u2192 Z)' },
  { value: 'name_desc', label: 'Name (Z \u2192 A)' },
]

const currentSortLabel = computed(() => {
  const opt = sortOptions.find(o => o.value === state.sortBy)
  return opt ? opt.label : 'Sort'
})

const hasActiveFilters = computed(() =>
  state.activeUtility !== 'all' ||
  state.activeModelFilters.size > 0 ||
  state.activeLoraFilters.size > 0
)

function showFilter(e) {
  filterMenuRef.value?.show(e, filterBtnRef.value)
}

function toggleSortDir() {
  const [field, dir] = state.sortBy.split('_')
  state.sortBy = `${field}_${dir === 'desc' ? 'asc' : 'desc'}`
  update()
}

function showSort(e) {
  sortMenuRef.value?.show(e, sortBtnRef.value)
}

function toggleWorkflow() {
  state.workflowOnly = !state.workflowOnly
  update()
}

function toggleFavorites() {
  state.showFavorites = !state.showFavorites
  update()
}

function toggleNsfw() {
  state.hideNsfw = !state.hideNsfw
  update()
}
</script>
