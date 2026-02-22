<template>
  <div class="cm-active-filters">
    <div v-for="chip in chips" :key="chip.label" class="cm-filter-chip">
      {{ chip.label }}
      <span class="pi pi-times cm-chip-close" @click="chip.clear()"></span>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'

const { state } = useAssetState()
const update = inject('update')

const sortLabels = {
  date_asc: 'Oldest first',
  size_desc: 'Largest first',
  size_asc: 'Smallest first',
  name_asc: 'Name A\u2192Z',
  name_desc: 'Name Z\u2192A',
}

const chips = computed(() => {
  const result = []

  if (state.activeUtility !== 'all') {
    result.push({
      label: `Type: ${state.activeUtility}`,
      clear: () => { state.activeUtility = 'all'; update() }
    })
  }

  // We need to iterate reactively — convert Set to array
  for (const m of state.activeModelFilters) {
    const shortName = m.split(/[\\/]/).pop()
    result.push({
      label: `Model: ${shortName}`,
      clear: () => { state.activeModelFilters.delete(m); update() }
    })
  }

  for (const l of state.activeLoraFilters) {
    const shortName = l.split(/[\\/]/).pop()
    result.push({
      label: `LoRA: ${shortName}`,
      clear: () => { state.activeLoraFilters.delete(l); update() }
    })
  }

  if (state.showFavorites) {
    result.push({
      label: 'Favorites',
      clear: () => { state.showFavorites = false; update() }
    })
  }

  if (state.workflowOnly) {
    result.push({
      label: 'Workflows only',
      clear: () => { state.workflowOnly = false; update() }
    })
  }

  if (state.sortBy !== 'date_desc') {
    result.push({
      label: `Sort: ${sortLabels[state.sortBy] || state.sortBy}`,
      clear: () => { state.sortBy = 'date_desc'; update() }
    })
  }

  return result
})
</script>
