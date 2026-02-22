<template>
  <section class="cm-advanced-panel" :class="{ visible: state.settingsVisible }">
    <div class="cm-settings-group">
      <label class="cm-settings-label">Output Directory</label>
      <div class="cm-settings-row">
        <input
          v-model="outputPath"
          type="text"
          placeholder="Default: ComfyUI output folder"
          class="comfy-input"
        />
        <button class="comfy-btn comfy-btn-secondary" @click="browseOutput">&#x1F4C2;</button>
        <button class="comfy-btn comfy-btn-primary" @click="saveOutputPath">Save</button>
      </div>
    </div>
    <hr class="cm-settings-divider" />
    <div class="cm-settings-group">
      <label class="cm-settings-label">Custom Folders</label>
      <div class="cm-folder-list">
        <div v-for="folder in folders" :key="folder.path" class="cm-folder-item">
          <span>{{ folder.path }}</span>
          <button class="cm-folder-remove-btn" title="Remove folder" @click="removeFolder(folder.path)">
            <span class="pi pi-times"></span>
          </button>
        </div>
      </div>
      <div class="cm-add-folder-row">
        <input
          v-model="newPath"
          type="text"
          placeholder="Add custom path..."
          class="comfy-input"
        />
        <button class="comfy-btn comfy-btn-secondary" @click="browseCustom">&#x1F4C2;</button>
        <button class="comfy-btn comfy-btn-primary" @click="addFolder">+</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'
import { useApi } from '../composables/useApi.js'

const { state } = useAssetState()
const api = useApi()
const update = inject('update')
const folderSelectorRef = inject('folderSelectorRef')

const outputPath = ref('')
const newPath = ref('')
const folders = ref([])
let activeBrowseTarget = null

async function loadSettings() {
  const config = await api.fetchConfig()
  folders.value = config.custom_folders || []
  state.customFolderCount = folders.value.length
  outputPath.value = config.output_path || ''
}

function onFolderSelected(path) {
  if (activeBrowseTarget === 'output') {
    outputPath.value = path
  } else {
    newPath.value = path
  }
}

function browseOutput() {
  activeBrowseTarget = 'output'
  folderSelectorRef.value?.show(onFolderSelected)
}

function browseCustom() {
  activeBrowseTarget = 'custom'
  folderSelectorRef.value?.show(onFolderSelected)
}

async function saveOutputPath() {
  const res = await api.postSettings({ output_path: outputPath.value.trim() })
  if (res.ok) {
    update()
  } else {
    const err = await res.json()
    alert(err.error || 'Failed to save setting')
  }
}

async function addFolder() {
  const path = newPath.value.trim()
  if (!path) return
  const res = await api.postFolder('add', path)
  if (res.ok) {
    newPath.value = ''
    await loadSettings()
    update()
  }
}

async function removeFolder(path) {
  await api.postFolder('remove', path)
  await loadSettings()
  update()
}

onMounted(() => loadSettings())

defineExpose({ loadSettings })
</script>
