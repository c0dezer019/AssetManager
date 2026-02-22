(function(){const s=document.createElement("style");s.textContent=`.cm-sidebar-content{display:flex;flex-direction:column;padding:16px;gap:12px;background-color:#0f0f0f;height:100%}.cm-top-nav{display:flex;flex-direction:column;gap:12px}.cm-brand{display:flex;align-items:center;gap:8px}.cm-brand-title{font-weight:700;font-size:16px;color:#fff}.cm-version-badge{background:#222;color:#888;font-size:10px;padding:2px 6px;border-radius:4px}.cm-nav-tabs{display:flex;gap:4px;align-items:center}.cm-nav-btn{background:transparent;border:none;color:#888;padding:6px 12px;cursor:pointer;border-radius:12px;font-size:13px;transition:all .2s}.cm-nav-btn.active{background:#2a2a2a;color:#fff}.cm-search-container{display:flex;gap:8px;align-items:center}.cm-search-wrapper{position:relative;flex:1}.cm-search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#555;font-size:12px}.cm-search-input{width:100%;background:#181818;border:1px solid #2a2a2a;border-radius:8px;padding:8px 12px 8px 32px;color:#fff;font-size:13px}.cm-action-buttons{display:flex;gap:4px}.cm-tool-btn{background:#1d1d1d;border:1px solid #2a2a2a;border-radius:8px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;color:#888;cursor:pointer}.cm-status-line{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:4px}.cm-stats-text{font-size:12px;color:#666}.cm-grid-view-btn{width:100%;display:flex;align-items:center;justify-content:center;gap:6px;padding:6px 0;background:#1d1d1d;border:1px solid #2a2a2a;border-radius:8px;color:#888;font-size:12px;cursor:pointer;transition:all .15s}.cm-grid-view-btn:hover{color:#fff;background:#252525;border-color:#3a3a3a}.cm-grid-view-btn .pi{font-size:12px}.cm-asset-grid{flex-grow:1;display:grid;grid-template-columns:repeat(2,1fr);gap:8px;overflow-y:auto}.cm-card{aspect-ratio:1/1;border-radius:8px;background:#181818;border:1px solid #222;overflow:hidden;cursor:pointer;position:relative}.cm-card img{width:100%;height:100%;object-fit:cover}.cm-card-overlay{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,#000000d9);padding:16px 8px 6px;display:flex;flex-direction:column;gap:2px;pointer-events:none;opacity:0;transition:opacity .2s ease}.cm-card:hover .cm-card-overlay{opacity:1}.cm-overlay-name{font-size:11px;font-weight:600;color:#eee;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.cm-overlay-meta{display:flex;align-items:center;gap:6px;font-size:10px;color:#999}.cm-overlay-type{background:#ffffff1f;padding:1px 5px;border-radius:3px;font-weight:600;font-size:9px;letter-spacing:.3px;color:#bbb}.cm-overlay-size{color:#888}.cm-workflow-badge{position:absolute;top:6px;right:6px;background:#0084ffd9;color:#fff;width:22px;height:22px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;z-index:2;box-shadow:0 1px 4px #0006}.cm-date-badge{position:absolute;bottom:6px;right:6px;background:#000000b3;color:#ccc;font-size:9px;font-weight:600;padding:2px 6px;border-radius:4px;z-index:2;pointer-events:none;letter-spacing:.2px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition:opacity .2s ease}.cm-card:hover .cm-date-badge{opacity:0}.cm-fav-btn{position:absolute;top:6px;left:6px;z-index:3;background:#00000080;border:none;border-radius:6px;width:26px;height:26px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#888;font-size:13px;opacity:0;transition:opacity .2s,color .15s,background .15s;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.cm-card:hover .cm-fav-btn{opacity:1}.cm-fav-btn.active{opacity:1;color:#f5a623;background:#0009}.cm-fav-btn:hover{color:#f5a623;background:#000000b3}.cm-tool-btn.active{color:#0084ff;background:#0084ff1a;border-color:#0084ff4d}#cm-nsfw-toggle.active,.cm-nsfw-toggle.active{color:#ff6b6b;background:#ff6b6b1a;border-color:#ff6b6b4d}.cm-icon-only-btn{background:transparent;border:1px solid transparent;color:#888;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:8px;cursor:pointer;margin-left:auto;transition:all .2s}.cm-icon-only-btn:hover{color:#ccc;background:#1d1d1d}.cm-icon-only-btn.active{color:#0084ff;background:#0084ff1a;border-color:#0084ff4d}.cm-advanced-panel{display:none;flex-direction:column;gap:12px;background:#181818;border:1px solid #2a2a2a;border-radius:8px;padding:12px}.cm-advanced-panel.visible{display:flex}.cm-add-folder-row{display:flex;gap:4px;align-items:center}.cm-add-folder-row .comfy-input{flex:1;padding:6px 10px;font-size:13px;box-sizing:border-box}.cm-settings-group{display:flex;flex-direction:column;gap:8px}.cm-settings-label{font-size:12px;font-weight:600;color:#aaa;text-transform:uppercase;letter-spacing:.5px}.cm-settings-row{display:flex;gap:4px;align-items:center}.cm-settings-row .comfy-input{flex:1;padding:6px 10px;font-size:13px;box-sizing:border-box}.cm-settings-divider{border:none;border-top:1px solid #2a2a2a;margin:4px 0}.cm-empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 16px;gap:12px;grid-column:1 / -1}.cm-empty-icon{font-size:36px;color:#444}.cm-empty-text{font-size:14px;font-weight:600;color:#888;margin:0}.cm-empty-hint{font-size:12px;color:#555;margin:0;text-align:center}.cm-empty-hint .pi{font-size:11px}.cm-selector-modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#0009;z-index:10000;align-items:center;justify-content:center}.cm-selector-content{background:#1a1a1a;border:1px solid #333;border-radius:12px;width:480px;max-width:90vw;max-height:70vh;display:flex;flex-direction:column;box-shadow:0 8px 32px #00000080}.cm-selector-header{font-size:15px;font-weight:600;color:#fff;padding:14px 16px 0}.cm-current-path{font-size:12px;color:#0084ff;padding:4px 16px 8px;word-break:break-all;font-family:monospace}.cm-selector-path{margin:0 12px 8px;background:#111;border:1px solid #2a2a2a;border-radius:6px;padding:8px 10px;color:#fff;font-size:13px;font-family:monospace}.cm-selector-list{flex:1;overflow-y:auto;padding:0 8px;min-height:200px;max-height:40vh}.cm-dir-item{padding:8px 12px;color:#ccc;font-size:13px;cursor:pointer;border-radius:6px;transition:background .15s}.cm-dir-item:hover{background:#2a2a2a;color:#fff}.cm-dir-item.special{color:#0084ff;font-weight:600}.cm-selector-footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid #2a2a2a}.cm-folder-list{display:flex;flex-direction:column;gap:4px}.cm-folder-item{display:flex;align-items:center;gap:8px;padding:6px 10px;background:#111;border:1px solid #2a2a2a;border-radius:6px;font-size:12px;color:#ccc;font-family:monospace;word-break:break-all}.cm-folder-item span{flex:1}.cm-folder-remove-btn{background:transparent;border:none;color:#666;cursor:pointer;padding:2px 6px;border-radius:4px;font-size:11px;flex-shrink:0;transition:all .15s}.cm-folder-remove-btn:hover{color:#f44;background:#ff44441a}.cm-sidebar-content .comfy-btn,.cm-selector-footer .comfy-btn{border:none;border-radius:6px;padding:6px 12px;font-size:13px;cursor:pointer;transition:background .15s}.cm-sidebar-content .comfy-btn-primary,.cm-selector-footer .comfy-btn-primary{background:#0084ff;color:#fff}.cm-sidebar-content .comfy-btn-primary:hover,.cm-selector-footer .comfy-btn-primary:hover{background:#0070dd}.cm-sidebar-content .comfy-btn-secondary,.cm-selector-footer .comfy-btn-secondary{background:#2a2a2a;color:#ccc}.cm-sidebar-content .comfy-btn-secondary:hover,.cm-selector-footer .comfy-btn-secondary:hover{background:#363636;color:#fff}.cm-context-menu{position:fixed;z-index:10001;background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:4px 0;min-width:180px;max-height:70vh;overflow-y:auto;box-shadow:0 4px 16px #00000080}.cm-context-menu-item{display:flex;align-items:center;gap:8px;padding:8px 14px;color:#ccc;font-size:13px;cursor:pointer;transition:background .15s;border:none;background:none;width:100%;text-align:left}.cm-context-menu-item:hover{background:#2a2a2a;color:#fff}.cm-context-menu-item .pi{font-size:13px;width:16px;text-align:center}.cm-context-menu-item.cm-danger{color:#f55}.cm-context-menu-item.cm-danger:hover{background:#ff44441a;color:#f44}.cm-context-menu-separator{height:1px;background:#2a2a2a;margin:4px 0}.cm-context-menu-label{font-size:10px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:.5px;padding:6px 14px 2px;pointer-events:none}.cm-context-menu-item.cm-active{color:#0084ff}.cm-check-icon{font-size:14px;width:16px;text-align:center;flex-shrink:0}.cm-active-filters{display:flex;flex-wrap:wrap;gap:4px}.cm-filter-chip{background:#0084ff1a;border:1px solid rgba(0,132,255,.3);color:#0084ff;padding:3px 8px;border-radius:12px;font-size:10px;display:flex;align-items:center;gap:4px;white-space:nowrap}.cm-chip-close{cursor:pointer;font-size:8px;opacity:.7;transition:opacity .15s}.cm-chip-close:hover{opacity:1}.cm-info-panel{display:none;flex-direction:column;gap:10px;background:#141414;border:1px solid #2a2a2a;border-radius:10px;padding:14px;position:relative;flex-shrink:0}.cm-info-panel.visible{display:flex}.cm-info-panel-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.cm-info-panel-title{font-size:13px;font-weight:600;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.cm-info-close-btn{background:transparent;border:none;color:#666;cursor:pointer;padding:4px;border-radius:4px;font-size:12px;flex-shrink:0;transition:all .15s}.cm-info-close-btn:hover{color:#ccc;background:#2a2a2a}.cm-info-preview{width:100%;max-height:160px;object-fit:contain;border-radius:6px;background:#0a0a0a;border:1px solid #222}.cm-info-field{display:flex;flex-direction:column;gap:4px}.cm-info-label{font-size:11px;font-weight:600;color:#777;text-transform:uppercase;letter-spacing:.4px}.cm-info-input{background:#1a1a1a;border:1px solid #2a2a2a;border-radius:6px;padding:7px 10px;color:#ddd;font-size:12px;font-family:inherit;resize:none;transition:border-color .15s}.cm-info-input:focus{outline:none;border-color:#0084ff}.cm-info-input::placeholder{color:#444}textarea.cm-info-input{min-height:48px}.cm-info-rating{display:flex;gap:4px}.cm-info-star{background:none;border:none;font-size:18px;cursor:pointer;padding:0 1px;color:#333;transition:color .15s;line-height:1}.cm-info-star.active,.cm-info-star:hover{color:#f5a623}.cm-info-actions{display:flex;gap:6px;padding-top:4px}.cm-info-save-btn{flex:1;background:#0084ff;border:none;border-radius:6px;color:#fff;padding:7px 12px;font-size:12px;font-weight:600;cursor:pointer;transition:background .15s}.cm-info-save-btn:hover{background:#0070dd}.cm-info-save-btn:disabled{background:#333;color:#666;cursor:default}.cm-info-file-meta{display:flex;gap:8px;flex-wrap:wrap;font-size:10px;color:#555}.cm-info-file-meta span{background:#1a1a1a;padding:2px 6px;border-radius:4px}.cm-info-saved-msg{font-size:11px;color:#4caf50;text-align:center;opacity:0;transition:opacity .3s}.cm-info-saved-msg.show{opacity:1}.cm-submenu{position:fixed;z-index:10002;background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:4px 0;min-width:200px;max-width:360px;max-height:50vh;overflow-y:auto;box-shadow:0 4px 16px #00000080}.cm-submenu-item{position:relative;display:flex;align-items:center;gap:8px}.cm-submenu-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cm-submenu-arrow{color:#555;font-size:10px;flex-shrink:0;margin-left:auto}.cm-submenu-item:hover .cm-submenu-arrow{color:#999}.cm-submenu-copy-row{display:flex;align-items:center;gap:8px;justify-content:space-between}.cm-submenu-key{color:#999;font-size:12px;flex-shrink:0;white-space:nowrap}.cm-submenu-value{color:#666;font-size:11px;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px;font-family:monospace}.cm-submenu-copy-row:hover .cm-submenu-value{color:#aaa}.cm-copy-toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%) translateY(8px);background:#222;color:#4caf50;font-size:12px;font-weight:600;padding:6px 16px;border-radius:6px;border:1px solid #333;box-shadow:0 4px 12px #0006;z-index:10010;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none}.cm-copy-toast.show{opacity:1;transform:translate(-50%) translateY(0)}.cm-card.selected{border-color:#0084ff;box-shadow:0 0 0 1px #0084ff}.cm-viewer-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#000000eb;z-index:10020}.cm-viewer-overlay.visible{display:block}.cm-viewer-topbar{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;gap:12px;padding:12px 16px;background:linear-gradient(to bottom,rgba(0,0,0,.8) 0%,rgba(0,0,0,.4) 70%,transparent 100%);z-index:10022;opacity:0;transition:opacity .25s ease;pointer-events:none}.cm-viewer-body:hover .cm-viewer-topbar{opacity:1;pointer-events:auto}.cm-viewer-topbar-name{font-size:14px;font-weight:600;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}.cm-viewer-topbar-size{font-size:12px;color:#ffffff80;flex-shrink:0;font-variant-numeric:tabular-nums;position:absolute;left:50%;transform:translate(-50%)}.cm-viewer-topbar-counter{font-size:13px;color:#666;font-variant-numeric:tabular-nums;flex-shrink:0}.cm-viewer-topbar-actions{display:flex;gap:4px;flex-shrink:0}.cm-viewer-grid-toggle,.cm-viewer-panel-toggle,.cm-viewer-fullscreen-toggle,.cm-viewer-close{background:#ffffff0f;border:none;color:#aaa;width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;transition:background .2s,color .2s}.cm-viewer-grid-toggle:hover,.cm-viewer-panel-toggle:hover,.cm-viewer-fullscreen-toggle:hover,.cm-viewer-close:hover{background:#ffffff1f;color:#fff}.cm-viewer-grid-toggle.active,.cm-viewer-panel-toggle.active,.cm-viewer-fullscreen-toggle.active{color:#0084ff;background:#0084ff1f}.cm-viewer-overlay.fullscreen .cm-viewer-topbar,.cm-viewer-overlay.fullscreen .cm-viewer-nav{opacity:0!important;pointer-events:none!important}.cm-viewer-overlay.fullscreen .cm-viewer-img-container{padding:0}.cm-viewer-body{display:flex;position:relative;width:100%;height:100%;overflow:hidden}.cm-viewer-nav{position:absolute;top:50%;transform:translateY(-50%);z-index:10022;background:#ffffff0f;border:none;color:#888;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;opacity:0;transition:opacity .2s,background .2s,color .2s}.cm-viewer-body:hover .cm-viewer-nav{opacity:1}.cm-viewer-nav:hover{background:#ffffff26;color:#fff}.cm-viewer-prev{left:16px}.cm-viewer-next{right:16px}.cm-viewer-zoom-chip{position:absolute;bottom:16px;left:50%;transform:translate(-50%);z-index:10022;display:flex;align-items:center;gap:6px;background:#000000b3;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:4px 12px;opacity:0;transition:opacity .25s ease;pointer-events:none}.cm-viewer-body:hover .cm-viewer-zoom-chip{opacity:1;pointer-events:auto}.cm-viewer-zoom-value{font-size:12px;color:#aaa;font-variant-numeric:tabular-nums;-webkit-user-select:none;user-select:none;cursor:pointer;transition:color .2s}.cm-viewer-zoom-value:hover{color:#fff}.cm-viewer-zoom-reset{background:none;border:none;color:#666;cursor:pointer;font-size:11px;padding:0;display:flex;align-items:center;transition:color .2s}.cm-viewer-zoom-reset:hover{color:#fff}.cm-viewer-zoom-menu{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translate(-50%);background:#141414f2;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:4px;display:none;flex-direction:column;min-width:80px;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 8px 24px #00000080}.cm-viewer-zoom-menu.open{display:flex}.cm-viewer-zoom-menu-item{background:none;border:none;color:#aaa;font-size:12px;font-variant-numeric:tabular-nums;padding:6px 14px;border-radius:6px;cursor:pointer;text-align:center;transition:background .15s,color .15s}.cm-viewer-zoom-menu-item:hover{background:#ffffff1a;color:#fff}.cm-viewer-zoom-menu-item.active{color:#0084ff}.cm-viewer-img-container{flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px 72px;box-sizing:border-box;min-width:0}.cm-viewer-img{max-width:100%;max-height:100%;object-fit:contain;-webkit-user-select:none;user-select:none;transition:transform .1s ease-out}.cm-viewer-panel{width:0;overflow:hidden;background:#111;border-left:1px solid #222;flex-shrink:0;transition:width .25s ease;display:flex;flex-direction:column;padding-top:58px}.cm-viewer-panel.open{width:340px;overflow-y:auto}.cm-viewer-section{border-bottom:1px solid #222}.cm-viewer-section-header{display:flex;align-items:center;gap:8px;width:100%;padding:12px 16px;background:none;border:none;color:#bbb;font-size:13px;font-weight:600;cursor:pointer;text-align:left;transition:background .15s,color .15s}.cm-viewer-section-header:hover{background:#ffffff0a;color:#eee}.cm-viewer-section-chevron{font-size:11px;color:#555;width:14px;text-align:center;flex-shrink:0;transition:color .15s}.cm-viewer-section-header:hover .cm-viewer-section-chevron{color:#999}.cm-viewer-section-body{display:none;padding:0 16px 14px;flex-direction:column;gap:6px}.cm-viewer-section-body.expanded{display:flex}.cm-viewer-row{display:flex;align-items:baseline;gap:8px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.03)}.cm-viewer-row:last-child{border-bottom:none}.cm-viewer-row-label{font-size:12px;font-weight:600;color:#777;white-space:nowrap;flex-shrink:0}.cm-viewer-row-value{font-size:12px;color:#ccc;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1;font-family:monospace}.cm-viewer-row-value.cm-viewer-truncated{cursor:pointer;text-decoration-style:dotted}.cm-viewer-row-value.cm-viewer-truncated:hover{color:#fff}.cm-viewer-row-value.cm-viewer-expanded{white-space:pre-wrap;word-break:break-all;text-align:left}.cm-viewer-copy-btn{background:none;border:none;color:#444;cursor:pointer;padding:2px 4px;border-radius:4px;font-size:11px;flex-shrink:0;transition:color .15s,background .15s;line-height:1}.cm-viewer-copy-btn:hover{color:#ccc;background:#ffffff14}.cm-viewer-node{background:#ffffff08;border:1px solid #1e1e1e;border-radius:6px;padding:8px 10px}.cm-viewer-node+.cm-viewer-node{margin-top:6px}.cm-viewer-node-title{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;font-weight:600;color:#aaa;margin-bottom:4px;padding-bottom:4px;border-bottom:1px solid #1e1e1e}.cm-viewer-copy-node{font-size:13px;color:#4a9;padding:3px 6px;border:1px solid rgba(68,170,153,.25);border-radius:5px;background:#44aa990f}.cm-viewer-copy-node:hover{color:#5cb;border-color:#44aa9980;background:#44aa991f}.cm-viewer-empty{font-size:12px;color:#555;padding:4px 0;font-style:italic}.cm-viewer-carousel-ghost{display:none;position:absolute;top:0;bottom:0;width:40%;align-items:center;justify-content:center;z-index:10021;pointer-events:none;opacity:.5}.cm-viewer-carousel-ghost img{max-width:80%;max-height:70%;object-fit:contain;-webkit-user-select:none;user-select:none}.cm-viewer-carousel-prev{left:0;transform:translate(-50%);-webkit-mask-image:linear-gradient(to right,transparent 10%,rgba(0,0,0,.6));mask-image:linear-gradient(to right,transparent 10%,rgba(0,0,0,.6))}.cm-viewer-carousel-next{right:0;transform:translate(50%);-webkit-mask-image:linear-gradient(to left,transparent 10%,rgba(0,0,0,.6));mask-image:linear-gradient(to left,transparent 10%,rgba(0,0,0,.6))}.cm-carousel-active .cm-viewer-carousel-ghost{display:flex}.cm-carousel-active .cm-viewer-prev{left:calc(20% - 60px)}.cm-carousel-active .cm-viewer-next{right:calc(20% - 60px)}.cm-viewer-overlay.fullscreen .cm-viewer-carousel-ghost{display:none!important}@keyframes cm-slide-out-left{0%{transform:translate(0);opacity:1}to{transform:translate(-100%);opacity:0}}@keyframes cm-slide-out-right{0%{transform:translate(0);opacity:1}to{transform:translate(100%);opacity:0}}@keyframes cm-slide-in-from-right{0%{transform:translate(60%);opacity:0}to{transform:translate(0);opacity:1}}@keyframes cm-slide-in-from-left{0%{transform:translate(-60%);opacity:0}to{transform:translate(0);opacity:1}}.cm-viewer-img-container.cm-slide-out-left{animation:cm-slide-out-left .25s ease forwards}.cm-viewer-img-container.cm-slide-out-right{animation:cm-slide-out-right .25s ease forwards}.cm-viewer-img-container.cm-slide-in-from-right{animation:cm-slide-in-from-right .25s ease forwards}.cm-viewer-img-container.cm-slide-in-from-left{animation:cm-slide-in-from-left .25s ease forwards}.cm-carousel-dragging .cm-viewer-img,.cm-carousel-dragging .cm-viewer-carousel-ghost,.cm-carousel-dragging .cm-viewer-img-container{transition:none!important}.cm-viewer-grid{display:none;position:absolute;top:0;left:0;right:0;bottom:0;z-index:10023;background:#000000f5;padding:64px 24px 24px;overflow-y:auto}.cm-viewer-grid-mode .cm-viewer-grid{display:grid;grid-template-columns:repeat(var(--grid-cols),1fr);grid-auto-rows:min-content;gap:10px;align-content:start}.cm-viewer-grid-mode .cm-viewer-grid.cm-grid-slider-active{grid-template-columns:repeat(auto-fill,minmax(var(--grid-thumb-size, 150px),1fr))}.cm-viewer-grid-toolbar{display:none;position:absolute;top:0;left:0;right:0;height:52px;z-index:10024;align-items:center;justify-content:space-between;padding:0 20px;background:#0f0f0f;border-bottom:1px solid #222}.cm-viewer-grid-mode .cm-viewer-grid-toolbar{display:flex}.cm-viewer-grid-close{background:#ffffff0f;border:none;color:#aaa;width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;transition:background .2s,color .2s}.cm-viewer-grid-close:hover{background:#ffffff1f;color:#fff}.cm-viewer-grid-toolbar-center{display:flex;align-items:center;gap:6px;flex:1;justify-content:center;padding:0 16px}.cm-viewer-grid-search-wrapper{position:relative;max-width:240px;flex:1}.cm-viewer-grid-search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:#555;font-size:11px;pointer-events:none}.cm-viewer-grid-search{width:100%;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:6px;padding:6px 10px 6px 28px;color:#ddd;font-size:12px;outline:none;transition:border-color .15s}.cm-viewer-grid-search:focus{border-color:#0084ff}.cm-viewer-grid-search::placeholder{color:#555}.cm-viewer-grid-btn{background:#ffffff0f;border:1px solid transparent;color:#888;width:32px;height:32px;border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;flex-shrink:0;transition:background .15s,color .15s,border-color .15s}.cm-viewer-grid-btn:hover{background:#ffffff1f;color:#fff}.cm-viewer-grid-btn.active{color:#0084ff;background:#0084ff1f;border-color:#0084ff4d}.cm-viewer-grid-nsfw.active{color:#ff6b6b;background:#ff6b6b1a;border-color:#ff6b6b4d}.cm-viewer-grid-toolbar-slider{display:flex;align-items:center;gap:10px}.cm-viewer-grid-slider-icon{font-size:13px;color:#555}.cm-viewer-grid-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:180px;height:4px;background:#333;border-radius:2px;outline:none;cursor:pointer}.cm-viewer-grid-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:#0084ff;cursor:pointer;border:none;transition:transform .1s}.cm-viewer-grid-slider::-webkit-slider-thumb:hover{transform:scale(1.2)}.cm-viewer-grid-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#0084ff;cursor:pointer;border:none}.cm-viewer-grid-mode .cm-viewer-img-container,.cm-viewer-grid-mode .cm-viewer-carousel-ghost,.cm-viewer-grid-mode .cm-viewer-nav,.cm-viewer-grid-mode .cm-viewer-zoom-chip{display:none!important}.cm-viewer-grid-item{aspect-ratio:1 / 1;border-radius:8px;overflow:hidden;cursor:pointer;position:relative;border:2px solid transparent;background:#181818;transition:border-color .15s,transform .15s}.cm-viewer-grid-item:hover{border-color:#fff3;transform:scale(1.03)}.cm-viewer-grid-item.active{border-color:#0084ff;box-shadow:0 0 0 1px #0084ff,0 0 12px #0084ff40}.cm-viewer-grid-item img{width:100%;height:100%;object-fit:cover;display:block}.cm-viewer-grid-label{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,#000000d9);color:#ccc;font-size:10px;padding:16px 6px 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0;transition:opacity .2s;pointer-events:none}.cm-viewer-grid-item:hover .cm-viewer-grid-label{opacity:1}.cm-viewer-grid-mode .cm-viewer-topbar{display:none}
`;document.head.appendChild(s)})();
import { app as _s } from "../../scripts/app.js";
import { api as Tl } from "../../scripts/api.js";
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
}, yi = () => !1, Ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), yn = (e) => e.startsWith("onUpdate:"), je = Object.assign, bn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, $l = Object.prototype.hasOwnProperty, de = (e, t) => $l.call(e, t), J = Array.isArray, Gt = (e) => ms(e) === "[object Map]", bi = (e) => ms(e) === "[object Set]", Ln = (e) => ms(e) === "[object Date]", ee = (e) => typeof e == "function", Ce = (e) => typeof e == "string", dt = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", _i = (e) => (he(e) || ee(e)) && ee(e.then) && ee(e.catch), wi = Object.prototype.toString, ms = (e) => wi.call(e), Fl = (e) => ms(e).slice(8, -1), xi = (e) => ms(e) === "[object Object]", _n = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ss = /* @__PURE__ */ gn(
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
), Mt = (e, t) => !Object.is(e, t), ks = (e, ...t) => {
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
  if (J(e)) {
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
function G(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (J(e))
    for (let s = 0; s < e.length; s++) {
      const n = G(e[s]);
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
  if (s = J(e), n = J(t), s || n)
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
const Ti = (e) => !!(e && e.__v_isRef === !0), Q = (e) => Ce(e) ? e : e == null ? "" : J(e) || he(e) && (e.toString === wi || !ee(e.toString)) ? Ti(e) ? Q(e.value) : JSON.stringify(e, $i, 2) : String(e), $i = (e, t) => Ti(t) ? $i(e, t.value) : Gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], l) => (s[Gs(n, l) + " =>"] = i, s),
    {}
  )
} : bi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Gs(s))
} : dt(t) ? Gs(t) : he(t) && !J(t) && !xi(t) ? String(t) : t, Gs = (e, t = "") => {
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
    n.version === -1 ? (n === s && (s = i), kn(n), Hl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === us) || (e.globalVersion = us, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !nn(e))))
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
function Hl(e) {
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
let us = 0;
class jl {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Tn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ge || !ot || ge === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ge)
      s = this.activeLink = new jl(ge, this), ge.deps ? (s.prevDep = ge.depsTail, ge.depsTail.nextDep = s, ge.depsTail = s) : ge.deps = ge.depsTail = s, Ii(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ge.depsTail, s.nextDep = void 0, ge.depsTail.nextDep = s, ge.depsTail = s, ge.deps === s && (ge.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, us++, this.notify(t);
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
), fs = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, s) {
  if (ot && ge) {
    let n = ln.get(e);
    n || ln.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Tn()), i.map = n, i.key = s), i.track();
  }
}
function yt(e, t, s, n, i, l) {
  const o = ln.get(e);
  if (!o) {
    us++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (Cn(), t === "clear")
    o.forEach(r);
  else {
    const a = J(e), p = a && _n(s);
    if (a && s === "length") {
      const f = Number(n);
      o.forEach((h, v) => {
        (v === "length" || v === fs || !dt(v) && v >= f) && r(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && r(o.get(s)), p && r(o.get(fs)), t) {
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
  return t === e ? t : (Ve(t, "iterate", fs), /* @__PURE__ */ nt(e) ? t : t.map(rt));
}
function Vs(e) {
  return Ve(e = /* @__PURE__ */ fe(e), "iterate", fs), e;
}
function $t(e, t) {
  return /* @__PURE__ */ St(e) ? Yt(/* @__PURE__ */ Nt(e) ? rt(t) : t) : rt(t);
}
const Bl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Js(this, Symbol.iterator, (e) => $t(this, e));
  },
  concat(...e) {
    return Ut(this).concat(
      ...e.map((t) => J(t) ? Ut(t) : t)
    );
  },
  entries() {
    return Js(this, "entries", (e) => (e[1] = $t(this, e[1]), e));
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
      (s) => s.map((n) => $t(this, n)),
      arguments
    );
  },
  find(e, t) {
    return mt(
      this,
      "find",
      e,
      t,
      (s) => $t(this, s),
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
      (s) => $t(this, s),
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
    return Js(this, "values", (e) => $t(this, e));
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
    return s.call(this, $t(e, h), v, e);
  } : s.length > 2 && (p = function(h, v) {
    return s.call(this, h, v, e);
  }));
  const f = a.call(o, p, n);
  return r && i ? i(f) : f;
}
function Vn(e, t, s, n) {
  const i = Vs(e);
  let l = s;
  return i !== e && (/* @__PURE__ */ nt(e) ? s.length > 3 && (l = function(o, r, a) {
    return s.call(this, o, r, a, e);
  }) : l = function(o, r, a) {
    return s.call(this, o, $t(e, r), a, e);
  }), i[t](l, ...n);
}
function Ys(e, t, s) {
  const n = /* @__PURE__ */ fe(e);
  Ve(n, "iterate", fs);
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
      return n === (i ? l ? to : ji : l ? Hi : Vi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = J(t);
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
      /* @__PURE__ */ He(t) ? t : n
    );
    if ((dt(s) ? Li.has(s) : Wl(s)) || (i || Ve(t, "get", s), l))
      return r;
    if (/* @__PURE__ */ He(r)) {
      const a = o && _n(s) ? r : r.value;
      return i && he(a) ? /* @__PURE__ */ an(a) : a;
    }
    return he(r) ? i ? /* @__PURE__ */ an(r) : /* @__PURE__ */ vs(r) : r;
  }
}
class Ni extends Di {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let l = t[s];
    const o = J(t) && _n(s);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ St(l);
      if (!/* @__PURE__ */ nt(n) && !/* @__PURE__ */ St(n) && (l = /* @__PURE__ */ fe(l), n = /* @__PURE__ */ fe(n)), !o && /* @__PURE__ */ He(l) && !/* @__PURE__ */ He(n))
        return p || (l.value = n), !0;
    }
    const r = o ? Number(s) < t.length : de(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ He(t) ? t : i
    );
    return t === /* @__PURE__ */ fe(i) && (r ? Mt(n, l) && yt(t, "set", s, n) : yt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = de(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && yt(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!dt(s) || !Li.has(s)) && Ve(t, "has", s), n;
  }
  ownKeys(t) {
    return Ve(
      t,
      "iterate",
      J(t) ? "length" : Dt
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
const rn = (e) => e, ws = (e) => Reflect.getPrototypeOf(e);
function Yl(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, l = /* @__PURE__ */ fe(i), o = Gt(l), r = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, p = i[e](...n), f = s ? rn : t ? Yt : rt;
    return !t && Ve(
      l,
      "iterate",
      a ? on : Dt
    ), je(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: h, done: v } = p.next();
          return v ? { value: h, done: v } : {
            value: r ? [f(h[0]), f(h[1])] : f(h),
            done: v
          };
        }
      }
    );
  };
}
function xs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xl(e, t) {
  const s = {
    get(i) {
      const l = this.__v_raw, o = /* @__PURE__ */ fe(l), r = /* @__PURE__ */ fe(i);
      e || (Mt(i, r) && Ve(o, "get", i), Ve(o, "get", r));
      const { has: a } = ws(o), p = t ? rn : e ? Yt : rt;
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
      return !e && Ve(a, "iterate", Dt), r.forEach((f, h) => i.call(l, p(f), p(h), o));
    }
  };
  return je(
    s,
    e ? {
      add: xs("add"),
      set: xs("set"),
      delete: xs("delete"),
      clear: xs("clear")
    } : {
      add(i) {
        !t && !/* @__PURE__ */ nt(i) && !/* @__PURE__ */ St(i) && (i = /* @__PURE__ */ fe(i));
        const l = /* @__PURE__ */ fe(this);
        return ws(l).has.call(l, i) || (l.add(i), yt(l, "add", i, i)), this;
      },
      set(i, l) {
        !t && !/* @__PURE__ */ nt(l) && !/* @__PURE__ */ St(l) && (l = /* @__PURE__ */ fe(l));
        const o = /* @__PURE__ */ fe(this), { has: r, get: a } = ws(o);
        let p = r.call(o, i);
        p || (i = /* @__PURE__ */ fe(i), p = r.call(o, i));
        const f = a.call(o, i);
        return o.set(i, l), p ? Mt(l, f) && yt(o, "set", i, l) : yt(o, "add", i, l), this;
      },
      delete(i) {
        const l = /* @__PURE__ */ fe(this), { has: o, get: r } = ws(l);
        let a = o.call(l, i);
        a || (i = /* @__PURE__ */ fe(i), a = o.call(l, i)), r && r.call(l, i);
        const p = l.delete(i);
        return a && yt(l, "delete", i, void 0), p;
      },
      clear() {
        const i = /* @__PURE__ */ fe(this), l = i.size !== 0, o = i.clear();
        return l && yt(
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
function $n(e, t) {
  const s = Xl(e, t);
  return (n, i, l) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    de(s, i) && i in n ? s : n,
    i,
    l
  );
}
const Zl = {
  get: /* @__PURE__ */ $n(!1, !1)
}, Ql = {
  get: /* @__PURE__ */ $n(!1, !0)
}, eo = {
  get: /* @__PURE__ */ $n(!0, !1)
};
const Vi = /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap(), to = /* @__PURE__ */ new WeakMap();
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
function vs(e) {
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
    Hi
  );
}
// @__NO_SIDE_EFFECTS__
function an(e) {
  return Fn(
    e,
    !0,
    ql,
    eo,
    ji
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
const rt = (e) => he(e) ? /* @__PURE__ */ vs(e) : e, Yt = (e) => he(e) ? /* @__PURE__ */ an(e) : e;
// @__NO_SIDE_EFFECTS__
function He(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  return oo(e, !1);
}
function oo(e, t) {
  return /* @__PURE__ */ He(e) ? e : new ro(e, t);
}
class ro {
  constructor(t, s) {
    this.dep = new Tn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ fe(t), this._value = s ? t : rt(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ nt(t) || /* @__PURE__ */ St(t);
    t = n ? t : /* @__PURE__ */ fe(t), Mt(t, s) && (this._rawValue = t, this._value = n ? t : rt(t), this.dep.trigger());
  }
}
function U(e) {
  return /* @__PURE__ */ He(e) ? e.value : e;
}
const ao = {
  get: (e, t, s) => t === "__v_raw" ? e : U(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ He(i) && !/* @__PURE__ */ He(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Bi(e) {
  return /* @__PURE__ */ Nt(e) ? e : new Proxy(e, ao);
}
class co {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Tn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = us - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
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
  return ee(e) ? n = e : (n = e.get, i = e.set), new co(n, i, s);
}
const Cs = {}, As = /* @__PURE__ */ new WeakMap();
let Lt;
function fo(e, t = !1, s = Lt) {
  if (s) {
    let n = As.get(s);
    n || As.set(s, n = []), n.push(e);
  }
}
function po(e, t, s = ve) {
  const { immediate: n, deep: i, once: l, scheduler: o, augmentJob: r, call: a } = s, p = (R) => i ? R : /* @__PURE__ */ nt(R) || i === !1 || i === 0 ? bt(R, 1) : bt(R);
  let f, h, v, y, T = !1, M = !1;
  if (/* @__PURE__ */ He(e) ? (h = () => e.value, T = /* @__PURE__ */ nt(e)) : /* @__PURE__ */ Nt(e) ? (h = () => p(e), T = !0) : J(e) ? (M = !0, T = e.some((R) => /* @__PURE__ */ Nt(R) || /* @__PURE__ */ nt(R)), h = () => e.map((R) => {
    if (/* @__PURE__ */ He(R))
      return R.value;
    if (/* @__PURE__ */ Nt(R))
      return p(R);
    if (ee(R))
      return a ? a(R, 2) : R();
  })) : ee(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      xt();
      try {
        v();
      } finally {
        Ct();
      }
    }
    const R = Lt;
    Lt = f;
    try {
      return a ? a(e, 3, [y]) : e(y);
    } finally {
      Lt = R;
    }
  } : h = ft, t && i) {
    const R = h, H = i === !0 ? 1 / 0 : i;
    h = () => bt(R(), H);
  }
  const S = Vl(), g = () => {
    f.stop(), S && S.active && bn(S.effects, f);
  };
  if (l && t) {
    const R = t;
    t = (...H) => {
      R(...H), g();
    };
  }
  let x = M ? new Array(e.length).fill(Cs) : Cs;
  const L = (R) => {
    if (!(!(f.flags & 1) || !f.dirty && !R))
      if (t) {
        const H = f.run();
        if (i || T || (M ? H.some((P, K) => Mt(P, x[K])) : Mt(H, x))) {
          v && v();
          const P = Lt;
          Lt = f;
          try {
            const K = [
              H,
              // pass undefined as the old value when it's changed for the first time
              x === Cs ? void 0 : M && x[0] === Cs ? [] : x,
              y
            ];
            x = H, a ? a(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            Lt = P;
          }
        }
      } else
        f.run();
  };
  return r && r(L), f = new Fi(h), f.scheduler = o ? () => o(L, !1) : L, y = (R) => fo(R, !1, f), v = f.onStop = () => {
    const R = As.get(f);
    if (R) {
      if (a)
        a(R, 4);
      else
        for (const H of R) H();
      As.delete(f);
    }
  }, t ? n ? L(!0) : x = f.run() : o ? o(L.bind(null, !0), !0) : f.run(), g.pause = f.pause.bind(f), g.resume = f.resume.bind(f), g.stop = g, g;
}
function bt(e, t = 1 / 0, s) {
  if (t <= 0 || !he(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ He(e))
    bt(e.value, t, s);
  else if (J(e))
    for (let n = 0; n < e.length; n++)
      bt(e[n], t, s);
  else if (bi(e) || Gt(e))
    e.forEach((n) => {
      bt(n, t, s);
    });
  else if (xi(e)) {
    for (const n in e)
      bt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && bt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gs(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Hs(i, t, s);
  }
}
function pt(e, t, s, n) {
  if (ee(e)) {
    const i = gs(e, t, s, n);
    return i && _i(i) && i.catch((l) => {
      Hs(l, t, s);
    }), i;
  }
  if (J(e)) {
    const i = [];
    for (let l = 0; l < e.length; l++)
      i.push(pt(e[l], t, s, n));
    return i;
  }
}
function Hs(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ve;
  if (t) {
    let r = t.parent;
    const a = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; r; ) {
      const f = r.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, a, p) === !1)
            return;
      }
      r = r.parent;
    }
    if (l) {
      xt(), gs(l, null, 10, [
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
    const n = t + s >>> 1, i = Ke[n], l = ds(i);
    l < e || l === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function An(e) {
  if (!(e.flags & 1)) {
    const t = ds(e), s = Ke[Ke.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ds(s) ? Ke.push(e) : Ke.splice(mo(t), 0, e), e.flags |= 1, Wi();
  }
}
function Wi() {
  Rs || (Rs = Ui.then(zi));
}
function vo(e) {
  J(e) ? qt.push(...e) : Ft && e.id === -1 ? Ft.splice(Wt + 1, 0, e) : e.flags & 1 || (qt.push(e), e.flags |= 1), Wi();
}
function Hn(e, t, s = ct + 1) {
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
      (s, n) => ds(s) - ds(n)
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
const ds = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zi(e) {
  try {
    for (ct = 0; ct < Ke.length; ct++) {
      const t = Ke[ct];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), gs(
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
    l && (ee(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && bt(o), n.push({
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
function Ae(e, t, s = !1) {
  const n = mr();
  if (n || Jt) {
    let i = Jt ? Jt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && ee(t) ? t.call(n && n.proxy) : t;
  }
}
const yo = /* @__PURE__ */ Symbol.for("v-scx"), bo = () => Ae(yo);
function Ts(e, t, s) {
  return qi(e, t, s);
}
function qi(e, t, s = ve) {
  const { immediate: n, deep: i, flush: l, once: o } = s, r = je({}, s), a = t && n || !t && l !== "post";
  let p;
  if (hs) {
    if (l === "sync") {
      const y = bo();
      p = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {
      };
      return y.stop = ft, y.resume = ft, y.pause = ft, y;
    }
  }
  const f = ze;
  r.call = (y, T, M) => pt(y, f, T, M);
  let h = !1;
  l === "post" ? r.scheduler = (y) => {
    Ne(y, f && f.suspense);
  } : l !== "sync" && (h = !0, r.scheduler = (y, T) => {
    T ? y() : An(y);
  }), r.augmentJob = (y) => {
    t && (y.flags |= 4), h && (y.flags |= 2, f && (y.id = f.uid, y.i = f));
  };
  const v = po(e, t, r);
  return hs && (p ? p.push(v) : a && v()), v;
}
function _o(e, t, s) {
  const n = this.proxy, i = Ce(e) ? e.includes(".") ? Ji(n, e) : () => n[e] : e.bind(n, n);
  let l;
  ee(t) ? l = t : (l = t.handler, s = t);
  const o = bs(this), r = qi(i, l.bind(n), s);
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
const Yi = /* @__PURE__ */ Symbol("_vte"), wo = (e) => e.__isTeleport, ls = (e) => e && (e.disabled || e.disabled === ""), jn = (e) => e && (e.defer || e.defer === ""), Bn = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Un = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cn = (e, t) => {
  const s = e && e.to;
  return Ce(s) ? t ? t(s) : null : s;
}, Xi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, l, o, r, a, p) {
    const {
      mc: f,
      pc: h,
      pbc: v,
      o: { insert: y, querySelector: T, createText: M, createComment: S }
    } = p, g = ls(t.props);
    let { shapeFlag: x, children: L, dynamicChildren: R } = t;
    if (e == null) {
      const H = t.el = M(""), P = t.anchor = M("");
      y(H, s, n), y(P, s, n);
      const K = (le, Se) => {
        x & 16 && f(
          L,
          le,
          Se,
          i,
          l,
          o,
          r,
          a
        );
      }, te = () => {
        const le = t.target = cn(t.props, T), Se = un(le, t, M, y);
        le && (o !== "svg" && Bn(le) ? o = "svg" : o !== "mathml" && Un(le) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(le), g || (K(le, Se), $s(t, !1)));
      };
      g && (K(s, P), $s(t, !0)), jn(t.props) ? (t.el.__isMounted = !1, Ne(() => {
        te(), delete t.el.__isMounted;
      }, l)) : te();
    } else {
      if (jn(t.props) && e.el.__isMounted === !1) {
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
      const H = t.anchor = e.anchor, P = t.target = e.target, K = t.targetAnchor = e.targetAnchor, te = ls(e.props), le = te ? s : P, Se = te ? H : K;
      if (o === "svg" || Bn(P) ? o = "svg" : (o === "mathml" || Un(P)) && (o = "mathml"), R ? (v(
        e.dynamicChildren,
        R,
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
      ), g)
        te ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ss(
          t,
          s,
          H,
          p,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Ie = t.target = cn(
          t.props,
          T
        );
        Ie && Ss(
          t,
          Ie,
          null,
          p,
          0
        );
      } else te && Ss(
        t,
        P,
        K,
        p,
        1
      );
      $s(t, g);
    }
  },
  remove(e, t, s, { um: n, o: { remove: i } }, l) {
    const {
      shapeFlag: o,
      children: r,
      anchor: a,
      targetStart: p,
      targetAnchor: f,
      target: h,
      props: v
    } = e;
    if (h && (i(p), i(f)), l && i(a), o & 16) {
      const y = l || !ls(v);
      for (let T = 0; T < r.length; T++) {
        const M = r[T];
        n(
          M,
          t,
          s,
          y,
          !!M.dynamicChildren
        );
      }
    }
  },
  move: Ss,
  hydrate: xo
};
function Ss(e, t, s, { o: { insert: n }, m: i }, l = 2) {
  l === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: r, shapeFlag: a, children: p, props: f } = e, h = l === 2;
  if (h && n(o, t, s), (!h || ls(f)) && a & 16)
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
  o: { nextSibling: o, parentNode: r, querySelector: a, insert: p, createText: f }
}, h) {
  function v(S, g) {
    let x = g;
    for (; x; ) {
      if (x && x.nodeType === 8) {
        if (x.data === "teleport start anchor")
          t.targetStart = x;
        else if (x.data === "teleport anchor") {
          t.targetAnchor = x, S._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      x = o(x);
    }
  }
  function y(S, g) {
    g.anchor = h(
      o(S),
      g,
      r(S),
      s,
      n,
      i,
      l
    );
  }
  const T = t.target = cn(
    t.props,
    a
  ), M = ls(t.props);
  if (T) {
    const S = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (M ? (y(e, t), v(T, S), t.targetAnchor || un(
      T,
      t,
      f,
      p,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === T ? e : null
    )) : (t.anchor = o(e), v(T, S), t.targetAnchor || un(T, t, f, p), h(
      S && o(S),
      t,
      T,
      s,
      n,
      i,
      l
    ))), $s(t, M);
  } else M && t.shapeFlag & 16 && (y(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const ys = Xi;
function $s(e, t) {
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
function os(e, t, s, n, i = !1) {
  if (J(e)) {
    e.forEach(
      (M, S) => os(
        M,
        t && (J(t) ? t[S] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (rs(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && os(e, t, s, n.component.subTree);
    return;
  }
  const l = n.shapeFlag & 4 ? Ws(n.component) : n.el, o = i ? null : l, { i: r, r: a } = e, p = t && t.r, f = r.refs === ve ? r.refs = {} : r.refs, h = r.setupState, v = /* @__PURE__ */ fe(h), y = h === ve ? yi : (M) => Wn(f, M) ? !1 : de(v, M), T = (M, S) => !(S && Wn(f, S));
  if (p != null && p !== a) {
    if (Kn(t), Ce(p))
      f[p] = null, y(p) && (h[p] = null);
    else if (/* @__PURE__ */ He(p)) {
      const M = t;
      T(p, M.k) && (p.value = null), M.k && (f[M.k] = null);
    }
  }
  if (ee(a))
    gs(a, r, 12, [o, f]);
  else {
    const M = Ce(a), S = /* @__PURE__ */ He(a);
    if (M || S) {
      const g = () => {
        if (e.f) {
          const x = M ? y(a) ? h[a] : f[a] : T() || !e.k ? a.value : f[e.k];
          if (i)
            J(x) && bn(x, l);
          else if (J(x))
            x.includes(l) || x.push(l);
          else if (M)
            f[a] = [l], y(a) && (h[a] = f[a]);
          else {
            const L = [l];
            T(a, e.k) && (a.value = L), e.k && (f[e.k] = L);
          }
        } else M ? (f[a] = o, y(a) && (h[a] = o)) : S && (T(a, e.k) && (a.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const x = () => {
          g(), Os.delete(e);
        };
        x.id = -1, Os.set(e, x), Ne(x, s);
      } else
        Kn(e), g();
    }
  }
}
function Kn(e) {
  const t = Os.get(e);
  t && (t.flags |= 8, Os.delete(e));
}
Ns().requestIdleCallback;
Ns().cancelIdleCallback;
const rs = (e) => !!e.type.__asyncLoader, Qi = (e) => e.type.__isKeepAlive;
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
  if (js(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      Qi(i.parent.vnode) && To(n, t, s, i), i = i.parent;
  }
}
function To(e, t, s, n) {
  const i = js(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ht(() => {
    bn(n[t], i);
  }, s);
}
function js(e, t, s = ze, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), l = t.__weh || (t.__weh = (...o) => {
      xt();
      const r = bs(s), a = pt(t, s, e, o);
      return r(), Ct(), a;
    });
    return n ? i.unshift(l) : i.push(l), l;
  }
}
const kt = (e) => (t, s = ze) => {
  (!hs || e === "sp") && js(e, (...n) => t(...n), s);
}, $o = kt("bm"), Vt = kt("m"), Fo = kt(
  "bu"
), Mo = kt("u"), Ao = kt(
  "bum"
), Ht = kt("um"), Ro = kt(
  "sp"
), Eo = kt("rtg"), Oo = kt("rtc");
function Po(e, t = ze) {
  js("ec", e, t);
}
const Io = /* @__PURE__ */ Symbol.for("v-ndc");
function Re(e, t, s, n) {
  let i;
  const l = s, o = J(e);
  if (o || Ce(e)) {
    const r = o && /* @__PURE__ */ Nt(e);
    let a = !1, p = !1;
    r && (a = !/* @__PURE__ */ nt(e), p = /* @__PURE__ */ St(e), e = Vs(e)), i = new Array(e.length);
    for (let f = 0, h = e.length; f < h; f++)
      i[f] = t(
        a ? p ? Yt(rt(e[f])) : rt(e[f]) : e[f],
        f,
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
        const f = r[a];
        i[a] = t(e[f], f, a, l);
      }
    }
  else
    i = [];
  return i;
}
const fn = (e) => e ? _l(e) ? Ws(e) : fn(e.parent) : null, as = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ je(/* @__PURE__ */ Object.create(null), {
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
    const p = as[t];
    let f, h;
    if (p)
      return t === "$attrs" && Ve(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (f = r.__cssModules) && (f = f[t])
    )
      return f;
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
    return !!(s[r] || e !== ve && r[0] !== "$" && de(e, r) || Xs(t, r) || de(l, r) || de(n, r) || de(as, r) || de(i.config.globalProperties, r) || (a = o.__cssModules) && a[r]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : de(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function zn(e) {
  return J(e) ? e.reduce(
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
    created: f,
    beforeMount: h,
    mounted: v,
    beforeUpdate: y,
    updated: T,
    activated: M,
    deactivated: S,
    beforeDestroy: g,
    beforeUnmount: x,
    destroyed: L,
    unmounted: R,
    render: H,
    renderTracked: P,
    renderTriggered: K,
    errorCaptured: te,
    serverPrefetch: le,
    // public API
    expose: Se,
    inheritAttrs: Ie,
    // assets
    components: X,
    directives: j,
    filters: be
  } = t;
  if (p && No(p, n, null), o)
    for (const Z in o) {
      const oe = o[Z];
      ee(oe) && (n[Z] = oe.bind(s));
    }
  if (i) {
    const Z = i.call(s, s);
    he(Z) && (e.data = /* @__PURE__ */ vs(Z));
  }
  if (dn = !0, l)
    for (const Z in l) {
      const oe = l[Z], Ee = ee(oe) ? oe.bind(s, s) : ee(oe.get) ? oe.get.bind(s, s) : ft, lt = !ee(oe) && ee(oe.set) ? oe.set.bind(s) : ft, Oe = ke({
        get: Ee,
        set: lt
      });
      Object.defineProperty(n, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (Be) => Oe.value = Be
      });
    }
  if (r)
    for (const Z in r)
      tl(r[Z], n, s, Z);
  if (a) {
    const Z = ee(a) ? a.call(s) : a;
    Reflect.ownKeys(Z).forEach((oe) => {
      et(oe, Z[oe]);
    });
  }
  f && Gn(f, e, "c");
  function Y(Z, oe) {
    J(oe) ? oe.forEach((Ee) => Z(Ee.bind(s))) : oe && Z(oe.bind(s));
  }
  if (Y($o, h), Y(Vt, v), Y(Fo, y), Y(Mo, T), Y(So, M), Y(ko, S), Y(Po, te), Y(Oo, P), Y(Eo, K), Y(Ao, x), Y(Ht, R), Y(Ro, le), J(Se))
    if (Se.length) {
      const Z = e.exposed || (e.exposed = {});
      Se.forEach((oe) => {
        Object.defineProperty(Z, oe, {
          get: () => s[oe],
          set: (Ee) => s[oe] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === ft && (e.render = H), Ie != null && (e.inheritAttrs = Ie), X && (e.components = X), j && (e.directives = j), le && Zi(e);
}
function No(e, t, s = ft) {
  J(e) && (e = pn(e));
  for (const n in e) {
    const i = e[n];
    let l;
    he(i) ? "default" in i ? l = Ae(
      i.from || n,
      i.default,
      !0
    ) : l = Ae(i.from || n) : l = Ae(i), /* @__PURE__ */ He(l) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (o) => l.value = o
    }) : t[n] = l;
  }
}
function Gn(e, t, s) {
  pt(
    J(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function tl(e, t, s, n) {
  let i = n.includes(".") ? Ji(s, n) : () => s[n];
  if (Ce(e)) {
    const l = t[e];
    ee(l) && Ts(i, l);
  } else if (ee(e))
    Ts(i, e.bind(s));
  else if (he(e))
    if (J(e))
      e.forEach((l) => tl(l, t, s, n));
    else {
      const l = ee(e.handler) ? e.handler.bind(s) : t[e.handler];
      ee(l) && Ts(i, l, e);
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
  watch: jo,
  // provide / inject
  provide: qn,
  inject: Ho
};
function qn(e, t) {
  return t ? e ? function() {
    return je(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ho(e, t) {
  return ts(pn(e), pn(t));
}
function pn(e) {
  if (J(e)) {
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
  return e ? je(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Jn(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : je(
    /* @__PURE__ */ Object.create(null),
    zn(e),
    zn(t ?? {})
  ) : t;
}
function jo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = je(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = We(e[n], t[n]);
  return s;
}
function nl() {
  return {
    app: null,
    config: {
      isNativeTag: yi,
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
    ee(n) || (n = je({}, n)), i != null && !he(i) && (i = null);
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
      set config(f) {
      },
      use(f, ...h) {
        return o.has(f) || (f && ee(f.install) ? (o.add(f), f.install(p, ...h)) : ee(f) && (o.add(f), f(p, ...h))), p;
      },
      mixin(f) {
        return l.mixins.includes(f) || l.mixins.push(f), p;
      },
      component(f, h) {
        return h ? (l.components[f] = h, p) : l.components[f];
      },
      directive(f, h) {
        return h ? (l.directives[f] = h, p) : l.directives[f];
      },
      mount(f, h, v) {
        if (!a) {
          const y = p._ceVNode || _e(n, i);
          return y.appContext = l, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(y, f, v), a = !0, p._container = f, f.__vue_app__ = p, Ws(y.component);
        }
      },
      onUnmount(f) {
        r.push(f);
      },
      unmount() {
        a && (pt(
          r,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(f, h) {
        return l.provides[f] = h, p;
      },
      runWithContext(f) {
        const h = Jt;
        Jt = p;
        try {
          return f();
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
  o && (o.trim && (i = s.map((f) => Ce(f) ? f.trim() : f)), o.number && (i = s.map(wn)));
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
  if (!ee(e)) {
    const a = (p) => {
      const f = il(p, t, !0);
      f && (r = !0, je(o, f));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !l && !r ? (he(e) && n.set(e, null), null) : (J(l) ? l.forEach((a) => o[a] = null) : je(o, l), he(e) && n.set(e, o), o);
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
    renderCache: f,
    props: h,
    data: v,
    setupState: y,
    ctx: T,
    inheritAttrs: M
  } = e, S = Es(e);
  let g, x;
  try {
    if (s.shapeFlag & 4) {
      const R = i || n, H = R;
      g = ut(
        p.call(
          H,
          R,
          f,
          h,
          y,
          v,
          T
        )
      ), x = r;
    } else {
      const R = t;
      g = ut(
        R.length > 1 ? R(
          h,
          { attrs: r, slots: o, emit: a }
        ) : R(
          h,
          null
        )
      ), x = t.props ? r : Go(r);
    }
  } catch (R) {
    cs.length = 0, Hs(R, e, 1), g = _e(Rt);
  }
  let L = g;
  if (x && M !== !1) {
    const R = Object.keys(x), { shapeFlag: H } = L;
    R.length && H & 7 && (l && R.some(yn) && (x = qo(
      x,
      l
    )), L = Xt(L, x, !1, !0));
  }
  return s.dirs && (L = Xt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(s.dirs) : s.dirs), s.transition && Rn(L, s.transition), g = L, Es(S), g;
}
const Go = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ls(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, qo = (e, t) => {
  const s = {};
  for (const n in e)
    (!yn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
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
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const v = f[h];
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
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let v = f[h];
        if (Bs(e.emitsOptions, v))
          continue;
        const y = t[v];
        if (a)
          if (de(l, v))
            y !== l[v] && (l[v] = y, p = !0);
          else {
            const T = At(v);
            i[T] = hn(
              a,
              r,
              T,
              y,
              e,
              !1
            );
          }
        else
          y !== l[v] && (l[v] = y, p = !0);
      }
    }
  } else {
    cl(e, t, i, l) && (p = !0);
    let f;
    for (const h in r)
      (!t || // for camelCase
      !de(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Et(h)) === h || !de(t, f))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[f] !== void 0) && (i[h] = hn(
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
  p && yt(e.attrs, "set", "");
}
function cl(e, t, s, n) {
  const [i, l] = e.propsOptions;
  let o = !1, r;
  if (t)
    for (let a in t) {
      if (ss(a))
        continue;
      const p = t[a];
      let f;
      i && de(i, f = At(a)) ? !l || !l.includes(f) ? s[f] = p : (r || (r = {}))[f] = p : Bs(e.emitsOptions, a) || (!(a in n) || p !== n[a]) && (n[a] = p, o = !0);
    }
  if (l) {
    const a = /* @__PURE__ */ fe(s), p = r || ve;
    for (let f = 0; f < l.length; f++) {
      const h = l[f];
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
      if (o.type !== Function && !o.skipFactory && ee(a)) {
        const { propsDefaults: p } = i;
        if (s in p)
          n = p[s];
        else {
          const f = bs(i);
          n = p[s] = a.call(
            null,
            t
          ), f();
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
  if (!ee(e)) {
    const f = (h) => {
      a = !0;
      const [v, y] = ul(h, t, !0);
      je(o, v), y && r.push(...y);
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!l && !a)
    return he(e) && n.set(e, zt), zt;
  if (J(l))
    for (let f = 0; f < l.length; f++) {
      const h = At(l[f]);
      Zn(h) && (o[h] = ve);
    }
  else if (l)
    for (const f in l) {
      const h = At(f);
      if (Zn(h)) {
        const v = l[f], y = o[h] = J(v) || ee(v) ? { type: v } : je({}, v), T = y.type;
        let M = !1, S = !0;
        if (J(T))
          for (let g = 0; g < T.length; ++g) {
            const x = T[g], L = ee(x) && x.name;
            if (L === "Boolean") {
              M = !0;
              break;
            } else L === "String" && (S = !1);
          }
        else
          M = ee(T) && T.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = M, y[
          1
          /* shouldCastTrue */
        ] = S, (M || de(y, "default")) && r.push(h);
      }
    }
  const p = [o, r];
  return he(e) && n.set(e, p), p;
}
function Zn(e) {
  return e[0] !== "$" && !ss(e);
}
const En = (e) => e === "_" || e === "_ctx" || e === "$stable", On = (e) => J(e) ? e.map(ut) : [ut(e)], er = (e, t, s) => {
  if (t._n)
    return t;
  const n = go((...i) => On(t(...i)), s);
  return n._c = !1, n;
}, fl = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (En(i)) continue;
    const l = e[i];
    if (ee(l))
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
    setElementText: f,
    parentNode: h,
    nextSibling: v,
    setScopeId: y = ft,
    insertStaticContent: T
  } = e, M = (c, u, m, k = null, b = null, w = null, O = void 0, E = null, A = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Qt(c, u) && (k = ae(c), Be(c, b, w, !0), c = null), u.patchFlag === -2 && (A = !1, u.dynamicChildren = null);
    const { type: C, ref: W, shapeFlag: D } = u;
    switch (C) {
      case Us:
        S(c, u, m, k);
        break;
      case Rt:
        g(c, u, m, k);
        break;
      case Qs:
        c == null && x(u, m, k, O);
        break;
      case ue:
        X(
          c,
          u,
          m,
          k,
          b,
          w,
          O,
          E,
          A
        );
        break;
      default:
        D & 1 ? H(
          c,
          u,
          m,
          k,
          b,
          w,
          O,
          E,
          A
        ) : D & 6 ? j(
          c,
          u,
          m,
          k,
          b,
          w,
          O,
          E,
          A
        ) : (D & 64 || D & 128) && C.process(
          c,
          u,
          m,
          k,
          b,
          w,
          O,
          E,
          A,
          $e
        );
    }
    W != null && b ? os(W, c && c.ref, w, u || c, !u) : W == null && c && c.ref != null && os(c.ref, null, w, c, !0);
  }, S = (c, u, m, k) => {
    if (c == null)
      n(
        u.el = r(u.children),
        m,
        k
      );
    else {
      const b = u.el = c.el;
      u.children !== c.children && p(b, u.children);
    }
  }, g = (c, u, m, k) => {
    c == null ? n(
      u.el = a(u.children || ""),
      m,
      k
    ) : u.el = c.el;
  }, x = (c, u, m, k) => {
    [c.el, c.anchor] = T(
      c.children,
      u,
      m,
      k,
      c.el,
      c.anchor
    );
  }, L = ({ el: c, anchor: u }, m, k) => {
    let b;
    for (; c && c !== u; )
      b = v(c), n(c, m, k), c = b;
    n(u, m, k);
  }, R = ({ el: c, anchor: u }) => {
    let m;
    for (; c && c !== u; )
      m = v(c), i(c), c = m;
    i(u);
  }, H = (c, u, m, k, b, w, O, E, A) => {
    if (u.type === "svg" ? O = "svg" : u.type === "math" && (O = "mathml"), c == null)
      P(
        u,
        m,
        k,
        b,
        w,
        O,
        E,
        A
      );
    else {
      const C = c.el && c.el._isVueCE ? c.el : null;
      try {
        C && C._beginPatch(), le(
          c,
          u,
          b,
          w,
          O,
          E,
          A
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, P = (c, u, m, k, b, w, O, E) => {
    let A, C;
    const { props: W, shapeFlag: D, transition: B, dirs: z } = c;
    if (A = c.el = o(
      c.type,
      w,
      W && W.is,
      W
    ), D & 8 ? f(A, c.children) : D & 16 && te(
      c.children,
      A,
      null,
      k,
      b,
      Zs(c, w),
      O,
      E
    ), z && Pt(c, null, k, "created"), K(A, c, c.scopeId, O, k), W) {
      for (const pe in W)
        pe !== "value" && !ss(pe) && l(A, pe, null, W[pe], w, k);
      "value" in W && l(A, "value", null, W.value, w), (C = W.onVnodeBeforeMount) && at(C, k, c);
    }
    z && Pt(c, null, k, "beforeMount");
    const re = lr(b, B);
    re && B.beforeEnter(A), n(A, u, m), ((C = W && W.onVnodeMounted) || re || z) && Ne(() => {
      C && at(C, k, c), re && B.enter(A), z && Pt(c, null, k, "mounted");
    }, b);
  }, K = (c, u, m, k, b) => {
    if (m && y(c, m), k)
      for (let w = 0; w < k.length; w++)
        y(c, k[w]);
    if (b) {
      let w = b.subTree;
      if (u === w || vl(w.type) && (w.ssContent === u || w.ssFallback === u)) {
        const O = b.vnode;
        K(
          c,
          O,
          O.scopeId,
          O.slotScopeIds,
          b.parent
        );
      }
    }
  }, te = (c, u, m, k, b, w, O, E, A = 0) => {
    for (let C = A; C < c.length; C++) {
      const W = c[C] = E ? gt(c[C]) : ut(c[C]);
      M(
        null,
        W,
        u,
        m,
        k,
        b,
        w,
        O,
        E
      );
    }
  }, le = (c, u, m, k, b, w, O) => {
    const E = u.el = c.el;
    let { patchFlag: A, dynamicChildren: C, dirs: W } = u;
    A |= c.patchFlag & 16;
    const D = c.props || ve, B = u.props || ve;
    let z;
    if (m && It(m, !1), (z = B.onVnodeBeforeUpdate) && at(z, m, u, c), W && Pt(u, c, m, "beforeUpdate"), m && It(m, !0), (D.innerHTML && B.innerHTML == null || D.textContent && B.textContent == null) && f(E, ""), C ? Se(
      c.dynamicChildren,
      C,
      E,
      m,
      k,
      Zs(u, b),
      w
    ) : O || oe(
      c,
      u,
      E,
      null,
      m,
      k,
      Zs(u, b),
      w,
      !1
    ), A > 0) {
      if (A & 16)
        Ie(E, D, B, m, b);
      else if (A & 2 && D.class !== B.class && l(E, "class", null, B.class, b), A & 4 && l(E, "style", D.style, B.style, b), A & 8) {
        const re = u.dynamicProps;
        for (let pe = 0; pe < re.length; pe++) {
          const ce = re[pe], Le = D[ce], Te = B[ce];
          (Te !== Le || ce === "value") && l(E, ce, Le, Te, b, m);
        }
      }
      A & 1 && c.children !== u.children && f(E, u.children);
    } else !O && C == null && Ie(E, D, B, m, b);
    ((z = B.onVnodeUpdated) || W) && Ne(() => {
      z && at(z, m, u, c), W && Pt(u, c, m, "updated");
    }, k);
  }, Se = (c, u, m, k, b, w, O) => {
    for (let E = 0; E < u.length; E++) {
      const A = c[E], C = u[E], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qt(A, C) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 198) ? h(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      M(
        A,
        C,
        W,
        null,
        k,
        b,
        w,
        O,
        !0
      );
    }
  }, Ie = (c, u, m, k, b) => {
    if (u !== m) {
      if (u !== ve)
        for (const w in u)
          !ss(w) && !(w in m) && l(
            c,
            w,
            u[w],
            null,
            b,
            k
          );
      for (const w in m) {
        if (ss(w)) continue;
        const O = m[w], E = u[w];
        O !== E && w !== "value" && l(c, w, E, O, b, k);
      }
      "value" in m && l(c, "value", u.value, m.value, b);
    }
  }, X = (c, u, m, k, b, w, O, E, A) => {
    const C = u.el = c ? c.el : r(""), W = u.anchor = c ? c.anchor : r("");
    let { patchFlag: D, dynamicChildren: B, slotScopeIds: z } = u;
    z && (E = E ? E.concat(z) : z), c == null ? (n(C, m, k), n(W, m, k), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      m,
      W,
      b,
      w,
      O,
      E,
      A
    )) : D > 0 && D & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === B.length ? (Se(
      c.dynamicChildren,
      B,
      m,
      b,
      w,
      O,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || b && u === b.subTree) && Pn(
      c,
      u,
      !0
      /* shallow */
    )) : oe(
      c,
      u,
      m,
      W,
      b,
      w,
      O,
      E,
      A
    );
  }, j = (c, u, m, k, b, w, O, E, A) => {
    u.slotScopeIds = E, c == null ? u.shapeFlag & 512 ? b.ctx.activate(
      u,
      m,
      k,
      O,
      A
    ) : be(
      u,
      m,
      k,
      b,
      w,
      O,
      A
    ) : it(c, u, A);
  }, be = (c, u, m, k, b, w, O) => {
    const E = c.component = hr(
      c,
      k,
      b
    );
    if (Qi(c) && (E.ctx.renderer = $e), vr(E, !1, O), E.asyncDep) {
      if (b && b.registerDep(E, Y, O), !c.el) {
        const A = E.subTree = _e(Rt);
        g(null, A, u, m), c.placeholder = A.el;
      }
    } else
      Y(
        E,
        c,
        u,
        m,
        b,
        w,
        O
      );
  }, it = (c, u, m) => {
    const k = u.component = c.component;
    if (Jo(c, u, m))
      if (k.asyncDep && !k.asyncResolved) {
        Z(k, u, m);
        return;
      } else
        k.next = u, k.update();
    else
      u.el = c.el, k.vnode = u;
  }, Y = (c, u, m, k, b, w, O) => {
    const E = () => {
      if (c.isMounted) {
        let { next: D, bu: B, u: z, parent: re, vnode: pe } = c;
        {
          const Qe = hl(c);
          if (Qe) {
            D && (D.el = pe.el, Z(c, D, O)), Qe.asyncDep.then(() => {
              Ne(() => {
                c.isUnmounted || C();
              }, b);
            });
            return;
          }
        }
        let ce = D, Le;
        It(c, !1), D ? (D.el = pe.el, Z(c, D, O)) : D = pe, B && ks(B), (Le = D.props && D.props.onVnodeBeforeUpdate) && at(Le, re, D, pe), It(c, !0);
        const Te = Yn(c), Ze = c.subTree;
        c.subTree = Te, M(
          Ze,
          Te,
          // parent may have changed if it's in a teleport
          h(Ze.el),
          // anchor may have changed if it's in a fragment
          ae(Ze),
          c,
          b,
          w
        ), D.el = Te.el, ce === null && Yo(c, Te.el), z && Ne(z, b), (Le = D.props && D.props.onVnodeUpdated) && Ne(
          () => at(Le, re, D, pe),
          b
        );
      } else {
        let D;
        const { el: B, props: z } = u, { bm: re, m: pe, parent: ce, root: Le, type: Te } = c, Ze = rs(u);
        It(c, !1), re && ks(re), !Ze && (D = z && z.onVnodeBeforeMount) && at(D, ce, u), It(c, !0);
        {
          Le.ce && Le.ce._hasShadowRoot() && Le.ce._injectChildStyle(Te);
          const Qe = c.subTree = Yn(c);
          M(
            null,
            Qe,
            m,
            k,
            c,
            b,
            w
          ), u.el = Qe.el;
        }
        if (pe && Ne(pe, b), !Ze && (D = z && z.onVnodeMounted)) {
          const Qe = u;
          Ne(
            () => at(D, ce, Qe),
            b
          );
        }
        (u.shapeFlag & 256 || ce && rs(ce.vnode) && ce.vnode.shapeFlag & 256) && c.a && Ne(c.a, b), c.isMounted = !0, u = m = k = null;
      }
    };
    c.scope.on();
    const A = c.effect = new Fi(E);
    c.scope.off();
    const C = c.update = A.run.bind(A), W = c.job = A.runIfDirty.bind(A);
    W.i = c, W.id = c.uid, A.scheduler = () => An(W), It(c, !0), C();
  }, Z = (c, u, m) => {
    u.component = c;
    const k = c.vnode.props;
    c.vnode = u, c.next = null, Zo(c, u.props, k, m), sr(c, u.children, m), xt(), Hn(c), Ct();
  }, oe = (c, u, m, k, b, w, O, E, A = !1) => {
    const C = c && c.children, W = c ? c.shapeFlag : 0, D = u.children, { patchFlag: B, shapeFlag: z } = u;
    if (B > 0) {
      if (B & 128) {
        lt(
          C,
          D,
          m,
          k,
          b,
          w,
          O,
          E,
          A
        );
        return;
      } else if (B & 256) {
        Ee(
          C,
          D,
          m,
          k,
          b,
          w,
          O,
          E,
          A
        );
        return;
      }
    }
    z & 8 ? (W & 16 && F(C, b, w), D !== C && f(m, D)) : W & 16 ? z & 16 ? lt(
      C,
      D,
      m,
      k,
      b,
      w,
      O,
      E,
      A
    ) : F(C, b, w, !0) : (W & 8 && f(m, ""), z & 16 && te(
      D,
      m,
      k,
      b,
      w,
      O,
      E,
      A
    ));
  }, Ee = (c, u, m, k, b, w, O, E, A) => {
    c = c || zt, u = u || zt;
    const C = c.length, W = u.length, D = Math.min(C, W);
    let B;
    for (B = 0; B < D; B++) {
      const z = u[B] = A ? gt(u[B]) : ut(u[B]);
      M(
        c[B],
        z,
        m,
        null,
        b,
        w,
        O,
        E,
        A
      );
    }
    C > W ? F(
      c,
      b,
      w,
      !0,
      !1,
      D
    ) : te(
      u,
      m,
      k,
      b,
      w,
      O,
      E,
      A,
      D
    );
  }, lt = (c, u, m, k, b, w, O, E, A) => {
    let C = 0;
    const W = u.length;
    let D = c.length - 1, B = W - 1;
    for (; C <= D && C <= B; ) {
      const z = c[C], re = u[C] = A ? gt(u[C]) : ut(u[C]);
      if (Qt(z, re))
        M(
          z,
          re,
          m,
          null,
          b,
          w,
          O,
          E,
          A
        );
      else
        break;
      C++;
    }
    for (; C <= D && C <= B; ) {
      const z = c[D], re = u[B] = A ? gt(u[B]) : ut(u[B]);
      if (Qt(z, re))
        M(
          z,
          re,
          m,
          null,
          b,
          w,
          O,
          E,
          A
        );
      else
        break;
      D--, B--;
    }
    if (C > D) {
      if (C <= B) {
        const z = B + 1, re = z < W ? u[z].el : k;
        for (; C <= B; )
          M(
            null,
            u[C] = A ? gt(u[C]) : ut(u[C]),
            m,
            re,
            b,
            w,
            O,
            E,
            A
          ), C++;
      }
    } else if (C > B)
      for (; C <= D; )
        Be(c[C], b, w, !0), C++;
    else {
      const z = C, re = C, pe = /* @__PURE__ */ new Map();
      for (C = re; C <= B; C++) {
        const q = u[C] = A ? gt(u[C]) : ut(u[C]);
        q.key != null && pe.set(q.key, C);
      }
      let ce, Le = 0;
      const Te = B - re + 1;
      let Ze = !1, Qe = 0;
      const _ = new Array(Te);
      for (C = 0; C < Te; C++) _[C] = 0;
      for (C = z; C <= D; C++) {
        const q = c[C];
        if (Le >= Te) {
          Be(q, b, w, !0);
          continue;
        }
        let ne;
        if (q.key != null)
          ne = pe.get(q.key);
        else
          for (ce = re; ce <= B; ce++)
            if (_[ce - re] === 0 && Qt(q, u[ce])) {
              ne = ce;
              break;
            }
        ne === void 0 ? Be(q, b, w, !0) : (_[ne - re] = C + 1, ne >= Qe ? Qe = ne : Ze = !0, M(
          q,
          u[ne],
          m,
          null,
          b,
          w,
          O,
          E,
          A
        ), Le++);
      }
      const $ = Ze ? or(_) : zt;
      for (ce = $.length - 1, C = Te - 1; C >= 0; C--) {
        const q = re + C, ne = u[q], xe = u[q + 1], Fe = q + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xe.el || ml(xe)
        ) : k;
        _[C] === 0 ? M(
          null,
          ne,
          m,
          Fe,
          b,
          w,
          O,
          E,
          A
        ) : Ze && (ce < 0 || C !== $[ce] ? Oe(ne, m, Fe, 2) : ce--);
      }
    }
  }, Oe = (c, u, m, k, b = null) => {
    const { el: w, type: O, transition: E, children: A, shapeFlag: C } = c;
    if (C & 6) {
      Oe(c.component.subTree, u, m, k);
      return;
    }
    if (C & 128) {
      c.suspense.move(u, m, k);
      return;
    }
    if (C & 64) {
      O.move(c, u, m, $e);
      return;
    }
    if (O === ue) {
      n(w, u, m);
      for (let D = 0; D < A.length; D++)
        Oe(A[D], u, m, k);
      n(c.anchor, u, m);
      return;
    }
    if (O === Qs) {
      L(c, u, m);
      return;
    }
    if (k !== 2 && C & 1 && E)
      if (k === 0)
        E.beforeEnter(w), n(w, u, m), Ne(() => E.enter(w), b);
      else {
        const { leave: D, delayLeave: B, afterLeave: z } = E, re = () => {
          c.ctx.isUnmounted ? i(w) : n(w, u, m);
        }, pe = () => {
          w._isLeaving && w[Co](
            !0
            /* cancelled */
          ), D(w, () => {
            re(), z && z();
          });
        };
        B ? B(w, re, pe) : pe();
      }
    else
      n(w, u, m);
  }, Be = (c, u, m, k = !1, b = !1) => {
    const {
      type: w,
      props: O,
      ref: E,
      children: A,
      dynamicChildren: C,
      shapeFlag: W,
      patchFlag: D,
      dirs: B,
      cacheIndex: z
    } = c;
    if (D === -2 && (b = !1), E != null && (xt(), os(E, null, m, c, !0), Ct()), z != null && (u.renderCache[z] = void 0), W & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const re = W & 1 && B, pe = !rs(c);
    let ce;
    if (pe && (ce = O && O.onVnodeBeforeUnmount) && at(ce, u, c), W & 6)
      se(c.component, m, k);
    else {
      if (W & 128) {
        c.suspense.unmount(m, k);
        return;
      }
      re && Pt(c, null, u, "beforeUnmount"), W & 64 ? c.type.remove(
        c,
        u,
        m,
        $e,
        k
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== ue || D > 0 && D & 64) ? F(
        C,
        u,
        m,
        !1,
        !0
      ) : (w === ue && D & 384 || !b && W & 16) && F(A, u, m), k && Bt(c);
    }
    (pe && (ce = O && O.onVnodeUnmounted) || re) && Ne(() => {
      ce && at(ce, u, c), re && Pt(c, null, u, "unmounted");
    }, m);
  }, Bt = (c) => {
    const { type: u, el: m, anchor: k, transition: b } = c;
    if (u === ue) {
      Tt(m, k);
      return;
    }
    if (u === Qs) {
      R(c);
      return;
    }
    const w = () => {
      i(m), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: O, delayLeave: E } = b, A = () => O(m, w);
      E ? E(c.el, w, A) : A();
    } else
      w();
  }, Tt = (c, u) => {
    let m;
    for (; c !== u; )
      m = v(c), i(c), c = m;
    i(u);
  }, se = (c, u, m) => {
    const { bum: k, scope: b, job: w, subTree: O, um: E, m: A, a: C } = c;
    Qn(A), Qn(C), k && ks(k), b.stop(), w && (w.flags |= 8, Be(O, c, u, m)), E && Ne(E, u), Ne(() => {
      c.isUnmounted = !0;
    }, u);
  }, F = (c, u, m, k = !1, b = !1, w = 0) => {
    for (let O = w; O < c.length; O++)
      Be(c[O], u, m, k, b);
  }, ae = (c) => {
    if (c.shapeFlag & 6)
      return ae(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = v(c.anchor || c.el), m = u && u[Yi];
    return m ? v(m) : u;
  };
  let ye = !1;
  const we = (c, u, m) => {
    let k;
    c == null ? u._vnode && (Be(u._vnode, null, null, !0), k = u._vnode.component) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      m
    ), u._vnode = c, ye || (ye = !0, Hn(k), Ki(), ye = !1);
  }, $e = {
    p: M,
    um: Be,
    m: Oe,
    r: Bt,
    mt: be,
    mc: te,
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
  if (J(n) && J(i))
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
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : vo(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), Us = /* @__PURE__ */ Symbol.for("v-txt"), Rt = /* @__PURE__ */ Symbol.for("v-cmt"), Qs = /* @__PURE__ */ Symbol.for("v-stc"), cs = [];
let Je = null;
function I(e = !1) {
  cs.push(Je = e ? null : []);
}
function ar() {
  cs.pop(), Je = cs[cs.length - 1] || null;
}
let ps = 1;
function ei(e, t = !1) {
  ps += e, e < 0 && Je && t && (Je.hasOnce = !0);
}
function gl(e) {
  return e.dynamicChildren = ps > 0 ? Je || zt : null, ar(), ps > 0 && Je && Je.push(e), e;
}
function V(e, t, s, n, i, l) {
  return gl(
    d(
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
function jt(e, t, s, n, i) {
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
function yl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bl = ({ key: e }) => e ?? null, Fs = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ He(e) || ee(e) ? { i: st, r: e, k: t, f: !!s } : e : null);
function d(e, t = null, s = null, n = 0, i = null, l = e === ue ? 0 : 1, o = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bl(t),
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
  return r ? (In(a, s), l & 128 && e.normalize(a)) : s && (a.shapeFlag |= Ce(s) ? 8 : 16), ps > 0 && // avoid a block node from tracking itself
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
  if ((!e || e === Io) && (e = Rt), yl(e)) {
    const r = Xt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && In(r, s), ps > 0 && !l && Je && (r.shapeFlag & 6 ? Je[Je.indexOf(e)] = r : Je.push(r)), r.patchFlag = -2, r;
  }
  if (_r(e) && (e = e.__vccOpts), t) {
    t = ur(t);
    let { class: r, style: a } = t;
    r && !Ce(r) && (t.class = G(r)), he(a) && (/* @__PURE__ */ Mn(a) && !J(a) && (a = je({}, a)), t.style = tt(a));
  }
  const o = Ce(e) ? 1 : vl(e) ? 128 : wo(e) ? 64 : he(e) ? 4 : ee(e) ? 2 : 0;
  return d(
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
  return e ? /* @__PURE__ */ Mn(e) || al(e) ? je({}, e) : e : null;
}
function Xt(e, t, s = !1, n = !1) {
  const { props: i, ref: l, patchFlag: o, children: r, transition: a } = e, p = t ? fr(i || {}, t) : i, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && bl(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && l ? J(l) ? l.concat(Fs(t)) : [l, Fs(t)] : Fs(t)
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
    patchFlag: t && e.type !== ue ? o === -1 ? 16 : o | 16 : o,
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
    f,
    a.clone(f)
  ), f;
}
function Pe(e = " ", t = 0) {
  return _e(Us, null, e, t);
}
function Me(e = "", t = !1) {
  return t ? (I(), jt(Rt, null, e)) : _e(Rt, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean" ? _e(Rt) : J(e) ? _e(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : yl(e) ? gt(e) : _e(Us, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xt(e);
}
function In(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (J(t))
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
  else ee(t) ? (t = { default: t, _ctx: st }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Pe(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function fr(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = G([t.class, n.class]));
      else if (i === "style")
        t.style = tt([t.style, n.style]);
      else if (Ls(i)) {
        const l = t[i], o = n[i];
        o && l !== o && !(J(l) && l.includes(o)) && (t[i] = l ? [].concat(l, o) : o);
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
    (s) => hs = s
  );
}
const bs = (e) => {
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
let hs = !1;
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
    const i = e.setupContext = n.length > 1 ? br(e) : null, l = bs(e), o = gs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), r = _i(o);
    if (Ct(), l(), (r || e.sp) && !rs(e) && Zi(e), r) {
      if (o.then(ti, ti), t)
        return o.then((a) => {
          si(e, a);
        }).catch((a) => {
          Hs(a, e, 0);
        });
      e.asyncDep = o;
    } else
      si(e, o);
  } else
    wl(e);
}
function si(e, t, s) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = Bi(t)), wl(e);
}
function wl(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || ft);
  {
    const i = bs(e);
    xt();
    try {
      Do(e);
    } finally {
      Ct(), i();
    }
  }
}
const yr = {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
  }
};
function br(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, yr),
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
      if (s in as)
        return as[s](e);
    },
    has(t, s) {
      return s in t || s in as;
    }
  })) : e.proxy;
}
function _r(e) {
  return ee(e) && "__vccOpts" in e;
}
const ke = (e, t) => /* @__PURE__ */ uo(e, t, hs), wr = "3.5.28";
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
function Tr(e, t, s) {
  const n = e[kr];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const li = /* @__PURE__ */ Symbol("_vod"), $r = /* @__PURE__ */ Symbol("_vsh"), Fr = /* @__PURE__ */ Symbol(""), Mr = /(?:^|;)\s*display\s*:/;
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
  li in e && (e[li] = l ? n.display : "", e[$r] && (n.display = "none"));
}
const oi = /\s*!important$/;
function Ms(e, t, s) {
  if (J(s))
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
  if (J(t)) {
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
  t === "class" ? Tr(e, n, o) : t === "style" ? Ar(e, s, n) : Ls(t) ? yn(t) || Or(e, t, s, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hr(e, t, n, o)) ? (ui(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ci(e, t, n, o, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ce(n)) ? ui(e, At(t), n, l, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ci(e, t, n, o));
};
function Hr(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pi(t) && ee(s));
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
  return J(t) ? (s) => ks(t, s) : t;
};
function jr(e) {
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
    }), t || (Kt(e, "compositionstart", jr), Kt(e, "compositionend", mi), Kt(e, "change", mi));
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
}, zr = /* @__PURE__ */ je({ patchProp: Vr }, Sr);
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
    !ee(l) && !l.render && !l.template && (l.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
const Xr = /* @__PURE__ */ vs({
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
  async function e(y) {
    return (await fetch(`/dnh-assetmanager/history?${y.toString()}`)).json();
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
  async function i(y) {
    return (await fetch(`/dnh-assetmanager/subdirs?path=${encodeURIComponent(y)}`)).json();
  }
  async function l(y) {
    return fetch("/dnh-assetmanager/favorite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: y })
    });
  }
  async function o(y) {
    return fetch("/dnh-assetmanager/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: y })
    });
  }
  async function r(y, T) {
    return fetch("/dnh-assetmanager/folders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: y, path: T })
    });
  }
  async function a(y) {
    return fetch("/dnh-assetmanager/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(y)
    });
  }
  async function p(y) {
    return fetch("/dnh-assetmanager/open", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: y })
    });
  }
  async function f(y) {
    return fetch(`/dnh-assetmanager/metadata?path=${encodeURIComponent(y)}`);
  }
  async function h(y) {
    return fetch("/dnh-assetmanager/metadata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(y)
    });
  }
  async function v(y) {
    return (await fetch(y)).blob();
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
    fetchMetadata: f,
    postMetadata: h,
    fetchFileBlob: v
  };
}
const Zr = { class: "cm-top-nav" }, Qr = { class: "cm-brand" }, ea = { class: "cm-version-badge" }, ta = { class: "cm-nav-tabs" }, sa = ["onClick"], na = {
  __name: "TopNav",
  setup(e) {
    const { state: t } = Ye(), s = Ae("update"), n = [
      { key: "all", label: "All" },
      { key: "input", label: "Inputs" },
      { key: "output", label: "Outputs" },
      { key: "custom", label: "Custom" }
    ];
    function i(l) {
      t.activeTab = l, s();
    }
    return (l, o) => (I(), V("header", Zr, [
      d("div", Qr, [
        o[1] || (o[1] = d("span", { class: "pi pi-folder cm-brand-icon" }, null, -1)),
        o[2] || (o[2] = d("span", { class: "cm-brand-title" }, "Assets Manager", -1)),
        d("span", ea, Q(U(t).version ? `v${U(t).version}` : "v..."), 1)
      ]),
      d("nav", ta, [
        (I(), V(ue, null, Re(n, (r) => d("button", {
          key: r.key,
          class: G(["cm-nav-btn", { active: U(t).activeTab === r.key }]),
          onClick: (a) => i(r.key)
        }, Q(r.label), 11, sa)), 64)),
        d("button", {
          class: G(["cm-icon-only-btn", { active: U(t).settingsVisible }]),
          onClick: o[0] || (o[0] = (r) => U(t).settingsVisible = !U(t).settingsVisible)
        }, [...o[3] || (o[3] = [
          d("span", { class: "pi pi-cog" }, null, -1)
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
    const { state: s } = Ye(), n = Ae("update"), i = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N({ x: 0, y: 0 }), o = /* @__PURE__ */ N(null);
    let r = null;
    const a = [
      { value: "all", label: "All types" },
      { value: "generation", label: "Generated (has workflow)" },
      { value: "input", label: "Input (no workflow)" }
    ];
    function p(L) {
      return L.split(/[\\/]/).pop();
    }
    function f() {
      i.value = !1;
    }
    async function h(L, R) {
      L.stopPropagation(), r = R, i.value = !0, await qe(), v();
    }
    function v() {
      if (!o.value || !r) return;
      const L = r.getBoundingClientRect(), R = o.value.getBoundingClientRect();
      let H = L.left, P = L.bottom + 4;
      H + R.width > window.innerWidth && (H = window.innerWidth - R.width - 4), P + R.height > window.innerHeight && (P = L.top - R.height - 4), l.value = { x: H, y: P };
    }
    function y(L) {
      s.activeUtility = L, f(), n();
    }
    function T(L) {
      s.activeModelFilters.has(L) ? s.activeModelFilters.delete(L) : s.activeModelFilters.add(L), f(), n(), qe(() => r == null ? void 0 : r.click());
    }
    function M() {
      s.activeModelFilters.clear(), f(), n(), qe(() => r == null ? void 0 : r.click());
    }
    function S(L) {
      s.activeLoraFilters.has(L) ? s.activeLoraFilters.delete(L) : s.activeLoraFilters.add(L), f(), n(), qe(() => r == null ? void 0 : r.click());
    }
    function g() {
      s.activeLoraFilters.clear(), f(), n(), qe(() => r == null ? void 0 : r.click());
    }
    function x() {
      f();
    }
    return Vt(() => document.addEventListener("click", x)), Ht(() => document.removeEventListener("click", x)), t({ show: h }), (L, R) => (I(), jt(ys, { to: "body" }, [
      i.value ? (I(), V("div", {
        key: 0,
        ref_key: "menuEl",
        ref: o,
        class: "cm-context-menu",
        style: tt({ left: l.value.x + "px", top: l.value.y + "px" })
      }, [
        R[4] || (R[4] = d("div", { class: "cm-context-menu-label" }, "Asset Type", -1)),
        (I(), V(ue, null, Re(a, (H) => d("button", {
          key: H.value,
          class: G(["cm-context-menu-item", { "cm-active": U(s).activeUtility === H.value }]),
          onClick: ie((P) => y(H.value), ["stop"])
        }, [
          U(s).activeUtility === H.value ? (I(), V("span", la)) : (I(), V("span", oa)),
          Pe(" " + Q(H.label), 1)
        ], 10, ia)), 64)),
        U(s).availableModels.length > 0 ? (I(), V(ue, { key: 0 }, [
          R[1] || (R[1] = d("div", { class: "cm-context-menu-separator" }, null, -1)),
          d("div", ra, " Checkpoint" + Q(U(s).activeModelFilters.size > 0 ? ` (${U(s).activeModelFilters.size})` : ""), 1),
          U(s).activeModelFilters.size > 0 ? (I(), V("button", {
            key: 0,
            class: "cm-context-menu-item",
            onClick: ie(M, ["stop"])
          }, [...R[0] || (R[0] = [
            d("span", { class: "pi pi-stop cm-check-icon" }, null, -1),
            Pe(" Clear all ", -1)
          ])])) : Me("", !0),
          (I(!0), V(ue, null, Re(U(s).availableModels.slice(0, 15), (H) => (I(), V("button", {
            key: H,
            class: G(["cm-context-menu-item", { "cm-active": U(s).activeModelFilters.has(H) }]),
            title: H,
            onClick: ie((P) => T(H), ["stop"])
          }, [
            d("span", {
              class: G(["pi", "cm-check-icon", U(s).activeModelFilters.has(H) ? "pi-check-square" : "pi-stop"])
            }, null, 2),
            Pe(" " + Q(p(H)), 1)
          ], 10, aa))), 128))
        ], 64)) : Me("", !0),
        U(s).availableLoras.length > 0 ? (I(), V(ue, { key: 1 }, [
          R[3] || (R[3] = d("div", { class: "cm-context-menu-separator" }, null, -1)),
          d("div", ca, " LoRA" + Q(U(s).activeLoraFilters.size > 0 ? ` (${U(s).activeLoraFilters.size})` : ""), 1),
          U(s).activeLoraFilters.size > 0 ? (I(), V("button", {
            key: 0,
            class: "cm-context-menu-item",
            onClick: ie(g, ["stop"])
          }, [...R[2] || (R[2] = [
            d("span", { class: "pi pi-stop cm-check-icon" }, null, -1),
            Pe(" Clear all ", -1)
          ])])) : Me("", !0),
          (I(!0), V(ue, null, Re(U(s).availableLoras.slice(0, 15), (H) => (I(), V("button", {
            key: H,
            class: G(["cm-context-menu-item", { "cm-active": U(s).activeLoraFilters.has(H) }]),
            title: H,
            onClick: ie((P) => S(H), ["stop"])
          }, [
            d("span", {
              class: G(["pi", "cm-check-icon", U(s).activeLoraFilters.has(H) ? "pi-check-square" : "pi-stop"])
            }, null, 2),
            Pe(" " + Q(p(H)), 1)
          ], 10, ua))), 128))
        ], 64)) : Me("", !0)
      ], 4)) : Me("", !0)
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
    const { state: s } = Ye(), n = Ae("update"), i = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N({ x: 0, y: 0 }), o = /* @__PURE__ */ N(null), r = [
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
    async function p(v, y) {
      if (v.stopPropagation(), i.value = !0, await qe(), !o.value || !y) return;
      const T = y.getBoundingClientRect(), M = o.value.getBoundingClientRect();
      let S = T.left, g = T.bottom + 4;
      S + M.width > window.innerWidth && (S = window.innerWidth - M.width - 4), g + M.height > window.innerHeight && (g = T.top - M.height - 4), l.value = { x: S, y: g };
    }
    function f(v) {
      s.sortBy = v, a(), n();
    }
    function h() {
      a();
    }
    return Vt(() => document.addEventListener("click", h)), Ht(() => document.removeEventListener("click", h)), t({ show: p }), (v, y) => (I(), jt(ys, { to: "body" }, [
      i.value ? (I(), V("div", {
        key: 0,
        ref_key: "menuEl",
        ref: o,
        class: "cm-context-menu",
        style: tt({ left: l.value.x + "px", top: l.value.y + "px" })
      }, [
        y[0] || (y[0] = d("div", { class: "cm-context-menu-label" }, "Sort By", -1)),
        (I(), V(ue, null, Re(r, (T) => d("button", {
          key: T.value,
          class: G(["cm-context-menu-item", { "cm-active": U(s).sortBy === T.value }]),
          onClick: ie((M) => f(T.value), ["stop"])
        }, [
          U(s).sortBy === T.value ? (I(), V("span", da)) : (I(), V("span", pa)),
          Pe(" " + Q(T.label), 1)
        ], 10, fa)), 64))
      ], 4)) : Me("", !0)
    ]));
  }
}, ha = { class: "cm-search-container" }, ma = { class: "cm-search-wrapper" }, va = { class: "cm-action-buttons" }, ga = ["title"], ya = ["title"], ba = ["title"], _a = ["title"], wa = {
  __name: "SearchBar",
  setup(e) {
    const { state: t } = Ye(), s = Ae("update"), n = /* @__PURE__ */ N(null), i = /* @__PURE__ */ N(null), l = /* @__PURE__ */ N(null), o = /* @__PURE__ */ N(null), r = [
      { value: "date_desc", label: "Date (newest first)" },
      { value: "date_asc", label: "Date (oldest first)" },
      { value: "size_desc", label: "Size (largest first)" },
      { value: "size_asc", label: "Size (smallest first)" },
      { value: "name_asc", label: "Name (A → Z)" },
      { value: "name_desc", label: "Name (Z → A)" }
    ], a = ke(() => {
      const S = r.find((g) => g.value === t.sortBy);
      return S ? S.label : "Sort";
    }), p = ke(
      () => t.activeUtility !== "all" || t.activeModelFilters.size > 0 || t.activeLoraFilters.size > 0
    );
    function f(S) {
      var g;
      (g = l.value) == null || g.show(S, n.value);
    }
    function h() {
      const [S, g] = t.sortBy.split("_");
      t.sortBy = `${S}_${g === "desc" ? "asc" : "desc"}`, s();
    }
    function v(S) {
      var g;
      (g = o.value) == null || g.show(S, i.value);
    }
    function y() {
      t.workflowOnly = !t.workflowOnly, s();
    }
    function T() {
      t.showFavorites = !t.showFavorites, s();
    }
    function M() {
      t.hideNsfw = !t.hideNsfw, s();
    }
    return (S, g) => (I(), V(ue, null, [
      d("div", ha, [
        d("div", ma, [
          g[2] || (g[2] = d("span", { class: "pi pi-search cm-search-icon" }, null, -1)),
          _t(d("input", {
            type: "text",
            placeholder: 'Search: name, seed:, model:, prompt:"..."',
            title: 'Search tips: type freely to search all fields, or use prefixes like seed:12345 model:sdxl prompt:"a brown kitty" lora:detail node:KSampler steps:20 cfg:7 sampler:euler filename:img type:png size:2.3 path:/output date:"Jan 15". Wrap values with spaces/commas in quotes. Multiple terms are AND-matched.',
            class: "cm-search-input",
            "onUpdate:modelValue": g[0] || (g[0] = (x) => U(t).searchQuery = x),
            onInput: g[1] || (g[1] = (x) => U(s)())
          }, null, 544), [
            [wt, U(t).searchQuery]
          ])
        ]),
        d("div", va, [
          d("button", {
            ref_key: "filterBtnRef",
            ref: n,
            class: G(["cm-tool-btn", { active: p.value }]),
            title: "Filter options",
            onClick: f
          }, [...g[3] || (g[3] = [
            d("span", { class: "pi pi-filter" }, null, -1)
          ])], 2),
          d("button", {
            ref_key: "sortBtnRef",
            ref: i,
            class: G(["cm-tool-btn", { active: U(t).sortBy !== "date_desc" }]),
            title: a.value,
            onClick: h,
            onContextmenu: ie(v, ["prevent"])
          }, [...g[4] || (g[4] = [
            d("span", { class: "pi pi-sort-alt" }, null, -1)
          ])], 42, ga),
          d("button", {
            class: G(["cm-tool-btn", { active: U(t).workflowOnly }]),
            title: U(t).workflowOnly ? "Showing workflow assets only" : "Show only assets with workflows",
            onClick: y
          }, [...g[5] || (g[5] = [
            d("span", { class: "pi pi-sitemap" }, null, -1)
          ])], 10, ya),
          d("button", {
            class: G(["cm-tool-btn", { active: U(t).showFavorites }]),
            title: U(t).showFavorites ? "Showing favorites only" : "Show favorites only",
            onClick: T
          }, [...g[6] || (g[6] = [
            d("span", { class: "pi pi-bookmark" }, null, -1)
          ])], 10, ba),
          d("button", {
            class: G(["cm-tool-btn cm-nsfw-toggle", { active: U(t).hideNsfw }]),
            title: U(t).hideNsfw ? "NSFW hidden" : "NSFW visible",
            onClick: M
          }, [
            d("span", {
              class: G(U(t).hideNsfw ? "pi pi-eye-slash" : "pi pi-eye")
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
    const { state: t } = Ye(), s = Ae("update"), n = {
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
    return (l, o) => (I(), V("div", xa, [
      (I(!0), V(ue, null, Re(i.value, (r) => (I(), V("div", {
        key: r.label,
        class: "cm-filter-chip"
      }, [
        Pe(Q(r.label) + " ", 1),
        d("span", {
          class: "pi pi-times cm-chip-close",
          onClick: (a) => r.clear()
        }, null, 8, Ca)
      ]))), 128))
    ]));
  }
}, ka = { class: "cm-status-line" }, Ta = { class: "cm-stats-text" }, $a = {
  __name: "StatusLine",
  setup(e) {
    const { state: t } = Ye(), s = { all: "All", input: "Inputs", output: "Outputs", custom: "Custom" }, n = ke(() => {
      const i = t.currentFiles.length;
      return `assets: ${i}/${i} | ${s[t.activeTab] || t.activeTab}`;
    });
    return (i, l) => (I(), V("div", ka, [
      d("span", Ta, Q(n.value), 1),
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
    const t = e, { state: s } = Ye(), n = Ae("comfyApp"), i = ke(() => {
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
    return (a, p) => (I(), V("div", {
      class: G(["cm-card", { selected: o.value }]),
      onClick: r,
      onDblclick: p[1] || (p[1] = ie((f) => a.$emit("open-viewer"), ["prevent"])),
      onContextmenu: p[2] || (p[2] = ie((f) => a.$emit("context-menu", f), ["prevent"]))
    }, [
      d("button", {
        class: G(["cm-fav-btn", { active: e.file.is_favorite }]),
        title: e.file.is_favorite ? "Remove from favorites" : "Add to favorites",
        onClick: p[0] || (p[0] = ie((f) => a.$emit("toggle-favorite"), ["stop"]))
      }, [
        d("span", {
          class: G(["pi", e.file.is_favorite ? "pi-bookmark-fill" : "pi-bookmark"])
        }, null, 2)
      ], 10, Fa),
      e.file.has_workflow ? (I(), V("div", Ma, [...p[3] || (p[3] = [
        d("span", { class: "pi pi-sitemap" }, null, -1)
      ])])) : Me("", !0),
      l.value ? (I(), V("div", Aa, Q(l.value), 1)) : Me("", !0),
      d("img", {
        src: e.file.url,
        loading: "lazy"
      }, null, 8, Ra),
      d("div", Ea, [
        d("span", {
          class: "cm-overlay-name",
          title: e.file.filename
        }, Q(i.value), 9, Oa),
        d("div", Pa, [
          d("span", Ia, Q(e.file.file_type), 1),
          d("span", La, Q(e.file.file_size_formatted), 1)
        ])
      ])
    ], 34));
  }
}, Na = { class: "cm-asset-grid" }, Va = {
  key: 0,
  class: "cm-empty-state"
}, Ha = {
  __name: "AssetGrid",
  emits: ["open-viewer", "toggle-favorite", "context-menu"],
  setup(e) {
    const { state: t } = Ye();
    return (s, n) => (I(), V("section", Na, [
      U(t).activeTab === "custom" && U(t).customFolderCount === 0 ? (I(), V("div", Va, [...n[0] || (n[0] = [
        d("span", { class: "pi pi-folder-open cm-empty-icon" }, null, -1),
        d("p", { class: "cm-empty-text" }, "No custom folders configured", -1),
        d("p", { class: "cm-empty-hint" }, [
          Pe("Click the "),
          d("span", { class: "pi pi-cog" }),
          Pe(" settings button to add custom paths.")
        ], -1)
      ])])) : (I(!0), V(ue, { key: 1 }, Re(U(t).currentFiles, (i) => (I(), jt(Da, {
        key: i.full_path,
        file: i,
        onOpenViewer: (l) => s.$emit("open-viewer", i),
        onToggleFavorite: (l) => s.$emit("toggle-favorite", i),
        onContextMenu: (l) => s.$emit("context-menu", l, i)
      }, null, 8, ["file", "onOpenViewer", "onToggleFavorite", "onContextMenu"]))), 128))
    ]));
  }
}, ja = { class: "cm-settings-group" }, Ba = { class: "cm-settings-row" }, Ua = { class: "cm-settings-group" }, Wa = { class: "cm-folder-list" }, Ka = ["onClick"], za = { class: "cm-add-folder-row" }, Ga = {
  __name: "SettingsPanel",
  setup(e, { expose: t }) {
    const { state: s } = Ye(), n = Ks(), i = Ae("update"), l = Ae("folderSelectorRef"), o = /* @__PURE__ */ N(""), r = /* @__PURE__ */ N(""), a = /* @__PURE__ */ N([]);
    let p = null;
    async function f() {
      const g = await n.fetchConfig();
      a.value = g.custom_folders || [], s.customFolderCount = a.value.length, o.value = g.output_path || "";
    }
    function h(g) {
      p === "output" ? o.value = g : r.value = g;
    }
    function v() {
      var g;
      p = "output", (g = l.value) == null || g.show(h);
    }
    function y() {
      var g;
      p = "custom", (g = l.value) == null || g.show(h);
    }
    async function T() {
      const g = await n.postSettings({ output_path: o.value.trim() });
      if (g.ok)
        i();
      else {
        const x = await g.json();
        alert(x.error || "Failed to save setting");
      }
    }
    async function M() {
      const g = r.value.trim();
      if (!g) return;
      (await n.postFolder("add", g)).ok && (r.value = "", await f(), i());
    }
    async function S(g) {
      await n.postFolder("remove", g), await f(), i();
    }
    return Vt(() => f()), t({ loadSettings: f }), (g, x) => (I(), V("section", {
      class: G(["cm-advanced-panel", { visible: U(s).settingsVisible }])
    }, [
      d("div", ja, [
        x[2] || (x[2] = d("label", { class: "cm-settings-label" }, "Output Directory", -1)),
        d("div", Ba, [
          _t(d("input", {
            "onUpdate:modelValue": x[0] || (x[0] = (L) => o.value = L),
            type: "text",
            placeholder: "Default: ComfyUI output folder",
            class: "comfy-input"
          }, null, 512), [
            [wt, o.value]
          ]),
          d("button", {
            class: "comfy-btn comfy-btn-secondary",
            onClick: v
          }, "📂"),
          d("button", {
            class: "comfy-btn comfy-btn-primary",
            onClick: T
          }, "Save")
        ])
      ]),
      x[5] || (x[5] = d("hr", { class: "cm-settings-divider" }, null, -1)),
      d("div", Ua, [
        x[4] || (x[4] = d("label", { class: "cm-settings-label" }, "Custom Folders", -1)),
        d("div", Wa, [
          (I(!0), V(ue, null, Re(a.value, (L) => (I(), V("div", {
            key: L.path,
            class: "cm-folder-item"
          }, [
            d("span", null, Q(L.path), 1),
            d("button", {
              class: "cm-folder-remove-btn",
              title: "Remove folder",
              onClick: (R) => S(L.path)
            }, [...x[3] || (x[3] = [
              d("span", { class: "pi pi-times" }, null, -1)
            ])], 8, Ka)
          ]))), 128))
        ]),
        d("div", za, [
          _t(d("input", {
            "onUpdate:modelValue": x[1] || (x[1] = (L) => r.value = L),
            type: "text",
            placeholder: "Add custom path...",
            class: "comfy-input"
          }, null, 512), [
            [wt, r.value]
          ]),
          d("button", {
            class: "comfy-btn comfy-btn-secondary",
            onClick: y
          }, "📂"),
          d("button", {
            class: "comfy-btn comfy-btn-primary",
            onClick: M
          }, "+")
        ])
      ])
    ], 2));
  }
}, qa = { class: "cm-info-panel-header" }, Ja = ["title"], Ya = ["src"], Xa = { class: "cm-info-file-meta" }, Za = { class: "cm-info-field" }, Qa = { class: "cm-info-field" }, ec = { class: "cm-info-field" }, tc = { class: "cm-info-field" }, sc = { class: "cm-info-rating" }, nc = ["onClick"], ic = { class: "cm-info-actions" }, lc = ["disabled"], oc = {
  __name: "InfoPanel",
  setup(e) {
    const { state: t } = Ye(), s = Ks(), n = /* @__PURE__ */ N(""), i = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(!1), r = /* @__PURE__ */ N(!1);
    Ts(() => t.selectedFile, (h) => {
      h && (n.value = h.asset_title || "", i.value = h.asset_description || "", l.value = h.asset_tags || "", t.currentRating = parseInt(h.asset_rating) || 0, r.value = !1);
    });
    function a(h) {
      t.currentRating = h === t.currentRating ? 0 : h;
    }
    function p() {
      t.selectedFile = null, t.infoPanelVisible = !1;
    }
    async function f() {
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
      var y, T, M, S, g;
      return I(), V("section", {
        class: G(["cm-info-panel", { visible: U(t).infoPanelVisible }])
      }, [
        d("div", qa, [
          d("span", {
            class: "cm-info-panel-title",
            title: (y = U(t).selectedFile) == null ? void 0 : y.filename
          }, Q((T = U(t).selectedFile) == null ? void 0 : T.filename), 9, Ja),
          d("button", {
            class: "cm-info-close-btn",
            onClick: p
          }, [...v[3] || (v[3] = [
            d("span", { class: "pi pi-times" }, null, -1)
          ])])
        ]),
        U(t).selectedFile ? (I(), V("img", {
          key: 0,
          class: "cm-info-preview",
          src: (M = U(t).selectedFile) == null ? void 0 : M.url,
          alt: ""
        }, null, 8, Ya)) : Me("", !0),
        d("div", Xa, [
          d("span", null, Q((S = U(t).selectedFile) == null ? void 0 : S.file_type), 1),
          d("span", null, Q((g = U(t).selectedFile) == null ? void 0 : g.file_size_formatted), 1)
        ]),
        d("div", Za, [
          v[4] || (v[4] = d("label", { class: "cm-info-label" }, "Title", -1)),
          _t(d("input", {
            "onUpdate:modelValue": v[0] || (v[0] = (x) => n.value = x),
            class: "cm-info-input",
            type: "text",
            placeholder: "Image title..."
          }, null, 512), [
            [wt, n.value]
          ])
        ]),
        d("div", Qa, [
          v[5] || (v[5] = d("label", { class: "cm-info-label" }, "Description", -1)),
          _t(d("textarea", {
            "onUpdate:modelValue": v[1] || (v[1] = (x) => i.value = x),
            class: "cm-info-input",
            placeholder: "Image description...",
            rows: "2"
          }, null, 512), [
            [wt, i.value]
          ])
        ]),
        d("div", ec, [
          v[6] || (v[6] = d("label", { class: "cm-info-label" }, "Tags", -1)),
          _t(d("input", {
            "onUpdate:modelValue": v[2] || (v[2] = (x) => l.value = x),
            class: "cm-info-input",
            type: "text",
            placeholder: "Comma-separated tags..."
          }, null, 512), [
            [wt, l.value]
          ])
        ]),
        d("div", tc, [
          v[7] || (v[7] = d("label", { class: "cm-info-label" }, "Rating", -1)),
          d("div", sc, [
            (I(), V(ue, null, Re(5, (x) => d("button", {
              key: x,
              class: G(["cm-info-star", { active: x <= U(t).currentRating }]),
              onClick: (L) => a(x)
            }, "★", 10, nc)), 64))
          ])
        ]),
        d("div", ic, [
          d("button", {
            class: "cm-info-save-btn",
            disabled: o.value,
            onClick: f
          }, Q(o.value ? "Saving..." : "Save Metadata"), 9, lc)
        ]),
        d("div", {
          class: G(["cm-info-saved-msg", { show: r.value }])
        }, "Saved!", 2)
      ], 2);
    };
  }
}, rc = ["onClick"], ac = { class: "cm-submenu-key" }, cc = ["title"], uc = ["onMouseenter"], fc = { class: "cm-submenu-label" }, dc = ["onClick"], pc = { class: "cm-submenu-key" }, hc = ["title"], mc = {
  __name: "ContextMenu",
  setup(e, { expose: t }) {
    const { state: s } = Ye(), n = Ks(), i = Ae("comfyApp"), l = Ae("update"), o = Ae("openViewer"), r = Ae("toggleFavorite"), a = /* @__PURE__ */ N(!1), p = /* @__PURE__ */ N(null), f = /* @__PURE__ */ N({ x: 0, y: 0 }), h = /* @__PURE__ */ N(null), v = /* @__PURE__ */ N(null), y = /* @__PURE__ */ N({ x: 0, y: 0 }), T = /* @__PURE__ */ N(null);
    let M = null;
    const S = /* @__PURE__ */ N(null), g = /* @__PURE__ */ N({ x: 0, y: 0 }), x = /* @__PURE__ */ N(null);
    let L = null;
    const R = ke(() => {
      var ae;
      if (!((ae = p.value) != null && ae.file_metadata)) return [];
      const se = p.value.file_metadata, F = [];
      return se.filename && F.push({ label: "filename", value: se.filename }), se.file_type && F.push({ label: "file_type", value: se.file_type }), se.file_size && F.push({ label: "file_size", value: se.file_size }), se.created_date && F.push({ label: "created", value: se.created_date }), se.full_path && F.push({ label: "path", value: se.full_path }), F;
    }), H = ke(() => {
      var se, F;
      return !((se = p.value) != null && se.has_workflow) || !((F = p.value) != null && F.workflow_nodes) ? [] : p.value.workflow_nodes.map((ae) => ({
        label: `${ae.class_type || "Node"} #${ae.id}`,
        children: Object.entries(ae.inputs).map(([ye, we]) => ({ label: ye, value: we }))
      }));
    });
    function P(se, F = 40) {
      const ae = String(se);
      return ae.length > F ? ae.substring(0, F - 1) + "…" : ae;
    }
    function K(se) {
      navigator.clipboard.writeText(String(se)).then(() => {
        const F = document.createElement("div");
        F.className = "cm-copy-toast", F.textContent = "Copied!", document.body.appendChild(F), requestAnimationFrame(() => F.classList.add("show")), setTimeout(() => {
          F.classList.remove("show"), setTimeout(() => F.remove(), 200);
        }, 1200);
      });
    }
    function te(se) {
      K(se), le();
    }
    function le() {
      a.value = !1, v.value = null, S.value = null, clearTimeout(M), clearTimeout(L);
    }
    async function Se(se, F) {
      if (se.preventDefault(), se.stopPropagation(), le(), p.value = F, a.value = !0, await qe(), !h.value) return;
      const ae = h.value.getBoundingClientRect();
      let ye = se.clientX, we = se.clientY;
      ye + ae.width > window.innerWidth && (ye = window.innerWidth - ae.width - 4), we + ae.height > window.innerHeight && (we = window.innerHeight - ae.height - 4), f.value = { x: ye, y: we };
    }
    async function Ie(se, F) {
      be(), S.value = null, v.value = F, await qe(), X(se.currentTarget, T);
    }
    function X(se, F) {
      if (!F.value) return;
      const ae = se.getBoundingClientRect(), ye = F.value.getBoundingClientRect();
      let we = ae.right + 2, $e = ae.top;
      we + ye.width > window.innerWidth && (we = ae.left - ye.width - 2), $e + ye.height > window.innerHeight && ($e = Math.max(4, window.innerHeight - ye.height - 4)), y.value = { x: we, y: $e };
    }
    function j(se) {
      M = setTimeout(() => {
        v.value = null, S.value = null;
      }, 150);
    }
    function be() {
      clearTimeout(M);
    }
    async function it(se, F) {
      if (Z(), be(), S.value = F, await qe(), !x.value) return;
      const ae = se.currentTarget.getBoundingClientRect(), ye = x.value.getBoundingClientRect();
      let we = ae.right + 2, $e = ae.top;
      we + ye.width > window.innerWidth && (we = ae.left - ye.width - 2), $e + ye.height > window.innerHeight && ($e = Math.max(4, window.innerHeight - ye.height - 4)), g.value = { x: we, y: $e };
    }
    function Y() {
      L = setTimeout(() => {
        S.value = null;
      }, 150);
    }
    function Z() {
      clearTimeout(L);
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
    function Tt() {
      le();
    }
    return Vt(() => {
      document.addEventListener("click", Tt), document.addEventListener("contextmenu", Tt);
    }), Ht(() => {
      document.removeEventListener("click", Tt), document.removeEventListener("contextmenu", Tt);
    }), t({ show: Se }), (se, F) => {
      var ae, ye, we, $e, Xe, c;
      return I(), jt(ys, { to: "body" }, [
        a.value ? (I(), V("div", {
          key: 0,
          ref_key: "menuEl",
          ref: h,
          class: "cm-context-menu",
          style: tt({ left: f.value.x + "px", top: f.value.y + "px" }),
          onClick: F[4] || (F[4] = ie(() => {
          }, ["stop"])),
          onContextmenu: F[5] || (F[5] = ie(() => {
          }, ["stop"]))
        }, [
          d("button", {
            class: "cm-context-menu-item",
            onClick: ie(oe, ["stop"])
          }, [
            d("span", {
              class: G(["pi", (ae = p.value) != null && ae.is_favorite ? "pi-bookmark-fill" : "pi-bookmark"])
            }, null, 2),
            Pe(" " + Q((ye = p.value) != null && ye.is_favorite ? "Remove from favorites" : "Add to favorites"), 1)
          ]),
          F[20] || (F[20] = d("div", { class: "cm-context-menu-separator" }, null, -1)),
          d("button", {
            class: "cm-context-menu-item",
            onClick: ie(Ee, ["stop"])
          }, [...F[13] || (F[13] = [
            d("span", { class: "pi pi-download" }, null, -1),
            Pe(" Load workflow ", -1)
          ])]),
          d("button", {
            class: "cm-context-menu-item",
            onClick: ie(lt, ["stop"])
          }, [...F[14] || (F[14] = [
            d("span", { class: "pi pi-eye" }, null, -1),
            Pe(" View image ", -1)
          ])]),
          d("button", {
            class: "cm-context-menu-item",
            onClick: ie(Oe, ["stop"])
          }, [...F[15] || (F[15] = [
            d("span", { class: "pi pi-external-link" }, null, -1),
            Pe(" Open in external viewer ", -1)
          ])]),
          ((we = p.value) == null ? void 0 : we.file_type) === "PNG" ? (I(), V("button", {
            key: 0,
            class: "cm-context-menu-item",
            onClick: ie(Be, ["stop"])
          }, [...F[16] || (F[16] = [
            d("span", { class: "pi pi-pencil" }, null, -1),
            Pe(" Edit metadata ", -1)
          ])])) : Me("", !0),
          F[21] || (F[21] = d("div", { class: "cm-context-menu-separator" }, null, -1)),
          F[22] || (F[22] = d("div", { class: "cm-context-menu-label" }, "Copy", -1)),
          R.value.length > 0 ? (I(), V("div", {
            key: 1,
            class: "cm-context-menu-item cm-submenu-item",
            onMouseenter: F[0] || (F[0] = (u) => Ie(u, "meta")),
            onMouseleave: F[1] || (F[1] = (u) => j())
          }, [...F[17] || (F[17] = [
            d("span", { class: "pi pi-info-circle" }, null, -1),
            d("span", { class: "cm-submenu-label" }, "Metadata", -1),
            d("span", { class: "cm-submenu-arrow" }, "►", -1)
          ])], 32)) : Me("", !0),
          ($e = p.value) != null && $e.has_workflow && ((c = (Xe = p.value) == null ? void 0 : Xe.workflow_nodes) == null ? void 0 : c.length) > 0 ? (I(), V("div", {
            key: 2,
            class: "cm-context-menu-item cm-submenu-item",
            onMouseenter: F[2] || (F[2] = (u) => Ie(u, "workflow")),
            onMouseleave: F[3] || (F[3] = (u) => j())
          }, [...F[18] || (F[18] = [
            d("span", { class: "pi pi-sitemap" }, null, -1),
            d("span", { class: "cm-submenu-label" }, "Workflow", -1),
            d("span", { class: "cm-submenu-arrow" }, "►", -1)
          ])], 32)) : Me("", !0),
          F[23] || (F[23] = d("div", { class: "cm-context-menu-separator" }, null, -1)),
          d("button", {
            class: "cm-context-menu-item cm-danger",
            onClick: ie(Bt, ["stop"])
          }, [...F[19] || (F[19] = [
            d("span", { class: "pi pi-trash" }, null, -1),
            Pe(" Delete ", -1)
          ])])
        ], 36)) : Me("", !0),
        v.value === "meta" ? (I(), V("div", {
          key: 1,
          ref_key: "submenuEl",
          ref: T,
          class: "cm-submenu",
          style: tt({ left: y.value.x + "px", top: y.value.y + "px" }),
          onMouseenter: F[6] || (F[6] = (u) => be()),
          onMouseleave: F[7] || (F[7] = (u) => j())
        }, [
          (I(!0), V(ue, null, Re(R.value, (u) => (I(), V("button", {
            key: u.label,
            class: "cm-context-menu-item cm-submenu-copy-row",
            onClick: ie((m) => te(u.value), ["stop"])
          }, [
            d("span", ac, Q(u.label), 1),
            d("span", {
              class: "cm-submenu-value",
              title: String(u.value)
            }, Q(P(u.value)), 9, cc)
          ], 8, rc))), 128))
        ], 36)) : Me("", !0),
        v.value === "workflow" ? (I(), V("div", {
          key: 2,
          ref_key: "submenuEl",
          ref: T,
          class: "cm-submenu",
          style: tt({ left: y.value.x + "px", top: y.value.y + "px" }),
          onMouseenter: F[9] || (F[9] = (u) => be()),
          onMouseleave: F[10] || (F[10] = (u) => j())
        }, [
          (I(!0), V(ue, null, Re(H.value, (u) => (I(), V("div", {
            key: u.label,
            class: "cm-context-menu-item cm-submenu-item",
            onMouseenter: (m) => it(m, u),
            onMouseleave: F[8] || (F[8] = (m) => Y())
          }, [
            d("span", fc, Q(u.label), 1),
            F[24] || (F[24] = d("span", { class: "cm-submenu-arrow" }, "►", -1))
          ], 40, uc))), 128))
        ], 36)) : Me("", !0),
        S.value ? (I(), V("div", {
          key: 3,
          ref_key: "nodeSubmenuEl",
          ref: x,
          class: "cm-submenu",
          style: tt({ left: g.value.x + "px", top: g.value.y + "px" }),
          onMouseenter: F[11] || (F[11] = (u) => Z()),
          onMouseleave: F[12] || (F[12] = (u) => Y())
        }, [
          (I(!0), V(ue, null, Re(S.value.children, (u) => (I(), V("button", {
            key: u.label,
            class: "cm-context-menu-item cm-submenu-copy-row",
            onClick: ie((m) => te(u.value), ["stop"])
          }, [
            d("span", pc, Q(u.label), 1),
            d("span", {
              class: "cm-submenu-value",
              title: String(u.value)
            }, Q(P(u.value)), 9, hc)
          ], 8, dc))), 128))
        ], 36)) : Me("", !0)
      ]);
    };
  }
}, vc = ["onClick"], gc = ["src"], yc = ["title"], bc = { class: "cm-viewer-grid-toolbar" }, _c = { class: "cm-viewer-grid-toolbar-center" }, wc = { class: "cm-viewer-grid-search-wrapper" }, xc = ["title"], Cc = { class: "cm-viewer-grid-toolbar-slider" }, Sc = {
  __name: "GridView",
  props: {
    files: { type: Array, required: !0 },
    currentIndex: { type: Number, required: !0 }
  },
  setup(e, { expose: t }) {
    const s = e, { state: n } = Ye(), i = Ae("imageViewerRef"), l = /* @__PURE__ */ N(null), o = /* @__PURE__ */ N(null), r = /* @__PURE__ */ N(null), a = /* @__PURE__ */ N(null), p = /* @__PURE__ */ N(null), f = /* @__PURE__ */ N(""), h = /* @__PURE__ */ N(160), v = ke(
      () => n.activeUtility !== "all" || n.activeModelFilters.size > 0 || n.activeLoraFilters.size > 0
    );
    function y(X) {
      return X.length > 18 ? X.substring(0, 15) + "..." : X;
    }
    function T(X) {
      var j;
      (j = i.value) == null || j.selectFromGrid(X);
    }
    function M() {
      var X;
      (X = i.value) == null || X.close();
    }
    async function S() {
      var j;
      await ((j = i.value) == null ? void 0 : j.gridUpdate(f.value)) && qe(() => te());
    }
    function g() {
      S();
    }
    function x(X) {
      var j;
      (j = a.value) == null || j.show(X, o.value);
    }
    function L() {
      const [X, j] = n.sortBy.split("_");
      n.sortBy = `${X}_${j === "desc" ? "asc" : "desc"}`, S();
    }
    function R(X) {
      var j;
      (j = p.value) == null || j.show(X, r.value);
    }
    function H() {
      n.workflowOnly = !n.workflowOnly, S();
    }
    function P() {
      n.showFavorites = !n.showFavorites, S();
    }
    function K() {
      n.hideNsfw = !n.hideNsfw, S();
    }
    function te() {
      const X = l.value;
      if (!X || !s.files.length) return;
      X.classList.remove("cm-grid-slider-active"), X.style.removeProperty("--grid-thumb-size");
      const j = X.getBoundingClientRect(), be = j.width * j.height, it = Math.sqrt(be / s.files.length), Y = Math.max(1, Math.min(
        Math.floor(j.width / Math.max(it, 100)),
        Math.floor(j.width / 100)
      ));
      X.style.setProperty("--grid-cols", Y);
      const Z = Math.round(j.width / Y);
      h.value = Math.max(80, Math.min(400, Z));
    }
    function le() {
      const X = l.value;
      X && (X.classList.add("cm-grid-slider-active"), X.style.setProperty("--grid-thumb-size", `${h.value}px`));
    }
    function Se(X) {
      if (n.viewerMode !== "grid") return;
      const j = X.deltaY < 0 ? 20 : -20;
      h.value = Math.max(80, Math.min(400, h.value + j)), le();
    }
    function Ie() {
      const X = l.value;
      X && (X.classList.remove("cm-grid-slider-active"), X.style.removeProperty("--grid-thumb-size"), X.style.removeProperty("--grid-cols")), f.value = "";
    }
    return t({ render: te, reset: Ie }), (X, j) => (I(), V(ue, null, [
      d("div", {
        ref_key: "containerRef",
        ref: l,
        class: "cm-viewer-grid",
        onWheel: ie(Se, ["prevent"])
      }, [
        (I(!0), V(ue, null, Re(e.files, (be, it) => (I(), V("div", {
          key: be.full_path,
          class: G(["cm-viewer-grid-item", { active: it === e.currentIndex }]),
          onClick: ie((Y) => T(it), ["stop"])
        }, [
          d("img", {
            src: be.url,
            loading: "lazy",
            draggable: "false"
          }, null, 8, gc),
          d("span", {
            class: "cm-viewer-grid-label",
            title: be.filename
          }, Q(y(be.filename)), 9, yc)
        ], 10, vc))), 128))
      ], 544),
      d("div", bc, [
        d("button", {
          class: "cm-viewer-grid-close",
          title: "Close grid view",
          onClick: M
        }, [...j[2] || (j[2] = [
          d("span", { class: "pi pi-times" }, null, -1)
        ])]),
        d("div", _c, [
          d("div", wc, [
            j[3] || (j[3] = d("span", { class: "pi pi-search cm-viewer-grid-search-icon" }, null, -1)),
            _t(d("input", {
              type: "text",
              class: "cm-viewer-grid-search",
              placeholder: "Search...",
              "onUpdate:modelValue": j[0] || (j[0] = (be) => f.value = be),
              onInput: g
            }, null, 544), [
              [wt, f.value]
            ])
          ]),
          d("button", {
            ref_key: "filterBtnRef",
            ref: o,
            class: G(["cm-viewer-grid-btn cm-viewer-grid-filter", { active: v.value }]),
            title: "Filter options",
            onClick: x
          }, [...j[4] || (j[4] = [
            d("span", { class: "pi pi-filter" }, null, -1)
          ])], 2),
          d("button", {
            ref_key: "sortBtnRef",
            ref: r,
            class: G(["cm-viewer-grid-btn cm-viewer-grid-sort", { active: U(n).sortBy !== "date_desc" }]),
            title: "Sort by date",
            onClick: L,
            onContextmenu: ie(R, ["prevent"])
          }, [...j[5] || (j[5] = [
            d("span", { class: "pi pi-sort-alt" }, null, -1)
          ])], 34),
          d("button", {
            class: G(["cm-viewer-grid-btn cm-viewer-grid-workflow", { active: U(n).workflowOnly }]),
            title: "Show only assets with workflows",
            onClick: H
          }, [...j[6] || (j[6] = [
            d("span", { class: "pi pi-sitemap" }, null, -1)
          ])], 2),
          d("button", {
            class: G(["cm-viewer-grid-btn cm-viewer-grid-fav", { active: U(n).showFavorites }]),
            title: "Show favorites only",
            onClick: P
          }, [...j[7] || (j[7] = [
            d("span", { class: "pi pi-bookmark" }, null, -1)
          ])], 2),
          d("button", {
            class: G(["cm-viewer-grid-btn cm-viewer-grid-nsfw", { active: U(n).hideNsfw }]),
            title: U(n).hideNsfw ? "NSFW hidden" : "NSFW visible",
            onClick: K
          }, [
            d("span", {
              class: G(U(n).hideNsfw ? "pi pi-eye-slash" : "pi pi-eye")
            }, null, 2)
          ], 10, xc)
        ]),
        d("div", Cc, [
          j[8] || (j[8] = d("span", { class: "pi pi-search-minus cm-viewer-grid-slider-icon" }, null, -1)),
          _t(d("input", {
            type: "range",
            class: "cm-viewer-grid-slider",
            min: "80",
            max: "400",
            step: "10",
            "onUpdate:modelValue": j[1] || (j[1] = (be) => h.value = be),
            onInput: le
          }, null, 544), [
            [
              wt,
              h.value,
              void 0,
              { number: !0 }
            ]
          ]),
          j[9] || (j[9] = d("span", { class: "pi pi-search-plus cm-viewer-grid-slider-icon" }, null, -1))
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
}, kc = { class: "cm-viewer-topbar" }, Tc = ["title"], $c = { class: "cm-viewer-topbar-size" }, Fc = { class: "cm-viewer-topbar-counter" }, Mc = { class: "cm-viewer-topbar-actions" }, Ac = ["src"], Rc = ["src"], Ec = ["src"], Oc = ["onClick"], Pc = { class: "cm-viewer-section" }, Ic = { class: "cm-viewer-row-label" }, Lc = ["title", "onClick"], Dc = ["onClick"], Nc = {
  key: 1,
  class: "cm-viewer-empty"
}, Vc = { class: "cm-viewer-section" }, Hc = { class: "cm-viewer-node-title" }, jc = ["onClick"], Bc = { class: "cm-viewer-row-label" }, Uc = ["title", "onClick"], Wc = ["onClick"], Kc = {
  key: 1,
  class: "cm-viewer-empty"
}, es = 32, zc = {
  __name: "ImageViewer",
  setup(e, { expose: t }) {
    const s = Ae("comfyApp"), n = [25, 50, 75, 100, 150, 200, 300, 500], i = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N([]), o = /* @__PURE__ */ N(0), r = /* @__PURE__ */ N(1), a = /* @__PURE__ */ N(0), p = /* @__PURE__ */ N(0), f = /* @__PURE__ */ N(1), h = /* @__PURE__ */ N(!1), v = /* @__PURE__ */ N(!1), y = /* @__PURE__ */ N(!1), T = /* @__PURE__ */ N("carousel"), M = /* @__PURE__ */ N(""), S = /* @__PURE__ */ N(!1), g = /* @__PURE__ */ N(!0), x = /* @__PURE__ */ vs({}), L = /* @__PURE__ */ N(!1);
    let R = /* @__PURE__ */ N(!1), H = 0, P = 0, K = !1, te = !1, le = 0, Se = 0, Ie = 0, X = 0, j = !1, be = null;
    const it = /* @__PURE__ */ N(null), Y = /* @__PURE__ */ N(null), Z = /* @__PURE__ */ N(null), oe = /* @__PURE__ */ N(null), Ee = /* @__PURE__ */ N(null), lt = /* @__PURE__ */ N(null), Oe = ke(() => l.value[o.value] || null), Be = ke(() => Math.round(r.value * 100)), Bt = ke(
      () => r.value === f.value && a.value === 0 && p.value === 0
    ), Tt = ke(() => {
      var $;
      if (!L.value || l.value.length <= 1) return "";
      const _ = (o.value - 1 + l.value.length) % l.value.length;
      return (($ = l.value[_]) == null ? void 0 : $.url) || "";
    }), se = ke(() => {
      var $;
      if (!L.value || l.value.length <= 1) return "";
      const _ = (o.value + 1) % l.value.length;
      return (($ = l.value[_]) == null ? void 0 : $.url) || "";
    }), F = ke(() => {
      const _ = Oe.value;
      if (!_) return [];
      const $ = _.file_metadata || {}, q = [], ne = (xe, Fe) => {
        Fe && q.push([xe, Fe]);
      };
      return ne("Filename", $.filename || _.filename), ne("Type", $.file_type || _.file_type), ne("Size", $.file_size || _.file_size_formatted), ne("Created", $.created_date || (_.created_at ? new Date(_.created_at * 1e3).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" }) : "")), ne("Path", $.full_path || _.full_path), q;
    });
    function ae(_, $) {
      const q = String($);
      return x[_] ? q : q.length > es ? q.substring(0, es - 1) + "…" : q;
    }
    function ye(_, $) {
      String($).length <= es || (x[_] = !x[_]);
    }
    function we(_) {
      navigator.clipboard.writeText(_).then(() => {
        const $ = document.createElement("div");
        $.className = "cm-copy-toast", $.textContent = "Copied!", document.body.appendChild($), requestAnimationFrame(() => $.classList.add("show")), setTimeout(() => {
          $.classList.remove("show"), setTimeout(() => $.remove(), 200);
        }, 1200);
      });
    }
    function $e(_) {
      var xe;
      const $ = JSON.stringify({
        nodes: [{ type: _.class_type, pos: [0, 0] }],
        links: []
      }), q = localStorage.getItem("litegrapheditor_clipboard");
      localStorage.setItem("litegrapheditor_clipboard", $), s.canvas.pasteFromClipboard(), q !== null ? localStorage.setItem("litegrapheditor_clipboard", q) : localStorage.removeItem("litegrapheditor_clipboard");
      const ne = s.canvas.selected_nodes;
      if (ne)
        for (const Fe in ne) {
          const ht = ne[Fe];
          if (ht.widgets)
            for (const Ue of ht.widgets)
              Ue.name in _.inputs && (Ue.value = _.inputs[Ue.name], (xe = Ue.callback) == null || xe.call(Ue, Ue.value));
        }
    }
    function Xe() {
      Z.value && (Z.value.style.transform = `translate(${a.value}px, ${p.value}px) scale(${r.value})`);
    }
    function c() {
      const _ = Z.value;
      if (!(_ != null && _.naturalWidth) || !(_ != null && _.naturalHeight)) return;
      const $ = Y.value;
      if (!$) return;
      const q = _.naturalWidth, ne = _.naturalHeight, xe = $.getBoundingClientRect(), Fe = Math.min(xe.width / q, xe.height / ne, 1), ht = q * Fe, Ue = ne * Fe, me = 512, De = Math.max(ht, Ue);
      De > me && (r.value = me / De), f.value = r.value;
    }
    function u(_, $, q) {
      const ne = r.value;
      if (r.value = Math.max(0.1, Math.min(10, r.value + _)), $ !== void 0 && q !== void 0) {
        const xe = Y.value.getBoundingClientRect(), Fe = $ - xe.left - xe.width / 2, ht = q - xe.top - xe.height / 2, Ue = 1 - r.value / ne;
        a.value += Fe * Ue, p.value += ht * Ue;
      }
      Xe(), Y.value && (Y.value.style.cursor = r.value > f.value ? "grab" : ""), b();
    }
    function m() {
      var _;
      if (r.value = 1, a.value = 0, p.value = 0, !v.value && ((_ = Z.value) != null && _.naturalWidth)) {
        c();
        const $ = Z.value;
        $.style.transition = "none", Xe(), $.offsetHeight, $.style.transition = "";
      } else
        Xe();
      Y.value && (Y.value.style.cursor = ""), b();
    }
    function k(_) {
      r.value = _ / 100, a.value = 0, p.value = 0, Xe(), Y.value && (Y.value.style.cursor = r.value > f.value ? "grab" : ""), b(), y.value = !1;
    }
    function b() {
      const _ = r.value <= f.value && l.value.length > 1 && !v.value && T.value !== "grid";
      L.value = _;
    }
    function w(_) {
      if (!(l.value.length <= 1 || K))
        if (L.value) {
          K = !0;
          const $ = _ > 0 ? "cm-slide-out-left" : "cm-slide-out-right", q = _ > 0 ? "cm-slide-in-from-right" : "cm-slide-in-from-left", ne = Y.value;
          ne.classList.add($);
          const xe = () => {
            ne.removeEventListener("animationend", xe), ne.classList.remove($), o.value = (o.value + _ + l.value.length) % l.value.length, m(), ne.classList.add(q);
            const Fe = () => {
              ne.removeEventListener("animationend", Fe), ne.classList.remove(q), K = !1;
            };
            ne.addEventListener("animationend", Fe, { once: !0 });
          };
          ne.addEventListener("animationend", xe, { once: !0 });
        } else
          o.value = (o.value + _ + l.value.length) % l.value.length, m();
    }
    function O() {
      h.value = !h.value;
    }
    function E() {
      v.value = !v.value, v.value ? (f.value = 1, r.value = 1, a.value = 0, p.value = 0, Xe(), Y.value && (Y.value.style.cursor = ""), h.value && (h.value = !1)) : m(), b();
    }
    function A() {
      T.value === "grid" ? (T.value = "carousel", b()) : (T.value = "grid", b(), qe(() => {
        var _;
        return (_ = lt.value) == null ? void 0 : _.render();
      }));
    }
    function C() {
      const _ = Z.value;
      _ && (M.value = `${_.naturalWidth} × ${_.naturalHeight}`, v.value ? Xe() : (c(), _.style.transition = "none", Xe(), _.offsetHeight, _.style.transition = ""), b());
    }
    function W(_) {
      const $ = _.deltaY > 0 ? -0.15 : 0.15;
      u($, _.clientX, _.clientY);
    }
    function D(_) {
      L.value && !K ? (_.preventDefault(), R.value = !0, H = _.clientX, P = 0, Y.value && (Y.value.style.cursor = "grabbing")) : r.value > f.value && (_.preventDefault(), te = !0, le = _.clientX, Se = _.clientY, Ie = a.value, X = p.value, Y.value && (Y.value.style.cursor = "grabbing"));
    }
    function B(_) {
      if (R.value) {
        P = _.clientX - H, Z.value && (Z.value.style.transform = `translateX(${P}px) scale(${r.value})`), oe.value && (oe.value.style.transform = `translateX(calc(-50% + ${P}px))`), Ee.value && (Ee.value.style.transform = `translateX(calc(50% + ${P}px))`);
        return;
      }
      te && (a.value = Ie + (_.clientX - le), p.value = X + (_.clientY - Se), Xe());
    }
    function z() {
      if (R.value) {
        if (R.value = !1, j = !0, oe.value && (oe.value.style.transform = ""), Ee.value && (Ee.value.style.transform = ""), Math.abs(P) > 50) {
          const _ = P < 0 ? 1 : -1;
          o.value = (o.value + _ + l.value.length) % l.value.length, m();
          const $ = _ > 0 ? "cm-slide-in-from-right" : "cm-slide-in-from-left";
          K = !0;
          const q = Y.value;
          q.classList.add($), q.addEventListener("animationend", () => {
            q.classList.remove($), K = !1;
          }, { once: !0 });
        } else
          Z.value && (Z.value.style.transform = `translate(${a.value}px, ${p.value}px) scale(${r.value})`);
        Y.value && (Y.value.style.cursor = ""), P = 0;
        return;
      }
      te && (te = !1, Y.value && (Y.value.style.cursor = r.value > f.value ? "grab" : ""));
    }
    function re(_) {
      if (j) {
        j = !1;
        return;
      }
      if (T.value === "grid") return;
      _.target.closest(".cm-viewer-img, .cm-viewer-panel, .cm-viewer-nav, .cm-viewer-topbar, .cm-viewer-zoom-chip, .cm-viewer-carousel-ghost") || Te();
    }
    function pe(_) {
      if (i.value && !(_.target.tagName === "INPUT" || _.target.tagName === "TEXTAREA"))
        switch (_.key) {
          case "Escape":
            Te();
            break;
          case "ArrowLeft":
            _.preventDefault(), w(-1);
            break;
          case "ArrowRight":
            _.preventDefault(), w(1);
            break;
          case "+":
          case "=":
            _.preventDefault(), u(0.25);
            break;
          case "-":
            _.preventDefault(), u(-0.25);
            break;
          case "0":
            _.preventDefault(), m();
            break;
          case "i":
          case "I":
            _.preventDefault(), O();
            break;
          case "f":
          case "F":
            _.preventDefault(), E();
            break;
          case "g":
          case "G":
            _.preventDefault(), A();
            break;
        }
    }
    function ce(_, $, q) {
      l.value = _, o.value = Math.max(0, Math.min($, _.length - 1)), be = q || null, m(), i.value = !0, Object.keys(x).forEach((ne) => delete x[ne]);
    }
    function Le(_, $) {
      l.value = _, o.value = 0, be = $ || null, m(), i.value = !0, T.value = "grid", b(), qe(() => {
        var q;
        return (q = lt.value) == null ? void 0 : q.render();
      });
    }
    function Te() {
      var _;
      i.value = !1, v.value = !1, L.value = !1, K = !1, R.value = !1, T.value = "carousel", y.value = !1, Z.value && (Z.value.src = ""), oe.value && (oe.value.style.transform = ""), Ee.value && (Ee.value.style.transform = ""), (_ = lt.value) == null || _.reset();
    }
    function Ze(_) {
      o.value = _, m(), T.value = "carousel", b();
    }
    async function Qe(_) {
      if (!be) return null;
      const $ = await be(_);
      return $ && (l.value = $, o.value = Math.max(0, Math.min(o.value, $.length - 1))), $;
    }
    return Vt(() => {
      document.addEventListener("mousemove", B), document.addEventListener("mouseup", z), document.addEventListener("keydown", pe);
    }), Ht(() => {
      document.removeEventListener("mousemove", B), document.removeEventListener("mouseup", z), document.removeEventListener("keydown", pe);
    }), t({ open: ce, openGrid: Le, close: Te, selectFromGrid: Ze, gridUpdate: Qe }), (_, $) => {
      var q, ne, xe, Fe, ht, Ue;
      return I(), jt(ys, { to: "body" }, [
        d("div", {
          ref_key: "overlayRef",
          ref: it,
          class: G(["cm-viewer-overlay", {
            visible: i.value,
            fullscreen: v.value,
            "cm-carousel-active": L.value,
            "cm-carousel-dragging": U(R),
            "cm-viewer-grid-mode": T.value === "grid"
          }])
        }, [
          d("div", {
            class: "cm-viewer-body",
            onClick: re
          }, [
            d("div", kc, [
              d("span", {
                class: "cm-viewer-topbar-name",
                title: (q = Oe.value) == null ? void 0 : q.filename
              }, Q((ne = Oe.value) == null ? void 0 : ne.filename), 9, Tc),
              d("span", $c, Q(M.value), 1),
              d("span", Fc, Q(o.value + 1) + " / " + Q(l.value.length), 1),
              d("div", Mc, [
                d("button", {
                  class: G(["cm-viewer-grid-toggle", { active: T.value === "grid" }]),
                  title: "Toggle grid view (G)",
                  onClick: ie(A, ["stop"])
                }, [...$[6] || ($[6] = [
                  d("span", { class: "pi pi-th-large" }, null, -1)
                ])], 2),
                d("button", {
                  class: G(["cm-viewer-panel-toggle", { active: h.value }]),
                  title: "Toggle details (I)",
                  onClick: ie(O, ["stop"])
                }, [...$[7] || ($[7] = [
                  d("span", { class: "pi pi-info-circle" }, null, -1)
                ])], 2),
                d("button", {
                  class: G(["cm-viewer-fullscreen-toggle", { active: v.value }]),
                  title: "Toggle fullscreen (F)",
                  onClick: ie(E, ["stop"])
                }, [
                  d("span", {
                    class: G(["pi", v.value ? "pi-compress" : "pi-expand"])
                  }, null, 2)
                ], 2),
                d("button", {
                  class: "cm-viewer-close",
                  title: "Close (Esc)",
                  onClick: ie(Te, ["stop"])
                }, [...$[8] || ($[8] = [
                  d("span", { class: "pi pi-times" }, null, -1)
                ])])
              ])
            ]),
            d("button", {
              class: "cm-viewer-nav cm-viewer-prev",
              title: "Previous (Left arrow)",
              style: tt({ display: l.value.length > 1 ? "" : "none" }),
              onClick: $[0] || ($[0] = ie((me) => w(-1), ["stop"]))
            }, [...$[9] || ($[9] = [
              d("span", { class: "pi pi-chevron-left" }, null, -1)
            ])], 4),
            d("div", {
              ref_key: "imgContainerRef",
              ref: Y,
              class: "cm-viewer-img-container",
              onWheel: ie(W, ["prevent"]),
              onMousedown: D
            }, [
              d("img", {
                ref_key: "imgRef",
                ref: Z,
                class: "cm-viewer-img",
                draggable: "false",
                src: (xe = Oe.value) == null ? void 0 : xe.url,
                onLoad: C
              }, null, 40, Ac)
            ], 544),
            d("button", {
              class: "cm-viewer-nav cm-viewer-next",
              title: "Next (Right arrow)",
              style: tt({ display: l.value.length > 1 ? "" : "none" }),
              onClick: $[1] || ($[1] = ie((me) => w(1), ["stop"]))
            }, [...$[10] || ($[10] = [
              d("span", { class: "pi pi-chevron-right" }, null, -1)
            ])], 4),
            d("div", {
              ref_key: "ghostPrevRef",
              ref: oe,
              class: "cm-viewer-carousel-prev cm-viewer-carousel-ghost"
            }, [
              d("img", {
                draggable: "false",
                src: Tt.value
              }, null, 8, Rc)
            ], 512),
            d("div", {
              ref_key: "ghostNextRef",
              ref: Ee,
              class: "cm-viewer-carousel-next cm-viewer-carousel-ghost"
            }, [
              d("img", {
                draggable: "false",
                src: se.value
              }, null, 8, Ec)
            ], 512),
            d("div", {
              class: "cm-viewer-zoom-chip",
              onMousedown: $[3] || ($[3] = ie(() => {
              }, ["stop"]))
            }, [
              d("span", {
                class: "cm-viewer-zoom-value",
                onClick: $[2] || ($[2] = ie((me) => y.value = !y.value, ["stop"]))
              }, Q(Be.value) + "%", 1),
              d("button", {
                class: "cm-viewer-zoom-reset",
                title: "Reset zoom (0)",
                style: tt({ display: Bt.value ? "none" : "" }),
                onClick: ie(m, ["stop"])
              }, [...$[11] || ($[11] = [
                d("span", { class: "pi pi-replay" }, null, -1)
              ])], 4),
              d("div", {
                class: G(["cm-viewer-zoom-menu", { open: y.value }])
              }, [
                (I(), V(ue, null, Re(n, (me) => d("button", {
                  key: me,
                  class: G(["cm-viewer-zoom-menu-item", { active: Be.value === me }]),
                  onClick: ie((De) => k(me), ["stop"])
                }, Q(me) + "%", 11, Oc)), 64))
              ], 2)
            ], 32),
            _e(Sc, {
              ref_key: "gridViewRef",
              ref: lt,
              files: l.value,
              "current-index": o.value
            }, null, 8, ["files", "current-index"]),
            d("div", {
              class: G(["cm-viewer-panel", { open: h.value }])
            }, [
              d("div", Pc, [
                d("button", {
                  class: G(["cm-viewer-section-header", { expanded: S.value }]),
                  onClick: $[4] || ($[4] = (me) => S.value = !S.value)
                }, [
                  d("span", {
                    class: G(["pi", S.value ? "pi-chevron-down" : "pi-chevron-right", "cm-viewer-section-chevron"])
                  }, null, 2),
                  $[12] || ($[12] = d("span", null, "File Info", -1))
                ], 2),
                d("div", {
                  class: G(["cm-viewer-section-body", { expanded: S.value }])
                }, [
                  F.value.length > 0 ? (I(!0), V(ue, { key: 0 }, Re(F.value, ([me, De]) => (I(), V("div", {
                    key: me,
                    class: "cm-viewer-row"
                  }, [
                    d("span", Ic, Q(me), 1),
                    d("span", {
                      class: G(["cm-viewer-row-value", {
                        "cm-viewer-truncated": String(De).length > es,
                        "cm-viewer-expanded": x[me]
                      }]),
                      title: String(De),
                      onClick: (Ot) => ye(me, De)
                    }, Q(ae(me, De)), 11, Lc),
                    d("button", {
                      class: "cm-viewer-copy-btn",
                      title: "Copy value",
                      onClick: ie((Ot) => we(String(De)), ["stop"])
                    }, [...$[13] || ($[13] = [
                      d("span", { class: "pi pi-clone" }, null, -1)
                    ])], 8, Dc)
                  ]))), 128)) : (I(), V("div", Nc, "No file info available"))
                ], 2)
              ]),
              d("div", Vc, [
                d("button", {
                  class: G(["cm-viewer-section-header expanded", { expanded: g.value }]),
                  onClick: $[5] || ($[5] = (me) => g.value = !g.value)
                }, [
                  d("span", {
                    class: G(["pi", g.value ? "pi-chevron-down" : "pi-chevron-right", "cm-viewer-section-chevron"])
                  }, null, 2),
                  $[14] || ($[14] = d("span", null, "Workflow", -1))
                ], 2),
                d("div", {
                  class: G(["cm-viewer-section-body", { expanded: g.value }])
                }, [
                  (Fe = Oe.value) != null && Fe.has_workflow && ((Ue = (ht = Oe.value) == null ? void 0 : ht.workflow_nodes) == null ? void 0 : Ue.length) > 0 ? (I(!0), V(ue, { key: 0 }, Re(Oe.value.workflow_nodes, (me) => (I(), V("div", {
                    key: me.id,
                    class: "cm-viewer-node"
                  }, [
                    d("div", Hc, [
                      d("span", null, Q(me.class_type || "Node") + " #" + Q(me.id), 1),
                      d("button", {
                        class: "cm-viewer-copy-btn cm-viewer-copy-node",
                        title: "Add node to canvas",
                        onClick: ie((De) => $e(me), ["stop"])
                      }, [...$[15] || ($[15] = [
                        d("span", { class: "pi pi-plus-circle" }, null, -1)
                      ])], 8, jc)
                    ]),
                    (I(!0), V(ue, null, Re(Object.entries(me.inputs), ([De, Ot]) => (I(), V("div", {
                      key: De,
                      class: "cm-viewer-row"
                    }, [
                      d("span", Bc, Q(De), 1),
                      d("span", {
                        class: G(["cm-viewer-row-value", {
                          "cm-viewer-truncated": String(Ot).length > es,
                          "cm-viewer-expanded": x[`${me.id}_${De}`]
                        }]),
                        title: String(Ot),
                        onClick: (kl) => ye(`${me.id}_${De}`, Ot)
                      }, Q(ae(`${me.id}_${De}`, Ot)), 11, Uc),
                      d("button", {
                        class: "cm-viewer-copy-btn",
                        title: "Copy value",
                        onClick: ie((kl) => we(String(Ot)), ["stop"])
                      }, [...$[16] || ($[16] = [
                        d("span", { class: "pi pi-clone" }, null, -1)
                      ])], 8, Wc)
                    ]))), 128))
                  ]))), 128)) : (I(), V("div", Kc, "No workflow data"))
                ], 2)
              ])
            ], 2)
          ])
        ], 2)
      ]);
    };
  }
}, Gc = { class: "cm-selector-content" }, qc = { class: "cm-current-path" }, Jc = ["onKeydown"], Yc = { class: "cm-selector-list" }, Xc = ["onClick"], Zc = {
  __name: "FolderSelector",
  setup(e, { expose: t }) {
    const s = /* @__PURE__ */ N(!1), n = /* @__PURE__ */ N(""), i = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N([]), o = /* @__PURE__ */ N("");
    let r = null, a = null, p = null;
    function f(P) {
      return P.startsWith("/") || /^[A-Za-z]:[\\\/]/.test(P);
    }
    const h = ke(() => n.value && n.value !== "/" && !n.value.endsWith(":\\")), v = ke(() => n.value.split(/[\\/]/).slice(0, -1).join("/") || "/"), y = ke(() => {
      if (!o.value) return l.value;
      const P = o.value.toLowerCase();
      return l.value.filter((K) => K.toLowerCase().includes(P));
    });
    function T(P, K) {
      return P ? `${P}/${K}`.replace(/\/+/g, "/") : K;
    }
    async function M(P) {
      const te = await (await fetch(`/dnh-assetmanager/subdirs?path=${encodeURIComponent(P)}`)).json();
      l.value = te.dirs || [];
    }
    async function S(P) {
      await M(P), n.value = P, a = P, i.value = P, o.value = "";
    }
    function g() {
      clearTimeout(r), r = setTimeout(async () => {
        const P = i.value.trim();
        if (!P || !f(P)) {
          o.value = P.toLowerCase();
          return;
        }
        let K, te;
        if (P.endsWith("/") || P.endsWith("\\"))
          K = P.replace(/[\/\\]+$/, "") || "/", te = "";
        else {
          const le = Math.max(P.lastIndexOf("/"), P.lastIndexOf("\\"));
          K = P.substring(0, le) || "/", te = P.substring(le + 1).toLowerCase();
        }
        K !== a && (await M(K), a = K, n.value = K), o.value = te;
      }, 150);
    }
    function x() {
      clearTimeout(r);
      const P = i.value.trim();
      P && f(P) && S(P);
    }
    function L(P) {
      p = P, s.value = !0, i.value = n.value, a = null, S(n.value);
    }
    function R() {
      s.value = !1;
    }
    function H() {
      const P = i.value.trim() || n.value;
      p && p(P), s.value = !1;
    }
    return t({ show: L }), (P, K) => (I(), jt(ys, { to: "body" }, [
      s.value ? (I(), V("div", {
        key: 0,
        class: "cm-selector-modal",
        style: { display: "flex" },
        onClick: ie(R, ["self"])
      }, [
        d("div", Gc, [
          K[2] || (K[2] = d("div", { class: "cm-selector-header" }, "Select Directory", -1)),
          d("div", qc, Q(n.value || "Select a starting point"), 1),
          _t(d("input", {
            ref: "pathInputRef",
            type: "text",
            class: "comfy-input cm-selector-path",
            placeholder: "Type a path or pick below...",
            "onUpdate:modelValue": K[0] || (K[0] = (te) => i.value = te),
            onInput: g,
            onKeydown: Kr(ie(x, ["prevent"]), ["enter"])
          }, null, 40, Jc), [
            [wt, i.value]
          ]),
          d("div", Yc, [
            h.value ? (I(), V("div", {
              key: 0,
              class: "cm-dir-item special",
              onClick: K[1] || (K[1] = (te) => S(v.value))
            }, ".. [Up]")) : Me("", !0),
            (I(!0), V(ue, null, Re(y.value, (te) => (I(), V("div", {
              key: te,
              class: "cm-dir-item",
              onClick: (le) => S(T(n.value, te))
            }, Q(te), 9, Xc))), 128))
          ]),
          d("div", { class: "cm-selector-footer" }, [
            d("button", {
              class: "comfy-btn comfy-btn-secondary cm-cancel",
              onClick: R
            }, "Cancel"),
            d("button", {
              class: "comfy-btn comfy-btn-primary cm-confirm",
              onClick: H
            }, "Select")
          ])
        ])
      ])) : Me("", !0)
    ]));
  }
}, Qc = { class: "cm-sidebar-content" }, eu = {
  __name: "App",
  props: {
    comfyApp: { type: Object, required: !0 },
    comfyApi: { type: Object, required: !0 }
  },
  setup(e) {
    const t = e, { state: s } = Ye(), n = Ks();
    et("comfyApp", t.comfyApp), et("comfyApi", t.comfyApi), et("api", n), et("state", s), et("update", a), et("openViewer", f), et("toggleFavorite", h);
    const i = /* @__PURE__ */ N(null), l = /* @__PURE__ */ N(null), o = /* @__PURE__ */ N(null);
    et("contextMenuRef", i), et("imageViewerRef", l), et("folderSelectorRef", o);
    function r(S) {
      return new URLSearchParams({
        q: S !== void 0 ? S : s.searchQuery,
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
      const S = r(), g = await n.fetchHistory(S);
      s.currentFiles = g.files;
    }
    async function p(S) {
      const g = r(S || ""), x = await n.fetchHistory(g);
      return s.currentFiles = x.files, x.files;
    }
    et("gridFetch", p);
    function f(S) {
      var x;
      const g = s.currentFiles.indexOf(S);
      (x = l.value) == null || x.open(s.currentFiles, g >= 0 ? g : 0, p);
    }
    async function h(S) {
      (await n.postFavorite(S.full_path)).ok && (S.is_favorite = !S.is_favorite, a());
    }
    function v(S, g) {
      var x;
      (x = i.value) == null || x.show(S, g);
    }
    function y() {
      var S;
      s.currentFiles.length > 0 && ((S = l.value) == null || S.openGrid(s.currentFiles, p));
    }
    Vt(() => {
      n.fetchTags().then((g) => {
        s.availableModels = g.models || [], s.availableLoras = g.loras || [];
      }).catch(() => {
      }), n.fetchVersion().then((g) => {
        g.version && (s.version = g.version);
      }).catch(() => {
      }), a();
      const S = () => {
        clearTimeout(T), T = setTimeout(() => a(), 300);
      };
      t.comfyApi.addEventListener("dnh-assets-changed", S), M = () => t.comfyApi.removeEventListener("dnh-assets-changed", S);
    });
    let T = null, M = null;
    return Ht(() => {
      clearTimeout(T), M == null || M();
    }), (S, g) => (I(), V("div", Qc, [
      _e(na),
      _e(wa),
      _e($a),
      d("button", {
        class: "cm-grid-view-btn",
        title: "Open grid view",
        onClick: y
      }, [...g[0] || (g[0] = [
        d("span", { class: "pi pi-th-large" }, null, -1),
        Pe(" Grid View ", -1)
      ])]),
      _e(Ga),
      _e(oc),
      _e(Ha, {
        onOpenViewer: f,
        onToggleFavorite: h,
        onContextMenu: v
      }),
      _e(mc, {
        ref_key: "contextMenuRef",
        ref: i
      }, null, 512),
      _e(zc, {
        ref_key: "imageViewerRef",
        ref: l
      }, null, 512),
      _e(Zc, {
        ref_key: "folderSelectorRef",
        ref: o
      }, null, 512)
    ]));
  }
};
_s.registerExtension({
  name: "DefinitelyNotHuman.AssetManager",
  async init() {
    const e = {
      id: "assetmanager.history.tab",
      icon: "pi pi-history",
      title: "History",
      type: "custom",
      render: (i) => {
        if (i.__vue_app__) return;
        qr(eu, {
          comfyApp: _s,
          comfyApi: Tl
        }).mount(i);
      }
    };
    _s.extensionManager.registerSidebarTab(e);
    const t = _s.extensionManager.getSidebarTabs(), s = t.findIndex((i) => i.id === e.id), n = t.findIndex((i) => i.id === "assets");
    if (s !== -1 && n !== -1 && s !== n + 1) {
      const [i] = t.splice(s, 1), l = t.findIndex((o) => o.id === "assets") + 1;
      t.splice(l, 0, i);
    }
  }
});
