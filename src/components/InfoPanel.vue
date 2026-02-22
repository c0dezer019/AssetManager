<template>
  <section class="cm-info-panel" :class="{ visible: state.infoPanelVisible }">
    <div class="cm-info-panel-header">
      <span class="cm-info-panel-title" :title="state.selectedFile?.filename">
        {{ state.selectedFile?.filename }}
      </span>
      <button class="cm-info-close-btn" @click="close">
        <span class="pi pi-times"></span>
      </button>
    </div>
    <img
      v-if="state.selectedFile"
      class="cm-info-preview"
      :src="state.selectedFile?.url"
      alt=""
    />
    <div class="cm-info-file-meta">
      <span>{{ state.selectedFile?.file_type }}</span>
      <span>{{ state.selectedFile?.file_size_formatted }}</span>
    </div>
    <div class="cm-info-field">
      <label class="cm-info-label">Title</label>
      <input v-model="title" class="cm-info-input" type="text" placeholder="Image title..." />
    </div>
    <div class="cm-info-field">
      <label class="cm-info-label">Description</label>
      <textarea v-model="description" class="cm-info-input" placeholder="Image description..." rows="2"></textarea>
    </div>
    <div class="cm-info-field">
      <label class="cm-info-label">Tags</label>
      <input v-model="tags" class="cm-info-input" type="text" placeholder="Comma-separated tags..." />
    </div>
    <div class="cm-info-field">
      <label class="cm-info-label">Rating</label>
      <div class="cm-info-rating">
        <button
          v-for="n in 5"
          :key="n"
          class="cm-info-star"
          :class="{ active: n <= state.currentRating }"
          @click="setRating(n)"
        >&#x2605;</button>
      </div>
    </div>
    <div class="cm-info-actions">
      <button class="cm-info-save-btn" :disabled="saving" @click="save">
        {{ saving ? 'Saving...' : 'Save Metadata' }}
      </button>
    </div>
    <div class="cm-info-saved-msg" :class="{ show: savedVisible }">Saved!</div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useAssetState } from '../composables/useAssetState.js'
import { useApi } from '../composables/useApi.js'

const { state } = useAssetState()
const api = useApi()

const title = ref('')
const description = ref('')
const tags = ref('')
const saving = ref(false)
const savedVisible = ref(false)

// When selectedFile changes, populate the form
watch(() => state.selectedFile, (file) => {
  if (file) {
    title.value = file.asset_title || ''
    description.value = file.asset_description || ''
    tags.value = file.asset_tags || ''
    state.currentRating = parseInt(file.asset_rating) || 0
    savedVisible.value = false
  }
})

function setRating(n) {
  state.currentRating = n === state.currentRating ? 0 : n
}

function close() {
  state.selectedFile = null
  state.infoPanelVisible = false
}

async function save() {
  if (!state.selectedFile) return
  saving.value = true
  try {
    const res = await api.postMetadata({
      path: state.selectedFile.full_path,
      title: title.value,
      description: description.value,
      tags: tags.value,
      rating: state.currentRating > 0 ? String(state.currentRating) : '',
    })
    if (res.ok) {
      savedVisible.value = true
      setTimeout(() => { savedVisible.value = false }, 2000)
      // Update cached file data
      state.selectedFile.asset_title = title.value
      state.selectedFile.asset_description = description.value
      state.selectedFile.asset_tags = tags.value
      state.selectedFile.asset_rating = state.currentRating > 0 ? String(state.currentRating) : ''
    } else {
      const err = await res.json()
      alert(err.error || 'Failed to save metadata')
    }
  } finally {
    saving.value = false
  }
}
</script>
