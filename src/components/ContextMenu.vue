<template>
  <Teleport to="body">
    <div
      v-if="visible"
      ref="menuEl"
      class="cm-context-menu"
      :style="{ left: pos.x + 'px', top: pos.y + 'px' }"
      @click.stop
      @contextmenu.stop
    >
      <!-- Toggle favorite -->
      <button class="cm-context-menu-item" @click.stop="doFavorite">
        <span :class="['pi', file?.is_favorite ? 'pi-bookmark-fill' : 'pi-bookmark']"></span>
        {{ file?.is_favorite ? 'Remove from favorites' : 'Add to favorites' }}
      </button>

      <div class="cm-context-menu-separator"></div>

      <!-- Load workflow -->
      <button class="cm-context-menu-item" @click.stop="doLoadWorkflow">
        <span class="pi pi-download"></span> Load workflow
      </button>

      <!-- View image -->
      <button class="cm-context-menu-item" @click.stop="doViewImage">
        <span class="pi pi-eye"></span> View image
      </button>

      <!-- Open in external viewer -->
      <button class="cm-context-menu-item" @click.stop="doOpenExternal">
        <span class="pi pi-external-link"></span> Open in external viewer
      </button>

      <!-- Edit metadata (PNG only) -->
      <button
        v-if="file?.file_type === 'PNG'"
        class="cm-context-menu-item"
        @click.stop="doEditMetadata"
      >
        <span class="pi pi-pencil"></span> Edit metadata
      </button>

      <!-- Copy section -->
      <div class="cm-context-menu-separator"></div>
      <div class="cm-context-menu-label">Copy</div>

      <!-- Metadata submenu -->
      <div
        v-if="metaItems.length > 0"
        class="cm-context-menu-item cm-submenu-item"
        @mouseenter="showSubmenu($event, 'meta')"
        @mouseleave="scheduleHideSubmenu('meta')"
      >
        <span class="pi pi-info-circle"></span>
        <span class="cm-submenu-label">Metadata</span>
        <span class="cm-submenu-arrow">&#x25BA;</span>
      </div>

      <!-- Workflow submenu -->
      <div
        v-if="file?.has_workflow && file?.workflow_nodes?.length > 0"
        class="cm-context-menu-item cm-submenu-item"
        @mouseenter="showSubmenu($event, 'workflow')"
        @mouseleave="scheduleHideSubmenu('workflow')"
      >
        <span class="pi pi-sitemap"></span>
        <span class="cm-submenu-label">Workflow</span>
        <span class="cm-submenu-arrow">&#x25BA;</span>
      </div>

      <div class="cm-context-menu-separator"></div>

      <!-- Delete -->
      <button class="cm-context-menu-item cm-danger" @click.stop="doDelete">
        <span class="pi pi-trash"></span> Delete
      </button>
    </div>

    <!-- Metadata submenu -->
    <div
      v-if="activeSubmenu === 'meta'"
      ref="submenuEl"
      class="cm-submenu"
      :style="{ left: submenuPos.x + 'px', top: submenuPos.y + 'px' }"
      @mouseenter="cancelHideSubmenu()"
      @mouseleave="scheduleHideSubmenu('meta')"
    >
      <button
        v-for="item in metaItems"
        :key="item.label"
        class="cm-context-menu-item cm-submenu-copy-row"
        @click.stop="copyValue(item.value)"
      >
        <span class="cm-submenu-key">{{ item.label }}</span>
        <span class="cm-submenu-value" :title="String(item.value)">{{ truncate(item.value) }}</span>
      </button>
    </div>

    <!-- Workflow submenu (node list) -->
    <div
      v-if="activeSubmenu === 'workflow'"
      ref="submenuEl"
      class="cm-submenu"
      :style="{ left: submenuPos.x + 'px', top: submenuPos.y + 'px' }"
      @mouseenter="cancelHideSubmenu()"
      @mouseleave="scheduleHideSubmenu('workflow')"
    >
      <div
        v-for="node in workflowNodes"
        :key="node.label"
        class="cm-context-menu-item cm-submenu-item"
        @mouseenter="showNodeSubmenu($event, node)"
        @mouseleave="scheduleHideNodeSubmenu()"
      >
        <span class="cm-submenu-label">{{ node.label }}</span>
        <span class="cm-submenu-arrow">&#x25BA;</span>
      </div>
    </div>

    <!-- Node inputs nested submenu -->
    <div
      v-if="activeNodeSubmenu"
      ref="nodeSubmenuEl"
      class="cm-submenu"
      :style="{ left: nodeSubmenuPos.x + 'px', top: nodeSubmenuPos.y + 'px' }"
      @mouseenter="cancelHideNodeSubmenu()"
      @mouseleave="scheduleHideNodeSubmenu()"
    >
      <button
        v-for="input in activeNodeSubmenu.children"
        :key="input.label"
        class="cm-context-menu-item cm-submenu-copy-row"
        @click.stop="copyValue(input.value)"
      >
        <span class="cm-submenu-key">{{ input.label }}</span>
        <span class="cm-submenu-value" :title="String(input.value)">{{ truncate(input.value) }}</span>
      </button>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, inject, onMounted, onUnmounted, nextTick } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'
import { useApi } from '../composables/useApi.js'

const { state } = useAssetState()
const api = useApi()
const comfyApp = inject('comfyApp')
const update = inject('update')
const openViewer = inject('openViewer')
const toggleFavorite = inject('toggleFavorite')

const visible = ref(false)
const file = ref(null)
const pos = ref({ x: 0, y: 0 })
const menuEl = ref(null)

// Submenu state
const activeSubmenu = ref(null)
const submenuPos = ref({ x: 0, y: 0 })
const submenuEl = ref(null)
let submenuHideTimer = null

// Node nested submenu
const activeNodeSubmenu = ref(null)
const nodeSubmenuPos = ref({ x: 0, y: 0 })
const nodeSubmenuEl = ref(null)
let nodeSubmenuHideTimer = null

const metaItems = computed(() => {
  if (!file.value?.file_metadata) return []
  const fm = file.value.file_metadata
  const items = []
  if (fm.filename) items.push({ label: 'filename', value: fm.filename })
  if (fm.file_type) items.push({ label: 'file_type', value: fm.file_type })
  if (fm.file_size) items.push({ label: 'file_size', value: fm.file_size })
  if (fm.created_date) items.push({ label: 'created', value: fm.created_date })
  if (fm.full_path) items.push({ label: 'path', value: fm.full_path })
  return items
})

const workflowNodes = computed(() => {
  if (!file.value?.has_workflow || !file.value?.workflow_nodes) return []
  return file.value.workflow_nodes.map(node => ({
    label: `${node.class_type || 'Node'} #${node.id}`,
    children: Object.entries(node.inputs).map(([k, v]) => ({ label: k, value: v })),
  }))
})

function truncate(val, max = 40) {
  const s = String(val)
  return s.length > max ? s.substring(0, max - 1) + '\u2026' : s
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(String(text)).then(() => {
    const toast = document.createElement('div')
    toast.className = 'cm-copy-toast'
    toast.textContent = 'Copied!'
    document.body.appendChild(toast)
    requestAnimationFrame(() => toast.classList.add('show'))
    setTimeout(() => {
      toast.classList.remove('show')
      setTimeout(() => toast.remove(), 200)
    }, 1200)
  })
}

function copyValue(val) {
  copyToClipboard(val)
  dismiss()
}

function dismiss() {
  visible.value = false
  activeSubmenu.value = null
  activeNodeSubmenu.value = null
  clearTimeout(submenuHideTimer)
  clearTimeout(nodeSubmenuHideTimer)
}

async function show(e, f) {
  e.preventDefault()
  e.stopPropagation()
  dismiss()
  file.value = f
  visible.value = true
  await nextTick()
  if (!menuEl.value) return
  const rect = menuEl.value.getBoundingClientRect()
  let x = e.clientX
  let y = e.clientY
  if (x + rect.width > window.innerWidth) x = window.innerWidth - rect.width - 4
  if (y + rect.height > window.innerHeight) y = window.innerHeight - rect.height - 4
  pos.value = { x, y }
}

async function showSubmenu(e, type) {
  cancelHideSubmenu()
  activeNodeSubmenu.value = null
  activeSubmenu.value = type
  await nextTick()
  positionSubmenu(e.currentTarget, submenuEl)
}

function positionSubmenu(parentItem, elRef) {
  if (!elRef.value) return
  const parentRect = parentItem.getBoundingClientRect()
  const subRect = elRef.value.getBoundingClientRect()
  let left = parentRect.right + 2
  let top = parentRect.top
  if (left + subRect.width > window.innerWidth) left = parentRect.left - subRect.width - 2
  if (top + subRect.height > window.innerHeight) top = Math.max(4, window.innerHeight - subRect.height - 4)
  submenuPos.value = { x: left, y: top }
}

function scheduleHideSubmenu(type) {
  submenuHideTimer = setTimeout(() => {
    activeSubmenu.value = null
    activeNodeSubmenu.value = null
  }, 150)
}

function cancelHideSubmenu() {
  clearTimeout(submenuHideTimer)
}

async function showNodeSubmenu(e, node) {
  cancelHideNodeSubmenu()
  cancelHideSubmenu()
  activeNodeSubmenu.value = node
  await nextTick()
  if (!nodeSubmenuEl.value) return
  const parentRect = e.currentTarget.getBoundingClientRect()
  const subRect = nodeSubmenuEl.value.getBoundingClientRect()
  let left = parentRect.right + 2
  let top = parentRect.top
  if (left + subRect.width > window.innerWidth) left = parentRect.left - subRect.width - 2
  if (top + subRect.height > window.innerHeight) top = Math.max(4, window.innerHeight - subRect.height - 4)
  nodeSubmenuPos.value = { x: left, y: top }
}

function scheduleHideNodeSubmenu() {
  nodeSubmenuHideTimer = setTimeout(() => {
    activeNodeSubmenu.value = null
  }, 150)
}

function cancelHideNodeSubmenu() {
  clearTimeout(nodeSubmenuHideTimer)
}

// Actions
function doFavorite() {
  dismiss()
  if (file.value) toggleFavorite(file.value)
}

async function doLoadWorkflow() {
  dismiss()
  if (!file.value) return
  const blob = await (await fetch(file.value.url)).blob()
  await comfyApp.handleFile(blob)
}

function doViewImage() {
  dismiss()
  if (file.value) openViewer(file.value)
}

async function doOpenExternal() {
  dismiss()
  if (file.value) await api.postOpenFile(file.value.full_path)
}

function doEditMetadata() {
  dismiss()
  if (!file.value) return
  state.selectedFile = file.value
  state.infoPanelVisible = true
}

async function doDelete() {
  dismiss()
  if (!file.value) return
  if (!confirm(`Delete "${file.value.filename}"? This cannot be undone.`)) return
  const res = await api.postDelete(file.value.full_path)
  if (res.ok) update()
}

function onDocClick() {
  dismiss()
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('contextmenu', onDocClick)
})
onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('contextmenu', onDocClick)
})

defineExpose({ show })
</script>
