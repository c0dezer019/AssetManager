/**
 * Main sidebar HTML template string.
 */

export const sidebarTemplate = `
<div class="cm-sidebar-content">
    <header class="cm-top-nav">
        <div class="cm-brand">
            <span class="pi pi-folder cm-brand-icon"></span>
            <span class="cm-brand-title">Assets Manager</span>
            <span class="cm-version-badge" id="cm-version-badge">v...</span>
        </div>
        <nav class="cm-nav-tabs">
            <button class="cm-nav-btn active" data-tab="all">All</button>
            <button class="cm-nav-btn" data-tab="input">Inputs</button>
            <button class="cm-nav-btn" data-tab="output">Outputs</button>
            <button class="cm-nav-btn" data-tab="custom">Custom</button>
            <button id="cm-settings-toggle" class="cm-icon-only-btn"><span class="pi pi-cog"></span></button>
        </nav>
    </header>

    <div class="cm-search-container">
        <div class="cm-search-wrapper">
            <span class="pi pi-search cm-search-icon"></span>
            <input id="cm-search" type="text" placeholder="Search: name, seed:, model:, prompt:&quot;...&quot;" title="Search tips: type freely to search all fields, or use prefixes like seed:12345 model:sdxl prompt:&quot;a brown kitty&quot; lora:detail node:KSampler steps:20 cfg:7 sampler:euler filename:img type:png size:2.3 path:/output date:&quot;Jan 15&quot;. Wrap values with spaces/commas in quotes. Multiple terms are AND-matched." class="cm-search-input" />
        </div>
        <div class="cm-action-buttons">
            <button id="cm-filter" class="cm-tool-btn" title="Filter options"><span class="pi pi-filter"></span></button>
            <button id="cm-sort" class="cm-tool-btn" title="Sort by date"><span class="pi pi-sort-alt"></span></button>
            <button id="cm-workflow-filter" class="cm-tool-btn" title="Show only assets with workflows"><span class="pi pi-sitemap"></span></button>
            <button id="cm-fav-toggle" class="cm-tool-btn" title="Show favorites only"><span class="pi pi-bookmark"></span></button>
            <button id="cm-nsfw-toggle" class="cm-tool-btn active" title="NSFW hidden"><span class="pi pi-eye-slash"></span></button>
        </div>
    </div>

    <div class="cm-status-line">
        <span id="cm-asset-stats" class="cm-stats-text">assets: --/-- | All</span>
        <div id="cm-active-filters" class="cm-active-filters"></div>
    </div>

    <section id="cm-advanced-panel" class="cm-advanced-panel">
      <div class="cm-settings-group">
        <label class="cm-settings-label">Output Directory</label>
        <div class="cm-settings-row">
          <input id="cm-output-path" type="text" placeholder="Default: ComfyUI output folder" class="comfy-input" />
          <button id="cm-output-browse-btn" class="comfy-btn comfy-btn-secondary">\u{1F4C2}</button>
          <button id="cm-output-save-btn" class="comfy-btn comfy-btn-primary">Save</button>
        </div>
      </div>
      <hr class="cm-settings-divider" />
      <div class="cm-settings-group">
        <label class="cm-settings-label">Custom Folders</label>
        <div id="cm-folder-list" class="cm-folder-list"></div>
        <div class="cm-add-folder-row">
          <input id="cm-new-path" type="text" placeholder="Add custom path..." class="comfy-input" />
          <button id="cm-browse-btn" class="comfy-btn comfy-btn-secondary">\u{1F4C2}</button>
          <button id="cm-add-btn" class="comfy-btn comfy-btn-primary">+</button>
        </div>
      </div>
    </section>

    <section id="cm-info-panel" class="cm-info-panel">
      <div class="cm-info-panel-header">
        <span class="cm-info-panel-title" id="cm-info-filename"></span>
        <button class="cm-info-close-btn" id="cm-info-close"><span class="pi pi-times"></span></button>
      </div>
      <img id="cm-info-preview" class="cm-info-preview" src="" alt="" />
      <div class="cm-info-file-meta" id="cm-info-file-meta"></div>
      <div class="cm-info-field">
        <label class="cm-info-label">Title</label>
        <input id="cm-info-title" class="cm-info-input" type="text" placeholder="Image title..." />
      </div>
      <div class="cm-info-field">
        <label class="cm-info-label">Description</label>
        <textarea id="cm-info-description" class="cm-info-input" placeholder="Image description..." rows="2"></textarea>
      </div>
      <div class="cm-info-field">
        <label class="cm-info-label">Tags</label>
        <input id="cm-info-tags" class="cm-info-input" type="text" placeholder="Comma-separated tags..." />
      </div>
      <div class="cm-info-field">
        <label class="cm-info-label">Rating</label>
        <div class="cm-info-rating" id="cm-info-rating">
          <button class="cm-info-star" data-val="1">\u2605</button>
          <button class="cm-info-star" data-val="2">\u2605</button>
          <button class="cm-info-star" data-val="3">\u2605</button>
          <button class="cm-info-star" data-val="4">\u2605</button>
          <button class="cm-info-star" data-val="5">\u2605</button>
        </div>
      </div>
      <div class="cm-info-actions">
        <button id="cm-info-save" class="cm-info-save-btn">Save Metadata</button>
      </div>
      <div id="cm-info-saved-msg" class="cm-info-saved-msg">Saved!</div>
    </section>

    <section id="cm-container" class="cm-asset-grid"></section>
</div>`;
