<template>
  <section class="cm-asset-grid">
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
  </section>
</template>

<script setup>
import { useAssetState } from '../composables/useAssetState.js'
import AssetCard from './AssetCard.vue'

const { state } = useAssetState()

defineEmits(['open-viewer', 'toggle-favorite', 'context-menu'])
</script>
