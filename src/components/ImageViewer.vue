<template>
  <Teleport to="body">
    <div
      ref="overlayRef"
      class="cm-viewer-overlay"
      :class="{
        visible: isOpen,
        fullscreen: isFullscreen,
        'cm-carousel-active': carouselActive,
        'cm-carousel-dragging': carouselDragging,
        'cm-viewer-grid-mode': viewerMode === 'grid'
      }"
    >
      <div class="cm-viewer-body" @click="onBodyClick">
        <!-- Top bar -->
        <div class="cm-viewer-topbar">
          <span class="cm-viewer-topbar-name" :title="currentFile?.filename">{{ currentFile?.filename }}</span>
          <span class="cm-viewer-topbar-size">{{ dimensions }}</span>
          <span class="cm-viewer-topbar-counter">{{ currentIndex + 1 }} / {{ files.length }}</span>
          <div class="cm-viewer-topbar-actions">
            <button
              class="cm-viewer-grid-toggle"
              :class="{ active: viewerMode === 'grid' }"
              title="Toggle grid view (G)"
              @click.stop="toggleGridView"
            ><span class="pi pi-th-large"></span></button>
            <button
              class="cm-viewer-panel-toggle"
              :class="{ active: panelOpen }"
              title="Toggle details (I)"
              @click.stop="togglePanel"
            ><span class="pi pi-info-circle"></span></button>
            <button
              class="cm-viewer-fullscreen-toggle"
              :class="{ active: isFullscreen }"
              title="Toggle fullscreen (F)"
              @click.stop="toggleFullscreen"
            ><span :class="['pi', isFullscreen ? 'pi-compress' : 'pi-expand']"></span></button>
            <button class="cm-viewer-close" title="Close (Esc)" @click.stop="close"><span class="pi pi-times"></span></button>
          </div>
        </div>

        <!-- Nav arrows -->
        <button
          class="cm-viewer-nav cm-viewer-prev"
          title="Previous (Left arrow)"
          :style="{ display: files.length > 1 ? '' : 'none' }"
          @click.stop="navigate(-1)"
        ><span class="pi pi-chevron-left"></span></button>

        <!-- Image container -->
        <div
          ref="imgContainerRef"
          class="cm-viewer-img-container"
          @wheel.prevent="onWheel"
          @mousedown="onMouseDown"
        >
          <img
            ref="imgRef"
            class="cm-viewer-img"
            draggable="false"
            :src="currentFile?.url"
            @load="onImageLoad"
          />
        </div>

        <button
          class="cm-viewer-nav cm-viewer-next"
          title="Next (Right arrow)"
          :style="{ display: files.length > 1 ? '' : 'none' }"
          @click.stop="navigate(1)"
        ><span class="pi pi-chevron-right"></span></button>

        <!-- Carousel ghosts -->
        <div ref="ghostPrevRef" class="cm-viewer-carousel-prev cm-viewer-carousel-ghost">
          <img draggable="false" :src="ghostPrevSrc" />
        </div>
        <div ref="ghostNextRef" class="cm-viewer-carousel-next cm-viewer-carousel-ghost">
          <img draggable="false" :src="ghostNextSrc" />
        </div>

        <!-- Zoom chip -->
        <div class="cm-viewer-zoom-chip" @mousedown.stop>
          <span class="cm-viewer-zoom-value" @click.stop="zoomMenuOpen = !zoomMenuOpen">{{ zoomPct }}%</span>
          <button
            class="cm-viewer-zoom-reset"
            title="Reset zoom (0)"
            :style="{ display: isDefaultZoom ? 'none' : '' }"
            @click.stop="resetZoom"
          ><span class="pi pi-replay"></span></button>
          <div class="cm-viewer-zoom-menu" :class="{ open: zoomMenuOpen }">
            <button
              v-for="pct in zoomPresets"
              :key="pct"
              class="cm-viewer-zoom-menu-item"
              :class="{ active: zoomPct === pct }"
              @click.stop="setZoomPreset(pct)"
            >{{ pct }}%</button>
          </div>
        </div>

        <!-- Grid View -->
        <GridView ref="gridViewRef" :files="files" :current-index="currentIndex" />

        <!-- Side panel -->
        <div class="cm-viewer-panel" :class="{ open: panelOpen }">
          <div class="cm-viewer-section">
            <button class="cm-viewer-section-header" :class="{ expanded: fileSectionOpen }" @click="fileSectionOpen = !fileSectionOpen">
              <span :class="['pi', fileSectionOpen ? 'pi-chevron-down' : 'pi-chevron-right', 'cm-viewer-section-chevron']"></span>
              <span>File Info</span>
            </button>
            <div class="cm-viewer-section-body" :class="{ expanded: fileSectionOpen }">
              <template v-if="fileInfoEntries.length > 0">
                <div v-for="[label, value] in fileInfoEntries" :key="label" class="cm-viewer-row">
                  <span class="cm-viewer-row-label">{{ label }}</span>
                  <span
                    class="cm-viewer-row-value"
                    :class="{
                      'cm-viewer-truncated': String(value).length > VALUE_TRUNCATE_LEN,
                      'cm-viewer-expanded': expandedValues[label]
                    }"
                    :title="String(value)"
                    @click="toggleExpand(label, value)"
                  >{{ displayValue(label, value) }}</span>
                  <button class="cm-viewer-copy-btn" title="Copy value" @click.stop="copyToClipboard(String(value))">
                    <span class="pi pi-clone"></span>
                  </button>
                </div>
              </template>
              <div v-else class="cm-viewer-empty">No file info available</div>
            </div>
          </div>
          <div class="cm-viewer-section">
            <button class="cm-viewer-section-header expanded" :class="{ expanded: workflowSectionOpen }" @click="workflowSectionOpen = !workflowSectionOpen">
              <span :class="['pi', workflowSectionOpen ? 'pi-chevron-down' : 'pi-chevron-right', 'cm-viewer-section-chevron']"></span>
              <span>Workflow</span>
            </button>
            <div class="cm-viewer-section-body" :class="{ expanded: workflowSectionOpen }">
              <template v-if="currentFile?.has_workflow && currentFile?.workflow_nodes?.length > 0">
                <div v-for="node in currentFile.workflow_nodes" :key="node.id" class="cm-viewer-node">
                  <div class="cm-viewer-node-title">
                    <span>{{ node.class_type || 'Node' }} #{{ node.id }}</span>
                    <button class="cm-viewer-copy-btn cm-viewer-copy-node" title="Add node to canvas" @click.stop="addNodeToCanvas(node)">
                      <span class="pi pi-plus-circle"></span>
                    </button>
                  </div>
                  <div v-for="[k, v] in Object.entries(node.inputs)" :key="k" class="cm-viewer-row">
                    <span class="cm-viewer-row-label">{{ k }}</span>
                    <span
                      class="cm-viewer-row-value"
                      :class="{
                        'cm-viewer-truncated': String(v).length > VALUE_TRUNCATE_LEN,
                        'cm-viewer-expanded': expandedValues[`${node.id}_${k}`]
                      }"
                      :title="String(v)"
                      @click="toggleExpand(`${node.id}_${k}`, v)"
                    >{{ displayValue(`${node.id}_${k}`, v) }}</span>
                    <button class="cm-viewer-copy-btn" title="Copy value" @click.stop="copyToClipboard(String(v))">
                      <span class="pi pi-clone"></span>
                    </button>
                  </div>
                </div>
              </template>
              <div v-else class="cm-viewer-empty">No workflow data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, reactive, onMounted, onUnmounted, inject, nextTick } from 'vue'
import GridView from './GridView.vue'

const comfyApp = inject('comfyApp')

const VALUE_TRUNCATE_LEN = 32
const zoomPresets = [25, 50, 75, 100, 150, 200, 300, 500]

// State
const isOpen = ref(false)
const files = ref([])
const currentIndex = ref(0)
const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const defaultScale = ref(1)
const panelOpen = ref(false)
const isFullscreen = ref(false)
const zoomMenuOpen = ref(false)
const viewerMode = ref('carousel') // 'carousel' | 'grid'
const dimensions = ref('')
const fileSectionOpen = ref(false)
const workflowSectionOpen = ref(true)
const expandedValues = reactive({})

// Carousel state
const carouselActive = ref(false)
let carouselDragging = ref(false)
let carouselStartX = 0
let carouselDelta = 0
let isAnimating = false
let isDragging = false
let dragStartX = 0
let dragStartY = 0
let lastTranslateX = 0
let lastTranslateY = 0
let suppressClick = false

// Grid fetch callback
let gridFetchCallback = null

// Refs
const overlayRef = ref(null)
const imgContainerRef = ref(null)
const imgRef = ref(null)
const ghostPrevRef = ref(null)
const ghostNextRef = ref(null)
const gridViewRef = ref(null)

const currentFile = computed(() => files.value[currentIndex.value] || null)
const zoomPct = computed(() => Math.round(scale.value * 100))
const isDefaultZoom = computed(() =>
  scale.value === defaultScale.value && translateX.value === 0 && translateY.value === 0
)

const ghostPrevSrc = computed(() => {
  if (!carouselActive.value || files.value.length <= 1) return ''
  const idx = (currentIndex.value - 1 + files.value.length) % files.value.length
  return files.value[idx]?.url || ''
})

const ghostNextSrc = computed(() => {
  if (!carouselActive.value || files.value.length <= 1) return ''
  const idx = (currentIndex.value + 1) % files.value.length
  return files.value[idx]?.url || ''
})

const fileInfoEntries = computed(() => {
  const file = currentFile.value
  if (!file) return []
  const fm = file.file_metadata || {}
  const entries = []
  const add = (label, value) => { if (value) entries.push([label, value]) }
  add('Filename', fm.filename || file.filename)
  add('Type', fm.file_type || file.file_type)
  add('Size', fm.file_size || file.file_size_formatted)
  add('Created', fm.created_date || (file.created_at
    ? new Date(file.created_at * 1000).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
    : ''))
  add('Path', fm.full_path || file.full_path)
  return entries
})

function displayValue(key, value) {
  const s = String(value)
  if (expandedValues[key]) return s
  return s.length > VALUE_TRUNCATE_LEN ? s.substring(0, VALUE_TRUNCATE_LEN - 1) + '\u2026' : s
}

function toggleExpand(key, value) {
  if (String(value).length <= VALUE_TRUNCATE_LEN) return
  expandedValues[key] = !expandedValues[key]
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
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

function addNodeToCanvas(node) {
  const clipData = JSON.stringify({
    nodes: [{ type: node.class_type, pos: [0, 0] }],
    links: []
  })
  const prev = localStorage.getItem('litegrapheditor_clipboard')
  localStorage.setItem('litegrapheditor_clipboard', clipData)
  comfyApp.canvas.pasteFromClipboard()
  if (prev !== null) localStorage.setItem('litegrapheditor_clipboard', prev)
  else localStorage.removeItem('litegrapheditor_clipboard')

  // Set widget values on the newly pasted node
  const selected = comfyApp.canvas.selected_nodes
  if (selected) {
    for (const id in selected) {
      const graphNode = selected[id]
      if (graphNode.widgets) {
        for (const widget of graphNode.widgets) {
          if (widget.name in node.inputs) {
            widget.value = node.inputs[widget.name]
            widget.callback?.(widget.value)
          }
        }
      }
    }
  }
}

// ── Zoom / Transform ──

function applyTransform() {
  if (!imgRef.value) return
  imgRef.value.style.transform = `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value})`
}

function applyDefaultZoom() {
  const img = imgRef.value
  if (!img?.naturalWidth || !img?.naturalHeight) return
  const container = imgContainerRef.value
  if (!container) return

  const natW = img.naturalWidth
  const natH = img.naturalHeight
  const rect = container.getBoundingClientRect()
  const fittedScale = Math.min(rect.width / natW, rect.height / natH, 1)
  const displayW = natW * fittedScale
  const displayH = natH * fittedScale
  const TARGET = 512
  const longest = Math.max(displayW, displayH)
  if (longest > TARGET) {
    scale.value = TARGET / longest
  }
  defaultScale.value = scale.value
}

function zoom(delta, originX, originY) {
  const oldScale = scale.value
  scale.value = Math.max(0.1, Math.min(10, scale.value + delta))

  if (originX !== undefined && originY !== undefined) {
    const rect = imgContainerRef.value.getBoundingClientRect()
    const cx = originX - rect.left - rect.width / 2
    const cy = originY - rect.top - rect.height / 2
    const ratio = 1 - scale.value / oldScale
    translateX.value += cx * ratio
    translateY.value += cy * ratio
  }

  applyTransform()
  if (imgContainerRef.value) {
    imgContainerRef.value.style.cursor = scale.value > defaultScale.value ? 'grab' : ''
  }
  updateCarousel()
}

function resetZoom() {
  scale.value = 1
  translateX.value = 0
  translateY.value = 0
  if (!isFullscreen.value && imgRef.value?.naturalWidth) {
    applyDefaultZoom()
    const img = imgRef.value
    img.style.transition = 'none'
    applyTransform()
    img.offsetHeight // force reflow
    img.style.transition = ''
  } else {
    applyTransform()
  }
  if (imgContainerRef.value) imgContainerRef.value.style.cursor = ''
  updateCarousel()
}

function setZoomPreset(pct) {
  scale.value = pct / 100
  translateX.value = 0
  translateY.value = 0
  applyTransform()
  if (imgContainerRef.value) {
    imgContainerRef.value.style.cursor = scale.value > defaultScale.value ? 'grab' : ''
  }
  updateCarousel()
  zoomMenuOpen.value = false
}

// ── Carousel ──

function updateCarousel() {
  const shouldActivate = scale.value <= defaultScale.value && files.value.length > 1 && !isFullscreen.value && viewerMode.value !== 'grid'
  carouselActive.value = shouldActivate
}

// ── Navigation ──

function navigate(dir) {
  if (files.value.length <= 1 || isAnimating) return

  if (carouselActive.value) {
    isAnimating = true
    const outClass = dir > 0 ? 'cm-slide-out-left' : 'cm-slide-out-right'
    const inClass = dir > 0 ? 'cm-slide-in-from-right' : 'cm-slide-in-from-left'
    const container = imgContainerRef.value

    container.classList.add(outClass)
    const onOutEnd = () => {
      container.removeEventListener('animationend', onOutEnd)
      container.classList.remove(outClass)
      currentIndex.value = (currentIndex.value + dir + files.value.length) % files.value.length
      resetZoom()
      container.classList.add(inClass)
      const onInEnd = () => {
        container.removeEventListener('animationend', onInEnd)
        container.classList.remove(inClass)
        isAnimating = false
      }
      container.addEventListener('animationend', onInEnd, { once: true })
    }
    container.addEventListener('animationend', onOutEnd, { once: true })
  } else {
    currentIndex.value = (currentIndex.value + dir + files.value.length) % files.value.length
    resetZoom()
  }
}

// ── Panel / Fullscreen ──

function togglePanel() {
  panelOpen.value = !panelOpen.value
}

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
  if (isFullscreen.value) {
    defaultScale.value = 1
    scale.value = 1
    translateX.value = 0
    translateY.value = 0
    applyTransform()
    if (imgContainerRef.value) imgContainerRef.value.style.cursor = ''
    if (panelOpen.value) panelOpen.value = false
  } else {
    resetZoom()
  }
  updateCarousel()
}

function toggleGridView() {
  if (viewerMode.value === 'grid') {
    viewerMode.value = 'carousel'
    updateCarousel()
  } else {
    viewerMode.value = 'grid'
    updateCarousel()
    nextTick(() => gridViewRef.value?.render())
  }
}

// ── Event Handlers ──

function onImageLoad() {
  const img = imgRef.value
  if (!img) return
  dimensions.value = `${img.naturalWidth} \u00D7 ${img.naturalHeight}`
  if (!isFullscreen.value) {
    applyDefaultZoom()
    img.style.transition = 'none'
    applyTransform()
    img.offsetHeight
    img.style.transition = ''
  } else {
    applyTransform()
  }
  updateCarousel()
}

function onWheel(e) {
  const delta = e.deltaY > 0 ? -0.15 : 0.15
  zoom(delta, e.clientX, e.clientY)
}

function onMouseDown(e) {
  if (carouselActive.value && !isAnimating) {
    e.preventDefault()
    carouselDragging.value = true
    carouselStartX = e.clientX
    carouselDelta = 0
    if (imgContainerRef.value) imgContainerRef.value.style.cursor = 'grabbing'
  } else if (scale.value > defaultScale.value) {
    e.preventDefault()
    isDragging = true
    dragStartX = e.clientX
    dragStartY = e.clientY
    lastTranslateX = translateX.value
    lastTranslateY = translateY.value
    if (imgContainerRef.value) imgContainerRef.value.style.cursor = 'grabbing'
  }
}

function onMouseMove(e) {
  if (carouselDragging.value) {
    carouselDelta = e.clientX - carouselStartX
    if (imgRef.value) imgRef.value.style.transform = `translateX(${carouselDelta}px) scale(${scale.value})`
    if (ghostPrevRef.value) ghostPrevRef.value.style.transform = `translateX(calc(-50% + ${carouselDelta}px))`
    if (ghostNextRef.value) ghostNextRef.value.style.transform = `translateX(calc(50% + ${carouselDelta}px))`
    return
  }
  if (!isDragging) return
  translateX.value = lastTranslateX + (e.clientX - dragStartX)
  translateY.value = lastTranslateY + (e.clientY - dragStartY)
  applyTransform()
}

function onMouseUp() {
  if (carouselDragging.value) {
    carouselDragging.value = false
    suppressClick = true
    if (ghostPrevRef.value) ghostPrevRef.value.style.transform = ''
    if (ghostNextRef.value) ghostNextRef.value.style.transform = ''

    if (Math.abs(carouselDelta) > 50) {
      const dir = carouselDelta < 0 ? 1 : -1
      currentIndex.value = (currentIndex.value + dir + files.value.length) % files.value.length
      resetZoom()

      const inClass = dir > 0 ? 'cm-slide-in-from-right' : 'cm-slide-in-from-left'
      isAnimating = true
      const container = imgContainerRef.value
      container.classList.add(inClass)
      container.addEventListener('animationend', () => {
        container.classList.remove(inClass)
        isAnimating = false
      }, { once: true })
    } else {
      // Snap back
      if (imgRef.value) imgRef.value.style.transform = `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value})`
    }
    if (imgContainerRef.value) imgContainerRef.value.style.cursor = ''
    carouselDelta = 0
    return
  }
  if (!isDragging) return
  isDragging = false
  if (imgContainerRef.value) {
    imgContainerRef.value.style.cursor = scale.value > defaultScale.value ? 'grab' : ''
  }
}

function onBodyClick(e) {
  if (suppressClick) { suppressClick = false; return }
  if (viewerMode.value === 'grid') return
  const clickedInteractive = e.target.closest('.cm-viewer-img, .cm-viewer-panel, .cm-viewer-nav, .cm-viewer-topbar, .cm-viewer-zoom-chip, .cm-viewer-carousel-ghost')
  if (!clickedInteractive) close()
}

function onKeyDown(e) {
  if (!isOpen.value) return
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

  switch (e.key) {
    case 'Escape': close(); break
    case 'ArrowLeft': e.preventDefault(); navigate(-1); break
    case 'ArrowRight': e.preventDefault(); navigate(1); break
    case '+': case '=': e.preventDefault(); zoom(0.25); break
    case '-': e.preventDefault(); zoom(-0.25); break
    case '0': e.preventDefault(); resetZoom(); break
    case 'i': case 'I': e.preventDefault(); togglePanel(); break
    case 'f': case 'F': e.preventDefault(); toggleFullscreen(); break
    case 'g': case 'G': e.preventDefault(); toggleGridView(); break
  }
}

// ── Public API ──

function open(fileList, index, fetchCallback) {
  files.value = fileList
  currentIndex.value = Math.max(0, Math.min(index, fileList.length - 1))
  gridFetchCallback = fetchCallback || null
  resetZoom()
  isOpen.value = true
  // Reset expanded values
  Object.keys(expandedValues).forEach(k => delete expandedValues[k])
}

function openGrid(fileList, fetchCallback) {
  files.value = fileList
  currentIndex.value = 0
  gridFetchCallback = fetchCallback || null
  resetZoom()
  isOpen.value = true
  viewerMode.value = 'grid'
  updateCarousel()
  nextTick(() => gridViewRef.value?.render())
}

function close() {
  isOpen.value = false
  isFullscreen.value = false
  carouselActive.value = false
  isAnimating = false
  carouselDragging.value = false
  viewerMode.value = 'carousel'
  zoomMenuOpen.value = false
  if (imgRef.value) imgRef.value.src = ''
  if (ghostPrevRef.value) ghostPrevRef.value.style.transform = ''
  if (ghostNextRef.value) ghostNextRef.value.style.transform = ''
  gridViewRef.value?.reset()
}

// Called by GridView when a thumbnail is clicked
function selectFromGrid(index) {
  currentIndex.value = index
  resetZoom()
  viewerMode.value = 'carousel'
  updateCarousel()
}

// Called by GridView for search/filter updates
async function gridUpdate(searchQuery) {
  if (!gridFetchCallback) return null
  const newFiles = await gridFetchCallback(searchQuery)
  if (newFiles) {
    files.value = newFiles
    currentIndex.value = Math.max(0, Math.min(currentIndex.value, newFiles.length - 1))
  }
  return newFiles
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('keydown', onKeyDown)
})

defineExpose({ open, openGrid, close, selectFromGrid, gridUpdate })
</script>
