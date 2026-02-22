<template>
  <div class="cm-status-line">
    <span class="cm-stats-text">{{ statsText }}</span>
    <FilterChips />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'
import FilterChips from './FilterChips.vue'

const { state } = useAssetState()

const tabLabels = { all: 'All', input: 'Inputs', output: 'Outputs', custom: 'Custom' }

const statsText = computed(() => {
  const count = state.currentFiles.length
  return `assets: ${count}/${count} | ${tabLabels[state.activeTab] || state.activeTab}`
})
</script>
