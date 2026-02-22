(function(){const s=document.createElement("style");s.textContent=`.cm-sidebar-content{display:flex;flex-direction:column;padding:16px;gap:12px;background-color:#0f0f0f;height:100%}.cm-top-nav{display:flex;flex-direction:column;gap:12px}.cm-brand{display:flex;align-items:center;gap:8px}.cm-brand-title{font-weight:700;font-size:16px;color:#fff}.cm-version-badge{background:#222;color:#888;font-size:10px;padding:2px 6px;border-radius:4px}.cm-nav-tabs{display:flex;gap:4px;align-items:center}.cm-nav-btn{background:transparent;border:none;color:#888;padding:6px 12px;cursor:pointer;border-radius:12px;font-size:13px;transition:all .2s}.cm-nav-btn.active{background:#2a2a2a;color:#fff}.cm-search-container{display:flex;gap:8px;align-items:center}.cm-search-wrapper{position:relative;flex:1}.cm-search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#555;font-size:12px}.cm-search-input{width:100%;background:#181818;border:1px solid #2a2a2a;border-radius:8px;padding:8px 12px 8px 32px;color:#fff;font-size:13px}.cm-action-buttons{display:flex;gap:4px}.cm-tool-btn{background:#1d1d1d;border:1px solid #2a2a2a;border-radius:8px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;color:#888;cursor:pointer}.cm-status-line{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:4px}.cm-stats-text{font-size:12px;color:#666}.cm-grid-view-btn{width:100%;display:flex;align-items:center;justify-content:center;gap:6px;padding:6px 0;background:#1d1d1d;border:1px solid #2a2a2a;border-radius:8px;color:#888;font-size:12px;cursor:pointer;transition:all .15s}.cm-grid-view-btn:hover{color:#fff;background:#252525;border-color:#3a3a3a}.cm-grid-view-btn .pi{font-size:12px}.cm-asset-grid{flex-grow:1;display:grid;grid-template-columns:repeat(2,1fr);gap:8px;overflow-y:auto}.cm-card{aspect-ratio:1/1;border-radius:8px;background:#181818;border:1px solid #222;overflow:hidden;cursor:pointer;position:relative}.cm-card img{width:100%;height:100%;object-fit:cover}.cm-card-overlay{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,#000000d9);padding:16px 8px 6px;display:flex;flex-direction:column;gap:2px;pointer-events:none;opacity:0;transition:opacity .2s ease}.cm-card:hover .cm-card-overlay{opacity:1}.cm-overlay-name{font-size:11px;font-weight:600;color:#eee;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.cm-overlay-meta{display:flex;align-items:center;gap:6px;font-size:10px;color:#999}.cm-overlay-type{background:#ffffff1f;padding:1px 5px;border-radius:3px;font-weight:600;font-size:9px;letter-spacing:.3px;color:#bbb}.cm-overlay-size{color:#888}.cm-workflow-badge{position:absolute;top:6px;right:6px;background:#0084ffd9;color:#fff;width:22px;height:22px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;z-index:2;box-shadow:0 1px 4px #0006}.cm-date-badge{position:absolute;bottom:6px;right:6px;background:#000000b3;color:#ccc;font-size:9px;font-weight:600;padding:2px 6px;border-radius:4px;z-index:2;pointer-events:none;letter-spacing:.2px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition:opacity .2s ease}.cm-card:hover .cm-date-badge{opacity:0}.cm-fav-btn{position:absolute;top:6px;left:6px;z-index:3;background:#00000080;border:none;border-radius:6px;width:26px;height:26px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#888;font-size:13px;opacity:0;transition:opacity .2s,color .15s,background .15s;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.cm-card:hover .cm-fav-btn{opacity:1}.cm-fav-btn.active{opacity:1;color:#f5a623;background:#0009}.cm-fav-btn:hover{color:#f5a623;background:#000000b3}.cm-tool-btn.active{color:#0084ff;background:#0084ff1a;border-color:#0084ff4d}#cm-nsfw-toggle.active,.cm-nsfw-toggle.active{color:#ff6b6b;background:#ff6b6b1a;border-color:#ff6b6b4d}.cm-icon-only-btn{background:transparent;border:1px solid transparent;color:#888;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:8px;cursor:pointer;margin-left:auto;transition:all .2s}.cm-icon-only-btn:hover{color:#ccc;background:#1d1d1d}.cm-icon-only-btn.active{color:#0084ff;background:#0084ff1a;border-color:#0084ff4d}.cm-advanced-panel{display:none;flex-direction:column;gap:12px;background:#181818;border:1px solid #2a2a2a;border-radius:8px;padding:12px}.cm-advanced-panel.visible{display:flex}.cm-add-folder-row{display:flex;gap:4px;align-items:center}.cm-add-folder-row .comfy-input{flex:1;padding:6px 10px;font-size:13px;box-sizing:border-box}.cm-settings-group{display:flex;flex-direction:column;gap:8px}.cm-settings-label{font-size:12px;font-weight:600;color:#aaa;text-transform:uppercase;letter-spacing:.5px}.cm-settings-row{display:flex;gap:4px;align-items:center}.cm-settings-row .comfy-input{flex:1;padding:6px 10px;font-size:13px;box-sizing:border-box}.cm-settings-divider{border:none;border-top:1px solid #2a2a2a;margin:4px 0}.cm-index-stats{display:flex;flex-direction:column;gap:2px;background:#111;border:1px solid #2a2a2a;border-radius:6px;padding:8px 10px}.cm-index-stat-row{display:flex;justify-content:space-between;align-items:center;padding:3px 0}.cm-index-stat-label{font-size:11px;color:#777}.cm-index-stat-value{font-size:11px;color:#ccc;font-family:monospace;display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}.cm-index-ext-chip{background:#1d1d1d;padding:1px 5px;border-radius:3px;font-size:10px;color:#999}.cm-index-stats-loading{font-size:11px;color:#555;padding:8px 0}.cm-rebuild-btn{flex:1}.cm-rebuild-btn:disabled{opacity:.5;cursor:default}.cm-empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 16px;gap:12px;grid-column:1 / -1}.cm-empty-icon{font-size:36px;color:#444}.cm-empty-text{font-size:14px;font-weight:600;color:#888;margin:0}.cm-empty-hint{font-size:12px;color:#555;margin:0;text-align:center}.cm-empty-hint .pi{font-size:11px}.cm-selector-modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#0009;z-index:10000;align-items:center;justify-content:center}.cm-selector-content{background:#1a1a1a;border:1px solid #333;border-radius:12px;width:480px;max-width:90vw;max-height:70vh;display:flex;flex-direction:column;box-shadow:0 8px 32px #00000080}.cm-selector-header{font-size:15px;font-weight:600;color:#fff;padding:14px 16px 0}.cm-current-path{font-size:12px;color:#0084ff;padding:4px 16px 8px;word-break:break-all;font-family:monospace}.cm-selector-path{margin:0 12px 8px;background:#111;border:1px solid #2a2a2a;border-radius:6px;padding:8px 10px;color:#fff;font-size:13px;font-family:monospace}.cm-selector-list{flex:1;overflow-y:auto;padding:0 8px;min-height:200px;max-height:40vh}.cm-dir-item{padding:8px 12px;color:#ccc;font-size:13px;cursor:pointer;border-radius:6px;transition:background .15s}.cm-dir-item:hover{background:#2a2a2a;color:#fff}.cm-dir-item.special{color:#0084ff;font-weight:600}.cm-selector-footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid #2a2a2a}.cm-folder-list{display:flex;flex-direction:column;gap:4px}.cm-folder-item{display:flex;align-items:center;gap:8px;padding:6px 10px;background:#111;border:1px solid #2a2a2a;border-radius:6px;font-size:12px;color:#ccc;font-family:monospace;word-break:break-all}.cm-folder-item span{flex:1}.cm-folder-remove-btn{background:transparent;border:none;color:#666;cursor:pointer;padding:2px 6px;border-radius:4px;font-size:11px;flex-shrink:0;transition:all .15s}.cm-folder-remove-btn:hover{color:#f44;background:#ff44441a}.cm-sidebar-content .comfy-btn,.cm-selector-footer .comfy-btn{border:none;border-radius:6px;padding:6px 12px;font-size:13px;cursor:pointer;transition:background .15s}.cm-sidebar-content .comfy-btn-primary,.cm-selector-footer .comfy-btn-primary{background:#0084ff;color:#fff}.cm-sidebar-content .comfy-btn-primary:hover,.cm-selector-footer .comfy-btn-primary:hover{background:#0070dd}.cm-sidebar-content .comfy-btn-secondary,.cm-selector-footer .comfy-btn-secondary{background:#2a2a2a;color:#ccc}.cm-sidebar-content .comfy-btn-secondary:hover,.cm-selector-footer .comfy-btn-secondary:hover{background:#363636;color:#fff}.cm-context-menu{position:fixed;z-index:10001;background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:4px 0;min-width:180px;max-height:70vh;overflow-y:auto;box-shadow:0 4px 16px #00000080}.cm-context-menu-item{display:flex;align-items:center;gap:8px;padding:8px 14px;color:#ccc;font-size:13px;cursor:pointer;transition:background .15s;border:none;background:none;width:100%;text-align:left}.cm-context-menu-item:hover{background:#2a2a2a;color:#fff}.cm-context-menu-item .pi{font-size:13px;width:16px;text-align:center}.cm-context-menu-item.cm-danger{color:#f55}.cm-context-menu-item.cm-danger:hover{background:#ff44441a;color:#f44}.cm-context-menu-separator{height:1px;background:#2a2a2a;margin:4px 0}.cm-context-menu-label{font-size:10px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:.5px;padding:6px 14px 2px;pointer-events:none}.cm-context-menu-item.cm-active{color:#0084ff}.cm-check-icon{font-size:14px;width:16px;text-align:center;flex-shrink:0}.cm-active-filters{display:flex;flex-wrap:wrap;gap:4px}.cm-filter-chip{background:#0084ff1a;border:1px solid rgba(0,132,255,.3);color:#0084ff;padding:3px 8px;border-radius:12px;font-size:10px;display:flex;align-items:center;gap:4px;white-space:nowrap}.cm-chip-close{cursor:pointer;font-size:8px;opacity:.7;transition:opacity .15s}.cm-chip-close:hover{opacity:1}.cm-info-panel{display:none;flex-direction:column;gap:10px;background:#141414;border:1px solid #2a2a2a;border-radius:10px;padding:14px;position:relative;flex-shrink:0}.cm-info-panel.visible{display:flex}.cm-info-panel-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.cm-info-panel-title{font-size:13px;font-weight:600;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.cm-info-close-btn{background:transparent;border:none;color:#666;cursor:pointer;padding:4px;border-radius:4px;font-size:12px;flex-shrink:0;transition:all .15s}.cm-info-close-btn:hover{color:#ccc;background:#2a2a2a}.cm-info-preview{width:100%;max-height:160px;object-fit:contain;border-radius:6px;background:#0a0a0a;border:1px solid #222}.cm-info-field{display:flex;flex-direction:column;gap:4px}.cm-info-label{font-size:11px;font-weight:600;color:#777;text-transform:uppercase;letter-spacing:.4px}.cm-info-input{background:#1a1a1a;border:1px solid #2a2a2a;border-radius:6px;padding:7px 10px;color:#ddd;font-size:12px;font-family:inherit;resize:none;transition:border-color .15s}.cm-info-input:focus{outline:none;border-color:#0084ff}.cm-info-input::placeholder{color:#444}textarea.cm-info-input{min-height:48px}.cm-info-rating{display:flex;gap:4px}.cm-info-star{background:none;border:none;font-size:18px;cursor:pointer;padding:0 1px;color:#333;transition:color .15s;line-height:1}.cm-info-star.active,.cm-info-star:hover{color:#f5a623}.cm-info-actions{display:flex;gap:6px;padding-top:4px}.cm-info-save-btn{flex:1;background:#0084ff;border:none;border-radius:6px;color:#fff;padding:7px 12px;font-size:12px;font-weight:600;cursor:pointer;transition:background .15s}.cm-info-save-btn:hover{background:#0070dd}.cm-info-save-btn:disabled{background:#333;color:#666;cursor:default}.cm-info-file-meta{display:flex;gap:8px;flex-wrap:wrap;font-size:10px;color:#555}.cm-info-file-meta span{background:#1a1a1a;padding:2px 6px;border-radius:4px}.cm-info-saved-msg{font-size:11px;color:#4caf50;text-align:center;opacity:0;transition:opacity .3s}.cm-info-saved-msg.show{opacity:1}.cm-submenu{position:fixed;z-index:10002;background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:4px 0;min-width:200px;max-width:360px;max-height:50vh;overflow-y:auto;box-shadow:0 4px 16px #00000080}.cm-submenu-item{position:relative;display:flex;align-items:center;gap:8px}.cm-submenu-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cm-submenu-arrow{color:#555;font-size:10px;flex-shrink:0;margin-left:auto}.cm-submenu-item:hover .cm-submenu-arrow{color:#999}.cm-submenu-copy-row{display:flex;align-items:center;gap:8px;justify-content:space-between}.cm-submenu-key{color:#999;font-size:12px;flex-shrink:0;white-space:nowrap}.cm-submenu-value{color:#666;font-size:11px;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px;font-family:monospace}.cm-submenu-copy-row:hover .cm-submenu-value{color:#aaa}.cm-copy-toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%) translateY(8px);background:#222;color:#4caf50;font-size:12px;font-weight:600;padding:6px 16px;border-radius:6px;border:1px solid #333;box-shadow:0 4px 12px #0006;z-index:10010;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none}.cm-copy-toast.show{opacity:1;transform:translate(-50%) translateY(0)}.cm-card.selected{border-color:#0084ff;box-shadow:0 0 0 1px #0084ff}.cm-viewer-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#000000eb;z-index:10020}.cm-viewer-overlay.visible{display:block}.cm-viewer-topbar{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;gap:12px;padding:12px 16px;background:linear-gradient(to bottom,rgba(0,0,0,.8) 0%,rgba(0,0,0,.4) 70%,transparent 100%);z-index:10022;opacity:0;transition:opacity .25s ease;pointer-events:none}.cm-viewer-body:hover .cm-viewer-topbar{opacity:1;pointer-events:auto}.cm-viewer-topbar-name{font-size:14px;font-weight:600;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}.cm-viewer-topbar-size{font-size:12px;color:#ffffff80;flex-shrink:0;font-variant-numeric:tabular-nums;position:absolute;left:50%;transform:translate(-50%)}.cm-viewer-topbar-counter{font-size:13px;color:#666;font-variant-numeric:tabular-nums;flex-shrink:0}.cm-viewer-topbar-actions{display:flex;gap:4px;flex-shrink:0}.cm-viewer-grid-toggle,.cm-viewer-panel-toggle,.cm-viewer-fullscreen-toggle,.cm-viewer-close{background:#ffffff0f;border:none;color:#aaa;width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;transition:background .2s,color .2s}.cm-viewer-grid-toggle:hover,.cm-viewer-panel-toggle:hover,.cm-viewer-fullscreen-toggle:hover,.cm-viewer-close:hover{background:#ffffff1f;color:#fff}.cm-viewer-grid-toggle.active,.cm-viewer-panel-toggle.active,.cm-viewer-fullscreen-toggle.active{color:#0084ff;background:#0084ff1f}.cm-viewer-overlay.fullscreen .cm-viewer-topbar,.cm-viewer-overlay.fullscreen .cm-viewer-nav{opacity:0!important;pointer-events:none!important}.cm-viewer-overlay.fullscreen .cm-viewer-img-container{padding:0}.cm-viewer-body{display:flex;position:relative;width:100%;height:100%;overflow:hidden}.cm-viewer-nav{position:absolute;top:50%;transform:translateY(-50%);z-index:10022;background:#ffffff0f;border:none;color:#888;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;opacity:0;transition:opacity .2s,background .2s,color .2s}.cm-viewer-body:hover .cm-viewer-nav{opacity:1}.cm-viewer-nav:hover{background:#ffffff26;color:#fff}.cm-viewer-prev{left:16px}.cm-viewer-next{right:16px}.cm-viewer-zoom-chip{position:absolute;bottom:16px;left:50%;transform:translate(-50%);z-index:10022;display:flex;align-items:center;gap:6px;background:#000000b3;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:4px 12px;opacity:0;transition:opacity .25s ease;pointer-events:none}.cm-viewer-body:hover .cm-viewer-zoom-chip{opacity:1;pointer-events:auto}.cm-viewer-zoom-value{font-size:12px;color:#aaa;font-variant-numeric:tabular-nums;-webkit-user-select:none;user-select:none;cursor:pointer;transition:color .2s}.cm-viewer-zoom-value:hover{color:#fff}.cm-viewer-zoom-reset{background:none;border:none;color:#666;cursor:pointer;font-size:11px;padding:0;display:flex;align-items:center;transition:color .2s}.cm-viewer-zoom-reset:hover{color:#fff}.cm-viewer-zoom-menu{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translate(-50%);background:#141414f2;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:4px;display:none;flex-direction:column;min-width:80px;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 8px 24px #00000080}.cm-viewer-zoom-menu.open{display:flex}.cm-viewer-zoom-menu-item{background:none;border:none;color:#aaa;font-size:12px;font-variant-numeric:tabular-nums;padding:6px 14px;border-radius:6px;cursor:pointer;text-align:center;transition:background .15s,color .15s}.cm-viewer-zoom-menu-item:hover{background:#ffffff1a;color:#fff}.cm-viewer-zoom-menu-item.active{color:#0084ff}.cm-viewer-img-container{flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px 72px;box-sizing:border-box;min-width:0}.cm-viewer-img{max-width:100%;max-height:100%;object-fit:contain;-webkit-user-select:none;user-select:none;transition:transform .1s ease-out}.cm-viewer-panel{width:0;overflow:hidden;background:#111;border-left:1px solid #222;flex-shrink:0;transition:width .25s ease;display:flex;flex-direction:column;padding-top:58px}.cm-viewer-panel.open{width:340px;overflow-y:auto}.cm-viewer-section{border-bottom:1px solid #222}.cm-viewer-section-header{display:flex;align-items:center;gap:8px;width:100%;padding:12px 16px;background:none;border:none;color:#bbb;font-size:13px;font-weight:600;cursor:pointer;text-align:left;transition:background .15s,color .15s}.cm-viewer-section-header:hover{background:#ffffff0a;color:#eee}.cm-viewer-section-chevron{font-size:11px;color:#555;width:14px;text-align:center;flex-shrink:0;transition:color .15s}.cm-viewer-section-header:hover .cm-viewer-section-chevron{color:#999}.cm-viewer-section-body{display:none;padding:0 16px 14px;flex-direction:column;gap:6px}.cm-viewer-section-body.expanded{display:flex}.cm-viewer-row{display:flex;align-items:baseline;gap:8px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.03)}.cm-viewer-row:last-child{border-bottom:none}.cm-viewer-row-label{font-size:12px;font-weight:600;color:#777;white-space:nowrap;flex-shrink:0}.cm-viewer-row-value{font-size:12px;color:#ccc;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1;font-family:monospace}.cm-viewer-row-value.cm-viewer-truncated{cursor:pointer;text-decoration-style:dotted}.cm-viewer-row-value.cm-viewer-truncated:hover{color:#fff}.cm-viewer-row-value.cm-viewer-expanded{white-space:pre-wrap;word-break:break-all;text-align:left}.cm-viewer-copy-btn{background:none;border:none;color:#444;cursor:pointer;padding:2px 4px;border-radius:4px;font-size:11px;flex-shrink:0;transition:color .15s,background .15s;line-height:1}.cm-viewer-copy-btn:hover{color:#ccc;background:#ffffff14}.cm-viewer-node{background:#ffffff08;border:1px solid #1e1e1e;border-radius:6px;padding:8px 10px}.cm-viewer-node+.cm-viewer-node{margin-top:6px}.cm-viewer-node-title{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;font-weight:600;color:#aaa;margin-bottom:4px;padding-bottom:4px;border-bottom:1px solid #1e1e1e}.cm-viewer-copy-node{font-size:13px;color:#4a9;padding:3px 6px;border:1px solid rgba(68,170,153,.25);border-radius:5px;background:#44aa990f}.cm-viewer-copy-node:hover{color:#5cb;border-color:#44aa9980;background:#44aa991f}.cm-viewer-empty{font-size:12px;color:#555;padding:4px 0;font-style:italic}.cm-viewer-carousel-ghost{display:none;position:absolute;top:0;bottom:0;width:40%;align-items:center;justify-content:center;z-index:10021;pointer-events:none;opacity:.5}.cm-viewer-carousel-ghost img{max-width:80%;max-height:70%;object-fit:contain;-webkit-user-select:none;user-select:none}.cm-viewer-carousel-prev{left:0;transform:translate(-50%);-webkit-mask-image:linear-gradient(to right,transparent 10%,rgba(0,0,0,.6));mask-image:linear-gradient(to right,transparent 10%,rgba(0,0,0,.6))}.cm-viewer-carousel-next{right:0;transform:translate(50%);-webkit-mask-image:linear-gradient(to left,transparent 10%,rgba(0,0,0,.6));mask-image:linear-gradient(to left,transparent 10%,rgba(0,0,0,.6))}.cm-carousel-active .cm-viewer-carousel-ghost{display:flex}.cm-carousel-active .cm-viewer-prev{left:calc(20% - 60px)}.cm-carousel-active .cm-viewer-next{right:calc(20% - 60px)}.cm-viewer-overlay.fullscreen .cm-viewer-carousel-ghost{display:none!important}@keyframes cm-slide-out-left{0%{transform:translate(0);opacity:1}to{transform:translate(-100%);opacity:0}}@keyframes cm-slide-out-right{0%{transform:translate(0);opacity:1}to{transform:translate(100%);opacity:0}}@keyframes cm-slide-in-from-right{0%{transform:translate(60%);opacity:0}to{transform:translate(0);opacity:1}}@keyframes cm-slide-in-from-left{0%{transform:translate(-60%);opacity:0}to{transform:translate(0);opacity:1}}.cm-viewer-img-container.cm-slide-out-left{animation:cm-slide-out-left .25s ease forwards}.cm-viewer-img-container.cm-slide-out-right{animation:cm-slide-out-right .25s ease forwards}.cm-viewer-img-container.cm-slide-in-from-right{animation:cm-slide-in-from-right .25s ease forwards}.cm-viewer-img-container.cm-slide-in-from-left{animation:cm-slide-in-from-left .25s ease forwards}.cm-carousel-dragging .cm-viewer-img,.cm-carousel-dragging .cm-viewer-carousel-ghost,.cm-carousel-dragging .cm-viewer-img-container{transition:none!important}.cm-viewer-grid{display:none;position:absolute;top:0;left:0;right:0;bottom:0;z-index:10023;background:#000000f5;padding:64px 24px 24px;overflow-y:auto}.cm-viewer-grid-mode .cm-viewer-grid{display:grid;grid-template-columns:repeat(var(--grid-cols),1fr);grid-auto-rows:min-content;gap:10px;align-content:start}.cm-viewer-grid-mode .cm-viewer-grid.cm-grid-slider-active{grid-template-columns:repeat(auto-fill,minmax(var(--grid-thumb-size, 150px),1fr))}.cm-viewer-grid-toolbar{display:none;position:absolute;top:0;left:0;right:0;height:52px;z-index:10024;align-items:center;justify-content:space-between;padding:0 20px;background:#0f0f0f;border-bottom:1px solid #222}.cm-viewer-grid-mode .cm-viewer-grid-toolbar{display:flex}.cm-viewer-grid-close{background:#ffffff0f;border:none;color:#aaa;width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;transition:background .2s,color .2s}.cm-viewer-grid-close:hover{background:#ffffff1f;color:#fff}.cm-viewer-grid-toolbar-center{display:flex;align-items:center;gap:6px;flex:1;justify-content:center;padding:0 16px}.cm-viewer-grid-search-wrapper{position:relative;max-width:240px;flex:1}.cm-viewer-grid-search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:#555;font-size:11px;pointer-events:none}.cm-viewer-grid-search{width:100%;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:6px;padding:6px 10px 6px 28px;color:#ddd;font-size:12px;outline:none;transition:border-color .15s}.cm-viewer-grid-search:focus{border-color:#0084ff}.cm-viewer-grid-search::placeholder{color:#555}.cm-viewer-grid-btn{background:#ffffff0f;border:1px solid transparent;color:#888;width:32px;height:32px;border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;flex-shrink:0;transition:background .15s,color .15s,border-color .15s}.cm-viewer-grid-btn:hover{background:#ffffff1f;color:#fff}.cm-viewer-grid-btn.active{color:#0084ff;background:#0084ff1f;border-color:#0084ff4d}.cm-viewer-grid-nsfw.active{color:#ff6b6b;background:#ff6b6b1a;border-color:#ff6b6b4d}.cm-viewer-grid-toolbar-slider{display:flex;align-items:center;gap:10px}.cm-viewer-grid-slider-icon{font-size:13px;color:#555}.cm-viewer-grid-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:180px;height:4px;background:#333;border-radius:2px;outline:none;cursor:pointer}.cm-viewer-grid-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:#0084ff;cursor:pointer;border:none;transition:transform .1s}.cm-viewer-grid-slider::-webkit-slider-thumb:hover{transform:scale(1.2)}.cm-viewer-grid-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#0084ff;cursor:pointer;border:none}.cm-viewer-grid-mode .cm-viewer-img-container,.cm-viewer-grid-mode .cm-viewer-carousel-ghost,.cm-viewer-grid-mode .cm-viewer-nav,.cm-viewer-grid-mode .cm-viewer-zoom-chip{display:none!important}.cm-viewer-grid-item{aspect-ratio:1 / 1;border-radius:8px;overflow:hidden;cursor:pointer;position:relative;border:2px solid transparent;background:#181818;transition:border-color .15s,transform .15s}.cm-viewer-grid-item:hover{border-color:#fff3;transform:scale(1.03)}.cm-viewer-grid-item.active{border-color:#0084ff;box-shadow:0 0 0 1px #0084ff,0 0 12px #0084ff40}.cm-viewer-grid-item img{width:100%;height:100%;object-fit:cover;display:block}.cm-viewer-grid-label{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,#000000d9);color:#ccc;font-size:10px;padding:16px 6px 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0;transition:opacity .2s;pointer-events:none}.cm-viewer-grid-item:hover .cm-viewer-grid-label{opacity:1}.cm-viewer-grid-mode .cm-viewer-topbar{display:none}
`;document.head.appendChild(s)})();
import { app as ws } from "../../scripts/app.js";
import { api as $l } from "../../scripts/api.js";
/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function gn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const ve = {}, zt = [], ft = () => {
}, bi = () => !1, Ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), bn = (e) => e.startsWith("onUpdate:"), He = Object.assign, yn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Tl = Object.prototype.hasOwnProperty, de = (e, t) => Tl.call(e, t), Y = Array.isArray, Gt = (e) => vs(e) === "[object Map]", yi = (e) => vs(e) === "[object Set]", Ln = (e) => vs(e) === "[object Date]", te = (e) => typeof e == "function", Ce = (e) => typeof e == "string", dt = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", _i = (e) => (he(e) || te(e)) && te(e.then) && te(e.catch), wi = Object.prototype.toString, vs = (e) => wi.call(e), Fl = (e) => vs(e).slice(8, -1), xi = (e) => vs(e) === "[object Object]", _n = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ss = /* @__PURE__ */ gn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ds = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Ml = /-\w/g, At = Ds(
  (e) => e.replace(Ml, (t) => t.slice(1).toUpperCase())
), Al = /\B([A-Z])/g, Et = Ds(
  (e) => e.replace(Al, "-$1").toLowerCase()
), Ci = Ds((e) => e.charAt(0).toUpperCase() + e.slice(1)), zs = Ds(
  (e) => e ? `on${Ci(e)}` : ""
), Mt = (e, t) => !Object.is(e, t), $s = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Si = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, wn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Dn;
const Ns = () => Dn || (Dn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function tt(e) {
  if (Y(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = Ce(n) ? Pl(n) : tt(n);
      if (i)
        for (const l in i)
          t[l] = i[l];
    }
    return t;
  } else if (Ce(e) || he(e))
    return e;
}
const Rl = /;(?![^(]*\))/g, El = /:([^]+)/, Ol = /\/\*[^]*?\*\//g;
function Pl(e) {
  const t = {};
  return e.replace(Ol, "").split(Rl).forEach((s) => {
    if (s) {
      const n = s.split(El);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function q(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (Y(e))
    for (let s = 0; s < e.length; s++) {
      const n = q(e[s]);
      n && (t += n + " ");
    }
  else if (he(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Il = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ll = /* @__PURE__ */ gn(Il);
function ki(e) {
  return !!e || e === "";
}
function Dl(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = xn(e[n], t[n]);
  return s;
}
function xn(e, t) {
  if (e === t) return !0;
  let s = Ln(e), n = Ln(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = dt(e), n = dt(t), s || n)
    return e === t;
  if (s = Y(e), n = Y(t), s || n)
    return s && n ? Dl(e, t) : !1;
  if (s = he(e), n = he(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, l = Object.keys(t).length;
    if (i !== l)
      return !1;
    for (const o in e) {
      const r = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (r && !a || !r && a || !xn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const $i = (e) => !!(e && e.__v_isRef === !0), z = (e) => Ce(e) ? e : e == null ? "" : Y(e) || he(e) && (e.toString === wi || !te(e.toString)) ? $i(e) ? z(e.value) : JSON.stringify(e, Ti, 2) : String(e), Ti = (e, t) => $i(t) ? Ti(e, t.value) : Gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], l) => (s[Gs(n, l) + " =>"] = i, s),
    {}
  )
} : yi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Gs(s))
} : dt(t) ? Gs(t) : he(t) && !Y(t) && !xi(t) ? String(t) : t, Gs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    dt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ge;
class Nl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Ge, !t && Ge && (this.index = (Ge.scopes || (Ge.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = Ge;
      try {
        return Ge = this, t();
      } finally {
        Ge = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ge, Ge = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ge = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Vl() {
  return Ge;
}
let ge;
const qs = /* @__PURE__ */ new WeakSet();
class Fi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && Ge.active && Ge.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qs.has(this) && (qs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ai(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Nn(this), Ri(this);
    const t = ge, s = ot;
    ge = this, ot = !0;
    try {
      return this.fn();
    } finally {
      Ei(this), ge = t, ot = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        kn(t);
      this.deps = this.depsTail = void 0, Nn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    nn(this) && this.run();
  }
  get dirty() {
    return nn(this);
  }
}
let Mi = 0, ns, is;
function Ai(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = is, is = e;
    return;
  }
  e.next = ns, ns = e;
}
function Cn() {
  Mi++;
}
function Sn() {
  if (--Mi > 0)
    return;
  if (is) {
    let t = is;
    for (is = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; ns; ) {
    let t = ns;
    for (ns = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Ri(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ei(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), kn(n), jl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function nn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Oi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Oi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fs) || (e.globalVersion = fs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !nn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = ge, n = ot;
  ge = e, ot = !0;
  try {
    Ri(e);
    const i = e.fn(e._value);
    (t.version === 0 || Mt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ge = s, ot = n, Ei(e), e.flags &= -3;
  }
}
function kn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let l = s.computed.deps; l; l = l.nextDep)
      kn(l, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function jl(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let ot = !0;
const Pi = [];
function xt() {
  Pi.push(ot), ot = !1;
}
function Ct() {
  const e = Pi.pop();
  ot = e === void 0 ? !0 : e;
}
function Nn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = ge;
    ge = void 0;
    try {
      t();
    } finally {
      ge = s;
    }
  }
}
let fs = 0;
class Hl {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $n {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ge || !ot || ge === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ge)
      s = this.activeLink = new Hl(ge, this), ge.deps ? (s.prevDep = ge.depsTail, ge.depsTail.nextDep = s, ge.depsTail = s) : ge.deps = ge.depsTail = s, Ii(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ge.depsTail, s.nextDep = void 0, ge.depsTail.nextDep = s, ge.depsTail = s, ge.deps === s && (ge.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, fs++, this.notify(t);
  }
  notify(t) {
    Cn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Sn();
    }
  }
}
function Ii(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Ii(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const ln = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ Symbol(
  ""
), on = /* @__PURE__ */ Symbol(
  ""
), ds = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, s) {
  if (ot && ge) {
    let n = ln.get(e);
    n || ln.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new $n()), i.map = n, i.key = s), i.track();
  }
}
function bt(e, t, s, n, i, l) {
  const o = ln.get(e);
  if (!o) {
    fs++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (Cn(), t === "clear")
    o.forEach(r);
  else {
    const a = Y(e), p = a && _n(s);
    if (a && s === "length") {
      const d = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === ds || !dt(v) && v >= d) && r(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && r(o.get(s)), p && r(o.get(ds)), t) {
        case "add":
          a ? p && r(o.get("length")) : (r(o.get(Dt)), Gt(e) && r(o.get(on)));
          break;
        case "delete":
          a || (r(o.get(Dt)), Gt(e) && r(o.get(on)));
          break;
        case "set":
          Gt(e) && r(o.get(Dt));
          break;
      }
  }
  Sn();
}
function Ut(e) {
  const t = /* @__PURE__ */ fe(e);
  return t === e ? t : (Ve(t, "iterate", ds), /* @__PURE__ */ nt(e) ? t : t.map(rt));
}
function Vs(e) {
  return Ve(e = /* @__PURE__ */ fe(e), "iterate", ds), e;
}
function Tt(e, t) {
  return /* @__PURE__ */ St(e) ? Yt(/* @__PURE__ */ Nt(e) ? rt(t) : t) : rt(t);
}
const Bl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Js(this, Symbol.iterator, (e) => Tt(this, e));
  },
  concat(...e) {
    return Ut(this).concat(
      ...e.map((t) => Y(t) ? Ut(t) : t)
    );
  },
  entries() {
    return Js(this, "entries", (e) => (e[1] = Tt(this, e[1]), e));
  },
  every(e, t) {
    return mt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return mt(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Tt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return mt(
      this,
      "find",
      e,
      t,
      (s) => Tt(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return mt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return mt(
      this,
      "findLast",
      e,
      t,
      (s) => Tt(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return mt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return mt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ys(this, "includes", e);
  },
  indexOf(...e) {
    return Ys(this, "indexOf", e);
  },
  join(e) {
    return Ut(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ys(this, "lastIndexOf", e);
  },
  map(e, t) {
    return mt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Zt(this, "pop");
  },
  push(...e) {
    return Zt(this, "push", e);
  },
  reduce(e, ...t) {
    return Vn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Vn(this, "reduceRight", e, t);
  },
  shift() {
    return Zt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return mt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Zt(this, "splice", e);
  },
  toReversed() {
    return Ut(this).toReversed();
  },
  toSorted(e) {
    return Ut(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ut(this).toSpliced(...e);
  },
  unshift(...e) {
    return Zt(this, "unshift", e);
  },
  values() {
    return Js(this, "values", (e) => Tt(this, e));
  }
};
function Js(e, t, s) {
  const n = Vs(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ nt(e) && (i._next = i.next, i.next = () => {
    const l = i._next();
    return l.done || (l.value = s(l.value)), l;
  }), i;
}
const Ul = Array.prototype;
function mt(e, t, s, n, i, l) {
  const o = Vs(e), r = o !== e && !/* @__PURE__ */ nt(e), a = o[t];
  if (a !== Ul[t]) {
    const h = a.apply(e, l);
    return r ? rt(h) : h;
  }
  let p = s;
  o !== e && (r ? p = function(h, v) {
    return s.call(this, Tt(e, h), v, e);
  } : s.length > 2 && (p = function(h, v) {
    return s.call(this, h, v, e);
  }));
  const d = a.call(o, p, n);
  return r && i ? i(d) : d;
}
function Vn(e, t, s, n) {
  const i = Vs(e);
  let l = s;
  return i !== e && (/* @__PURE__ */ nt(e) ? s.length > 3 && (l = function(o, r, a) {
    return s.call(this, o, r, a, e);
  }) : l = function(o, r, a) {
    return s.call(this, o, Tt(e, r), a, e);
  }), i[t](l, ...n);
}
function Ys(e, t, s) {
  const n = /* @__PURE__ */ fe(e);
  Ve(n, "iterate", ds);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Mn(s[0]) ? (s[0] = /* @__PURE__ */ fe(s[0]), n[t](...s)) : i;
}
function Zt(e, t, s = []) {
  xt(), Cn();
  const n = (/* @__PURE__ */ fe(e))[t].apply(e, s);
  return Sn(), Ct(), n;
}
const Wl = /* @__PURE__ */ gn("__proto__,__v_isRef,__isVue"), Li = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(dt)
);
function Kl(e) {
  dt(e) || (e = String(e));
  const t = /* @__PURE__ */ fe(this);
  return Ve(t, "has", e), t.hasOwnProperty(e);
}
class Di {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, l = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return l;
    if (s === "__v_raw")
      return n === (i ? l ? to : Hi : l ? ji : Vi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = Y(t);
    if (!i) {
      let a;
      if (o && (a = Bl[s]))
        return a;
      if (s === "hasOwnProperty")
        return Kl;
    }
    const r = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ je(t) ? t : n
    );
    if ((dt(s) ? Li.has(s) : Wl(s)) || (i || Ve(t, "get", s), l))
      return r;
    if (/* @__PURE__ */ je(r)) {
      const a = o && _n(s) ? r : r.value;
      return i && he(a) ? /* @__PURE__ */ an(a) : a;
    }
    return he(r) ? i ? /* @__PURE__ */ an(r) : /* @__PURE__ */ gs(r) : r;
  }
}
class Ni extends Di {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let l = t[s];
    const o = Y(t) && _n(s);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ St(l);
      if (!/* @__PURE__ */ nt(n) && !/* @__PURE__ */ St(n) && (l = /* @__PURE__ */ fe(l), n = /* @__PURE__ */ fe(n)), !o && /* @__PURE__ */ je(l) && !/* @__PURE__ */ je(n))
        return p || (l.value = n), !0;
    }
    const r = o ? Number(s) < t.length : de(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ je(t) ? t : i
    );
    return t === /* @__PURE__ */ fe(i) && (r ? Mt(n, l) && bt(t, "set", s, n) : bt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = de(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && bt(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!dt(s) || !Li.has(s)) && Ve(t, "has", s), n;
  }
  ownKeys(t) {
    return Ve(
      t,
      "iterate",
      Y(t) ? "length" : Dt
    ), Reflect.ownKeys(t);
  }
}
class zl extends Di {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Gl = /* @__PURE__ */ new Ni(), ql = /* @__PURE__ */ new zl(), Jl = /* @__PURE__ */ new Ni(!0);
const rn = (e) => e, xs = (e) => Reflect.getPrototypeOf(e);
function Yl(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, l = /* @__PURE__ */ fe(i), o = Gt(l), r = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, p = i[e](...n), d = s ? rn : t ? Yt : rt;
    return !t && Ve(
      l,
      "iterate",
      a ? on : Dt
    ), He(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: h, done: v } = p.next();
          return v ? { value: h, done: v } : {
            value: r ? [d(h[0]), d(h[1])] : d(h),
            done: v
          };
        }
      }
    );
  };
}
function Cs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xl(e, t) {
  const s = {
    get(i) {
      const l = this.__v_raw, o = /* @__PURE__ */ fe(l), r = /* @__PURE__ */ fe(i);
      e || (Mt(i, r) && Ve(o, "get", i), Ve(o, "get", r));
      const { has: a } = xs(o), p = t ? rn : e ? Yt : rt;
      if (a.call(o, i))
        return p(l.get(i));
      if (a.call(o, r))
        return p(l.get(r));
      l !== o && l.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ve(/* @__PURE__ */ fe(i), "iterate", Dt), i.size;
    },
    has(i) {
      const l = this.__v_raw, o = /* @__PURE__ */ fe(l), r = /* @__PURE__ */ fe(i);
      return e || (Mt(i, r) && Ve(o, "has", i), Ve(o, "has", r)), i === r ? l.has(i) : l.has(i) || l.has(r);
    },
    forEach(i, l) {
      const o = this, r = o.__v_raw, a = /* @__PURE__ */ fe(r), p = t ? rn : e ? Yt : rt;
      return !e && Ve(a, "iterate", Dt), r.forEach((d, h) => i.call(l, p(d), p(h), o));
    }
  };
  return He(
    s,
    e ? {
      add: Cs("add"),
      set: Cs("set"),
      delete: Cs("delete"),
      clear: Cs("clear")
    } : {
      add(i) {
        !t && !/* @__PURE__ */ nt(i) && !/* @__PURE__ */ St(i) && (i = /* @__PURE__ */ fe(i));
        const l = /* @__PURE__ */ fe(this);
        return xs(l).has.call(l, i) || (l.add(i), bt(l, "add", i, i)), this;
      },
      set(i, l) {
        !t && !/* @__PURE__ */ nt(l) && !/* @__PURE__ */ St(l) && (l = /* @__PURE__ */ fe(l));
        const o = /* @__PURE__ */ fe(this), { has: r, get: a } = xs(o);
        let p = r.call(o, i);
        p || (i = /* @__PURE__ */ fe(i), p = r.call(o, i));
        const d = a.call(o, i);
        return o.set(i, l), p ? Mt(l, d) && bt(o, "set", i, l) : bt(o, "add", i, l), this;
      },
      delete(i) {
        const l = /* @__PURE__ */ fe(this), { has: o, get: r } = xs(l);
        let a = o.call(l, i);
        a || (i = /* @__PURE__ */ fe(i), a = o.call(l, i)), r && r.call(l, i);
        const p = l.delete(i);
        return a && bt(l, "delete", i, void 0), p;
      },
      clear() {
        const i = /* @__PURE__ */ fe(this), l = i.size !== 0, o = i.clear();
        return l && bt(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    s[i] = Yl(i, e, t);
  }), s;
}
function Tn(e, t) {
  const s = Xl(e, t);
  return (n, i, l) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    de(s, i) && i in n ? s : n,
    i,
    l
  );
}
const Zl = {
  get: /* @__PURE__ */ Tn(!1, !1)
}, Ql = {
  get: /* @__PURE__ */ Tn(!1, !0)
}, eo = {
  get: /* @__PURE__ */ Tn(!0, !1)
};
const Vi = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ new WeakMap(), to = /* @__PURE__ */ new WeakMap();
function so(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function no(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : so(Fl(e));
}
// @__NO_SIDE_EFFECTS__
function gs(e) {
  return /* @__PURE__ */ St(e) ? e : Fn(
    e,
    !1,
    Gl,
    Zl,
    Vi
  );
}
// @__NO_SIDE_EFFECTS__
function io(e) {
  return Fn(
    e,
    !1,
    Jl,
    Ql,
    ji
  );
}
// @__NO_SIDE_EFFECTS__
function an(e) {
  return Fn(
    e,
    !0,
    ql,
    eo,
    Hi
  );
}
function Fn(e, t, s, n, i) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = no(e);
  if (l === 0)
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = new Proxy(
    e,
    l === 2 ? n : s
  );
  return i.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  return /* @__PURE__ */ St(e) ? /* @__PURE__ */ Nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ fe(t) : e;
}
function lo(e) {
  return !de(e, "__v_skip") && Object.isExtensible(e) && Si(e, "__v_skip", !0), e;
}
const rt = (e) => he(e) ? /* @__PURE__ */ gs(e) : e, Yt = (e) => he(e) ? /* @__PURE__ */ an(e) : e;
// @__NO_SIDE_EFFECTS__
function je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function V(e) {
  return oo(e, !1);
}
function oo(e, t) {
  return /* @__PURE__ */ je(e) ? e : new ro(e, t);
}
class ro {
  constructor(t, s) {
    this.dep = new $n(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ fe(t), this._value = s ? t : rt(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ nt(t) || /* @__PURE__ */ St(t);
    t = n ? t : /* @__PURE__ */ fe(t), Mt(t, s) && (this._rawValue = t, this._value = n ? t : rt(t), this.dep.trigger());
  }
}
function W(e) {
  return /* @__PURE__ */ je(e) ? e.value : e;
}
const ao = {
  get: (e, t, s) => t === "__v_raw" ? e : W(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ je(i) && !/* @__PURE__ */ je(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Bi(e) {
  return /* @__PURE__ */ Nt(e) ? e : new Proxy(e, ao);
}
class co {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new $n(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ge !== this)
      return Ai(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Oi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function uo(e, t, s = !1) {
  let n, i;
  return te(e) ? n = e : (n = e.get, i = e.set), new co(n, i, s);
}
const Ss = {}, As = /* @__PURE__ */ new WeakMap();
let Lt;
function fo(e, t = !1, s = Lt) {
  if (s) {
    let n = As.get(s);
    n || As.set(s, n = []), n.push(e);
  }
}
function po(e, t, s = ve) {
  const { immediate: n, deep: i, once: l, scheduler: o, augmentJob: r, call: a } = s, p = (E) => i ? E : /* @__PURE__ */ nt(E) || i === !1 || i === 0 ? yt(E, 1) : yt(E);
  let d, h, v, S, T = !1, g = !1;
  if (/* @__PURE__ */ je(e) ? (h = () => e.value, T = /* @__PURE__ */ nt(e)) : /* @__PURE__ */ Nt(e) ? (h = () => p(e), T = !0) : Y(e) ? (g = !0, T = e.some((E) => /* @__PURE__ */ Nt(E) || /* @__PURE__ */ nt(E)), h = () => e.map((E) => {
    if (/* @__PURE__ */ je(E))
      return E.value;
    if (/* @__PURE__ */ Nt(E))
      return p(E);
    if (te(E))
      return a ? a(E, 2) : E();
  })) : te(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      xt();
      try {
        v();
      } finally {
        Ct();
      }
    }
    const E = Lt;
    Lt = d;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      Lt = E;
    }
  } : h = ft, t && i) {
    const E = h, O = i === !0 ? 1 / 0 : i;
    h = () => yt(E(), O);
  }
  const w = Vl(), x = () => {
    d.stop(), w && w.active && yn(w.effects, d);
  };
  if (l && t) {
    const E = t;
    t = (...O) => {
      E(...O), x();
    };
  }
  let A = g ? new Array(e.length).fill(Ss) : Ss;
  const j = (E) => {
    if (!(!(d.flags & 1) || !d.dirty && !E))
      if (t) {
        const O = d.run();
        if (i || T || (g ? O.some((y, H) => Mt(y, A[H])) : Mt(O, A))) {
          v && v();
          const y = Lt;
          Lt = d;
          try {
            const H = [
              O,
              // pass undefined as the old value when it's changed for the first time
              A === Ss ? void 0 : g && A[0] === Ss ? [] : A,
              S
            ];
            A = O, a ? a(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            Lt = y;
          }
        }
      } else
        d.run();
  };
  return r && r(j), d = new Fi(h), d.scheduler = o ? () => o(j, !1) : j, S = (E) => fo(E, !1, d), v = d.onStop = () => {
    const E = As.get(d);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const O of E) O();
      As.delete(d);
    }
  }, t ? n ? j(!0) : A = d.run() : o ? o(j.bind(null, !0), !0) : d.run(), x.pause = d.pause.bind(d), x.resume = d.resume.bind(d), x.stop = x, x;
}
function yt(e, t = 1 / 0, s) {
  if (t <= 0 || !he(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ je(e))
    yt(e.value, t, s);
  else if (Y(e))
    for (let n = 0; n < e.length; n++)
      yt(e[n], t, s);
  else if (yi(e) || Gt(e))
    e.forEach((n) => {
      yt(n, t, s);
    });
  else if (xi(e)) {
    for (const n in e)
      yt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && yt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bs(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    js(i, t, s);
  }
}
function pt(e, t, s, n) {
  if (te(e)) {
    const i = bs(e, t, s, n);
    return i && _i(i) && i.catch((l) => {
      js(l, t, s);
    }), i;
  }
  if (Y(e)) {
    const i = [];
    for (let l = 0; l < e.length; l++)
      i.push(pt(e[l], t, s, n));
    return i;
  }
}
function js(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ve;
  if (t) {
    let r = t.parent;
    const a = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; r; ) {
      const d = r.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, a, p) === !1)
            return;
      }
      r = r.parent;
    }
    if (l) {
      xt(), bs(l, null, 10, [
        e,
        a,
        p
      ]), Ct();
      return;
    }
  }
  ho(e, s, i, n, o);
}
function ho(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ke = [];
let ct = -1;
const qt = [];
let Ft = null, Wt = 0;
const Ui = /* @__PURE__ */ Promise.resolve();
let Rs = null;
function qe(e) {
  const t = Rs || Ui;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mo(e) {
  let t = ct + 1, s = Ke.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Ke[n], l = ps(i);
    l < e || l === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function An(e) {
  if (!(e.flags & 1)) {
    const t = ps(e), s = Ke[Ke.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ps(s) ? Ke.push(e) : Ke.splice(mo(t), 0, e), e.flags |= 1, Wi();
  }
}
function Wi() {
  Rs || (Rs = Ui.then(zi));
}
function vo(e) {
  Y(e) ? qt.push(...e) : Ft && e.id === -1 ? Ft.splice(Wt + 1, 0, e) : e.flags & 1 || (qt.push(e), e.flags |= 1), Wi();
}
function jn(e, t, s = ct + 1) {
  for (; s < Ke.length; s++) {
    const n = Ke[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Ke.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ki(e) {
  if (qt.length) {
    const t = [...new Set(qt)].sort(
      (s, n) => ps(s) - ps(n)
    );
    if (qt.length = 0, Ft) {
      Ft.push(...t);
      return;
    }
    for (Ft = t, Wt = 0; Wt < Ft.length; Wt++) {
      const s = Ft[Wt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ft = null, Wt = 0;
  }
}
const ps = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zi(e) {
  try {
    for (ct = 0; ct < Ke.length; ct++) {
      const t = Ke[ct];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ct < Ke.length; ct++) {
      const t = Ke[ct];
      t && (t.flags &= -2);
    }
    ct = -1, Ke.length = 0, Ki(), Rs = null, (Ke.length || qt.length) && zi();
  }
}
let st = null, Gi = null;
function Es(e) {
  const t = st;
  return st = e, Gi = e && e.type.__scopeId || null, t;
}
function go(e, t = st, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && ei(-1);
    const l = Es(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Es(l), n._d && ei(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function _t(e, t) {
  if (st === null)
    return e;
  const s = Ws(st), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [l, o, r, a = ve] = t[i];
    l && (te(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && yt(o), n.push({
      dir: l,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: r,
      modifiers: a
    }));
  }
  return e;
}
function Pt(e, t, s, n) {
  const i = e.dirs, l = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const r = i[o];
    l && (r.oldValue = l[o].value);
    let a = r.dir[n];
    a && (xt(), pt(a, s, 8, [
      e.el,
      r,
      e,
      t
    ]), Ct());
  }
}
function et(e, t) {
  if (ze) {
    let s = ze.provides;
    const n = ze.parent && ze.parent.provides;
    n === s && (s = ze.provides = Object.create(n)), s[e] = t;
  }
}
function Re(e, t, s = !1) {
  const n = mr();
  if (n || Jt) {
    let i = Jt ? Jt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && te(t) ? t.call(n && n.proxy) : t;
  }
}
const bo = /* @__PURE__ */ Symbol.for("v-scx"), yo = () => Re(bo);
function ls(e, t, s) {
  return qi(e, t, s);
}
function qi(e, t, s = ve) {
  const { immediate: n, deep: i, flush: l, once: o } = s, r = He({}, s), a = t && n || !t && l !== "post";
  let p;
  if (ms) {
    if (l === "sync") {
      const S = yo();
      p = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!a) {
      const S = () => {
      };
      return S.stop = ft, S.resume = ft, S.pause = ft, S;
    }
  }
  const d = ze;
  r.call = (S, T, g) => pt(S, d, T, g);
  let h = !1;
  l === "post" ? r.scheduler = (S) => {
    Ne(S, d && d.suspense);
  } : l !== "sync" && (h = !0, r.scheduler = (S, T) => {
    T ? S() : An(S);
  }), r.augmentJob = (S) => {
    t && (S.flags |= 4), h && (S.flags |= 2, d && (S.id = d.uid, S.i = d));
  };
  const v = po(e, t, r);
  return ms && (p ? p.push(v) : a && v()), v;
}
function _o(e, t, s) {
  const n = this.proxy, i = Ce(e) ? e.includes(".") ? Ji(n, e) : () => n[e] : e.bind(n, n);
  let l;
  te(t) ? l = t : (l = t.handler, s = t);
  const o = _s(this), r = qi(i, l.bind(n), s);
  return o(), r;
}
function Ji(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const Yi = /* @__PURE__ */ Symbol("_vte"), wo = (e) => e.__isTeleport, os = (e) => e && (e.disabled || e.disabled === ""), Hn = (e) => e && (e.defer || e.defer === ""), Bn = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Un = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cn = (e, t) => {
  const s = e && e.to;
  return Ce(s) ? t ? t(s) : null : s;
}, Xi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, l, o, r, a, p) {
    const {
      mc: d,
      pc: h,
      pbc: v,
      o: { insert: S, querySelector: T, createText: g, createComment: w }
    } = p, x = os(t.props);
    let { shapeFlag: A, children: j, dynamicChildren: E } = t;
    if (e == null) {
      const O = t.el = g(""), y = t.anchor = g("");
      S(O, s, n), S(y, s, n);
      const H = (le, Se) => {
        A & 16 && d(
          j,
          le,
          Se,
          i,
          l,
          o,
          r,
          a
        );
      }, X = () => {
        const le = t.target = cn(t.props, T), Se = un(le, t, g, S);
        le && (o !== "svg" && Bn(le) ? o = "svg" : o !== "mathml" && Un(le) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(le), x || (H(le, Se), Ts(t, !1)));
      };
      x && (H(s, y), Ts(t, !0)), Hn(t.props) ? (t.el.__isMounted = !1, Ne(() => {
        X(), delete t.el.__isMounted;
      }, l)) : X();
    } else {
      if (Hn(t.props) && e.el.__isMounted === !1) {
        Ne(() => {
          Xi.process(
            e,
            t,
            s,
            n,
            i,
            l,
            o,
            r,
            a,
            p
          );
        }, l);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const O = t.anchor = e.anchor, y = t.target = e.target, H = t.targetAnchor = e.targetAnchor, X = os(e.props), le = X ? s : y, Se = X ? O : H;
      if (o === "svg" || Bn(y) ? o = "svg" : (o === "mathml" || Un(y)) && (o = "mathml"), E ? (v(
        e.dynamicChildren,
        E,
        le,
        i,
        l,
        o,
        r
      ), Pn(e, t, !0)) : a || h(
        e,
        t,
        le,
        Se,
        i,
        l,
        o,
        r,
        !1
      ), x)
        X ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ks(
          t,
          s,
          O,
          p,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Ie = t.target = cn(
          t.props,
          T
        );
        Ie && ks(
          t,
          Ie,
          null,
          p,
          0
        );
      } else X && ks(
        t,
        y,
        H,
        p,
        1
      );
      Ts(t, x);
    }
  },
  remove(e, t, s, { um: n, o: { remove: i } }, l) {
    const {
      shapeFlag: o,
      children: r,
      anchor: a,
      targetStart: p,
      targetAnchor: d,
      target: h,
      props: v
    } = e;
    if (h && (i(p), i(d)), l && i(a), o & 16) {
      const S = l || !os(v);
      for (let T = 0; T < r.length; T++) {
        const g = r[T];
        n(
          g,
          t,
          s,
          S,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: ks,
  hydrate: xo
};
function ks(e, t, s, { o: { insert: n }, m: i }, l = 2) {
  l === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: r, shapeFlag: a, children: p, props: d } = e, h = l === 2;
  if (h && n(o, t, s), (!h || os(d)) && a & 16)
    for (let v = 0; v < p.length; v++)
      i(
        p[v],
        t,
        s,
        2
      );
  h && n(r, t, s);
}
function xo(e, t, s, n, i, l, {
  o: { nextSibling: o, parentNode: r, querySelector: a, insert: p, createText: d }
}, h) {
  function v(w, x) {
    let A = x;
    for (; A; ) {
      if (A && A.nodeType === 8) {
        if (A.data === "teleport start anchor")
          t.targetStart = A;
        else if (A.data === "teleport anchor") {
          t.targetAnchor = A, w._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      A = o(A);
    }
  }
  function S(w, x) {
    x.anchor = h(
      o(w),
      x,
      r(w),
      s,
      n,
      i,
      l
    );
  }
  const T = t.target = cn(
    t.props,
    a
  ), g = os(t.props);
  if (T) {
    const w = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (g ? (S(e, t), v(T, w), t.targetAnchor || un(
      T,
      t,
      d,
      p,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === T ? e : null
    )) : (t.anchor = o(e), v(T, w), t.targetAnchor || un(T, t, d, p), h(
      w && o(w),
      t,
      T,
      s,
      n,
      i,
      l
    ))), Ts(t, g);
  } else g && t.shapeFlag & 16 && (S(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const ys = Xi;
function Ts(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, i;
    for (t ? (n = e.el, i = e.anchor) : (n = e.targetStart, i = e.targetAnchor); n && n !== i; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function un(e, t, s, n, i = null) {
  const l = t.targetStart = s(""), o = t.targetAnchor = s("");
  return l[Yi] = o, e && (n(l, e, i), n(o, e, i)), o;
}
const Co = /* @__PURE__ */ Symbol("_leaveCb");
function Rn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Rn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Zi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Wn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Os = /* @__PURE__ */ new WeakMap();
function rs(e, t, s, n, i = !1) {
  if (Y(e)) {
    e.forEach(
      (g, w) => rs(
        g,
        t && (Y(t) ? t[w] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (as(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && rs(e, t, s, n.component.subTree);
    return;
  }
  const l = n.shapeFlag & 4 ? Ws(n.component) : n.el, o = i ? null : l, { i: r, r: a } = e, p = t && t.r, d = r.refs === ve ? r.refs = {} : r.refs, h = r.setupState, v = /* @__PURE__ */ fe(h), S = h === ve ? bi : (g) => Wn(d, g) ? !1 : de(v, g), T = (g, w) => !(w && Wn(d, w));
  if (p != null && p !== a) {
    if (Kn(t), Ce(p))
      d[p] = null, S(p) && (h[p] = null);
    else if (/* @__PURE__ */ je(p)) {
      const g = t;
      T(p, g.k) && (p.value = null), g.k && (d[g.k] = null);
    }
  }
  if (te(a))
    bs(a, r, 12, [o, d]);
  else {
    const g = Ce(a), w = /* @__PURE__ */ je(a);
    if (g || w) {
      const x = () => {
        if (e.f) {
          const A = g ? S(a) ? h[a] : d[a] : T() || !e.k ? a.value : d[e.k];
          if (i)
            Y(A) && yn(A, l);
          else if (Y(A))
            A.includes(l) || A.push(l);
          else if (g)
            d[a] = [l], S(a) && (h[a] = d[a]);
          else {
            const j = [l];
            T(a, e.k) && (a.value = j), e.k && (d[e.k] = j);
          }
        } else g ? (d[a] = o, S(a) && (h[a] = o)) : w && (T(a, e.k) && (a.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const A = () => {
          x(), Os.delete(e);
        };
        A.id = -1, Os.set(e, A), Ne(A, s);
      } else
        Kn(e), x();
    }
  }
}
function Kn(e) {
  const t = Os.get(e);
  t && (t.flags |= 8, Os.delete(e));
}
Ns().requestIdleCallback;
Ns().cancelIdleCallback;
const as = (e) => !!e.type.__asyncLoader, Qi = (e) => e.type.__isKeepAlive;
function So(e, t) {
  el(e, "a", t);
}
function ko(e, t) {
  el(e, "da", t);
}
function el(e, t, s = ze) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Hs(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      Qi(i.parent.vnode) && $o(n, t, s, i), i = i.parent;
  }
}
function $o(e, t, s, n) {
  const i = Hs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  jt(() => {
    yn(n[t], i);
  }, s);
}
function Hs(e, t, s = ze, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), l = t.__weh || (t.__weh = (...o) => {
      xt();
      const r = _s(s), a = pt(t, s, e, o);
      return r(), Ct(), a;
    });
    return n ? i.unshift(l) : i.push(l), l;
  }
}
const kt = (e) => (t, s = ze) => {
  (!ms || e === "sp") && Hs(e, (...n) => t(...n), s);
}, To = kt("bm"), Vt = kt("m"), Fo = kt(
  "bu"
), Mo = kt("u"), Ao = kt(
  "bum"
), jt = kt("um"), Ro = kt(
  "sp"
), Eo = kt("rtg"), Oo = kt("rtc");
function Po(e, t = ze) {
  Hs("ec", e, t);
}
const Io = /* @__PURE__ */ Symbol.for("v-ndc");
function Fe(e, t, s, n) {
  let i;
  const l = s, o = Y(e);
  if (o || Ce(e)) {
    const r = o && /* @__PURE__ */ Nt(e);
    let a = !1, p = !1;
    r && (a = !/* @__PURE__ */ nt(e), p = /* @__PURE__ */ St(e), e = Vs(e)), i = new Array(e.length);
    for (let d = 0, h = e.length; d < h; d++)
      i[d] = t(
        a ? p ? Yt(rt(e[d])) : rt(e[d]) : e[d],
        d,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let r = 0; r < e; r++)
      i[r] = t(r + 1, r, void 0, l);
  } else if (he(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (r, a) => t(r, a, void 0, l)
      );
    else {
      const r = Object.keys(e);
      i = new Array(r.length);
      for (let a = 0, p = r.length; a < p; a++) {
        const d = r[a];
        i[a] = t(e[d], d, a, l);
      }
    }
  else
    i = [];
  return i;
}
const fn = (e) => e ? _l(e) ? Ws(e) : fn(e.parent) : null, cs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ He(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fn(e.parent),
    $root: (e) => fn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => sl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      An(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qe.bind(e.proxy)),
    $watch: (e) => _o.bind(e)
  })
), Xs = (e, t) => e !== ve && !e.__isScriptSetup && de(e, t), Lo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: l, accessCache: o, type: r, appContext: a } = e;
    if (t[0] !== "$") {
      const v = o[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return l[t];
        }
      else {
        if (Xs(n, t))
          return o[t] = 1, n[t];
        if (i !== ve && de(i, t))
          return o[t] = 2, i[t];
        if (de(l, t))
          return o[t] = 3, l[t];
        if (s !== ve && de(s, t))
          return o[t] = 4, s[t];
        dn && (o[t] = 0);
      }
    }
    const p = cs[t];
    let d, h;
    if (p)
      return t === "$attrs" && Ve(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (d = r.__cssModules) && (d = d[t])
    )
      return d;
    if (s !== ve && de(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, de(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: l } = e;
    return Xs(i, t) ? (i[t] = s, !0) : n !== ve && de(n, t) ? (n[t] = s, !0) : de(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: l, type: o }
  }, r) {
    let a;
    return !!(s[r] || e !== ve && r[0] !== "$" && de(e, r) || Xs(t, r) || de(l, r) || de(n, r) || de(cs, r) || de(i.config.globalProperties, r) || (a = o.__cssModules) && a[r]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : de(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function zn(e) {
  return Y(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let dn = !0;
function Do(e) {
  const t = sl(e), s = e.proxy, n = e.ctx;
  dn = !1, t.beforeCreate && Gn(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: l,
    methods: o,
    watch: r,
    provide: a,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: h,
    mounted: v,
    beforeUpdate: S,
    updated: T,
    activated: g,
    deactivated: w,
    beforeDestroy: x,
    beforeUnmount: A,
    destroyed: j,
    unmounted: E,
    render: O,
    renderTracked: y,
    renderTriggered: H,
    errorCaptured: X,
    serverPrefetch: le,
    // public API
    expose: Se,
    inheritAttrs: Ie,
    // assets
    components: Q,
    directives: B,
    filters: ye
  } = t;
  if (p && No(p, n, null), o)
    for (const ee in o) {
      const oe = o[ee];
      te(oe) && (n[ee] = oe.bind(s));
    }
  if (i) {
    const ee = i.call(s, s);
    he(ee) && (e.data = /* @__PURE__ */ gs(ee));
  }
  if (dn = !0, l)
    for (const ee in l) {
      const oe = l[ee], Ee = te(oe) ? oe.bind(s, s) : te(oe.get) ? oe.get.bind(s, s) : ft, lt = !te(oe) && te(oe.set) ? oe.set.bind(s) : ft, Oe = ke({
        get: Ee,
        set: lt
      });
      Object.defineProperty(n, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (Be) => Oe.value = Be
      });
    }
  if (r)
    for (const ee in r)
      tl(r[ee], n, s, ee);
  if (a) {
    const ee = te(a) ? a.call(s) : a;
    Reflect.ownKeys(ee).forEach((oe) => {
      et(oe, ee[oe]);
    });
  }
  d && Gn(d, e, "c");
  function Z(ee, oe) {
    Y(oe) ? oe.forEach((Ee) => ee(Ee.bind(s))) : oe && ee(oe.bind(s));
  }
  if (Z(To, h), Z(Vt, v), Z(Fo, S), Z(Mo, T), Z(So, g), Z(ko, w), Z(Po, X), Z(Oo, y), Z(Eo, H), Z(Ao, A), Z(jt, E), Z(Ro, le), Y(Se))
    if (Se.length) {
      const ee = e.exposed || (e.exposed = {});
      Se.forEach((oe) => {
        Object.defineProperty(ee, oe, {
          get: () => s[oe],
          set: (Ee) => s[oe] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === ft && (e.render = O), Ie != null && (e.inheritAttrs = Ie), Q && (e.components = Q), B && (e.directives = B), le && Zi(e);
}
function No(e, t, s = ft) {
  Y(e) && (e = pn(e));
  for (const n in e) {
    const i = e[n];
    let l;
    he(i) ? "default" in i ? l = Re(
      i.from || n,
      i.default,
      !0
    ) : l = Re(i.from || n) : l = Re(i), /* @__PURE__ */ je(l) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (o) => l.value = o
    }) : t[n] = l;
  }
}
function Gn(e, t, s) {
  pt(
    Y(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function tl(e, t, s, n) {
  let i = n.includes(".") ? Ji(s, n) : () => s[n];
  if (Ce(e)) {
    const l = t[e];
    te(l) && ls(i, l);
  } else if (te(e))
    ls(i, e.bind(s));
  else if (he(e))
    if (Y(e))
      e.forEach((l) => tl(l, t, s, n));
    else {
      const l = te(e.handler) ? e.handler.bind(s) : t[e.handler];
      te(l) && ls(i, l, e);
    }
}
function sl(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: l,
    config: { optionMergeStrategies: o }
  } = e.appContext, r = l.get(t);
  let a;
  return r ? a = r : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (p) => Ps(a, p, o, !0)
  ), Ps(a, t, o)), he(t) && l.set(t, a), a;
}
function Ps(e, t, s, n = !1) {
  const { mixins: i, extends: l } = t;
  l && Ps(e, l, s, !0), i && i.forEach(
    (o) => Ps(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const r = Vo[o] || s && s[o];
      e[o] = r ? r(e[o], t[o]) : t[o];
    }
  return e;
}
const Vo = {
  data: qn,
  props: Jn,
  emits: Jn,
  // objects
  methods: ts,
  computed: ts,
  // lifecycle
  beforeCreate: We,
  created: We,
  beforeMount: We,
  mounted: We,
  beforeUpdate: We,
  updated: We,
  beforeDestroy: We,
  beforeUnmount: We,
  destroyed: We,
  unmounted: We,
  activated: We,
  deactivated: We,
  errorCaptured: We,
  serverPrefetch: We,
  // assets
  components: ts,
  directives: ts,
  // watch
  watch: Ho,
  // provide / inject
  provide: qn,
  inject: jo
};
function qn(e, t) {
  return t ? e ? function() {
    return He(
      te(e) ? e.call(this, this) : e,
      te(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jo(e, t) {
  return ts(pn(e), pn(t));
}
function pn(e) {
  if (Y(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function We(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ts(e, t) {
  return e ? He(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Jn(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : He(
    /* @__PURE__ */ Object.create(null),
    zn(e),
    zn(t ?? {})
  ) : t;
}
function Ho(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = He(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = We(e[n], t[n]);
  return s;
}
function nl() {
  return {
    app: null,
    config: {
      isNativeTag: bi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Bo = 0;
function Uo(e, t) {
  return function(n, i = null) {
    te(n) || (n = He({}, n)), i != null && !he(i) && (i = null);
    const l = nl(), o = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const p = l.app = {
      _uid: Bo++,
      _component: n,
      _props: i,
      _container: null,
      _context: l,
      _instance: null,
      version: wr,
      get config() {
        return l.config;
      },
      set config(d) {
      },
      use(d, ...h) {
        return o.has(d) || (d && te(d.install) ? (o.add(d), d.install(p, ...h)) : te(d) && (o.add(d), d(p, ...h))), p;
      },
      mixin(d) {
        return l.mixins.includes(d) || l.mixins.push(d), p;
      },
      component(d, h) {
        return h ? (l.components[d] = h, p) : l.components[d];
      },
      directive(d, h) {
        return h ? (l.directives[d] = h, p) : l.directives[d];
      },
      mount(d, h, v) {
        if (!a) {
          const S = p._ceVNode || _e(n, i);
          return S.appContext = l, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(S, d, v), a = !0, p._container = d, d.__vue_app__ = p, Ws(S.component);
        }
      },
      onUnmount(d) {
        r.push(d);
      },
      unmount() {
        a && (pt(
          r,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(d, h) {
        return l.provides[d] = h, p;
      },
      runWithContext(d) {
        const h = Jt;
        Jt = p;
        try {
          return d();
        } finally {
          Jt = h;
        }
      }
    };
    return p;
  };
}
let Jt = null;
const Wo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${At(t)}Modifiers`] || e[`${Et(t)}Modifiers`];
function Ko(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ve;
  let i = s;
  const l = t.startsWith("update:"), o = l && Wo(n, t.slice(7));
  o && (o.trim && (i = s.map((d) => Ce(d) ? d.trim() : d)), o.number && (i = s.map(wn)));
  let r, a = n[r = zs(t)] || // also try camelCase event handler (#2249)
  n[r = zs(At(t))];
  !a && l && (a = n[r = zs(Et(t))]), a && pt(
    a,
    e,
    6,
    i
  );
  const p = n[r + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, pt(
      p,
      e,
      6,
      i
    );
  }
}
const zo = /* @__PURE__ */ new WeakMap();
function il(e, t, s = !1) {
  const n = s ? zo : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const l = e.emits;
  let o = {}, r = !1;
  if (!te(e)) {
    const a = (p) => {
      const d = il(p, t, !0);
      d && (r = !0, He(o, d));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !l && !r ? (he(e) && n.set(e, null), null) : (Y(l) ? l.forEach((a) => o[a] = null) : He(o, l), he(e) && n.set(e, o), o);
}
function Bs(e, t) {
  return !e || !Ls(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), de(e, t[0].toLowerCase() + t.slice(1)) || de(e, Et(t)) || de(e, t));
}
function Yn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [l],
    slots: o,
    attrs: r,
    emit: a,
    render: p,
    renderCache: d,
    props: h,
    data: v,
    setupState: S,
    ctx: T,
    inheritAttrs: g
  } = e, w = Es(e);
  let x, A;
  try {
    if (s.shapeFlag & 4) {
      const E = i || n, O = E;
      x = ut(
        p.call(
          O,
          E,
          d,
          h,
          S,
          v,
          T
        )
      ), A = r;
    } else {
      const E = t;
      x = ut(
        E.length > 1 ? E(
          h,
          { attrs: r, slots: o, emit: a }
        ) : E(
          h,
          null
        )
      ), A = t.props ? r : Go(r);
    }
  } catch (E) {
    us.length = 0, js(E, e, 1), x = _e(Rt);
  }
  let j = x;
  if (A && g !== !1) {
    const E = Object.keys(A), { shapeFlag: O } = j;
    E.length && O & 7 && (l && E.some(bn) && (A = qo(
      A,
      l
    )), j = Xt(j, A, !1, !0));
  }
  return s.dirs && (j = Xt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(s.dirs) : s.dirs), s.transition && Rn(j, s.transition), x = j, Es(w), x;
}
const Go = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ls(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, qo = (e, t) => {
  const s = {};
  for (const n in e)
    (!bn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Jo(e, t, s) {
  const { props: n, children: i, component: l } = e, { props: o, children: r, patchFlag: a } = t, p = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? Xn(n, o, p) : !!o;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const v = d[h];
        if (ll(o, n, v) && !Bs(p, v))
          return !0;
      }
    }
  } else
    return (i || r) && (!r || !r.$stable) ? !0 : n === o ? !1 : n ? o ? Xn(n, o, p) : !0 : !!o;
  return !1;
}
function Xn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const l = n[i];
    if (ll(t, e, l) && !Bs(s, l))
      return !0;
  }
  return !1;
}
function ll(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && he(n) && he(i) ? !xn(n, i) : n !== i;
}
function Yo({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const ol = {}, rl = () => Object.create(ol), al = (e) => Object.getPrototypeOf(e) === ol;
function Xo(e, t, s, n = !1) {
  const i = {}, l = rl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), cl(e, t, i, l);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ io(i) : e.type.props ? e.props = i : e.props = l, e.attrs = l;
}
function Zo(e, t, s, n) {
  const {
    props: i,
    attrs: l,
    vnode: { patchFlag: o }
  } = e, r = /* @__PURE__ */ fe(i), [a] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let v = d[h];
        if (Bs(e.emitsOptions, v))
          continue;
        const S = t[v];
        if (a)
          if (de(l, v))
            S !== l[v] && (l[v] = S, p = !0);
          else {
            const T = At(v);
            i[T] = hn(
              a,
              r,
              T,
              S,
              e,
              !1
            );
          }
        else
          S !== l[v] && (l[v] = S, p = !0);
      }
    }
  } else {
    cl(e, t, i, l) && (p = !0);
    let d;
    for (const h in r)
      (!t || // for camelCase
      !de(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Et(h)) === h || !de(t, d))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[d] !== void 0) && (i[h] = hn(
        a,
        r,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (l !== r)
      for (const h in l)
        (!t || !de(t, h)) && (delete l[h], p = !0);
  }
  p && bt(e.attrs, "set", "");
}
function cl(e, t, s, n) {
  const [i, l] = e.propsOptions;
  let o = !1, r;
  if (t)
    for (let a in t) {
      if (ss(a))
        continue;
      const p = t[a];
      let d;
      i && de(i, d = At(a)) ? !l || !l.includes(d) ? s[d] = p : (r || (r = {}))[d] = p : Bs(e.emitsOptions, a) || (!(a in n) || p !== n[a]) && (n[a] = p, o = !0);
    }
  if (l) {
    const a = /* @__PURE__ */ fe(s), p = r || ve;
    for (let d = 0; d < l.length; d++) {
      const h = l[d];
      s[h] = hn(
        i,
        a,
        h,
        p[h],
        e,
        !de(p, h)
      );
    }
  }
  return o;
}
function hn(e, t, s, n, i, l) {
  const o = e[s];
  if (o != null) {
    const r = de(o, "default");
    if (r && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && te(a)) {
        const { propsDefaults: p } = i;
        if (s in p)
          n = p[s];
        else {
          const d = _s(i);
          n = p[s] = a.call(
            null,
            t
          ), d();
        }
      } else
        n = a;
      i.ce && i.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (l && !r ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Et(s)) && (n = !0));
  }
  return n;
}
const Qo = /* @__PURE__ */ new WeakMap();
function ul(e, t, s = !1) {
  const n = s ? Qo : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const l = e.props, o = {}, r = [];
  let a = !1;
  if (!te(e)) {
    const d = (h) => {
      a = !0;
      const [v, S] = ul(h, t, !0);
      He(o, v), S && r.push(...S);
    };
    !s && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!l && !a)
    return he(e) && n.set(e, zt), zt;
  if (Y(l))
    for (let d = 0; d < l.length; d++) {
      const h = At(l[d]);
      Zn(h) && (o[h] = ve);
    }
  else if (l)
    for (const d in l) {
      const h = At(d);
      if (Zn(h)) {
        const v = l[d], S = o[h] = Y(v) || te(v) ? { type: v } : He({}, v), T = S.type;
        let g = !1, w = !0;
        if (Y(T))
          for (let x = 0; x < T.length; ++x) {
            const A = T[x], j = te(A) && A.name;
            if (j === "Boolean") {
              g = !0;
              break;
            } else j === "String" && (w = !1);
          }
        else
          g = te(T) && T.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = g, S[
          1
          /* shouldCastTrue */
        ] = w, (g || de(S, "default")) && r.push(h);
      }
    }
  const p = [o, r];
  return he(e) && n.set(e, p), p;
}
function Zn(e) {
  return e[0] !== "$" && !ss(e);
}
const En = (e) => e === "_" || e === "_ctx" || e === "$stable", On = (e) => Y(e) ? e.map(ut) : [ut(e)], er = (e, t, s) => {
  if (t._n)
    return t;
  const n = go((...i) => On(t(...i)), s);
  return n._c = !1, n;
}, fl = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (En(i)) continue;
    const l = e[i];
    if (te(l))
      t[i] = er(i, l, n);
    else if (l != null) {
      const o = On(l);
      t[i] = () => o;
    }
  }
}, dl = (e, t) => {
  const s = On(t);
  e.slots.default = () => s;
}, pl = (e, t, s) => {
  for (const n in t)
    (s || !En(n)) && (e[n] = t[n]);
}, tr = (e, t, s) => {
  const n = e.slots = rl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (pl(n, t, s), s && Si(n, "_", i, !0)) : fl(t, n);
  } else t && dl(e, t);
}, sr = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let l = !0, o = ve;
  if (n.shapeFlag & 32) {
    const r = t._;
    r ? s && r === 1 ? l = !1 : pl(i, t, s) : (l = !t.$stable, fl(t, i)), o = t;
  } else t && (dl(e, t), o = { default: 1 });
  if (l)
    for (const r in i)
      !En(r) && o[r] == null && delete i[r];
}, Ne = rr;
function nr(e) {
  return ir(e);
}
function ir(e, t) {
  const s = Ns();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: l,
    createElement: o,
    createText: r,
    createComment: a,
    setText: p,
    setElementText: d,
    parentNode: h,
    nextSibling: v,
    setScopeId: S = ft,
    insertStaticContent: T
  } = e, g = (u, f, m, $ = null, b = null, C = null, L = void 0, P = null, R = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Qt(u, f) && ($ = ae(u), Be(u, b, C, !0), u = null), f.patchFlag === -2 && (R = !1, f.dynamicChildren = null);
    const { type: k, ref: K, shapeFlag: D } = f;
    switch (k) {
      case Us:
        w(u, f, m, $);
        break;
      case Rt:
        x(u, f, m, $);
        break;
      case Qs:
        u == null && A(f, m, $, L);
        break;
      case ce:
        Q(
          u,
          f,
          m,
          $,
          b,
          C,
          L,
          P,
          R
        );
        break;
      default:
        D & 1 ? O(
          u,
          f,
          m,
          $,
          b,
          C,
          L,
          P,
          R
        ) : D & 6 ? B(
          u,
          f,
          m,
          $,
          b,
          C,
          L,
          P,
          R
        ) : (D & 64 || D & 128) && k.process(
          u,
          f,
          m,
          $,
          b,
          C,
          L,
          P,
          R,
          Me
        );
    }
    K != null && b ? rs(K, u && u.ref, C, f || u, !f) : K == null && u && u.ref != null && rs(u.ref, null, C, u, !0);
  }, w = (u, f, m, $) => {
    if (u == null)
      n(
        f.el = r(f.children),
        m,
        $
      );
    else {
      const b = f.el = u.el;
      f.children !== u.children && p(b, f.children);
    }
  }, x = (u, f, m, $) => {
    u == null ? n(
      f.el = a(f.children || ""),
      m,
      $
    ) : f.el = u.el;
  }, A = (u, f, m, $) => {
    [u.el, u.anchor] = T(
      u.children,
      f,
      m,
      $,
      u.el,
      u.anchor
    );
  }, j = ({ el: u, anchor: f }, m, $) => {
    let b;
    for (; u && u !== f; )
      b = v(u), n(u, m, $), u = b;
    n(f, m, $);
  }, E = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = v(u), i(u), u = m;
    i(f);
  }, O = (u, f, m, $, b, C, L, P, R) => {
    if (f.type === "svg" ? L = "svg" : f.type === "math" && (L = "mathml"), u == null)
      y(
        f,
        m,
        $,
        b,
        C,
        L,
        P,
        R
      );
    else {
      const k = u.el && u.el._isVueCE ? u.el : null;
      try {
        k && k._beginPatch(), le(
          u,
          f,
          b,
          C,
          L,
          P,
          R
        );
      } finally {
        k && k._endPatch();
      }
    }
  }, y = (u, f, m, $, b, C, L, P) => {
    let R, k;
    const { props: K, shapeFlag: D, transition: U, dirs: G } = u;
    if (R = u.el = o(
      u.type,
      C,
      K && K.is,
      K
    ), D & 8 ? d(R, u.children) : D & 16 && X(
      u.children,
      R,
      null,
      $,
      b,
      Zs(u, C),
      L,
      P
    ), G && Pt(u, null, $, "created"), H(R, u, u.scopeId, L, $), K) {
      for (const pe in K)
        pe !== "value" && !ss(pe) && l(R, pe, null, K[pe], C, $);
      "value" in K && l(R, "value", null, K.value, C), (k = K.onVnodeBeforeMount) && at(k, $, u);
    }
    G && Pt(u, null, $, "beforeMount");
    const re = lr(b, U);
    re && U.beforeEnter(R), n(R, f, m), ((k = K && K.onVnodeMounted) || re || G) && Ne(() => {
      k && at(k, $, u), re && U.enter(R), G && Pt(u, null, $, "mounted");
    }, b);
  }, H = (u, f, m, $, b) => {
    if (m && S(u, m), $)
      for (let C = 0; C < $.length; C++)
        S(u, $[C]);
    if (b) {
      let C = b.subTree;
      if (f === C || vl(C.type) && (C.ssContent === f || C.ssFallback === f)) {
        const L = b.vnode;
        H(
          u,
          L,
          L.scopeId,
          L.slotScopeIds,
          b.parent
        );
      }
    }
  }, X = (u, f, m, $, b, C, L, P, R = 0) => {
    for (let k = R; k < u.length; k++) {
      const K = u[k] = P ? gt(u[k]) : ut(u[k]);
      g(
        null,
        K,
        f,
        m,
        $,
        b,
        C,
        L,
        P
      );
    }
  }, le = (u, f, m, $, b, C, L) => {
    const P = f.el = u.el;
    let { patchFlag: R, dynamicChildren: k, dirs: K } = f;
    R |= u.patchFlag & 16;
    const D = u.props || ve, U = f.props || ve;
    let G;
    if (m && It(m, !1), (G = U.onVnodeBeforeUpdate) && at(G, m, f, u), K && Pt(f, u, m, "beforeUpdate"), m && It(m, !0), (D.innerHTML && U.innerHTML == null || D.textContent && U.textContent == null) && d(P, ""), k ? Se(
      u.dynamicChildren,
      k,
      P,
      m,
      $,
      Zs(f, b),
      C
    ) : L || oe(
      u,
      f,
      P,
      null,
      m,
      $,
      Zs(f, b),
      C,
      !1
    ), R > 0) {
      if (R & 16)
        Ie(P, D, U, m, b);
      else if (R & 2 && D.class !== U.class && l(P, "class", null, U.class, b), R & 4 && l(P, "style", D.style, U.style, b), R & 8) {
        const re = f.dynamicProps;
        for (let pe = 0; pe < re.length; pe++) {
          const ue = re[pe], Le = D[ue], $e = U[ue];
          ($e !== Le || ue === "value") && l(P, ue, Le, $e, b, m);
        }
      }
      R & 1 && u.children !== f.children && d(P, f.children);
    } else !L && k == null && Ie(P, D, U, m, b);
    ((G = U.onVnodeUpdated) || K) && Ne(() => {
      G && at(G, m, f, u), K && Pt(f, u, m, "updated");
    }, $);
  }, Se = (u, f, m, $, b, C, L) => {
    for (let P = 0; P < f.length; P++) {
      const R = u[P], k = f[P], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qt(R, k) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 198) ? h(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      g(
        R,
        k,
        K,
        null,
        $,
        b,
        C,
        L,
        !0
      );
    }
  }, Ie = (u, f, m, $, b) => {
    if (f !== m) {
      if (f !== ve)
        for (const C in f)
          !ss(C) && !(C in m) && l(
            u,
            C,
            f[C],
            null,
            b,
            $
          );
      for (const C in m) {
        if (ss(C)) continue;
        const L = m[C], P = f[C];
        L !== P && C !== "value" && l(u, C, P, L, b, $);
      }
      "value" in m && l(u, "value", f.value, m.value, b);
    }
  }, Q = (u, f, m, $, b, C, L, P, R) => {
    const k = f.el = u ? u.el : r(""), K = f.anchor = u ? u.anchor : r("");
    let { patchFlag: D, dynamicChildren: U, slotScopeIds: G } = f;
    G && (P = P ? P.concat(G) : G), u == null ? (n(k, m, $), n(K, m, $), X(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      K,
      b,
      C,
      L,
      P,
      R
    )) : D > 0 && D & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === U.length ? (Se(
      u.dynamicChildren,
      U,
      m,
      b,
      C,
      L,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && Pn(
      u,
      f,
      !0
      /* shallow */
    )) : oe(
      u,
      f,
      m,
      K,
      b,
      C,
      L,
      P,
      R
    );
  }, B = (u, f, m, $, b, C, L, P, R) => {
    f.slotScopeIds = P, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      m,
      $,
      L,
      R
    ) : ye(
      f,
      m,
      $,
      b,
      C,
      L,
      R
    ) : it(u, f, R);
  }, ye = (u, f, m, $, b, C, L) => {
    const P = u.component = hr(
      u,
      $,
      b
    );
    if (Qi(u) && (P.ctx.renderer = Me), vr(P, !1, L), P.asyncDep) {
      if (b && b.registerDep(P, Z, L), !u.el) {
        const R = P.subTree = _e(Rt);
        x(null, R, f, m), u.placeholder = R.el;
      }
    } else
      Z(
        P,
        u,
        f,
        m,
        b,
        C,
        L
      );
  }, it = (u, f, m) => {
    const $ = f.component = u.component;
    if (Jo(u, f, m))
      if ($.asyncDep && !$.asyncResolved) {
        ee($, f, m);
        return;
      } else
        $.next = f, $.update();
    else
      f.el = u.el, $.vnode = f;
  }, Z = (u, f, m, $, b, C, L) => {
    const P = () => {
      if (u.isMounted) {
        let { next: D, bu: U, u: G, parent: re, vnode: pe } = u;
        {
          const Qe = hl(u);
          if (Qe) {
            D && (D.el = pe.el, ee(u, D, L)), Qe.asyncDep.then(() => {
              Ne(() => {
                u.isUnmounted || k();
              }, b);
            });
            return;
          }
        }
        let ue = D, Le;
        It(u, !1), D ? (D.el = pe.el, ee(u, D, L)) : D = pe, U && $s(U), (Le = D.props && D.props.onVnodeBeforeUpdate) && at(Le, re, D, pe), It(u, !0);
        const $e = Yn(u), Ze = u.subTree;
        u.subTree = $e, g(
          Ze,
          $e,
          // parent may have changed if it's in a teleport
          h(Ze.el),
          // anchor may have changed if it's in a fragment
          ae(Ze),
          u,
          b,
          C
        ), D.el = $e.el, ue === null && Yo(u, $e.el), G && Ne(G, b), (Le = D.props && D.props.onVnodeUpdated) && Ne(
          () => at(Le, re, D, pe),
          b
        );
      } else {
        let D;
        const { el: U, props: G } = f, { bm: re, m: pe, parent: ue, root: Le, type: $e } = u, Ze = as(f);
        It(u, !1), re && $s(re), !Ze && (D = G && G.onVnodeBeforeMount) && at(D, ue, f), It(u, !0);
        {
          Le.ce && Le.ce._hasShadowRoot() && Le.ce._injectChildStyle($e);
          const Qe = u.subTree = Yn(u);
          g(
            null,
            Qe,
            m,
            $,
            u,
            b,
            C
          ), f.el = Qe.el;
        }
        if (pe && Ne(pe, b), !Ze && (D = G && G.onVnodeMounted)) {
          const Qe = f;
          Ne(
            () => at(D, ue, Qe),
            b
          );
        }
        (f.shapeFlag & 256 || ue && as(ue.vnode) && ue.vnode.shapeFlag & 256) && u.a && Ne(u.a, b), u.isMounted = !0, f = m = $ = null;
      }
    };
    u.scope.on();
    const R = u.effect = new Fi(P);
    u.scope.off();
    const k = u.update = R.run.bind(R), K = u.job = R.runIfDirty.bind(R);
    K.i = u, K.id = u.uid, R.scheduler = () => An(K), It(u, !0), k();
  }, ee = (u, f, m) => {
    f.component = u;
    const $ = u.vnode.props;
    u.vnode = f, u.next = null, Zo(u, f.props, $, m), sr(u, f.children, m), xt(), jn(u), Ct();
  }, oe = (u, f, m, $, b, C, L, P, R = !1) => {
    const k = u && u.children, K = u ? u.shapeFlag : 0, D = f.children, { patchFlag: U, shapeFlag: G } = f;
    if (U > 0) {
      if (U & 128) {
        lt(
          k,
          D,
          m,
          $,
          b,
          C,
          L,
          P,
          R
        );
        return;
      } else if (U & 256) {
        Ee(
          k,
          D,
          m,
          $,
          b,
          C,
          L,
          P,
          R
        );
        return;
      }
    }
    G & 8 ? (K & 16 && M(k, b, C), D !== k && d(m, D)) : K & 16 ? G & 16 ? lt(
      k,
      D,
      m,
      $,
      b,
      C,
      L,
      P,
      R
    ) : M(k, b, C, !0) : (K & 8 && d(m, ""), G & 16 && X(
      D,
      m,
      $,
      b,
      C,
      L,
      P,
      R
    ));
  }, Ee = (u, f, m, $, b, C, L, P, R) => {
    u = u || zt, f = f || zt;
    const k = u.length, K = f.length, D = Math.min(k, K);
    let U;
    for (U = 0; U < D; U++) {
      const G = f[U] = R ? gt(f[U]) : ut(f[U]);
      g(
        u[U],
        G,
        m,
        null,
        b,
        C,
        L,
        P,
        R
      );
    }
    k > K ? M(
      u,
      b,
      C,
      !0,
      !1,
      D
    ) : X(
      f,
      m,
      $,
      b,
      C,
      L,
      P,
      R,
      D
    );
  }, lt = (u, f, m, $, b, C, L, P, R) => {
    let k = 0;
    const K = f.length;
    let D = u.length - 1, U = K - 1;
    for (; k <= D && k <= U; ) {
      const G = u[k], re = f[k] = R ? gt(f[k]) : ut(f[k]);
      if (Qt(G, re))
        g(
          G,
          re,
          m,
          null,
          b,
          C,
          L,
          P,
          R
        );
      else
        break;
      k++;
    }
    for (; k <= D && k <= U; ) {
      const G = u[D], re = f[U] = R ? gt(f[U]) : ut(f[U]);
      if (Qt(G, re))
        g(
          G,
          re,
          m,
          null,
          b,
          C,
          L,
          P,
          R
        );
      else
        break;
      D--, U--;
    }
    if (k > D) {
      if (k <= U) {
        const G = U + 1, re = G < K ? f[G].el : $;
        for (; k <= U; )
          g(
            null,
            f[k] = R ? gt(f[k]) : ut(f[k]),
            m,
            re,
            b,
            C,
            L,
            P,
            R
          ), k++;
      }
    } else if (k > U)
      for (; k <= D; )
        Be(u[k], b, C, !0), k++;
    else {
      const G = k, re = k, pe = /* @__PURE__ */ new Map();
      for (k = re; k <= U; k++) {
        const J = f[k] = R ? gt(f[k]) : ut(f[k]);
        J.key != null && pe.set(J.key, k);
      }
      let ue, Le = 0;
      const $e = U - re + 1;
      let Ze = !1, Qe = 0;
      const _ = new Array($e);
      for (k = 0; k < $e; k++) _[k] = 0;
      for (k = G; k <= D; k++) {
        const J = u[k];
        if (Le >= $e) {
          Be(J, b, C, !0);
          continue;
        }
        let ne;
        if (J.key != null)
          ne = pe.get(J.key);
        else
          for (ue = re; ue <= U; ue++)
            if (_[ue - re] === 0 && Qt(J, f[ue])) {
              ne = ue;
              break;
            }
        ne === void 0 ? Be(J, b, C, !0) : (_[ne - re] = k + 1, ne >= Qe ? Qe = ne : Ze = !0, g(
          J,
          f[ne],
          m,
          null,
          b,
          C,
          L,
          P,
          R
        ), Le++);
      }
      const F = Ze ? or(_) : zt;
      for (ue = F.length - 1, k = $e - 1; k >= 0; k--) {
        const J = re + k, ne = f[J], xe = f[J + 1], Ae = J + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xe.el || ml(xe)
        ) : $;
        _[k] === 0 ? g(
          null,
          ne,
          m,
          Ae,
          b,
          C,
          L,
          P,
          R
        ) : Ze && (ue < 0 || k !== F[ue] ? Oe(ne, m, Ae, 2) : ue--);
      }
    }
  }, Oe = (u, f, m, $, b = null) => {
    const { el: C, type: L, transition: P, children: R, shapeFlag: k } = u;
    if (k & 6) {
      Oe(u.component.subTree, f, m, $);
      return;
    }
    if (k & 128) {
      u.suspense.move(f, m, $);
      return;
    }
    if (k & 64) {
      L.move(u, f, m, Me);
      return;
    }
    if (L === ce) {
      n(C, f, m);
      for (let D = 0; D < R.length; D++)
        Oe(R[D], f, m, $);
      n(u.anchor, f, m);
      return;
    }
    if (L === Qs) {
      j(u, f, m);
      return;
    }
    if ($ !== 2 && k & 1 && P)
      if ($ === 0)
        P.beforeEnter(C), n(C, f, m), Ne(() => P.enter(C), b);
      else {
        const { leave: D, delayLeave: U, afterLeave: G } = P, re = () => {
          u.ctx.isUnmounted ? i(C) : n(C, f, m);
        }, pe = () => {
          C._isLeaving && C[Co](
            !0
            /* cancelled */
          ), D(C, () => {
            re(), G && G();
          });
        };
        U ? U(C, re, pe) : pe();
      }
    else
      n(C, f, m);
  }, Be = (u, f, m, $ = !1, b = !1) => {
    const {
      type: C,
      props: L,
      ref: P,
      children: R,
      dynamicChildren: k,
      shapeFlag: K,
      patchFlag: D,
      dirs: U,
      cacheIndex: G
    } = u;
    if (D === -2 && (b = !1), P != null && (xt(), rs(P, null, m, u, !0), Ct()), G != null && (f.renderCache[G] = void 0), K & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const re = K & 1 && U, pe = !as(u);
    let ue;
    if (pe && (ue = L && L.onVnodeBeforeUnmount) && at(ue, f, u), K & 6)
      se(u.component, m, $);
    else {
      if (K & 128) {
        u.suspense.unmount(m, $);
        return;
      }
      re && Pt(u, null, f, "beforeUnmount"), K & 64 ? u.type.remove(
        u,
        f,
        m,
        Me,
        $
      ) : k && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !k.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== ce || D > 0 && D & 64) ? M(
        k,
        f,
        m,
        !1,
        !0
      ) : (C === ce && D & 384 || !b && K & 16) && M(R, f, m), $ && Bt(u);
    }
    (pe && (ue = L && L.onVnodeUnmounted) || re) && Ne(() => {
      ue && at(ue, f, u), re && Pt(u, null, f, "unmounted");
    }, m);
  }, Bt = (u) => {
    const { type: f, el: m, anchor: $, transition: b } = u;
    if (f === ce) {
      $t(m, $);
      return;
    }
    if (f === Qs) {
      E(u);
      return;
    }
    const C = () => {
      i(m), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: L, delayLeave: P } = b, R = () => L(m, C);
      P ? P(u.el, C, R) : R();
    } else
      C();
  }, $t = (u, f) => {
    let m;
    for (; u !== f; )
      m = v(u), i(u), u = m;
    i(f);
  }, se = (u, f, m) => {
    const { bum: $, scope: b, job: C, subTree: L, um: P, m: R, a: k } = u;
    Qn(R), Qn(k), $ && $s($), b.stop(), C && (C.flags |= 8, Be(L, u, f, m)), P && Ne(P, f), Ne(() => {
      u.isUnmounted = !0;
    }, f);
  }, M = (u, f, m, $ = !1, b = !1, C = 0) => {
    for (let L = C; L < u.length; L++)
      Be(u[L], f, m, $, b);
  }, ae = (u) => {
    if (u.shapeFlag & 6)
      return ae(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = v(u.anchor || u.el), m = f && f[Yi];
    return m ? v(m) : f;
  };
  let be = !1;
  const we = (u, f, m) => {
    let $;
    u == null ? f._vnode && (Be(f._vnode, null, null, !0), $ = f._vnode.component) : g(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, be || (be = !0, jn($), Ki(), be = !1);
  }, Me = {
    p: g,
    um: Be,
    m: Oe,
    r: Bt,
    mt: ye,
    mc: X,
    pc: oe,
    pbc: Se,
    n: ae,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: Uo(we)
  };
}
function Zs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function It({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function lr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pn(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (Y(n) && Y(i))
    for (let l = 0; l < n.length; l++) {
      const o = n[l];
      let r = i[l];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = i[l] = gt(i[l]), r.el = o.el), !s && r.patchFlag !== -2 && Pn(o, r)), r.type === Us && (r.patchFlag === -1 && (r = i[l] = gt(r)), r.el = o.el), r.type === Rt && !r.el && (r.el = o.el);
    }
}
function or(e) {
  const t = e.slice(), s = [0];
  let n, i, l, o, r;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const p = e[n];
    if (p !== 0) {
      if (i = s[s.length - 1], e[i] < p) {
        t[n] = i, s.push(n);
        continue;
      }
      for (l = 0, o = s.length - 1; l < o; )
        r = l + o >> 1, e[s[r]] < p ? l = r + 1 : o = r;
      p < e[s[l]] && (l > 0 && (t[n] = s[l - 1]), s[l] = n);
    }
  }
  for (l = s.length, o = s[l - 1]; l-- > 0; )
    s[l] = o, o = t[o];
  return s;
}
function hl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : hl(t);
}
function Qn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ml(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ml(t.subTree) : null;
}
const vl = (e) => e.__isSuspense;
function rr(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : vo(e);
}
const ce = /* @__PURE__ */ Symbol.for("v-fgt"), Us = /* @__PURE__ */ Symbol.for("v-txt"), Rt = /* @__PURE__ */ Symbol.for("v-cmt"), Qs = /* @__PURE__ */ Symbol.for("v-stc"), us = [];
let Je = null;
function I(e = !1) {
  us.push(Je = e ? null : []);
}
function ar() {
  us.pop(), Je = us[us.length - 1] || null;
}
let hs = 1;
function ei(e, t = !1) {
  hs += e, e < 0 && Je && t && (Je.hasOnce = !0);
}
function gl(e) {
  return e.dynamicChildren = hs > 0 ? Je || zt : null, ar(), hs > 0 && Je && Je.push(e), e;
}
function N(e, t, s, n, i, l) {
  return gl(
    c(
      e,
      t,
      s,
      n,
      i,
      l,
      !0
    )
  );
}
function Ht(e, t, s, n, i) {
  return gl(
    _e(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function bl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yl = ({ key: e }) => e ?? null, Fs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ je(e) || te(e) ? { i: st, r: e, k: t, f: !!s } : e : null);
function c(e, t = null, s = null, n = 0, i = null, l = e === ce ? 0 : 1, o = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yl(t),
    ref: t && Fs(t),
    scopeId: Gi,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: st
  };
  return r ? (In(a, s), l & 128 && e.normalize(a)) : s && (a.shapeFlag |= Ce(s) ? 8 : 16), hs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Je.push(a), a;
}
const _e = cr;
function cr(e, t = null, s = null, n = 0, i = null, l = !1) {
  if ((!e || e === Io) && (e = Rt), bl(e)) {
    const r = Xt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && In(r, s), hs > 0 && !l && Je && (r.shapeFlag & 6 ? Je[Je.indexOf(e)] = r : Je.push(r)), r.patchFlag = -2, r;
  }
  if (_r(e) && (e = e.__vccOpts), t) {
    t = ur(t);
    let { class: r, style: a } = t;
    r && !Ce(r) && (t.class = q(r)), he(a) && (/* @__PURE__ */ Mn(a) && !Y(a) && (a = He({}, a)), t.style = tt(a));
  }
  const o = Ce(e) ? 1 : vl(e) ? 128 : wo(e) ? 64 : he(e) ? 4 : te(e) ? 2 : 0;
  return c(
    e,
    t,
    s,
    n,
    i,
    o,
    l,
    !0
  );
}
function ur(e) {
  return e ? /* @__PURE__ */ Mn(e) || al(e) ? He({}, e) : e : null;
}
function Xt(e, t, s = !1, n = !1) {
  const { props: i, ref: l, patchFlag: o, children: r, transition: a } = e, p = t ? fr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && yl(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && l ? Y(l) ? l.concat(Fs(t)) : [l, Fs(t)] : Fs(t)
    ) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ce ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xt(e.ssContent),
    ssFallback: e.ssFallback && Xt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && Rn(
    d,
    a.clone(d)
  ), d;
}
function Pe(e = " ", t = 0) {
  return _e(Us, null, e, t);
}
function Te(e = "", t = !1) {
  return t ? (I(), Ht(Rt, null, e)) : _e(Rt, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean" ? _e(Rt) : Y(e) ? _e(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : bl(e) ? gt(e) : _e(Us, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xt(e);
}
function In(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), In(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !al(t) ? t._ctx = st : i === 3 && st && (st.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else te(t) ? (t = { default: t, _ctx: st }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Pe(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function fr(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = q([t.class, n.class]));
      else if (i === "style")
        t.style = tt([t.style, n.style]);
      else if (Ls(i)) {
        const l = t[i], o = n[i];
        o && l !== o && !(Y(l) && l.includes(o)) && (t[i] = l ? [].concat(l, o) : o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function at(e, t, s, n = null) {
  pt(e, t, 7, [
    s,
    n
  ]);
}
const dr = nl();
let pr = 0;
function hr(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || dr, l = {
    uid: pr++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Nl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ul(n, i),
    emitsOptions: il(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ve,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ve,
    data: ve,
    props: ve,
    attrs: ve,
    slots: ve,
    refs: ve,
    setupState: ve,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Ko.bind(null, l), e.ce && e.ce(l), l;
}
let ze = null;
const mr = () => ze || st;
let Is, mn;
{
  const e = Ns(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (l) => {
      i.length > 1 ? i.forEach((o) => o(l)) : i[0](l);
    };
  };
  Is = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ze = s
  ), mn = t(
    "__VUE_SSR_SETTERS__",
    (s) => ms = s
  );
}
const _s = (e) => {
  const t = ze;
  return Is(e), e.scope.on(), () => {
    e.scope.off(), Is(t);
  };
}, ti = () => {
  ze && ze.scope.off(), Is(null);
};
function _l(e) {
  return e.vnode.shapeFlag & 4;
}
let ms = !1;
function vr(e, t = !1, s = !1) {
  t && mn(t);
  const { props: n, children: i } = e.vnode, l = _l(e);
  Xo(e, n, l, t), tr(e, i, s || t);
  const o = l ? gr(e, t) : void 0;
  return t && mn(!1), o;
}
function gr(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Lo);
  const { setup: n } = s;
  if (n) {
    xt();
    const i = e.setupContext = n.length > 1 ? yr(e) : null, l = _s(e), o = bs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), r = _i(o);
    if (Ct(), l(), (r || e.sp) && !as(e) && Zi(e), r) {
      if (o.then(ti, ti), t)
        return o.then((a) => {
          si(e, a);
        }).catch((a) => {
          js(a, e, 0);
        });
      e.asyncDep = o;
    } else
      si(e, o);
  } else
    wl(e);
}
function si(e, t, s) {
  te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = Bi(t)), wl(e);
}
function wl(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || ft);
  {
    const i = _s(e);
    xt();
    try {
      Do(e);
    } finally {
      Ct(), i();
    }
  }
}
const br = {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
  }
};
function yr(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, br),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ws(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bi(lo(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in cs)
        return cs[s](e);
    },
    has(t, s) {
      return s in t || s in cs;
    }
  })) : e.proxy;
}
function _r(e) {
  return te(e) && "__vccOpts" in e;
}
const ke = (e, t) => /* @__PURE__ */ uo(e, t, ms), wr = "3.5.28";
/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vn;
const ni = typeof window < "u" && window.trustedTypes;
if (ni)
  try {
    vn = /* @__PURE__ */ ni.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const xl = vn ? (e) => vn.createHTML(e) : (e) => e, xr = "http://www.w3.org/2000/svg", Cr = "http://www.w3.org/1998/Math/MathML", vt = typeof document < "u" ? document : null, ii = vt && /* @__PURE__ */ vt.createElement("template"), Sr = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? vt.createElementNS(xr, e) : t === "mathml" ? vt.createElementNS(Cr, e) : s ? vt.createElement(e, { is: s }) : vt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => vt.createTextNode(e),
  createComment: (e) => vt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => vt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, i, l) {
    const o = s ? s.previousSibling : t.lastChild;
    if (i && (i === l || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === l || !(i = i.nextSibling)); )
        ;
    else {
      ii.innerHTML = xl(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const r = ii.content;
      if (n === "svg" || n === "mathml") {
        const a = r.firstChild;
        for (; a.firstChild; )
          r.appendChild(a.firstChild);
        r.removeChild(a);
      }
      t.insertBefore(r, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, kr = /* @__PURE__ */ Symbol("_vtc");
function $r(e, t, s) {
  const n = e[kr];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const li = /* @__PURE__ */ Symbol("_vod"), Tr = /* @__PURE__ */ Symbol("_vsh"), Fr = /* @__PURE__ */ Symbol(""), Mr = /(?:^|;)\s*display\s*:/;
function Ar(e, t, s) {
  const n = e.style, i = Ce(s);
  let l = !1;
  if (s && !i) {
    if (t)
      if (Ce(t))
        for (const o of t.split(";")) {
          const r = o.slice(0, o.indexOf(":")).trim();
          s[r] == null && Ms(n, r, "");
        }
      else
        for (const o in t)
          s[o] == null && Ms(n, o, "");
    for (const o in s)
      o === "display" && (l = !0), Ms(n, o, s[o]);
  } else if (i) {
    if (t !== s) {
      const o = n[Fr];
      o && (s += ";" + o), n.cssText = s, l = Mr.test(s);
    }
  } else t && e.removeAttribute("style");
  li in e && (e[li] = l ? n.display : "", e[Tr] && (n.display = "none"));
}
const oi = /\s*!important$/;
function Ms(e, t, s) {
  if (Y(s))
    s.forEach((n) => Ms(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Rr(e, t);
    oi.test(s) ? e.setProperty(
      Et(n),
      s.replace(oi, ""),
      "important"
    ) : e[n] = s;
  }
}
const ri = ["Webkit", "Moz", "ms"], en = {};
function Rr(e, t) {
  const s = en[t];
  if (s)
    return s;
  let n = At(t);
  if (n !== "filter" && n in e)
    return en[t] = n;
  n = Ci(n);
  for (let i = 0; i < ri.length; i++) {
    const l = ri[i] + n;
    if (l in e)
      return en[t] = l;
  }
  return t;
}
const ai = "http://www.w3.org/1999/xlink";
function ci(e, t, s, n, i, l = Ll(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(ai, t.slice(6, t.length)) : e.setAttributeNS(ai, t, s) : s == null || l && !ki(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : dt(s) ? String(s) : s
  );
}
function ui(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? xl(s) : s);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const r = l === "OPTION" ? e.getAttribute("value") || "" : e.value, a = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (r !== a || !("_value" in e)) && (e.value = a), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const r = typeof e[t];
    r === "boolean" ? s = ki(s) : s == null && r === "string" ? (s = "", o = !0) : r === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Kt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Er(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const fi = /* @__PURE__ */ Symbol("_vei");
function Or(e, t, s, n, i = null) {
  const l = e[fi] || (e[fi] = {}), o = l[t];
  if (n && o)
    o.value = n;
  else {
    const [r, a] = Pr(t);
    if (n) {
      const p = l[t] = Dr(
        n,
        i
      );
      Kt(e, r, p, a);
    } else o && (Er(e, r, o, a), l[t] = void 0);
  }
}
const di = /(?:Once|Passive|Capture)$/;
function Pr(e) {
  let t;
  if (di.test(e)) {
    t = {};
    let n;
    for (; n = e.match(di); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Et(e.slice(2)), t];
}
let tn = 0;
const Ir = /* @__PURE__ */ Promise.resolve(), Lr = () => tn || (Ir.then(() => tn = 0), tn = Date.now());
function Dr(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    pt(
      Nr(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Lr(), s;
}
function Nr(e, t) {
  if (Y(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const pi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vr = (e, t, s, n, i, l) => {
  const o = i === "svg";
  t === "class" ? $r(e, n, o) : t === "style" ? Ar(e, s, n) : Ls(t) ? bn(t) || Or(e, t, s, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jr(e, t, n, o)) ? (ui(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ci(e, t, n, o, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ce(n)) ? ui(e, At(t), n, l, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ci(e, t, n, o));
};
function jr(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pi(t) && te(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return pi(t) && Ce(s) ? !1 : t in e;
}
const hi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (s) => $s(t, s) : t;
};
function Hr(e) {
  e.target.composing = !0;
}
function mi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sn = /* @__PURE__ */ Symbol("_assign");
function vi(e, t, s) {
  return t && (e = e.trim()), s && (e = wn(e)), e;
}
const wt = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[sn] = hi(i);
    const l = n || i.props && i.props.type === "number";
    Kt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[sn](vi(e.value, s, l));
    }), (s || l) && Kt(e, "change", () => {
      e.value = vi(e.value, s, l);
    }), t || (Kt(e, "compositionstart", Hr), Kt(e, "compositionend", mi), Kt(e, "change", mi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: l } }, o) {
    if (e[sn] = hi(o), e.composing) return;
    const r = (l || e.type === "number") && !/^0\d/.test(e.value) ? wn(e.value) : e.value, a = t ?? "";
    r !== a && (document.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a));
  }
}, Br = ["ctrl", "shift", "alt", "meta"], Ur = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Br.some((s) => e[`${s}Key`] && !t.includes(s))
}, ie = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = ((i, ...l) => {
    for (let o = 0; o < t.length; o++) {
      const r = Ur[t[o]];
      if (r && r(i, t)) return;
    }
    return e(i, ...l);
  }));
}, Wr = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Kr = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = ((i) => {
    if (!("key" in i))
      return;
    const l = Et(i.key);
    if (t.some(
      (o) => o === l || Wr[o] === l
    ))
      return e(i);
  }));
}, zr = /* @__PURE__ */ He({ patchProp: Vr }, Sr);
let gi;
function Gr() {
  return gi || (gi = nr(zr));
}
const qr = ((...e) => {
  const t = Gr().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = Yr(n);
    if (!i) return;
    const l = t._component;
    !te(l) && !l.render && !l.template && (l.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, Jr(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function Jr(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Yr(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
const Xr = /* @__PURE__ */ gs({
  showFavorites: !1,
  activeTab: "all",
  activeUtility: "all",
  customFolderCount: 0,
  sortBy: "date_desc",
  workflowOnly: !1,
  hideNsfw: !0,
  searchQuery: "",
  availableModels: [],
  availableLoras: [],
  activeModelFilters: /* @__PURE__ */ new Set(),
  activeLoraFilters: /* @__PURE__ */ new Set(),
  selectedFile: null,
  currentRating: 0,
  viewerMode: "carousel",
  // "carousel" | "grid"
  currentFiles: [],
  version: "",
  // UI panel visibility
  settingsVisible: !1,
  infoPanelVisible: !1
});
function Ye() {
  return { state: Xr };
}
function Ks() {
  async function e(g) {
    return (await fetch(`/dnh-assetmanager/history?${g.toString()}`)).json();
  }
  async function t() {
    return (await fetch("/dnh-assetmanager/tags")).json();
  }
  async function s() {
    return (await fetch("/dnh-assetmanager/config")).json();
  }
  async function n() {
    return (await fetch("/dnh-assetmanager/version")).json();
  }
  async function i(g) {
    return (await fetch(`/dnh-assetmanager/subdirs?path=${encodeURIComponent(g)}`)).json();
  }
  async function l(g) {
    return fetch("/dnh-assetmanager/favorite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: g })
    });
  }
  async function o(g) {
    return fetch("/dnh-assetmanager/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: g })
    });
  }
  async function r(g, w) {
    return fetch("/dnh-assetmanager/folders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: g, path: w })
    });
  }
  async function a(g) {
    return fetch("/dnh-assetmanager/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(g)
    });
  }
  async function p(g) {
    return fetch("/dnh-assetmanager/open", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: g })
    });
  }
  async function d(g) {
    return fetch(`/dnh-assetmanager/metadata?path=${encodeURIComponent(g)}`);
  }
  async function h(g) {
    return fetch("/dnh-assetmanager/metadata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(g)
    });
  }
  async function v() {
    return (await fetch("/dnh-assetmanager/index/stats")).json();
  }
  async function S() {
    return fetch("/dnh-assetmanager/index/rebuild", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
  }
  async function T(g) {
    return (await fetch(g)).blob();
  }
  return {
    fetchHistory: e,
    fetchTags: t,
    fetchConfig: s,
    fetchVersion: n,
    fetchSubdirectories: i,
    postFavorite: l,
    postDelete: o,
    postFolder: r,
    postSettings: a,
    postOpenFile: p,
    fetchMetadata: d,
    postMetadata: h,
    fetchIndexStats: v,
    postIndexRebuild: S,
    fetchFileBlob: T
  };
}
const Zr = { class: "cm-top-nav" }, Qr = { class: "cm-brand" }, ea = { class: "cm-version-badge" }, ta = { class: "cm-nav-tabs" }, sa = ["onClick"], na = {
  __name: "TopNav",
  setup(e) {
    const { state: t } = Ye(), s = Re("update"), n = [
      { key: "all", label: "All" },
      { key: "input", label: "Inputs" },
      { key: "output", label: "Outputs" },
      { key: "custom", label: "Custom" }
    ];
    function i(l) {
      t.activeTab = l, s();
    }
    return (l, o) => (I(), N("header", Zr, [
      c("div", Qr, [
        o[1] || (o[1] = c("span", { class: "pi pi-folder cm-brand-icon" }, null, -1)),
        o[2] || (o[2] = c("span", { class: "cm-brand-title" }, "Assets Manager", -1)),
        c("span", ea, z(W(t).version ? `v${W(t).version}` : "v..."), 1)
      ]),
      c("nav", ta, [
        (I(), N(ce, null, Fe(n, (r) => c("button", {
          key: r.key,
          class: q(["cm-nav-btn", { active: W(t).activeTab === r.key }]),
          onClick: (a) => i(r.key)
        }, z(r.label), 11, sa)), 64)),
        c("button", {
          class: q(["cm-icon-only-btn", { active: W(t).settingsVisible }]),
          onClick: o[0] || (o[0] = (r) => W(t).settingsVisible = !W(t).settingsVisible)
        }, [...o[3] || (o[3] = [
          c("span", { class: "pi pi-cog" }, null, -1)
        ])], 2)
      ])
    ]));
  }
}, ia = ["onClick"], la = {
  key: 0,
  class: "pi pi-check"
}, oa = {
  key: 1,
  style: { width: "16px", display: "inline-block" }
}, ra = { class: "cm-context-menu-label" }, aa = ["title", "onClick"], ca = { class: "cm-context-menu-label" }, ua = ["title", "onClick"], Cl = {
  __name: "FilterMenu",
  setup(e, { expose: t }) {
    const { state: s } = Ye(), n = Re("update"), i = /* @__PURE__ */ V(!1), l = /* @__PURE__ */ V({ x: 0, y: 0 }), o = /* @__PURE__ */ V(null);
    let r = null;
    const a = [
      { value: "all", label: "All types" },
      { value: "generation", label: "Generated (has workflow)" },
      { value: "input", label: "Input (no workflow)" }
    ];
    function p(j) {
      return j.split(/[\\/]/).pop();
    }
    function d() {
      i.value = !1;
    }
    async function h(j, E) {
      j.stopPropagation(), r = E, i.value = !0, await qe(), v();
    }
    function v() {
      if (!o.value || !r) return;
      const j = r.getBoundingClientRect(), E = o.value.getBoundingClientRect();
      let O = j.left, y = j.bottom + 4;
      O + E.width > window.innerWidth && (O = window.innerWidth - E.width - 4), y + E.height > window.innerHeight && (y = j.top - E.height - 4), l.value = { x: O, y };
    }
    function S(j) {
      s.activeUtility = j, d(), n();
    }
    function T(j) {
      s.activeModelFilters.has(j) ? s.activeModelFilters.delete(j) : s.activeModelFilters.add(j), d(), n(), qe(() => r == null ? void 0 : r.click());
    }
    function g() {
      s.activeModelFilters.clear(), d(), n(), qe(() => r == null ? void 0 : r.click());
    }
    function w(j) {
      s.activeLoraFilters.has(j) ? s.activeLoraFilters.delete(j) : s.activeLoraFilters.add(j), d(), n(), qe(() => r == null ? void 0 : r.click());
    }
    function x() {
      s.activeLoraFilters.clear(), d(), n(), qe(() => r == null ? void 0 : r.click());
    }
    function A() {
      d();
    }
    return Vt(() => document.addEventListener("click", A)), jt(() => document.removeEventListener("click", A)), t({ show: h }), (j, E) => (I(), Ht(ys, { to: "body" }, [
      i.value ? (I(), N("div", {
        key: 0,
        ref_key: "menuEl",
        ref: o,
        class: "cm-context-menu",
        style: tt({ left: l.value.x + "px", top: l.value.y + "px" })
      }, [
        E[4] || (E[4] = c("div", { class: "cm-context-menu-label" }, "Asset Type", -1)),
        (I(), N(ce, null, Fe(a, (O) => c("button", {
          key: O.value,
          class: q(["cm-context-menu-item", { "cm-active": W(s).activeUtility === O.value }]),
          onClick: ie((y) => S(O.value), ["stop"])
        }, [
          W(s).activeUtility === O.value ? (I(), N("span", la)) : (I(), N("span", oa)),
          Pe(" " + z(O.label), 1)
        ], 10, ia)), 64)),
        W(s).availableModels.length > 0 ? (I(), N(ce, { key: 0 }, [
          E[1] || (E[1] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          c("div", ra, " Checkpoint" + z(W(s).activeModelFilters.size > 0 ? ` (${W(s).activeModelFilters.size})` : ""), 1),
          W(s).activeModelFilters.size > 0 ? (I(), N("button", {
            key: 0,
            class: "cm-context-menu-item",
            onClick: ie(g, ["stop"])
          }, [...E[0] || (E[0] = [
            c("span", { class: "pi pi-stop cm-check-icon" }, null, -1),
            Pe(" Clear all ", -1)
          ])])) : Te("", !0),
          (I(!0), N(ce, null, Fe(W(s).availableModels.slice(0, 15), (O) => (I(), N("button", {
            key: O,
            class: q(["cm-context-menu-item", { "cm-active": W(s).activeModelFilters.has(O) }]),
            title: O,
            onClick: ie((y) => T(O), ["stop"])
          }, [
            c("span", {
              class: q(["pi", "cm-check-icon", W(s).activeModelFilters.has(O) ? "pi-check-square" : "pi-stop"])
            }, null, 2),
            Pe(" " + z(p(O)), 1)
          ], 10, aa))), 128))
        ], 64)) : Te("", !0),
        W(s).availableLoras.length > 0 ? (I(), N(ce, { key: 1 }, [
          E[3] || (E[3] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          c("div", ca, " LoRA" + z(W(s).activeLoraFilters.size > 0 ? ` (${W(s).activeLoraFilters.size})` : ""), 1),
          W(s).activeLoraFilters.size > 0 ? (I(), N("button", {
            key: 0,
            class: "cm-context-menu-item",
            onClick: ie(x, ["stop"])
          }, [...E[2] || (E[2] = [
            c("span", { class: "pi pi-stop cm-check-icon" }, null, -1),
            Pe(" Clear all ", -1)
          ])])) : Te("", !0),
          (I(!0), N(ce, null, Fe(W(s).availableLoras.slice(0, 15), (O) => (I(), N("button", {
            key: O,
            class: q(["cm-context-menu-item", { "cm-active": W(s).activeLoraFilters.has(O) }]),
            title: O,
            onClick: ie((y) => w(O), ["stop"])
          }, [
            c("span", {
              class: q(["pi", "cm-check-icon", W(s).activeLoraFilters.has(O) ? "pi-check-square" : "pi-stop"])
            }, null, 2),
            Pe(" " + z(p(O)), 1)
          ], 10, ua))), 128))
        ], 64)) : Te("", !0)
      ], 4)) : Te("", !0)
    ]));
  }
}, fa = ["onClick"], da = {
  key: 0,
  class: "pi pi-check"
}, pa = {
  key: 1,
  style: { width: "16px", display: "inline-block" }
}, Sl = {
  __name: "SortMenu",
  setup(e, { expose: t }) {
    const { state: s } = Ye(), n = Re("update"), i = /* @__PURE__ */ V(!1), l = /* @__PURE__ */ V({ x: 0, y: 0 }), o = /* @__PURE__ */ V(null), r = [
      { value: "date_desc", label: "Date (newest first)" },
      { value: "date_asc", label: "Date (oldest first)" },
      { value: "size_desc", label: "Size (largest first)" },
      { value: "size_asc", label: "Size (smallest first)" },
      { value: "name_asc", label: "Name (A → Z)" },
      { value: "name_desc", label: "Name (Z → A)" }
    ];
    function a() {
      i.value = !1;
    }
    async function p(v, S) {
      if (v.stopPropagation(), i.value = !0, await qe(), !o.value || !S) return;
      const T = S.getBoundingClientRect(), g = o.value.getBoundingClientRect();
      let w = T.left, x = T.bottom + 4;
      w + g.width > window.innerWidth && (w = window.innerWidth - g.width - 4), x + g.height > window.innerHeight && (x = T.top - g.height - 4), l.value = { x: w, y: x };
    }
    function d(v) {
      s.sortBy = v, a(), n();
    }
    function h() {
      a();
    }
    return Vt(() => document.addEventListener("click", h)), jt(() => document.removeEventListener("click", h)), t({ show: p }), (v, S) => (I(), Ht(ys, { to: "body" }, [
      i.value ? (I(), N("div", {
        key: 0,
        ref_key: "menuEl",
        ref: o,
        class: "cm-context-menu",
        style: tt({ left: l.value.x + "px", top: l.value.y + "px" })
      }, [
        S[0] || (S[0] = c("div", { class: "cm-context-menu-label" }, "Sort By", -1)),
        (I(), N(ce, null, Fe(r, (T) => c("button", {
          key: T.value,
          class: q(["cm-context-menu-item", { "cm-active": W(s).sortBy === T.value }]),
          onClick: ie((g) => d(T.value), ["stop"])
        }, [
          W(s).sortBy === T.value ? (I(), N("span", da)) : (I(), N("span", pa)),
          Pe(" " + z(T.label), 1)
        ], 10, fa)), 64))
      ], 4)) : Te("", !0)
    ]));
  }
}, ha = { class: "cm-search-container" }, ma = { class: "cm-search-wrapper" }, va = { class: "cm-action-buttons" }, ga = ["title"], ba = ["title"], ya = ["title"], _a = ["title"], wa = {
  __name: "SearchBar",
  setup(e) {
    const { state: t } = Ye(), s = Re("update"), n = /* @__PURE__ */ V(null), i = /* @__PURE__ */ V(null), l = /* @__PURE__ */ V(null), o = /* @__PURE__ */ V(null), r = [
      { value: "date_desc", label: "Date (newest first)" },
      { value: "date_asc", label: "Date (oldest first)" },
      { value: "size_desc", label: "Size (largest first)" },
      { value: "size_asc", label: "Size (smallest first)" },
      { value: "name_asc", label: "Name (A → Z)" },
      { value: "name_desc", label: "Name (Z → A)" }
    ], a = ke(() => {
      const w = r.find((x) => x.value === t.sortBy);
      return w ? w.label : "Sort";
    }), p = ke(
      () => t.activeUtility !== "all" || t.activeModelFilters.size > 0 || t.activeLoraFilters.size > 0
    );
    function d(w) {
      var x;
      (x = l.value) == null || x.show(w, n.value);
    }
    function h() {
      const [w, x] = t.sortBy.split("_");
      t.sortBy = `${w}_${x === "desc" ? "asc" : "desc"}`, s();
    }
    function v(w) {
      var x;
      (x = o.value) == null || x.show(w, i.value);
    }
    function S() {
      t.workflowOnly = !t.workflowOnly, s();
    }
    function T() {
      t.showFavorites = !t.showFavorites, s();
    }
    function g() {
      t.hideNsfw = !t.hideNsfw, s();
    }
    return (w, x) => (I(), N(ce, null, [
      c("div", ha, [
        c("div", ma, [
          x[2] || (x[2] = c("span", { class: "pi pi-search cm-search-icon" }, null, -1)),
          _t(c("input", {
            type: "text",
            placeholder: 'Search: name, seed:, model:, prompt:"..."',
            title: 'Search tips: type freely to search all fields, or use prefixes like seed:12345 model:sdxl prompt:"a brown kitty" lora:detail node:KSampler steps:20 cfg:7 sampler:euler filename:img type:png size:2.3 path:/output date:"Jan 15". Wrap values with spaces/commas in quotes. Multiple terms are AND-matched.',
            class: "cm-search-input",
            "onUpdate:modelValue": x[0] || (x[0] = (A) => W(t).searchQuery = A),
            onInput: x[1] || (x[1] = (A) => W(s)())
          }, null, 544), [
            [wt, W(t).searchQuery]
          ])
        ]),
        c("div", va, [
          c("button", {
            ref_key: "filterBtnRef",
            ref: n,
            class: q(["cm-tool-btn", { active: p.value }]),
            title: "Filter options",
            onClick: d
          }, [...x[3] || (x[3] = [
            c("span", { class: "pi pi-filter" }, null, -1)
          ])], 2),
          c("button", {
            ref_key: "sortBtnRef",
            ref: i,
            class: q(["cm-tool-btn", { active: W(t).sortBy !== "date_desc" }]),
            title: a.value,
            onClick: h,
            onContextmenu: ie(v, ["prevent"])
          }, [...x[4] || (x[4] = [
            c("span", { class: "pi pi-sort-alt" }, null, -1)
          ])], 42, ga),
          c("button", {
            class: q(["cm-tool-btn", { active: W(t).workflowOnly }]),
            title: W(t).workflowOnly ? "Showing workflow assets only" : "Show only assets with workflows",
            onClick: S
          }, [...x[5] || (x[5] = [
            c("span", { class: "pi pi-sitemap" }, null, -1)
          ])], 10, ba),
          c("button", {
            class: q(["cm-tool-btn", { active: W(t).showFavorites }]),
            title: W(t).showFavorites ? "Showing favorites only" : "Show favorites only",
            onClick: T
          }, [...x[6] || (x[6] = [
            c("span", { class: "pi pi-bookmark" }, null, -1)
          ])], 10, ya),
          c("button", {
            class: q(["cm-tool-btn cm-nsfw-toggle", { active: W(t).hideNsfw }]),
            title: W(t).hideNsfw ? "NSFW hidden" : "NSFW visible",
            onClick: g
          }, [
            c("span", {
              class: q(W(t).hideNsfw ? "pi pi-eye-slash" : "pi pi-eye")
            }, null, 2)
          ], 10, _a)
        ])
      ]),
      _e(Cl, {
        ref_key: "filterMenuRef",
        ref: l
      }, null, 512),
      _e(Sl, {
        ref_key: "sortMenuRef",
        ref: o
      }, null, 512)
    ], 64));
  }
}, xa = { class: "cm-active-filters" }, Ca = ["onClick"], Sa = {
  __name: "FilterChips",
  setup(e) {
    const { state: t } = Ye(), s = Re("update"), n = {
      date_asc: "Oldest first",
      size_desc: "Largest first",
      size_asc: "Smallest first",
      name_asc: "Name A→Z",
      name_desc: "Name Z→A"
    }, i = ke(() => {
      const l = [];
      t.activeUtility !== "all" && l.push({
        label: `Type: ${t.activeUtility}`,
        clear: () => {
          t.activeUtility = "all", s();
        }
      });
      for (const o of t.activeModelFilters) {
        const r = o.split(/[\\/]/).pop();
        l.push({
          label: `Model: ${r}`,
          clear: () => {
            t.activeModelFilters.delete(o), s();
          }
        });
      }
      for (const o of t.activeLoraFilters) {
        const r = o.split(/[\\/]/).pop();
        l.push({
          label: `LoRA: ${r}`,
          clear: () => {
            t.activeLoraFilters.delete(o), s();
          }
        });
      }
      return t.showFavorites && l.push({
        label: "Favorites",
        clear: () => {
          t.showFavorites = !1, s();
        }
      }), t.workflowOnly && l.push({
        label: "Workflows only",
        clear: () => {
          t.workflowOnly = !1, s();
        }
      }), t.sortBy !== "date_desc" && l.push({
        label: `Sort: ${n[t.sortBy] || t.sortBy}`,
        clear: () => {
          t.sortBy = "date_desc", s();
        }
      }), l;
    });
    return (l, o) => (I(), N("div", xa, [
      (I(!0), N(ce, null, Fe(i.value, (r) => (I(), N("div", {
        key: r.label,
        class: "cm-filter-chip"
      }, [
        Pe(z(r.label) + " ", 1),
        c("span", {
          class: "pi pi-times cm-chip-close",
          onClick: (a) => r.clear()
        }, null, 8, Ca)
      ]))), 128))
    ]));
  }
}, ka = { class: "cm-status-line" }, $a = { class: "cm-stats-text" }, Ta = {
  __name: "StatusLine",
  setup(e) {
    const { state: t } = Ye(), s = { all: "All", input: "Inputs", output: "Outputs", custom: "Custom" }, n = ke(() => {
      const i = t.currentFiles.length;
      return `assets: ${i}/${i} | ${s[t.activeTab] || t.activeTab}`;
    });
    return (i, l) => (I(), N("div", ka, [
      c("span", $a, z(n.value), 1),
      _e(Sa)
    ]));
  }
}, Fa = ["title"], Ma = {
  key: 0,
  class: "cm-workflow-badge",
  title: "Has embedded workflow"
}, Aa = {
  key: 1,
  class: "cm-date-badge"
}, Ra = ["src"], Ea = { class: "cm-card-overlay" }, Oa = ["title"], Pa = { class: "cm-overlay-meta" }, Ia = { class: "cm-overlay-type" }, La = { class: "cm-overlay-size" }, Da = {
  __name: "AssetCard",
  props: {
    file: { type: Object, required: !0 }
  },
  emits: ["open-viewer", "toggle-favorite", "context-menu"],
  setup(e) {
    const t = e, { state: s } = Ye(), n = Re("comfyApp"), i = ke(() => {
      const a = t.file.filename;
      return a.length > 20 ? a.substring(0, 17) + "..." : a;
    }), l = ke(() => t.file.created_at ? new Date(t.file.created_at * 1e3).toLocaleDateString(void 0, {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) : ""), o = ke(() => s.selectedFile === t.file);
    async function r() {
      const a = await (await fetch(t.file.url)).blob();
      await n.handleFile(a);
    }
    return (a, p) => (I(), N("div", {
      class: q(["cm-card", { selected: o.value }]),
      onClick: r,
      onDblclick: p[1] || (p[1] = ie((d) => a.$emit("open-viewer"), ["prevent"])),
      onContextmenu: p[2] || (p[2] = ie((d) => a.$emit("context-menu", d), ["prevent"]))
    }, [
      c("button", {
        class: q(["cm-fav-btn", { active: e.file.is_favorite }]),
        title: e.file.is_favorite ? "Remove from favorites" : "Add to favorites",
        onClick: p[0] || (p[0] = ie((d) => a.$emit("toggle-favorite"), ["stop"]))
      }, [
        c("span", {
          class: q(["pi", e.file.is_favorite ? "pi-bookmark-fill" : "pi-bookmark"])
        }, null, 2)
      ], 10, Fa),
      e.file.has_workflow ? (I(), N("div", Ma, [...p[3] || (p[3] = [
        c("span", { class: "pi pi-sitemap" }, null, -1)
      ])])) : Te("", !0),
      l.value ? (I(), N("div", Aa, z(l.value), 1)) : Te("", !0),
      c("img", {
        src: e.file.url,
        loading: "lazy"
      }, null, 8, Ra),
      c("div", Ea, [
        c("span", {
          class: "cm-overlay-name",
          title: e.file.filename
        }, z(i.value), 9, Oa),
        c("div", Pa, [
          c("span", Ia, z(e.file.file_type), 1),
          c("span", La, z(e.file.file_size_formatted), 1)
        ])
      ])
    ], 34));
  }
}, Na = { class: "cm-asset-grid" }, Va = {
  key: 0,
  class: "cm-empty-state"
}, ja = {
  __name: "AssetGrid",
  emits: ["open-viewer", "toggle-favorite", "context-menu"],
  setup(e) {
    const { state: t } = Ye();
    return (s, n) => (I(), N("section", Na, [
      W(t).activeTab === "custom" && W(t).customFolderCount === 0 ? (I(), N("div", Va, [...n[0] || (n[0] = [
        c("span", { class: "pi pi-folder-open cm-empty-icon" }, null, -1),
        c("p", { class: "cm-empty-text" }, "No custom folders configured", -1),
        c("p", { class: "cm-empty-hint" }, [
          Pe("Click the "),
          c("span", { class: "pi pi-cog" }),
          Pe(" settings button to add custom paths.")
        ], -1)
      ])])) : (I(!0), N(ce, { key: 1 }, Fe(W(t).currentFiles, (i) => (I(), Ht(Da, {
        key: i.full_path,
        file: i,
        onOpenViewer: (l) => s.$emit("open-viewer", i),
        onToggleFavorite: (l) => s.$emit("toggle-favorite", i),
        onContextMenu: (l) => s.$emit("context-menu", l, i)
      }, null, 8, ["file", "onOpenViewer", "onToggleFavorite", "onContextMenu"]))), 128))
    ]));
  }
}, Ha = { class: "cm-settings-group" }, Ba = { class: "cm-settings-row" }, Ua = { class: "cm-settings-group" }, Wa = { class: "cm-folder-list" }, Ka = ["onClick"], za = { class: "cm-add-folder-row" }, Ga = { class: "cm-settings-group" }, qa = {
  key: 0,
  class: "cm-index-stats"
}, Ja = { class: "cm-index-stat-row" }, Ya = { class: "cm-index-stat-value" }, Xa = { class: "cm-index-stat-row" }, Za = { class: "cm-index-stat-value" }, Qa = { class: "cm-index-stat-row" }, ec = { class: "cm-index-stat-value" }, tc = { class: "cm-index-stat-row" }, sc = { class: "cm-index-stat-value" }, nc = { class: "cm-index-stat-row" }, ic = { class: "cm-index-stat-value" }, lc = { class: "cm-index-stat-row" }, oc = { class: "cm-index-stat-value" }, rc = {
  key: 0,
  class: "cm-index-stat-row"
}, ac = { class: "cm-index-stat-value" }, cc = {
  key: 1,
  class: "cm-index-stats-loading"
}, uc = { class: "cm-settings-row" }, fc = ["disabled"], dc = {
  __name: "SettingsPanel",
  setup(e, { expose: t }) {
    const { state: s } = Ye(), n = Ks(), i = Re("update"), l = Re("folderSelectorRef"), o = /* @__PURE__ */ V(""), r = /* @__PURE__ */ V(""), a = /* @__PURE__ */ V([]), p = /* @__PURE__ */ V(null), d = /* @__PURE__ */ V(!1);
    let h = null;
    async function v() {
      const O = await n.fetchConfig();
      a.value = O.custom_folders || [], s.customFolderCount = a.value.length, o.value = O.output_path || "";
    }
    async function S() {
      try {
        p.value = await n.fetchIndexStats();
      } catch {
        p.value = null;
      }
    }
    function T(O) {
      h === "output" ? o.value = O : r.value = O;
    }
    function g() {
      var O;
      h = "output", (O = l.value) == null || O.show(T);
    }
    function w() {
      var O;
      h = "custom", (O = l.value) == null || O.show(T);
    }
    async function x() {
      const O = await n.postSettings({ output_path: o.value.trim() });
      if (O.ok)
        i();
      else {
        const y = await O.json();
        alert(y.error || "Failed to save setting");
      }
    }
    async function A() {
      const O = r.value.trim();
      if (!O) return;
      (await n.postFolder("add", O)).ok && (r.value = "", await v(), i());
    }
    async function j(O) {
      await n.postFolder("remove", O), await v(), i();
    }
    async function E() {
      d.value = !0;
      try {
        await n.postIndexRebuild(), setTimeout(async () => {
          await S(), d.value = !1, i();
        }, 2e3);
      } catch {
        d.value = !1;
      }
    }
    return ls(() => s.settingsVisible, (O) => {
      O && S();
    }), Vt(() => {
      v(), s.settingsVisible && S();
    }), t({ loadSettings: v }), (O, y) => (I(), N("section", {
      class: q(["cm-advanced-panel", { visible: W(s).settingsVisible }])
    }, [
      c("div", Ha, [
        y[2] || (y[2] = c("label", { class: "cm-settings-label" }, "Output Directory", -1)),
        c("div", Ba, [
          _t(c("input", {
            "onUpdate:modelValue": y[0] || (y[0] = (H) => o.value = H),
            type: "text",
            placeholder: "Default: ComfyUI output folder",
            class: "comfy-input"
          }, null, 512), [
            [wt, o.value]
          ]),
          c("button", {
            class: "comfy-btn comfy-btn-secondary",
            onClick: g
          }, "📂"),
          c("button", {
            class: "comfy-btn comfy-btn-primary",
            onClick: x
          }, "Save")
        ])
      ]),
      y[13] || (y[13] = c("hr", { class: "cm-settings-divider" }, null, -1)),
      c("div", Ua, [
        y[4] || (y[4] = c("label", { class: "cm-settings-label" }, "Custom Folders", -1)),
        c("div", Wa, [
          (I(!0), N(ce, null, Fe(a.value, (H) => (I(), N("div", {
            key: H.path,
            class: "cm-folder-item"
          }, [
            c("span", null, z(H.path), 1),
            c("button", {
              class: "cm-folder-remove-btn",
              title: "Remove folder",
              onClick: (X) => j(H.path)
            }, [...y[3] || (y[3] = [
              c("span", { class: "pi pi-times" }, null, -1)
            ])], 8, Ka)
          ]))), 128))
        ]),
        c("div", za, [
          _t(c("input", {
            "onUpdate:modelValue": y[1] || (y[1] = (H) => r.value = H),
            type: "text",
            placeholder: "Add custom path...",
            class: "comfy-input"
          }, null, 512), [
            [wt, r.value]
          ]),
          c("button", {
            class: "comfy-btn comfy-btn-secondary",
            onClick: w
          }, "📂"),
          c("button", {
            class: "comfy-btn comfy-btn-primary",
            onClick: A
          }, "+")
        ])
      ]),
      y[14] || (y[14] = c("hr", { class: "cm-settings-divider" }, null, -1)),
      c("div", Ga, [
        y[12] || (y[12] = c("label", { class: "cm-settings-label" }, "Index Health", -1)),
        p.value ? (I(), N("div", qa, [
          c("div", Ja, [
            y[5] || (y[5] = c("span", { class: "cm-index-stat-label" }, "Total assets", -1)),
            c("span", Ya, z(p.value.total_assets), 1)
          ]),
          c("div", Xa, [
            y[6] || (y[6] = c("span", { class: "cm-index-stat-label" }, "With workflow", -1)),
            c("span", Za, z(p.value.with_workflow), 1)
          ]),
          c("div", Qa, [
            y[7] || (y[7] = c("span", { class: "cm-index-stat-label" }, "Without workflow", -1)),
            c("span", ec, z(p.value.without_workflow), 1)
          ]),
          c("div", tc, [
            y[8] || (y[8] = c("span", { class: "cm-index-stat-label" }, "Models", -1)),
            c("span", sc, z(p.value.distinct_models), 1)
          ]),
          c("div", nc, [
            y[9] || (y[9] = c("span", { class: "cm-index-stat-label" }, "LoRAs", -1)),
            c("span", ic, z(p.value.distinct_loras), 1)
          ]),
          c("div", lc, [
            y[10] || (y[10] = c("span", { class: "cm-index-stat-label" }, "DB size", -1)),
            c("span", oc, z(p.value.db_size_formatted), 1)
          ]),
          Object.keys(p.value.extensions).length ? (I(), N("div", rc, [
            y[11] || (y[11] = c("span", { class: "cm-index-stat-label" }, "Types", -1)),
            c("span", ac, [
              (I(!0), N(ce, null, Fe(p.value.extensions, (H, X) => (I(), N("span", {
                key: X,
                class: "cm-index-ext-chip"
              }, z(X.replace(".", "").toUpperCase()) + ": " + z(H), 1))), 128))
            ])
          ])) : Te("", !0)
        ])) : (I(), N("div", cc, "Loading...")),
        c("div", uc, [
          c("button", {
            class: "comfy-btn comfy-btn-secondary cm-rebuild-btn",
            disabled: d.value,
            onClick: E
          }, z(d.value ? "Rebuilding..." : "Rebuild Index"), 9, fc),
          c("button", {
            class: "comfy-btn comfy-btn-secondary",
            onClick: S
          }, "Refresh")
        ])
      ])
    ], 2));
  }
}, pc = { class: "cm-info-panel-header" }, hc = ["title"], mc = ["src"], vc = { class: "cm-info-file-meta" }, gc = { class: "cm-info-field" }, bc = { class: "cm-info-field" }, yc = { class: "cm-info-field" }, _c = { class: "cm-info-field" }, wc = { class: "cm-info-rating" }, xc = ["onClick"], Cc = { class: "cm-info-actions" }, Sc = ["disabled"], kc = {
  __name: "InfoPanel",
  setup(e) {
    const { state: t } = Ye(), s = Ks(), n = /* @__PURE__ */ V(""), i = /* @__PURE__ */ V(""), l = /* @__PURE__ */ V(""), o = /* @__PURE__ */ V(!1), r = /* @__PURE__ */ V(!1);
    ls(() => t.selectedFile, (h) => {
      h && (n.value = h.asset_title || "", i.value = h.asset_description || "", l.value = h.asset_tags || "", t.currentRating = parseInt(h.asset_rating) || 0, r.value = !1);
    });
    function a(h) {
      t.currentRating = h === t.currentRating ? 0 : h;
    }
    function p() {
      t.selectedFile = null, t.infoPanelVisible = !1;
    }
    async function d() {
      if (t.selectedFile) {
        o.value = !0;
        try {
          const h = await s.postMetadata({
            path: t.selectedFile.full_path,
            title: n.value,
            description: i.value,
            tags: l.value,
            rating: t.currentRating > 0 ? String(t.currentRating) : ""
          });
          if (h.ok)
            r.value = !0, setTimeout(() => {
              r.value = !1;
            }, 2e3), t.selectedFile.asset_title = n.value, t.selectedFile.asset_description = i.value, t.selectedFile.asset_tags = l.value, t.selectedFile.asset_rating = t.currentRating > 0 ? String(t.currentRating) : "";
          else {
            const v = await h.json();
            alert(v.error || "Failed to save metadata");
          }
        } finally {
          o.value = !1;
        }
      }
    }
    return (h, v) => {
      var S, T, g, w, x;
      return I(), N("section", {
        class: q(["cm-info-panel", { visible: W(t).infoPanelVisible }])
      }, [
        c("div", pc, [
          c("span", {
            class: "cm-info-panel-title",
            title: (S = W(t).selectedFile) == null ? void 0 : S.filename
          }, z((T = W(t).selectedFile) == null ? void 0 : T.filename), 9, hc),
          c("button", {
            class: "cm-info-close-btn",
            onClick: p
          }, [...v[3] || (v[3] = [
            c("span", { class: "pi pi-times" }, null, -1)
          ])])
        ]),
        W(t).selectedFile ? (I(), N("img", {
          key: 0,
          class: "cm-info-preview",
          src: (g = W(t).selectedFile) == null ? void 0 : g.url,
          alt: ""
        }, null, 8, mc)) : Te("", !0),
        c("div", vc, [
          c("span", null, z((w = W(t).selectedFile) == null ? void 0 : w.file_type), 1),
          c("span", null, z((x = W(t).selectedFile) == null ? void 0 : x.file_size_formatted), 1)
        ]),
        c("div", gc, [
          v[4] || (v[4] = c("label", { class: "cm-info-label" }, "Title", -1)),
          _t(c("input", {
            "onUpdate:modelValue": v[0] || (v[0] = (A) => n.value = A),
            class: "cm-info-input",
            type: "text",
            placeholder: "Image title..."
          }, null, 512), [
            [wt, n.value]
          ])
        ]),
        c("div", bc, [
          v[5] || (v[5] = c("label", { class: "cm-info-label" }, "Description", -1)),
          _t(c("textarea", {
            "onUpdate:modelValue": v[1] || (v[1] = (A) => i.value = A),
            class: "cm-info-input",
            placeholder: "Image description...",
            rows: "2"
          }, null, 512), [
            [wt, i.value]
          ])
        ]),
        c("div", yc, [
          v[6] || (v[6] = c("label", { class: "cm-info-label" }, "Tags", -1)),
          _t(c("input", {
            "onUpdate:modelValue": v[2] || (v[2] = (A) => l.value = A),
            class: "cm-info-input",
            type: "text",
            placeholder: "Comma-separated tags..."
          }, null, 512), [
            [wt, l.value]
          ])
        ]),
        c("div", _c, [
          v[7] || (v[7] = c("label", { class: "cm-info-label" }, "Rating", -1)),
          c("div", wc, [
            (I(), N(ce, null, Fe(5, (A) => c("button", {
              key: A,
              class: q(["cm-info-star", { active: A <= W(t).currentRating }]),
              onClick: (j) => a(A)
            }, "★", 10, xc)), 64))
          ])
        ]),
        c("div", Cc, [
          c("button", {
            class: "cm-info-save-btn",
            disabled: o.value,
            onClick: d
          }, z(o.value ? "Saving..." : "Save Metadata"), 9, Sc)
        ]),
        c("div", {
          class: q(["cm-info-saved-msg", { show: r.value }])
        }, "Saved!", 2)
      ], 2);
    };
  }
}, $c = ["onClick"], Tc = { class: "cm-submenu-key" }, Fc = ["title"], Mc = ["onMouseenter"], Ac = { class: "cm-submenu-label" }, Rc = ["onClick"], Ec = { class: "cm-submenu-key" }, Oc = ["title"], Pc = {
  __name: "ContextMenu",
  setup(e, { expose: t }) {
    const { state: s } = Ye(), n = Ks(), i = Re("comfyApp"), l = Re("update"), o = Re("openViewer"), r = Re("toggleFavorite"), a = /* @__PURE__ */ V(!1), p = /* @__PURE__ */ V(null), d = /* @__PURE__ */ V({ x: 0, y: 0 }), h = /* @__PURE__ */ V(null), v = /* @__PURE__ */ V(null), S = /* @__PURE__ */ V({ x: 0, y: 0 }), T = /* @__PURE__ */ V(null);
    let g = null;
    const w = /* @__PURE__ */ V(null), x = /* @__PURE__ */ V({ x: 0, y: 0 }), A = /* @__PURE__ */ V(null);
    let j = null;
    const E = ke(() => {
      var ae;
      if (!((ae = p.value) != null && ae.file_metadata)) return [];
      const se = p.value.file_metadata, M = [];
      return se.filename && M.push({ label: "filename", value: se.filename }), se.file_type && M.push({ label: "file_type", value: se.file_type }), se.file_size && M.push({ label: "file_size", value: se.file_size }), se.created_date && M.push({ label: "created", value: se.created_date }), se.full_path && M.push({ label: "path", value: se.full_path }), M;
    }), O = ke(() => {
      var se, M;
      return !((se = p.value) != null && se.has_workflow) || !((M = p.value) != null && M.workflow_nodes) ? [] : p.value.workflow_nodes.map((ae) => ({
        label: `${ae.class_type || "Node"} #${ae.id}`,
        children: Object.entries(ae.inputs).map(([be, we]) => ({ label: be, value: we }))
      }));
    });
    function y(se, M = 40) {
      const ae = String(se);
      return ae.length > M ? ae.substring(0, M - 1) + "…" : ae;
    }
    function H(se) {
      navigator.clipboard.writeText(String(se)).then(() => {
        const M = document.createElement("div");
        M.className = "cm-copy-toast", M.textContent = "Copied!", document.body.appendChild(M), requestAnimationFrame(() => M.classList.add("show")), setTimeout(() => {
          M.classList.remove("show"), setTimeout(() => M.remove(), 200);
        }, 1200);
      });
    }
    function X(se) {
      H(se), le();
    }
    function le() {
      a.value = !1, v.value = null, w.value = null, clearTimeout(g), clearTimeout(j);
    }
    async function Se(se, M) {
      if (se.preventDefault(), se.stopPropagation(), le(), p.value = M, a.value = !0, await qe(), !h.value) return;
      const ae = h.value.getBoundingClientRect();
      let be = se.clientX, we = se.clientY;
      be + ae.width > window.innerWidth && (be = window.innerWidth - ae.width - 4), we + ae.height > window.innerHeight && (we = window.innerHeight - ae.height - 4), d.value = { x: be, y: we };
    }
    async function Ie(se, M) {
      ye(), w.value = null, v.value = M, await qe(), Q(se.currentTarget, T);
    }
    function Q(se, M) {
      if (!M.value) return;
      const ae = se.getBoundingClientRect(), be = M.value.getBoundingClientRect();
      let we = ae.right + 2, Me = ae.top;
      we + be.width > window.innerWidth && (we = ae.left - be.width - 2), Me + be.height > window.innerHeight && (Me = Math.max(4, window.innerHeight - be.height - 4)), S.value = { x: we, y: Me };
    }
    function B(se) {
      g = setTimeout(() => {
        v.value = null, w.value = null;
      }, 150);
    }
    function ye() {
      clearTimeout(g);
    }
    async function it(se, M) {
      if (ee(), ye(), w.value = M, await qe(), !A.value) return;
      const ae = se.currentTarget.getBoundingClientRect(), be = A.value.getBoundingClientRect();
      let we = ae.right + 2, Me = ae.top;
      we + be.width > window.innerWidth && (we = ae.left - be.width - 2), Me + be.height > window.innerHeight && (Me = Math.max(4, window.innerHeight - be.height - 4)), x.value = { x: we, y: Me };
    }
    function Z() {
      j = setTimeout(() => {
        w.value = null;
      }, 150);
    }
    function ee() {
      clearTimeout(j);
    }
    function oe() {
      le(), p.value && r(p.value);
    }
    async function Ee() {
      if (le(), !p.value) return;
      const se = await (await fetch(p.value.url)).blob();
      await i.handleFile(se);
    }
    function lt() {
      le(), p.value && o(p.value);
    }
    async function Oe() {
      le(), p.value && await n.postOpenFile(p.value.full_path);
    }
    function Be() {
      le(), p.value && (s.selectedFile = p.value, s.infoPanelVisible = !0);
    }
    async function Bt() {
      if (le(), !p.value || !confirm(`Delete "${p.value.filename}"? This cannot be undone.`)) return;
      (await n.postDelete(p.value.full_path)).ok && l();
    }
    function $t() {
      le();
    }
    return Vt(() => {
      document.addEventListener("click", $t), document.addEventListener("contextmenu", $t);
    }), jt(() => {
      document.removeEventListener("click", $t), document.removeEventListener("contextmenu", $t);
    }), t({ show: Se }), (se, M) => {
      var ae, be, we, Me, Xe, u;
      return I(), Ht(ys, { to: "body" }, [
        a.value ? (I(), N("div", {
          key: 0,
          ref_key: "menuEl",
          ref: h,
          class: "cm-context-menu",
          style: tt({ left: d.value.x + "px", top: d.value.y + "px" }),
          onClick: M[4] || (M[4] = ie(() => {
          }, ["stop"])),
          onContextmenu: M[5] || (M[5] = ie(() => {
          }, ["stop"]))
        }, [
          c("button", {
            class: "cm-context-menu-item",
            onClick: ie(oe, ["stop"])
          }, [
            c("span", {
              class: q(["pi", (ae = p.value) != null && ae.is_favorite ? "pi-bookmark-fill" : "pi-bookmark"])
            }, null, 2),
            Pe(" " + z((be = p.value) != null && be.is_favorite ? "Remove from favorites" : "Add to favorites"), 1)
          ]),
          M[20] || (M[20] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          c("button", {
            class: "cm-context-menu-item",
            onClick: ie(Ee, ["stop"])
          }, [...M[13] || (M[13] = [
            c("span", { class: "pi pi-download" }, null, -1),
            Pe(" Load workflow ", -1)
          ])]),
          c("button", {
            class: "cm-context-menu-item",
            onClick: ie(lt, ["stop"])
          }, [...M[14] || (M[14] = [
            c("span", { class: "pi pi-eye" }, null, -1),
            Pe(" View image ", -1)
          ])]),
          c("button", {
            class: "cm-context-menu-item",
            onClick: ie(Oe, ["stop"])
          }, [...M[15] || (M[15] = [
            c("span", { class: "pi pi-external-link" }, null, -1),
            Pe(" Open in external viewer ", -1)
          ])]),
          ((we = p.value) == null ? void 0 : we.file_type) === "PNG" ? (I(), N("button", {
            key: 0,
            class: "cm-context-menu-item",
            onClick: ie(Be, ["stop"])
          }, [...M[16] || (M[16] = [
            c("span", { class: "pi pi-pencil" }, null, -1),
            Pe(" Edit metadata ", -1)
          ])])) : Te("", !0),
          M[21] || (M[21] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          M[22] || (M[22] = c("div", { class: "cm-context-menu-label" }, "Copy", -1)),
          E.value.length > 0 ? (I(), N("div", {
            key: 1,
            class: "cm-context-menu-item cm-submenu-item",
            onMouseenter: M[0] || (M[0] = (f) => Ie(f, "meta")),
            onMouseleave: M[1] || (M[1] = (f) => B())
          }, [...M[17] || (M[17] = [
            c("span", { class: "pi pi-info-circle" }, null, -1),
            c("span", { class: "cm-submenu-label" }, "Metadata", -1),
            c("span", { class: "cm-submenu-arrow" }, "►", -1)
          ])], 32)) : Te("", !0),
          (Me = p.value) != null && Me.has_workflow && ((u = (Xe = p.value) == null ? void 0 : Xe.workflow_nodes) == null ? void 0 : u.length) > 0 ? (I(), N("div", {
            key: 2,
            class: "cm-context-menu-item cm-submenu-item",
            onMouseenter: M[2] || (M[2] = (f) => Ie(f, "workflow")),
            onMouseleave: M[3] || (M[3] = (f) => B())
          }, [...M[18] || (M[18] = [
            c("span", { class: "pi pi-sitemap" }, null, -1),
            c("span", { class: "cm-submenu-label" }, "Workflow", -1),
            c("span", { class: "cm-submenu-arrow" }, "►", -1)
          ])], 32)) : Te("", !0),
          M[23] || (M[23] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          c("button", {
            class: "cm-context-menu-item cm-danger",
            onClick: ie(Bt, ["stop"])
          }, [...M[19] || (M[19] = [
            c("span", { class: "pi pi-trash" }, null, -1),
            Pe(" Delete ", -1)
          ])])
        ], 36)) : Te("", !0),
        v.value === "meta" ? (I(), N("div", {
          key: 1,
          ref_key: "submenuEl",
          ref: T,
          class: "cm-submenu",
          style: tt({ left: S.value.x + "px", top: S.value.y + "px" }),
          onMouseenter: M[6] || (M[6] = (f) => ye()),
          onMouseleave: M[7] || (M[7] = (f) => B())
        }, [
          (I(!0), N(ce, null, Fe(E.value, (f) => (I(), N("button", {
            key: f.label,
            class: "cm-context-menu-item cm-submenu-copy-row",
            onClick: ie((m) => X(f.value), ["stop"])
          }, [
            c("span", Tc, z(f.label), 1),
            c("span", {
              class: "cm-submenu-value",
              title: String(f.value)
            }, z(y(f.value)), 9, Fc)
          ], 8, $c))), 128))
        ], 36)) : Te("", !0),
        v.value === "workflow" ? (I(), N("div", {
          key: 2,
          ref_key: "submenuEl",
          ref: T,
          class: "cm-submenu",
          style: tt({ left: S.value.x + "px", top: S.value.y + "px" }),
          onMouseenter: M[9] || (M[9] = (f) => ye()),
          onMouseleave: M[10] || (M[10] = (f) => B())
        }, [
          (I(!0), N(ce, null, Fe(O.value, (f) => (I(), N("div", {
            key: f.label,
            class: "cm-context-menu-item cm-submenu-item",
            onMouseenter: (m) => it(m, f),
            onMouseleave: M[8] || (M[8] = (m) => Z())
          }, [
            c("span", Ac, z(f.label), 1),
            M[24] || (M[24] = c("span", { class: "cm-submenu-arrow" }, "►", -1))
          ], 40, Mc))), 128))
        ], 36)) : Te("", !0),
        w.value ? (I(), N("div", {
          key: 3,
          ref_key: "nodeSubmenuEl",
          ref: A,
          class: "cm-submenu",
          style: tt({ left: x.value.x + "px", top: x.value.y + "px" }),
          onMouseenter: M[11] || (M[11] = (f) => ee()),
          onMouseleave: M[12] || (M[12] = (f) => Z())
        }, [
          (I(!0), N(ce, null, Fe(w.value.children, (f) => (I(), N("button", {
            key: f.label,
            class: "cm-context-menu-item cm-submenu-copy-row",
            onClick: ie((m) => X(f.value), ["stop"])
          }, [
            c("span", Ec, z(f.label), 1),
            c("span", {
              class: "cm-submenu-value",
              title: String(f.value)
            }, z(y(f.value)), 9, Oc)
          ], 8, Rc))), 128))
        ], 36)) : Te("", !0)
      ]);
    };
  }
}, Ic = ["onClick"], Lc = ["src"], Dc = ["title"], Nc = { class: "cm-viewer-grid-toolbar" }, Vc = { class: "cm-viewer-grid-toolbar-center" }, jc = { class: "cm-viewer-grid-search-wrapper" }, Hc = ["title"], Bc = { class: "cm-viewer-grid-toolbar-slider" }, Uc = {
  __name: "GridView",
  props: {
    files: { type: Array, required: !0 },
    currentIndex: { type: Number, required: !0 }
  },
  setup(e, { expose: t }) {
    const s = e, { state: n } = Ye(), i = Re("imageViewerRef"), l = /* @__PURE__ */ V(null), o = /* @__PURE__ */ V(null), r = /* @__PURE__ */ V(null), a = /* @__PURE__ */ V(null), p = /* @__PURE__ */ V(null), d = /* @__PURE__ */ V(""), h = /* @__PURE__ */ V(160), v = ke(
      () => n.activeUtility !== "all" || n.activeModelFilters.size > 0 || n.activeLoraFilters.size > 0
    );
    function S(Q) {
      return Q.length > 18 ? Q.substring(0, 15) + "..." : Q;
    }
    function T(Q) {
      var B;
      (B = i.value) == null || B.selectFromGrid(Q);
    }
    function g() {
      var Q;
      (Q = i.value) == null || Q.close();
    }
    async function w() {
      var B;
      await ((B = i.value) == null ? void 0 : B.gridUpdate(d.value)) && qe(() => X());
    }
    function x() {
      w();
    }
    function A(Q) {
      var B;
      (B = a.value) == null || B.show(Q, o.value);
    }
    function j() {
      const [Q, B] = n.sortBy.split("_");
      n.sortBy = `${Q}_${B === "desc" ? "asc" : "desc"}`, w();
    }
    function E(Q) {
      var B;
      (B = p.value) == null || B.show(Q, r.value);
    }
    function O() {
      n.workflowOnly = !n.workflowOnly, w();
    }
    function y() {
      n.showFavorites = !n.showFavorites, w();
    }
    function H() {
      n.hideNsfw = !n.hideNsfw, w();
    }
    function X() {
      const Q = l.value;
      if (!Q || !s.files.length) return;
      Q.classList.remove("cm-grid-slider-active"), Q.style.removeProperty("--grid-thumb-size");
      const B = Q.getBoundingClientRect(), ye = B.width * B.height, it = Math.sqrt(ye / s.files.length), Z = Math.max(1, Math.min(
        Math.floor(B.width / Math.max(it, 100)),
        Math.floor(B.width / 100)
      ));
      Q.style.setProperty("--grid-cols", Z);
      const ee = Math.round(B.width / Z);
      h.value = Math.max(80, Math.min(400, ee));
    }
    function le() {
      const Q = l.value;
      Q && (Q.classList.add("cm-grid-slider-active"), Q.style.setProperty("--grid-thumb-size", `${h.value}px`));
    }
    function Se(Q) {
      if (n.viewerMode !== "grid") return;
      const B = Q.deltaY < 0 ? 20 : -20;
      h.value = Math.max(80, Math.min(400, h.value + B)), le();
    }
    function Ie() {
      const Q = l.value;
      Q && (Q.classList.remove("cm-grid-slider-active"), Q.style.removeProperty("--grid-thumb-size"), Q.style.removeProperty("--grid-cols")), d.value = "";
    }
    return t({ render: X, reset: Ie }), (Q, B) => (I(), N(ce, null, [
      c("div", {
        ref_key: "containerRef",
        ref: l,
        class: "cm-viewer-grid",
        onWheel: ie(Se, ["prevent"])
      }, [
        (I(!0), N(ce, null, Fe(e.files, (ye, it) => (I(), N("div", {
          key: ye.full_path,
          class: q(["cm-viewer-grid-item", { active: it === e.currentIndex }]),
          onClick: ie((Z) => T(it), ["stop"])
        }, [
          c("img", {
            src: ye.url,
            loading: "lazy",
            draggable: "false"
          }, null, 8, Lc),
          c("span", {
            class: "cm-viewer-grid-label",
            title: ye.filename
          }, z(S(ye.filename)), 9, Dc)
        ], 10, Ic))), 128))
      ], 544),
      c("div", Nc, [
        c("button", {
          class: "cm-viewer-grid-close",
          title: "Close grid view",
          onClick: g
        }, [...B[2] || (B[2] = [
          c("span", { class: "pi pi-times" }, null, -1)
        ])]),
        c("div", Vc, [
          c("div", jc, [
            B[3] || (B[3] = c("span", { class: "pi pi-search cm-viewer-grid-search-icon" }, null, -1)),
            _t(c("input", {
              type: "text",
              class: "cm-viewer-grid-search",
              placeholder: "Search...",
              "onUpdate:modelValue": B[0] || (B[0] = (ye) => d.value = ye),
              onInput: x
            }, null, 544), [
              [wt, d.value]
            ])
          ]),
          c("button", {
            ref_key: "filterBtnRef",
            ref: o,
            class: q(["cm-viewer-grid-btn cm-viewer-grid-filter", { active: v.value }]),
            title: "Filter options",
            onClick: A
          }, [...B[4] || (B[4] = [
            c("span", { class: "pi pi-filter" }, null, -1)
          ])], 2),
          c("button", {
            ref_key: "sortBtnRef",
            ref: r,
            class: q(["cm-viewer-grid-btn cm-viewer-grid-sort", { active: W(n).sortBy !== "date_desc" }]),
            title: "Sort by date",
            onClick: j,
            onContextmenu: ie(E, ["prevent"])
          }, [...B[5] || (B[5] = [
            c("span", { class: "pi pi-sort-alt" }, null, -1)
          ])], 34),
          c("button", {
            class: q(["cm-viewer-grid-btn cm-viewer-grid-workflow", { active: W(n).workflowOnly }]),
            title: "Show only assets with workflows",
            onClick: O
          }, [...B[6] || (B[6] = [
            c("span", { class: "pi pi-sitemap" }, null, -1)
          ])], 2),
          c("button", {
            class: q(["cm-viewer-grid-btn cm-viewer-grid-fav", { active: W(n).showFavorites }]),
            title: "Show favorites only",
            onClick: y
          }, [...B[7] || (B[7] = [
            c("span", { class: "pi pi-bookmark" }, null, -1)
          ])], 2),
          c("button", {
            class: q(["cm-viewer-grid-btn cm-viewer-grid-nsfw", { active: W(n).hideNsfw }]),
            title: W(n).hideNsfw ? "NSFW hidden" : "NSFW visible",
            onClick: H
          }, [
            c("span", {
              class: q(W(n).hideNsfw ? "pi pi-eye-slash" : "pi pi-eye")
            }, null, 2)
          ], 10, Hc)
        ]),
        c("div", Bc, [
          B[8] || (B[8] = c("span", { class: "pi pi-search-minus cm-viewer-grid-slider-icon" }, null, -1)),
          _t(c("input", {
            type: "range",
            class: "cm-viewer-grid-slider",
            min: "80",
            max: "400",
            step: "10",
            "onUpdate:modelValue": B[1] || (B[1] = (ye) => h.value = ye),
            onInput: le
          }, null, 544), [
            [
              wt,
              h.value,
              void 0,
              { number: !0 }
            ]
          ]),
          B[9] || (B[9] = c("span", { class: "pi pi-search-plus cm-viewer-grid-slider-icon" }, null, -1))
        ])
      ]),
      _e(Cl, {
        ref_key: "filterMenuRef",
        ref: a
      }, null, 512),
      _e(Sl, {
        ref_key: "sortMenuRef",
        ref: p
      }, null, 512)
    ], 64));
  }
}, Wc = { class: "cm-viewer-topbar" }, Kc = ["title"], zc = { class: "cm-viewer-topbar-size" }, Gc = { class: "cm-viewer-topbar-counter" }, qc = { class: "cm-viewer-topbar-actions" }, Jc = ["src"], Yc = ["src"], Xc = ["src"], Zc = ["onClick"], Qc = { class: "cm-viewer-section" }, eu = { class: "cm-viewer-row-label" }, tu = ["title", "onClick"], su = ["onClick"], nu = {
  key: 1,
  class: "cm-viewer-empty"
}, iu = { class: "cm-viewer-section" }, lu = { class: "cm-viewer-node-title" }, ou = ["onClick"], ru = { class: "cm-viewer-row-label" }, au = ["title", "onClick"], cu = ["onClick"], uu = {
  key: 1,
  class: "cm-viewer-empty"
}, es = 32, fu = {
  __name: "ImageViewer",
  setup(e, { expose: t }) {
    const s = Re("comfyApp"), n = [25, 50, 75, 100, 150, 200, 300, 500], i = /* @__PURE__ */ V(!1), l = /* @__PURE__ */ V([]), o = /* @__PURE__ */ V(0), r = /* @__PURE__ */ V(1), a = /* @__PURE__ */ V(0), p = /* @__PURE__ */ V(0), d = /* @__PURE__ */ V(1), h = /* @__PURE__ */ V(!1), v = /* @__PURE__ */ V(!1), S = /* @__PURE__ */ V(!1), T = /* @__PURE__ */ V("carousel"), g = /* @__PURE__ */ V(""), w = /* @__PURE__ */ V(!1), x = /* @__PURE__ */ V(!0), A = /* @__PURE__ */ gs({}), j = /* @__PURE__ */ V(!1);
    let E = /* @__PURE__ */ V(!1), O = 0, y = 0, H = !1, X = !1, le = 0, Se = 0, Ie = 0, Q = 0, B = !1, ye = null;
    const it = /* @__PURE__ */ V(null), Z = /* @__PURE__ */ V(null), ee = /* @__PURE__ */ V(null), oe = /* @__PURE__ */ V(null), Ee = /* @__PURE__ */ V(null), lt = /* @__PURE__ */ V(null), Oe = ke(() => l.value[o.value] || null), Be = ke(() => Math.round(r.value * 100)), Bt = ke(
      () => r.value === d.value && a.value === 0 && p.value === 0
    ), $t = ke(() => {
      var F;
      if (!j.value || l.value.length <= 1) return "";
      const _ = (o.value - 1 + l.value.length) % l.value.length;
      return ((F = l.value[_]) == null ? void 0 : F.url) || "";
    }), se = ke(() => {
      var F;
      if (!j.value || l.value.length <= 1) return "";
      const _ = (o.value + 1) % l.value.length;
      return ((F = l.value[_]) == null ? void 0 : F.url) || "";
    }), M = ke(() => {
      const _ = Oe.value;
      if (!_) return [];
      const F = _.file_metadata || {}, J = [], ne = (xe, Ae) => {
        Ae && J.push([xe, Ae]);
      };
      return ne("Filename", F.filename || _.filename), ne("Type", F.file_type || _.file_type), ne("Size", F.file_size || _.file_size_formatted), ne("Created", F.created_date || (_.created_at ? new Date(_.created_at * 1e3).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" }) : "")), ne("Path", F.full_path || _.full_path), J;
    });
    function ae(_, F) {
      const J = String(F);
      return A[_] ? J : J.length > es ? J.substring(0, es - 1) + "…" : J;
    }
    function be(_, F) {
      String(F).length <= es || (A[_] = !A[_]);
    }
    function we(_) {
      navigator.clipboard.writeText(_).then(() => {
        const F = document.createElement("div");
        F.className = "cm-copy-toast", F.textContent = "Copied!", document.body.appendChild(F), requestAnimationFrame(() => F.classList.add("show")), setTimeout(() => {
          F.classList.remove("show"), setTimeout(() => F.remove(), 200);
        }, 1200);
      });
    }
    function Me(_) {
      var xe;
      const F = JSON.stringify({
        nodes: [{ type: _.class_type, pos: [0, 0] }],
        links: []
      }), J = localStorage.getItem("litegrapheditor_clipboard");
      localStorage.setItem("litegrapheditor_clipboard", F), s.canvas.pasteFromClipboard(), J !== null ? localStorage.setItem("litegrapheditor_clipboard", J) : localStorage.removeItem("litegrapheditor_clipboard");
      const ne = s.canvas.selected_nodes;
      if (ne)
        for (const Ae in ne) {
          const ht = ne[Ae];
          if (ht.widgets)
            for (const Ue of ht.widgets)
              Ue.name in _.inputs && (Ue.value = _.inputs[Ue.name], (xe = Ue.callback) == null || xe.call(Ue, Ue.value));
        }
    }
    function Xe() {
      ee.value && (ee.value.style.transform = `translate(${a.value}px, ${p.value}px) scale(${r.value})`);
    }
    function u() {
      const _ = ee.value;
      if (!(_ != null && _.naturalWidth) || !(_ != null && _.naturalHeight)) return;
      const F = Z.value;
      if (!F) return;
      const J = _.naturalWidth, ne = _.naturalHeight, xe = F.getBoundingClientRect(), Ae = Math.min(xe.width / J, xe.height / ne, 1), ht = J * Ae, Ue = ne * Ae, me = 512, De = Math.max(ht, Ue);
      De > me && (r.value = me / De), d.value = r.value;
    }
    function f(_, F, J) {
      const ne = r.value;
      if (r.value = Math.max(0.1, Math.min(10, r.value + _)), F !== void 0 && J !== void 0) {
        const xe = Z.value.getBoundingClientRect(), Ae = F - xe.left - xe.width / 2, ht = J - xe.top - xe.height / 2, Ue = 1 - r.value / ne;
        a.value += Ae * Ue, p.value += ht * Ue;
      }
      Xe(), Z.value && (Z.value.style.cursor = r.value > d.value ? "grab" : ""), b();
    }
    function m() {
      var _;
      if (r.value = 1, a.value = 0, p.value = 0, !v.value && ((_ = ee.value) != null && _.naturalWidth)) {
        u();
        const F = ee.value;
        F.style.transition = "none", Xe(), F.offsetHeight, F.style.transition = "";
      } else
        Xe();
      Z.value && (Z.value.style.cursor = ""), b();
    }
    function $(_) {
      r.value = _ / 100, a.value = 0, p.value = 0, Xe(), Z.value && (Z.value.style.cursor = r.value > d.value ? "grab" : ""), b(), S.value = !1;
    }
    function b() {
      const _ = r.value <= d.value && l.value.length > 1 && !v.value && T.value !== "grid";
      j.value = _;
    }
    function C(_) {
      if (!(l.value.length <= 1 || H))
        if (j.value) {
          H = !0;
          const F = _ > 0 ? "cm-slide-out-left" : "cm-slide-out-right", J = _ > 0 ? "cm-slide-in-from-right" : "cm-slide-in-from-left", ne = Z.value;
          ne.classList.add(F);
          const xe = () => {
            ne.removeEventListener("animationend", xe), ne.classList.remove(F), o.value = (o.value + _ + l.value.length) % l.value.length, m(), ne.classList.add(J);
            const Ae = () => {
              ne.removeEventListener("animationend", Ae), ne.classList.remove(J), H = !1;
            };
            ne.addEventListener("animationend", Ae, { once: !0 });
          };
          ne.addEventListener("animationend", xe, { once: !0 });
        } else
          o.value = (o.value + _ + l.value.length) % l.value.length, m();
    }
    function L() {
      h.value = !h.value;
    }
    function P() {
      v.value = !v.value, v.value ? (d.value = 1, r.value = 1, a.value = 0, p.value = 0, Xe(), Z.value && (Z.value.style.cursor = ""), h.value && (h.value = !1)) : m(), b();
    }
    function R() {
      T.value === "grid" ? (T.value = "carousel", b()) : (T.value = "grid", b(), qe(() => {
        var _;
        return (_ = lt.value) == null ? void 0 : _.render();
      }));
    }
    function k() {
      const _ = ee.value;
      _ && (g.value = `${_.naturalWidth} × ${_.naturalHeight}`, v.value ? Xe() : (u(), _.style.transition = "none", Xe(), _.offsetHeight, _.style.transition = ""), b());
    }
    function K(_) {
      const F = _.deltaY > 0 ? -0.15 : 0.15;
      f(F, _.clientX, _.clientY);
    }
    function D(_) {
      j.value && !H ? (_.preventDefault(), E.value = !0, O = _.clientX, y = 0, Z.value && (Z.value.style.cursor = "grabbing")) : r.value > d.value && (_.preventDefault(), X = !0, le = _.clientX, Se = _.clientY, Ie = a.value, Q = p.value, Z.value && (Z.value.style.cursor = "grabbing"));
    }
    function U(_) {
      if (E.value) {
        y = _.clientX - O, ee.value && (ee.value.style.transform = `translateX(${y}px) scale(${r.value})`), oe.value && (oe.value.style.transform = `translateX(calc(-50% + ${y}px))`), Ee.value && (Ee.value.style.transform = `translateX(calc(50% + ${y}px))`);
        return;
      }
      X && (a.value = Ie + (_.clientX - le), p.value = Q + (_.clientY - Se), Xe());
    }
    function G() {
      if (E.value) {
        if (E.value = !1, B = !0, oe.value && (oe.value.style.transform = ""), Ee.value && (Ee.value.style.transform = ""), Math.abs(y) > 50) {
          const _ = y < 0 ? 1 : -1;
          o.value = (o.value + _ + l.value.length) % l.value.length, m();
          const F = _ > 0 ? "cm-slide-in-from-right" : "cm-slide-in-from-left";
          H = !0;
          const J = Z.value;
          J.classList.add(F), J.addEventListener("animationend", () => {
            J.classList.remove(F), H = !1;
          }, { once: !0 });
        } else
          ee.value && (ee.value.style.transform = `translate(${a.value}px, ${p.value}px) scale(${r.value})`);
        Z.value && (Z.value.style.cursor = ""), y = 0;
        return;
      }
      X && (X = !1, Z.value && (Z.value.style.cursor = r.value > d.value ? "grab" : ""));
    }
    function re(_) {
      if (B) {
        B = !1;
        return;
      }
      if (T.value === "grid") return;
      _.target.closest(".cm-viewer-img, .cm-viewer-panel, .cm-viewer-nav, .cm-viewer-topbar, .cm-viewer-zoom-chip, .cm-viewer-carousel-ghost") || $e();
    }
    function pe(_) {
      if (i.value && !(_.target.tagName === "INPUT" || _.target.tagName === "TEXTAREA"))
        switch (_.key) {
          case "Escape":
            $e();
            break;
          case "ArrowLeft":
            _.preventDefault(), C(-1);
            break;
          case "ArrowRight":
            _.preventDefault(), C(1);
            break;
          case "+":
          case "=":
            _.preventDefault(), f(0.25);
            break;
          case "-":
            _.preventDefault(), f(-0.25);
            break;
          case "0":
            _.preventDefault(), m();
            break;
          case "i":
          case "I":
            _.preventDefault(), L();
            break;
          case "f":
          case "F":
            _.preventDefault(), P();
            break;
          case "g":
          case "G":
            _.preventDefault(), R();
            break;
        }
    }
    function ue(_, F, J) {
      l.value = _, o.value = Math.max(0, Math.min(F, _.length - 1)), ye = J || null, m(), i.value = !0, Object.keys(A).forEach((ne) => delete A[ne]);
    }
    function Le(_, F) {
      l.value = _, o.value = 0, ye = F || null, m(), i.value = !0, T.value = "grid", b(), qe(() => {
        var J;
        return (J = lt.value) == null ? void 0 : J.render();
      });
    }
    function $e() {
      var _;
      i.value = !1, v.value = !1, j.value = !1, H = !1, E.value = !1, T.value = "carousel", S.value = !1, ee.value && (ee.value.src = ""), oe.value && (oe.value.style.transform = ""), Ee.value && (Ee.value.style.transform = ""), (_ = lt.value) == null || _.reset();
    }
    function Ze(_) {
      o.value = _, m(), T.value = "carousel", b();
    }
    async function Qe(_) {
      if (!ye) return null;
      const F = await ye(_);
      return F && (l.value = F, o.value = Math.max(0, Math.min(o.value, F.length - 1))), F;
    }
    return Vt(() => {
      document.addEventListener("mousemove", U), document.addEventListener("mouseup", G), document.addEventListener("keydown", pe);
    }), jt(() => {
      document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", G), document.removeEventListener("keydown", pe);
    }), t({ open: ue, openGrid: Le, close: $e, selectFromGrid: Ze, gridUpdate: Qe }), (_, F) => {
      var J, ne, xe, Ae, ht, Ue;
      return I(), Ht(ys, { to: "body" }, [
        c("div", {
          ref_key: "overlayRef",
          ref: it,
          class: q(["cm-viewer-overlay", {
            visible: i.value,
            fullscreen: v.value,
            "cm-carousel-active": j.value,
            "cm-carousel-dragging": W(E),
            "cm-viewer-grid-mode": T.value === "grid"
          }])
        }, [
          c("div", {
            class: "cm-viewer-body",
            onClick: re
          }, [
            c("div", Wc, [
              c("span", {
                class: "cm-viewer-topbar-name",
                title: (J = Oe.value) == null ? void 0 : J.filename
              }, z((ne = Oe.value) == null ? void 0 : ne.filename), 9, Kc),
              c("span", zc, z(g.value), 1),
              c("span", Gc, z(o.value + 1) + " / " + z(l.value.length), 1),
              c("div", qc, [
                c("button", {
                  class: q(["cm-viewer-grid-toggle", { active: T.value === "grid" }]),
                  title: "Toggle grid view (G)",
                  onClick: ie(R, ["stop"])
                }, [...F[6] || (F[6] = [
                  c("span", { class: "pi pi-th-large" }, null, -1)
                ])], 2),
                c("button", {
                  class: q(["cm-viewer-panel-toggle", { active: h.value }]),
                  title: "Toggle details (I)",
                  onClick: ie(L, ["stop"])
                }, [...F[7] || (F[7] = [
                  c("span", { class: "pi pi-info-circle" }, null, -1)
                ])], 2),
                c("button", {
                  class: q(["cm-viewer-fullscreen-toggle", { active: v.value }]),
                  title: "Toggle fullscreen (F)",
                  onClick: ie(P, ["stop"])
                }, [
                  c("span", {
                    class: q(["pi", v.value ? "pi-compress" : "pi-expand"])
                  }, null, 2)
                ], 2),
                c("button", {
                  class: "cm-viewer-close",
                  title: "Close (Esc)",
                  onClick: ie($e, ["stop"])
                }, [...F[8] || (F[8] = [
                  c("span", { class: "pi pi-times" }, null, -1)
                ])])
              ])
            ]),
            c("button", {
              class: "cm-viewer-nav cm-viewer-prev",
              title: "Previous (Left arrow)",
              style: tt({ display: l.value.length > 1 ? "" : "none" }),
              onClick: F[0] || (F[0] = ie((me) => C(-1), ["stop"]))
            }, [...F[9] || (F[9] = [
              c("span", { class: "pi pi-chevron-left" }, null, -1)
            ])], 4),
            c("div", {
              ref_key: "imgContainerRef",
              ref: Z,
              class: "cm-viewer-img-container",
              onWheel: ie(K, ["prevent"]),
              onMousedown: D
            }, [
              c("img", {
                ref_key: "imgRef",
                ref: ee,
                class: "cm-viewer-img",
                draggable: "false",
                src: (xe = Oe.value) == null ? void 0 : xe.url,
                onLoad: k
              }, null, 40, Jc)
            ], 544),
            c("button", {
              class: "cm-viewer-nav cm-viewer-next",
              title: "Next (Right arrow)",
              style: tt({ display: l.value.length > 1 ? "" : "none" }),
              onClick: F[1] || (F[1] = ie((me) => C(1), ["stop"]))
            }, [...F[10] || (F[10] = [
              c("span", { class: "pi pi-chevron-right" }, null, -1)
            ])], 4),
            c("div", {
              ref_key: "ghostPrevRef",
              ref: oe,
              class: "cm-viewer-carousel-prev cm-viewer-carousel-ghost"
            }, [
              c("img", {
                draggable: "false",
                src: $t.value
              }, null, 8, Yc)
            ], 512),
            c("div", {
              ref_key: "ghostNextRef",
              ref: Ee,
              class: "cm-viewer-carousel-next cm-viewer-carousel-ghost"
            }, [
              c("img", {
                draggable: "false",
                src: se.value
              }, null, 8, Xc)
            ], 512),
            c("div", {
              class: "cm-viewer-zoom-chip",
              onMousedown: F[3] || (F[3] = ie(() => {
              }, ["stop"]))
            }, [
              c("span", {
                class: "cm-viewer-zoom-value",
                onClick: F[2] || (F[2] = ie((me) => S.value = !S.value, ["stop"]))
              }, z(Be.value) + "%", 1),
              c("button", {
                class: "cm-viewer-zoom-reset",
                title: "Reset zoom (0)",
                style: tt({ display: Bt.value ? "none" : "" }),
                onClick: ie(m, ["stop"])
              }, [...F[11] || (F[11] = [
                c("span", { class: "pi pi-replay" }, null, -1)
              ])], 4),
              c("div", {
                class: q(["cm-viewer-zoom-menu", { open: S.value }])
              }, [
                (I(), N(ce, null, Fe(n, (me) => c("button", {
                  key: me,
                  class: q(["cm-viewer-zoom-menu-item", { active: Be.value === me }]),
                  onClick: ie((De) => $(me), ["stop"])
                }, z(me) + "%", 11, Zc)), 64))
              ], 2)
            ], 32),
            _e(Uc, {
              ref_key: "gridViewRef",
              ref: lt,
              files: l.value,
              "current-index": o.value
            }, null, 8, ["files", "current-index"]),
            c("div", {
              class: q(["cm-viewer-panel", { open: h.value }])
            }, [
              c("div", Qc, [
                c("button", {
                  class: q(["cm-viewer-section-header", { expanded: w.value }]),
                  onClick: F[4] || (F[4] = (me) => w.value = !w.value)
                }, [
                  c("span", {
                    class: q(["pi", w.value ? "pi-chevron-down" : "pi-chevron-right", "cm-viewer-section-chevron"])
                  }, null, 2),
                  F[12] || (F[12] = c("span", null, "File Info", -1))
                ], 2),
                c("div", {
                  class: q(["cm-viewer-section-body", { expanded: w.value }])
                }, [
                  M.value.length > 0 ? (I(!0), N(ce, { key: 0 }, Fe(M.value, ([me, De]) => (I(), N("div", {
                    key: me,
                    class: "cm-viewer-row"
                  }, [
                    c("span", eu, z(me), 1),
                    c("span", {
                      class: q(["cm-viewer-row-value", {
                        "cm-viewer-truncated": String(De).length > es,
                        "cm-viewer-expanded": A[me]
                      }]),
                      title: String(De),
                      onClick: (Ot) => be(me, De)
                    }, z(ae(me, De)), 11, tu),
                    c("button", {
                      class: "cm-viewer-copy-btn",
                      title: "Copy value",
                      onClick: ie((Ot) => we(String(De)), ["stop"])
                    }, [...F[13] || (F[13] = [
                      c("span", { class: "pi pi-clone" }, null, -1)
                    ])], 8, su)
                  ]))), 128)) : (I(), N("div", nu, "No file info available"))
                ], 2)
              ]),
              c("div", iu, [
                c("button", {
                  class: q(["cm-viewer-section-header expanded", { expanded: x.value }]),
                  onClick: F[5] || (F[5] = (me) => x.value = !x.value)
                }, [
                  c("span", {
                    class: q(["pi", x.value ? "pi-chevron-down" : "pi-chevron-right", "cm-viewer-section-chevron"])
                  }, null, 2),
                  F[14] || (F[14] = c("span", null, "Workflow", -1))
                ], 2),
                c("div", {
                  class: q(["cm-viewer-section-body", { expanded: x.value }])
                }, [
                  (Ae = Oe.value) != null && Ae.has_workflow && ((Ue = (ht = Oe.value) == null ? void 0 : ht.workflow_nodes) == null ? void 0 : Ue.length) > 0 ? (I(!0), N(ce, { key: 0 }, Fe(Oe.value.workflow_nodes, (me) => (I(), N("div", {
                    key: me.id,
                    class: "cm-viewer-node"
                  }, [
                    c("div", lu, [
                      c("span", null, z(me.class_type || "Node") + " #" + z(me.id), 1),
                      c("button", {
                        class: "cm-viewer-copy-btn cm-viewer-copy-node",
                        title: "Add node to canvas",
                        onClick: ie((De) => Me(me), ["stop"])
                      }, [...F[15] || (F[15] = [
                        c("span", { class: "pi pi-plus-circle" }, null, -1)
                      ])], 8, ou)
                    ]),
                    (I(!0), N(ce, null, Fe(Object.entries(me.inputs), ([De, Ot]) => (I(), N("div", {
                      key: De,
                      class: "cm-viewer-row"
                    }, [
                      c("span", ru, z(De), 1),
                      c("span", {
                        class: q(["cm-viewer-row-value", {
                          "cm-viewer-truncated": String(Ot).length > es,
                          "cm-viewer-expanded": A[`${me.id}_${De}`]
                        }]),
                        title: String(Ot),
                        onClick: (kl) => be(`${me.id}_${De}`, Ot)
                      }, z(ae(`${me.id}_${De}`, Ot)), 11, au),
                      c("button", {
                        class: "cm-viewer-copy-btn",
                        title: "Copy value",
                        onClick: ie((kl) => we(String(Ot)), ["stop"])
                      }, [...F[16] || (F[16] = [
                        c("span", { class: "pi pi-clone" }, null, -1)
                      ])], 8, cu)
                    ]))), 128))
                  ]))), 128)) : (I(), N("div", uu, "No workflow data"))
                ], 2)
              ])
            ], 2)
          ])
        ], 2)
      ]);
    };
  }
}, du = { class: "cm-selector-content" }, pu = { class: "cm-current-path" }, hu = ["onKeydown"], mu = { class: "cm-selector-list" }, vu = ["onClick"], gu = {
  __name: "FolderSelector",
  setup(e, { expose: t }) {
    const s = /* @__PURE__ */ V(!1), n = /* @__PURE__ */ V(""), i = /* @__PURE__ */ V(""), l = /* @__PURE__ */ V([]), o = /* @__PURE__ */ V("");
    let r = null, a = null, p = null;
    function d(y) {
      return y.startsWith("/") || /^[A-Za-z]:[\\\/]/.test(y);
    }
    const h = ke(() => n.value && n.value !== "/" && !n.value.endsWith(":\\")), v = ke(() => n.value.split(/[\\/]/).slice(0, -1).join("/") || "/"), S = ke(() => {
      if (!o.value) return l.value;
      const y = o.value.toLowerCase();
      return l.value.filter((H) => H.toLowerCase().includes(y));
    });
    function T(y, H) {
      return y ? `${y}/${H}`.replace(/\/+/g, "/") : H;
    }
    async function g(y) {
      const X = await (await fetch(`/dnh-assetmanager/subdirs?path=${encodeURIComponent(y)}`)).json();
      l.value = X.dirs || [];
    }
    async function w(y) {
      await g(y), n.value = y, a = y, i.value = y, o.value = "";
    }
    function x() {
      clearTimeout(r), r = setTimeout(async () => {
        const y = i.value.trim();
        if (!y || !d(y)) {
          o.value = y.toLowerCase();
          return;
        }
        let H, X;
        if (y.endsWith("/") || y.endsWith("\\"))
          H = y.replace(/[\/\\]+$/, "") || "/", X = "";
        else {
          const le = Math.max(y.lastIndexOf("/"), y.lastIndexOf("\\"));
          H = y.substring(0, le) || "/", X = y.substring(le + 1).toLowerCase();
        }
        H !== a && (await g(H), a = H, n.value = H), o.value = X;
      }, 150);
    }
    function A() {
      clearTimeout(r);
      const y = i.value.trim();
      y && d(y) && w(y);
    }
    function j(y) {
      p = y, s.value = !0, i.value = n.value, a = null, w(n.value);
    }
    function E() {
      s.value = !1;
    }
    function O() {
      const y = i.value.trim() || n.value;
      p && p(y), s.value = !1;
    }
    return t({ show: j }), (y, H) => (I(), Ht(ys, { to: "body" }, [
      s.value ? (I(), N("div", {
        key: 0,
        class: "cm-selector-modal",
        style: { display: "flex" },
        onClick: ie(E, ["self"])
      }, [
        c("div", du, [
          H[2] || (H[2] = c("div", { class: "cm-selector-header" }, "Select Directory", -1)),
          c("div", pu, z(n.value || "Select a starting point"), 1),
          _t(c("input", {
            ref: "pathInputRef",
            type: "text",
            class: "comfy-input cm-selector-path",
            placeholder: "Type a path or pick below...",
            "onUpdate:modelValue": H[0] || (H[0] = (X) => i.value = X),
            onInput: x,
            onKeydown: Kr(ie(A, ["prevent"]), ["enter"])
          }, null, 40, hu), [
            [wt, i.value]
          ]),
          c("div", mu, [
            h.value ? (I(), N("div", {
              key: 0,
              class: "cm-dir-item special",
              onClick: H[1] || (H[1] = (X) => w(v.value))
            }, ".. [Up]")) : Te("", !0),
            (I(!0), N(ce, null, Fe(S.value, (X) => (I(), N("div", {
              key: X,
              class: "cm-dir-item",
              onClick: (le) => w(T(n.value, X))
            }, z(X), 9, vu))), 128))
          ]),
          c("div", { class: "cm-selector-footer" }, [
            c("button", {
              class: "comfy-btn comfy-btn-secondary cm-cancel",
              onClick: E
            }, "Cancel"),
            c("button", {
              class: "comfy-btn comfy-btn-primary cm-confirm",
              onClick: O
            }, "Select")
          ])
        ])
      ])) : Te("", !0)
    ]));
  }
}, bu = { class: "cm-sidebar-content" }, yu = {
  __name: "App",
  props: {
    comfyApp: { type: Object, required: !0 },
    comfyApi: { type: Object, required: !0 }
  },
  setup(e) {
    const t = e, { state: s } = Ye(), n = Ks();
    et("comfyApp", t.comfyApp), et("comfyApi", t.comfyApi), et("api", n), et("state", s), et("update", a), et("openViewer", d), et("toggleFavorite", h);
    const i = /* @__PURE__ */ V(null), l = /* @__PURE__ */ V(null), o = /* @__PURE__ */ V(null);
    et("contextMenuRef", i), et("imageViewerRef", l), et("folderSelectorRef", o);
    function r(w) {
      return new URLSearchParams({
        q: w !== void 0 ? w : s.searchQuery,
        tab: s.activeTab,
        utility: s.activeUtility,
        favorites_only: s.showFavorites,
        sort: s.sortBy,
        workflow_only: s.workflowOnly,
        hide_nsfw: s.hideNsfw,
        model_filter: s.activeModelFilters.size > 0 ? [...s.activeModelFilters].join(",") : "all",
        lora_filter: s.activeLoraFilters.size > 0 ? [...s.activeLoraFilters].join(",") : "all"
      });
    }
    async function a() {
      if (s.activeTab === "custom" && s.customFolderCount === 0) {
        s.currentFiles = [];
        return;
      }
      s.infoPanelVisible = !1, s.selectedFile = null;
      const w = r(), x = await n.fetchHistory(w);
      s.currentFiles = x.files;
    }
    async function p(w) {
      const x = r(w || ""), A = await n.fetchHistory(x);
      return s.currentFiles = A.files, A.files;
    }
    et("gridFetch", p);
    function d(w) {
      var A;
      const x = s.currentFiles.indexOf(w);
      (A = l.value) == null || A.open(s.currentFiles, x >= 0 ? x : 0, p);
    }
    async function h(w) {
      (await n.postFavorite(w.full_path)).ok && (w.is_favorite = !w.is_favorite, a());
    }
    function v(w, x) {
      var A;
      (A = i.value) == null || A.show(w, x);
    }
    function S() {
      var w;
      s.currentFiles.length > 0 && ((w = l.value) == null || w.openGrid(s.currentFiles, p));
    }
    Vt(() => {
      n.fetchTags().then((x) => {
        s.availableModels = x.models || [], s.availableLoras = x.loras || [];
      }).catch(() => {
      }), n.fetchVersion().then((x) => {
        x.version && (s.version = x.version);
      }).catch(() => {
      }), a();
      const w = () => {
        clearTimeout(T), T = setTimeout(() => a(), 300);
      };
      t.comfyApi.addEventListener("dnh-assets-changed", w), g = () => t.comfyApi.removeEventListener("dnh-assets-changed", w);
    });
    let T = null, g = null;
    return jt(() => {
      clearTimeout(T), g == null || g();
    }), (w, x) => (I(), N("div", bu, [
      _e(na),
      _e(wa),
      _e(Ta),
      c("button", {
        class: "cm-grid-view-btn",
        title: "Open grid view",
        onClick: S
      }, [...x[0] || (x[0] = [
        c("span", { class: "pi pi-th-large" }, null, -1),
        Pe(" Grid View ", -1)
      ])]),
      _e(dc),
      _e(kc),
      _e(ja, {
        onOpenViewer: d,
        onToggleFavorite: h,
        onContextMenu: v
      }),
      _e(Pc, {
        ref_key: "contextMenuRef",
        ref: i
      }, null, 512),
      _e(fu, {
        ref_key: "imageViewerRef",
        ref: l
      }, null, 512),
      _e(gu, {
        ref_key: "folderSelectorRef",
        ref: o
      }, null, 512)
    ]));
  }
};
ws.registerExtension({
  name: "DefinitelyNotHuman.AssetManager",
  async init() {
    const e = {
      id: "assetmanager.history.tab",
      icon: "pi pi-history",
      title: "History",
      type: "custom",
      render: (i) => {
        if (i.__vue_app__) return;
        qr(yu, {
          comfyApp: ws,
          comfyApi: $l
        }).mount(i);
      }
    };
    ws.extensionManager.registerSidebarTab(e);
    const t = ws.extensionManager.getSidebarTabs(), s = t.findIndex((i) => i.id === e.id), n = t.findIndex((i) => i.id === "assets");
    if (s !== -1 && n !== -1 && s !== n + 1) {
      const [i] = t.splice(s, 1), l = t.findIndex((o) => o.id === "assets") + 1;
      t.splice(l, 0, i);
    }
  }
});
