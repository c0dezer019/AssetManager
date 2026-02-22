<template>
  <div
    class="cm-card"
    :class="{ selected: isSelected }"
    @click="loadWorkflow"
    @dblclick.prevent="$emit('open-viewer')"
    @contextmenu.prevent="$emit('context-menu', $event)"
  >
    <button
      class="cm-fav-btn"
      :class="{ active: file.is_favorite }"
      :title="file.is_favorite ? 'Remove from favorites' : 'Add to favorites'"
      @click.stop="$emit('toggle-favorite')"
    >
      <span :class="['pi', file.is_favorite ? 'pi-bookmark-fill' : 'pi-bookmark']"></span>
    </button>
    <div v-if="file.has_workflow" class="cm-workflow-badge" title="Has embedded workflow">
      <span class="pi pi-sitemap"></span>
    </div>
    <div v-if="createdDate" class="cm-date-badge">{{ createdDate }}</div>
    <img :src="file.url" loading="lazy" />
    <div class="cm-card-overlay">
      <span class="cm-overlay-name" :title="file.filename">{{ truncName }}</span>
      <div class="cm-overlay-meta">
        <span class="cm-overlay-type">{{ file.file_type }}</span>
        <span class="cm-overlay-size">{{ file.file_size_formatted }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'

const props = defineProps({
  file: { type: Object, required: true },
})

defineEmits(['open-viewer', 'toggle-favorite', 'context-menu'])

const { state } = useAssetState()
const comfyApp = inject('comfyApp')

const truncName = computed(() => {
  const name = props.file.filename
  return name.length > 20 ? name.substring(0, 17) + '...' : name
})

const createdDate = computed(() => {
  if (!props.file.created_at) return ''
  return new Date(props.file.created_at * 1000).toLocaleDateString(undefined, {
    month: 'short', day: 'numeric', year: 'numeric'
  })
})

const isSelected = computed(() => state.selectedFile === props.file)

async function loadWorkflow() {
  const blob = await (await fetch(props.file.url)).blob()
  await comfyApp.handleFile(blob)
}
</script>
