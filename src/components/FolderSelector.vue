<template>
  <Teleport to="body">
    <div v-if="visible" class="cm-selector-modal" style="display: flex;" @click.self="cancel">
      <div class="cm-selector-content">
        <div class="cm-selector-header">Select Directory</div>
        <div class="cm-current-path">{{ currentPath || 'Select a starting point' }}</div>
        <input
          ref="pathInputRef"
          type="text"
          class="comfy-input cm-selector-path"
          placeholder="Type a path or pick below..."
          v-model="pathInput"
          @input="handleInput"
          @keydown.tab.prevent="handleTab"
          @keydown.enter.prevent="confirm"
        />
        <div class="cm-selector-list">
          <!-- Up entry -->
          <div
            v-if="canGoUp"
            class="cm-dir-item special"
            @click="navigateTo(parentPath)"
          >.. [Up]</div>
          <!-- Directory items -->
          <div
            v-for="d in filteredDirs"
            :key="d"
            class="cm-dir-item"
            @click="navigateTo(joinPath(currentPath, d))"
          >{{ d }}</div>
        </div>
        <div class="cm-selector-footer">
          <button class="comfy-btn comfy-btn-secondary cm-cancel" @click="cancel">Cancel</button>
          <button class="comfy-btn comfy-btn-primary cm-confirm" @click="confirm">Select</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

const visible = ref(false)
const currentPath = ref('')
const pathInput = ref('')
const allDirs = ref([])
const filter = ref('')
const pathInputRef = ref(null)
let debounceTimer = null
let lastFetchedParent = null
let onSelectCallback = null
let tabCycleIndex = -1
let tabFilterSnapshot = null

function isAbsolute(p) {
  return p.startsWith('/') || /^[A-Za-z]:[\\\/]/.test(p)
}

function sep(p) {
  return p.includes('\\') ? '\\' : '/'
}

function isRoot(p) {
  return p === '/' || /^[A-Za-z]:[\\\/]?$/.test(p)
}

function ensureDriveRoot(p) {
  return /^[A-Za-z]:$/.test(p) ? p + '\\' : p
}

const canGoUp = computed(() => {
  return currentPath.value && !isRoot(currentPath.value)
})

const parentPath = computed(() => {
  const p = currentPath.value
  const s = sep(p)
  const parts = p.split(/[\\/]/)
  parts.pop()
  const result = parts.join(s)
  return ensureDriveRoot(result) || s
})

const filteredDirs = computed(() => {
  if (!filter.value) return allDirs.value
  const f = filter.value.toLowerCase()
  return allDirs.value.filter(d => d.toLowerCase().includes(f))
})

function joinPath(base, dir) {
  if (!base) return dir
  const s = sep(base)
  return base.endsWith(s) ? base + dir : base + s + dir
}

async function fetchDirs(path) {
  const res = await fetch(`/dnh-assetmanager/subdirs?path=${encodeURIComponent(path)}`)
  const data = await res.json()
  allDirs.value = data.dirs || []
}

async function navigateTo(path) {
  await fetchDirs(path)
  currentPath.value = path
  lastFetchedParent = path
  pathInput.value = path
  filter.value = ''
}

function handleInput() {
  clearTimeout(debounceTimer)
  tabCycleIndex = -1
  tabFilterSnapshot = null
  debounceTimer = setTimeout(async () => {
    const typed = pathInput.value.trim()
    if (!typed || !isAbsolute(typed)) {
      filter.value = typed.toLowerCase()
      return
    }

    let parentDir, partial

    if (typed.endsWith('/') || typed.endsWith('\\')) {
      parentDir = ensureDriveRoot(typed.replace(/[\/\\]+$/, '')) || '/'
      partial = ''
    } else {
      const sepIdx = Math.max(typed.lastIndexOf('/'), typed.lastIndexOf('\\'))
      parentDir = ensureDriveRoot(typed.substring(0, sepIdx)) || '/'
      partial = typed.substring(sepIdx + 1).toLowerCase()
    }

    if (parentDir !== lastFetchedParent) {
      await fetchDirs(parentDir)
      lastFetchedParent = parentDir
      currentPath.value = parentDir
    }
    filter.value = partial
  }, 150)
}

function handleTab() {
  const matches = filteredDirs.value
  if (!matches.length) return
  const currentFilter = filter.value
  if (currentFilter !== tabFilterSnapshot) {
    tabCycleIndex = -1
    tabFilterSnapshot = currentFilter
  }
  tabCycleIndex = (tabCycleIndex + 1) % matches.length
  pathInput.value = joinPath(currentPath.value, matches[tabCycleIndex])
}

async function show(callback) {
  onSelectCallback = callback
  visible.value = true
  if (!currentPath.value) {
    const res = await fetch('/dnh-assetmanager/subdirs?path=')
    const data = await res.json()
    currentPath.value = data.home || '/'
  }
  pathInput.value = currentPath.value
  lastFetchedParent = null
  await navigateTo(currentPath.value)
  await nextTick()
  pathInputRef.value?.focus()
}

function cancel() {
  visible.value = false
}

function confirm() {
  const selected = pathInput.value.trim() || currentPath.value
  if (onSelectCallback) onSelectCallback(selected)
  visible.value = false
}

defineExpose({ show })
</script>
