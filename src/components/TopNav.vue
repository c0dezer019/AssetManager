<template>
  <header class="cm-top-nav">
    <div class="cm-brand">
      <span class="pi pi-folder cm-brand-icon"></span>
      <span class="cm-brand-title">Assets Manager</span>
      <span class="cm-version-badge">{{ state.version ? `v${state.version}` : 'v...' }}</span>
    </div>
    <nav class="cm-nav-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="cm-nav-btn"
        :class="{ active: state.activeTab === tab.key }"
        @click="setTab(tab.key)"
      >{{ tab.label }}</button>
      <button
        class="cm-icon-only-btn"
        :class="{ active: state.settingsVisible }"
        @click="state.settingsVisible = !state.settingsVisible"
      >
        <span class="pi pi-cog"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { inject } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'

const { state } = useAssetState()
const update = inject('update')

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'input', label: 'Inputs' },
  { key: 'output', label: 'Outputs' },
  { key: 'custom', label: 'Custom' },
]

function setTab(tab) {
  state.activeTab = tab
  update()
}
</script>
