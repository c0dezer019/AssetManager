<template>
  <Teleport to="body">
    <div
      v-if="visible"
      ref="menuEl"
      class="cm-context-menu"
      :style="{ left: pos.x + 'px', top: pos.y + 'px' }"
    >
      <div class="cm-context-menu-label">Sort By</div>
      <button
        v-for="opt in sortOptions"
        :key="opt.value"
        class="cm-context-menu-item"
        :class="{ 'cm-active': state.sortBy === opt.value }"
        @click.stop="selectSort(opt.value)"
      >
        <span v-if="state.sortBy === opt.value" class="pi pi-check"></span>
        <span v-else style="width:16px;display:inline-block"></span>
        {{ opt.label }}
      </button>
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

const sortOptions = [
  { value: 'date_desc', label: 'Date (newest first)' },
  { value: 'date_asc', label: 'Date (oldest first)' },
  { value: 'size_desc', label: 'Size (largest first)' },
  { value: 'size_asc', label: 'Size (smallest first)' },
  { value: 'name_asc', label: 'Name (A \u2192 Z)' },
  { value: 'name_desc', label: 'Name (Z \u2192 A)' },
]

function dismiss() {
  visible.value = false
}

async function show(e, anchor) {
  e.stopPropagation()
  visible.value = true
  await nextTick()
  if (!menuEl.value || !anchor) return
  const btnRect = anchor.getBoundingClientRect()
  const menuRect = menuEl.value.getBoundingClientRect()
  let x = btnRect.left
  let y = btnRect.bottom + 4
  if (x + menuRect.width > window.innerWidth) x = window.innerWidth - menuRect.width - 4
  if (y + menuRect.height > window.innerHeight) y = btnRect.top - menuRect.height - 4
  pos.value = { x, y }
}

function selectSort(value) {
  state.sortBy = value
  dismiss()
  update()
}

function onDocClick() {
  dismiss()
}

onMounted(() => document.addEventListener('click', onDocClick))
onUnmounted(() => document.removeEventListener('click', onDocClick))

defineExpose({ show })
</script>
