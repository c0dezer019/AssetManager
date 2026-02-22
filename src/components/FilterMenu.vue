<template>
  <Teleport to="body">
    <div
      v-if="visible"
      ref="menuEl"
      class="cm-context-menu"
      :style="{ left: pos.x + 'px', top: pos.y + 'px' }"
    >
      <!-- Asset Type -->
      <div class="cm-context-menu-label">Asset Type</div>
      <button
        v-for="opt in utilityOptions"
        :key="opt.value"
        class="cm-context-menu-item"
        :class="{ 'cm-active': state.activeUtility === opt.value }"
        @click.stop="selectUtility(opt.value)"
      >
        <span v-if="state.activeUtility === opt.value" class="pi pi-check"></span>
        <span v-else style="width:16px;display:inline-block"></span>
        {{ opt.label }}
      </button>

      <!-- Checkpoint section -->
      <template v-if="state.availableModels.length > 0">
        <div class="cm-context-menu-separator"></div>
        <div class="cm-context-menu-label">
          Checkpoint{{ state.activeModelFilters.size > 0 ? ` (${state.activeModelFilters.size})` : '' }}
        </div>
        <button
          v-if="state.activeModelFilters.size > 0"
          class="cm-context-menu-item"
          @click.stop="clearModels"
        >
          <span class="pi pi-stop cm-check-icon"></span> Clear all
        </button>
        <button
          v-for="m in state.availableModels.slice(0, 15)"
          :key="m"
          class="cm-context-menu-item"
          :class="{ 'cm-active': state.activeModelFilters.has(m) }"
          :title="m"
          @click.stop="toggleModel(m)"
        >
          <span :class="['pi', 'cm-check-icon', state.activeModelFilters.has(m) ? 'pi-check-square' : 'pi-stop']"></span>
          {{ shortName(m) }}
        </button>
      </template>

      <!-- LoRA section -->
      <template v-if="state.availableLoras.length > 0">
        <div class="cm-context-menu-separator"></div>
        <div class="cm-context-menu-label">
          LoRA{{ state.activeLoraFilters.size > 0 ? ` (${state.activeLoraFilters.size})` : '' }}
        </div>
        <button
          v-if="state.activeLoraFilters.size > 0"
          class="cm-context-menu-item"
          @click.stop="clearLoras"
        >
          <span class="pi pi-stop cm-check-icon"></span> Clear all
        </button>
        <button
          v-for="l in state.availableLoras.slice(0, 15)"
          :key="l"
          class="cm-context-menu-item"
          :class="{ 'cm-active': state.activeLoraFilters.has(l) }"
          :title="l"
          @click.stop="toggleLora(l)"
        >
          <span :class="['pi', 'cm-check-icon', state.activeLoraFilters.has(l) ? 'pi-check-square' : 'pi-stop']"></span>
          {{ shortName(l) }}
        </button>
      </template>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted, nextTick } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'

const { state } = useAssetState()
const update = inject('update')

const visible = ref(false)
const pos = ref({ x: 0, y: 0 })
const menuEl = ref(null)
let anchorEl = null

const utilityOptions = [
  { value: 'all', label: 'All types' },
  { value: 'generation', label: 'Generated (has workflow)' },
  { value: 'input', label: 'Input (no workflow)' },
]

function shortName(path) {
  return path.split(/[\\/]/).pop()
}

function dismiss() {
  visible.value = false
}

async function show(e, anchor) {
  e.stopPropagation()
  anchorEl = anchor
  visible.value = true
  await nextTick()
  positionMenu()
}

function positionMenu() {
  if (!menuEl.value || !anchorEl) return
  const btnRect = anchorEl.getBoundingClientRect()
  const menuRect = menuEl.value.getBoundingClientRect()
  let x = btnRect.left
  let y = btnRect.bottom + 4
  if (x + menuRect.width > window.innerWidth) x = window.innerWidth - menuRect.width - 4
  if (y + menuRect.height > window.innerHeight) y = btnRect.top - menuRect.height - 4
  pos.value = { x, y }
}

function selectUtility(value) {
  state.activeUtility = value
  dismiss()
  update()
}

function toggleModel(m) {
  if (state.activeModelFilters.has(m)) state.activeModelFilters.delete(m)
  else state.activeModelFilters.add(m)
  dismiss()
  update()
  // Re-open menu for multi-select UX
  nextTick(() => anchorEl?.click())
}

function clearModels() {
  state.activeModelFilters.clear()
  dismiss()
  update()
  nextTick(() => anchorEl?.click())
}

function toggleLora(l) {
  if (state.activeLoraFilters.has(l)) state.activeLoraFilters.delete(l)
  else state.activeLoraFilters.add(l)
  dismiss()
  update()
  nextTick(() => anchorEl?.click())
}

function clearLoras() {
  state.activeLoraFilters.clear()
  dismiss()
  update()
  nextTick(() => anchorEl?.click())
}

function onDocClick() {
  dismiss()
}

onMounted(() => document.addEventListener('click', onDocClick))
onUnmounted(() => document.removeEventListener('click', onDocClick))

defineExpose({ show })
</script>
