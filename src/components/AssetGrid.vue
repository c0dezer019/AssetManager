<template>
  <section ref="gridEl" class="cm-asset-grid">
    <div v-if="state.activeTab === 'custom' && state.customFolderCount === 0" class="cm-empty-state">
      <span class="pi pi-folder-open cm-empty-icon"></span>
      <p class="cm-empty-text">No custom folders configured</p>
      <p class="cm-empty-hint">Click the <span class="pi pi-cog"></span> settings button to add custom paths.</p>
    </div>
    <AssetCard
      v-else
      v-for="file in state.currentFiles"
      :key="file.full_path"
      :file="file"
      @open-viewer="$emit('open-viewer', file)"
      @toggle-favorite="$emit('toggle-favorite', file)"
      @context-menu="(e) => $emit('context-menu', e, file)"
    />
    <div v-if="state.isLoadingMore" class="cm-loading-more">
      <span class="pi pi-spin pi-spinner"></span>
    </div>
    <div ref="sentinel" class="cm-scroll-sentinel"></div>
  </section>
</template>

<script setup>
import { ref, inject, provide, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'
import AssetCard from './AssetCard.vue'

const { state } = useAssetState()
const loadMore = inject('loadMore')

const gridEl = ref(null)
const sentinel = ref(null)

defineEmits(['open-viewer', 'toggle-favorite', 'context-menu'])

let scrollObserver = null
let resizeObserver = null

// --- Shared visibility observer for image load/unload ---
const visibilityCallbacks = new Map()
let visibilityObserver = null

function setupVisibilityObserver() {
  visibilityObserver?.disconnect()
  if (!gridEl.value) return

  visibilityObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        visibilityCallbacks.get(entry.target)?.(entry.isIntersecting)
      }
    },
    { root: gridEl.value, rootMargin: '400px 0px 400px 0px' }
  )

  // Re-observe all registered elements
  for (const el of visibilityCallbacks.keys()) {
    visibilityObserver.observe(el)
  }
}

function registerVisibility(el, callback) {
  visibilityCallbacks.set(el, callback)
  visibilityObserver?.observe(el)
  return () => {
    visibilityCallbacks.delete(el)
    visibilityObserver?.unobserve(el)
  }
}

provide('registerVisibility', registerVisibility)

// --- Infinite scroll sentinel observer ---
function setupScrollObserver() {
  if (scrollObserver) scrollObserver.disconnect()
  if (!sentinel.value || !gridEl.value) return

  scrollObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) loadMore()
    },
    {
      root: gridEl.value,
      rootMargin: '0px 0px 800px 0px',
      threshold: 0,
    }
  )
  scrollObserver.observe(sentinel.value)
}

onMounted(() => {
  setupVisibilityObserver()
  setupScrollObserver()
})

onUnmounted(() => {
  scrollObserver?.disconnect()
  visibilityObserver?.disconnect()
})

// Re-observe after every append so the scroll observer can fire again
watch(() => state.currentFiles.length, () => {
  nextTick(setupScrollObserver)
})
</script>
