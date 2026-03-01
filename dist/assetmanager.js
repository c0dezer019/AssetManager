(function(){const s=document.createElement("style");s.textContent=`.cm-sidebar-content{display:flex;flex-direction:column;padding:16px;gap:12px;background-color:#0f0f0f;height:100%}.cm-top-nav{display:flex;flex-direction:column;gap:12px}.cm-brand{display:flex;align-items:center;gap:8px}.cm-brand-title{font-weight:700;font-size:16px;color:#fff}.cm-version-badge{background:#222;color:#888;font-size:10px;padding:2px 6px;border-radius:4px}.cm-nav-tabs{display:flex;gap:4px;align-items:center}.cm-nav-btn{background:transparent;border:none;color:#888;padding:6px 12px;cursor:pointer;border-radius:12px;font-size:13px;transition:all .2s}.cm-nav-btn.active{background:#2a2a2a;color:#fff}.cm-search-container{display:flex;gap:8px;align-items:center}.cm-search-wrapper{position:relative;flex:1}.cm-search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#555;font-size:12px}.cm-search-input{width:100%;background:#181818;border:1px solid #2a2a2a;border-radius:8px;padding:8px 12px 8px 32px;color:#fff;font-size:13px}.cm-action-buttons{display:flex;gap:4px}.cm-tool-btn{background:#1d1d1d;border:1px solid #2a2a2a;border-radius:8px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;color:#888;cursor:pointer}.cm-status-line{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:4px}.cm-stats-text{font-size:12px;color:#666}.cm-grid-view-btn{width:100%;display:flex;align-items:center;justify-content:center;gap:6px;padding:6px 0;background:#1d1d1d;border:1px solid #2a2a2a;border-radius:8px;color:#888;font-size:12px;cursor:pointer;transition:all .15s}.cm-grid-view-btn:hover{color:#fff;background:#252525;border-color:#3a3a3a}.cm-grid-view-btn .pi{font-size:12px}.cm-asset-grid{flex-grow:1;display:grid;grid-template-columns:repeat(2,1fr);gap:8px;overflow-y:auto}.cm-scroll-sentinel{height:1px;grid-column:1 / -1}.cm-loading-more{grid-column:1 / -1;text-align:center;padding:16px;color:#666;font-size:18px}.cm-card{aspect-ratio:1/1;border-radius:8px;background:#181818;border:1px solid #222;overflow:hidden;cursor:pointer;position:relative}.cm-card-spinner{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;color:#555;font-size:24px;z-index:1}.cm-card img{width:100%;height:100%;object-fit:cover}.cm-card-overlay{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,#000000d9);padding:16px 8px 6px;display:flex;flex-direction:column;gap:2px;pointer-events:none;opacity:0;transition:opacity .2s ease}.cm-card:hover .cm-card-overlay{opacity:1}.cm-overlay-name{font-size:11px;font-weight:600;color:#eee;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}.cm-overlay-meta{display:flex;align-items:center;gap:6px;font-size:10px;color:#999}.cm-overlay-type{background:#ffffff1f;padding:1px 5px;border-radius:3px;font-weight:600;font-size:9px;letter-spacing:.3px;color:#bbb}.cm-overlay-size{color:#888}.cm-workflow-badge{position:absolute;top:6px;right:6px;background:#0084ffd9;color:#fff;width:22px;height:22px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;z-index:2;box-shadow:0 1px 4px #0006}.cm-date-badge{position:absolute;bottom:6px;right:6px;background:#000000b3;color:#ccc;font-size:9px;font-weight:600;padding:2px 6px;border-radius:4px;z-index:2;pointer-events:none;letter-spacing:.2px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition:opacity .2s ease}.cm-card:hover .cm-date-badge{opacity:0}.cm-fav-btn{position:absolute;top:6px;left:6px;z-index:3;background:#00000080;border:none;border-radius:6px;width:26px;height:26px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#888;font-size:13px;opacity:0;transition:opacity .2s,color .15s,background .15s;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.cm-card:hover .cm-fav-btn{opacity:1}.cm-fav-btn.active{opacity:1;color:#f5a623;background:#0009}.cm-fav-btn:hover{color:#f5a623;background:#000000b3}.cm-tool-btn.active{color:#0084ff;background:#0084ff1a;border-color:#0084ff4d}#cm-nsfw-toggle.active,.cm-nsfw-toggle.active{color:#ff6b6b;background:#ff6b6b1a;border-color:#ff6b6b4d}.cm-icon-only-btn{background:transparent;border:1px solid transparent;color:#888;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:8px;cursor:pointer;margin-left:auto;transition:all .2s}.cm-icon-only-btn:hover{color:#ccc;background:#1d1d1d}.cm-icon-only-btn.active{color:#0084ff;background:#0084ff1a;border-color:#0084ff4d}.cm-advanced-panel{display:none;flex-direction:column;gap:12px;background:#181818;border:1px solid #2a2a2a;border-radius:8px;padding:12px}.cm-advanced-panel.visible{display:flex}.cm-add-folder-row{display:flex;gap:4px;align-items:center}.cm-add-folder-row .comfy-input{flex:1;padding:6px 10px;font-size:13px;box-sizing:border-box}.cm-settings-group{display:flex;flex-direction:column;gap:8px}.cm-settings-label{font-size:12px;font-weight:600;color:#aaa;text-transform:uppercase;letter-spacing:.5px}.cm-settings-row{display:flex;gap:4px;align-items:center}.cm-settings-row .comfy-input{flex:1;padding:6px 10px;font-size:13px;box-sizing:border-box}.cm-settings-divider{border:none;border-top:1px solid #2a2a2a;margin:4px 0}.cm-index-stats{display:flex;flex-direction:column;gap:2px;background:#111;border:1px solid #2a2a2a;border-radius:6px;padding:8px 10px}.cm-index-stat-row{display:flex;justify-content:space-between;align-items:center;padding:3px 0}.cm-index-stat-label{font-size:11px;color:#777}.cm-index-stat-value{font-size:11px;color:#ccc;font-family:monospace;display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}.cm-index-ext-chip{background:#1d1d1d;padding:1px 5px;border-radius:3px;font-size:10px;color:#999}.cm-index-stats-loading{font-size:11px;color:#555;padding:8px 0}.cm-rebuild-btn{flex:1}.cm-rebuild-btn:disabled{opacity:.5;cursor:default}.cm-empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 16px;gap:12px;grid-column:1 / -1}.cm-empty-icon{font-size:36px;color:#444}.cm-empty-text{font-size:14px;font-weight:600;color:#888;margin:0}.cm-empty-hint{font-size:12px;color:#555;margin:0;text-align:center}.cm-empty-hint .pi{font-size:11px}.cm-selector-modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#0009;z-index:10000;align-items:center;justify-content:center}.cm-selector-content{background:#1a1a1a;border:1px solid #333;border-radius:12px;width:480px;max-width:90vw;max-height:70vh;display:flex;flex-direction:column;box-shadow:0 8px 32px #00000080}.cm-selector-header{font-size:15px;font-weight:600;color:#fff;padding:14px 16px 0}.cm-current-path{font-size:12px;color:#0084ff;padding:4px 16px 8px;word-break:break-all;font-family:monospace}.cm-selector-path{margin:0 12px 8px;background:#111;border:1px solid #2a2a2a;border-radius:6px;padding:8px 10px;color:#fff;font-size:13px;font-family:monospace}.cm-selector-list{flex:1;overflow-y:auto;padding:0 8px;min-height:200px;max-height:40vh}.cm-dir-item{padding:8px 12px;color:#ccc;font-size:13px;cursor:pointer;border-radius:6px;transition:background .15s}.cm-dir-item:hover{background:#2a2a2a;color:#fff}.cm-dir-item.special{color:#0084ff;font-weight:600}.cm-selector-footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid #2a2a2a}.cm-folder-list{display:flex;flex-direction:column;gap:4px}.cm-folder-item{display:flex;align-items:center;gap:8px;padding:6px 10px;background:#111;border:1px solid #2a2a2a;border-radius:6px;font-size:12px;color:#ccc;font-family:monospace;word-break:break-all}.cm-folder-item span{flex:1}.cm-folder-remove-btn{background:transparent;border:none;color:#666;cursor:pointer;padding:2px 6px;border-radius:4px;font-size:11px;flex-shrink:0;transition:all .15s}.cm-folder-remove-btn:hover{color:#f44;background:#ff44441a}.cm-sidebar-content .comfy-btn,.cm-selector-footer .comfy-btn{border:none;border-radius:6px;padding:6px 12px;font-size:13px;cursor:pointer;transition:background .15s}.cm-sidebar-content .comfy-btn-primary,.cm-selector-footer .comfy-btn-primary{background:#0084ff;color:#fff}.cm-sidebar-content .comfy-btn-primary:hover,.cm-selector-footer .comfy-btn-primary:hover{background:#0070dd}.cm-sidebar-content .comfy-btn-secondary,.cm-selector-footer .comfy-btn-secondary{background:#2a2a2a;color:#ccc}.cm-sidebar-content .comfy-btn-secondary:hover,.cm-selector-footer .comfy-btn-secondary:hover{background:#363636;color:#fff}.cm-context-menu{position:fixed;z-index:10100;background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:4px 0;min-width:180px;max-height:70vh;overflow-y:auto;box-shadow:0 4px 16px #00000080}.cm-context-menu-item{display:flex;align-items:center;gap:8px;padding:8px 14px;color:#ccc;font-size:13px;cursor:pointer;transition:background .15s;border:none;background:none;width:100%;text-align:left}.cm-context-menu-item:hover{background:#2a2a2a;color:#fff}.cm-context-menu-item .pi{font-size:13px;width:16px;text-align:center}.cm-context-menu-item.cm-danger{color:#f55}.cm-context-menu-item.cm-danger:hover{background:#ff44441a;color:#f44}.cm-context-menu-separator{height:1px;background:#2a2a2a;margin:4px 0}.cm-context-menu-label{font-size:10px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:.5px;padding:6px 14px 2px;pointer-events:none}.cm-context-menu-item.cm-active{color:#0084ff}.cm-check-icon{font-size:14px;width:16px;text-align:center;flex-shrink:0}.cm-active-filters{display:flex;flex-wrap:wrap;gap:4px}.cm-filter-chip{background:#0084ff1a;border:1px solid rgba(0,132,255,.3);color:#0084ff;padding:3px 8px;border-radius:12px;font-size:10px;display:flex;align-items:center;gap:4px;white-space:nowrap}.cm-chip-close{cursor:pointer;font-size:8px;opacity:.7;transition:opacity .15s}.cm-chip-close:hover{opacity:1}.cm-info-panel{display:none;flex-direction:column;gap:10px;background:#141414;border:1px solid #2a2a2a;border-radius:10px;padding:14px;position:relative;flex-shrink:0}.cm-info-panel.visible{display:flex}.cm-info-panel-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.cm-info-panel-title{font-size:13px;font-weight:600;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.cm-info-close-btn{background:transparent;border:none;color:#666;cursor:pointer;padding:4px;border-radius:4px;font-size:12px;flex-shrink:0;transition:all .15s}.cm-info-close-btn:hover{color:#ccc;background:#2a2a2a}.cm-info-preview{width:100%;max-height:160px;object-fit:contain;border-radius:6px;background:#0a0a0a;border:1px solid #222}.cm-info-field{display:flex;flex-direction:column;gap:4px}.cm-info-label{font-size:11px;font-weight:600;color:#777;text-transform:uppercase;letter-spacing:.4px}.cm-info-input{background:#1a1a1a;border:1px solid #2a2a2a;border-radius:6px;padding:7px 10px;color:#ddd;font-size:12px;font-family:inherit;resize:none;transition:border-color .15s}.cm-info-input:focus{outline:none;border-color:#0084ff}.cm-info-input::placeholder{color:#444}textarea.cm-info-input{min-height:48px}.cm-info-rating{display:flex;gap:4px}.cm-info-star{background:none;border:none;font-size:18px;cursor:pointer;padding:0 1px;color:#333;transition:color .15s;line-height:1}.cm-info-star.active,.cm-info-star:hover{color:#f5a623}.cm-info-actions{display:flex;gap:6px;padding-top:4px}.cm-info-save-btn{flex:1;background:#0084ff;border:none;border-radius:6px;color:#fff;padding:7px 12px;font-size:12px;font-weight:600;cursor:pointer;transition:background .15s}.cm-info-save-btn:hover{background:#0070dd}.cm-info-save-btn:disabled{background:#333;color:#666;cursor:default}.cm-info-file-meta{display:flex;gap:8px;flex-wrap:wrap;font-size:10px;color:#555}.cm-info-file-meta span{background:#1a1a1a;padding:2px 6px;border-radius:4px}.cm-info-saved-msg{font-size:11px;color:#4caf50;text-align:center;opacity:0;transition:opacity .3s}.cm-info-saved-msg.show{opacity:1}.cm-submenu{position:fixed;z-index:10002;background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:4px 0;min-width:200px;max-width:360px;max-height:50vh;overflow-y:auto;box-shadow:0 4px 16px #00000080}.cm-submenu-item{position:relative;display:flex;align-items:center;gap:8px}.cm-submenu-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cm-submenu-arrow{color:#555;font-size:10px;flex-shrink:0;margin-left:auto}.cm-submenu-item:hover .cm-submenu-arrow{color:#999}.cm-submenu-copy-row{display:flex;align-items:center;gap:8px;justify-content:space-between}.cm-submenu-key{color:#999;font-size:12px;flex-shrink:0;white-space:nowrap}.cm-submenu-value{color:#666;font-size:11px;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px;font-family:monospace}.cm-submenu-copy-row:hover .cm-submenu-value{color:#aaa}.cm-copy-toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%) translateY(8px);background:#222;color:#4caf50;font-size:12px;font-weight:600;padding:6px 16px;border-radius:6px;border:1px solid #333;box-shadow:0 4px 12px #0006;z-index:10010;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none}.cm-copy-toast.show{opacity:1;transform:translate(-50%) translateY(0)}.cm-card.selected{border-color:#0084ff;box-shadow:0 0 0 1px #0084ff}.cm-viewer-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#000000eb;z-index:10020}.cm-viewer-overlay.visible{display:block}.cm-viewer-topbar{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;gap:12px;padding:12px 16px;background:linear-gradient(to bottom,rgba(0,0,0,.8) 0%,rgba(0,0,0,.4) 70%,transparent 100%);z-index:10022;opacity:0;transition:opacity .25s ease;pointer-events:none}.cm-viewer-body:hover .cm-viewer-topbar{opacity:1;pointer-events:auto}.cm-viewer-topbar-name{font-size:14px;font-weight:600;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}.cm-viewer-topbar-size{font-size:12px;color:#ffffff80;flex-shrink:0;font-variant-numeric:tabular-nums;position:absolute;left:50%;transform:translate(-50%)}.cm-viewer-topbar-counter{font-size:13px;color:#666;font-variant-numeric:tabular-nums;flex-shrink:0}.cm-viewer-topbar-actions{display:flex;gap:4px;flex-shrink:0}.cm-viewer-grid-toggle,.cm-viewer-panel-toggle,.cm-viewer-fullscreen-toggle,.cm-viewer-close{background:#ffffff0f;border:none;color:#aaa;width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;transition:background .2s,color .2s}.cm-viewer-grid-toggle:hover,.cm-viewer-panel-toggle:hover,.cm-viewer-fullscreen-toggle:hover,.cm-viewer-close:hover{background:#ffffff1f;color:#fff}.cm-viewer-grid-toggle.active,.cm-viewer-panel-toggle.active,.cm-viewer-fullscreen-toggle.active{color:#0084ff;background:#0084ff1f}.cm-viewer-overlay.fullscreen .cm-viewer-topbar,.cm-viewer-overlay.fullscreen .cm-viewer-nav{opacity:0!important;pointer-events:none!important}.cm-viewer-overlay.fullscreen .cm-viewer-img-container{padding:0}.cm-viewer-body{display:flex;position:relative;width:100%;height:100%;overflow:hidden}.cm-viewer-nav{position:absolute;top:50%;transform:translateY(-50%);z-index:10022;background:#ffffff0f;border:none;color:#888;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;opacity:0;transition:opacity .2s,background .2s,color .2s}.cm-viewer-body:hover .cm-viewer-nav{opacity:1}.cm-viewer-nav:hover{background:#ffffff26;color:#fff}.cm-viewer-prev{left:16px}.cm-viewer-next{right:16px}.cm-viewer-zoom-chip{position:absolute;bottom:16px;left:50%;transform:translate(-50%);z-index:10022;display:flex;align-items:center;gap:6px;background:#000000b3;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:4px 12px;opacity:0;transition:opacity .25s ease;pointer-events:none}.cm-viewer-body:hover .cm-viewer-zoom-chip{opacity:1;pointer-events:auto}.cm-viewer-zoom-value{font-size:12px;color:#aaa;font-variant-numeric:tabular-nums;-webkit-user-select:none;user-select:none;cursor:pointer;transition:color .2s}.cm-viewer-zoom-value:hover{color:#fff}.cm-viewer-zoom-reset{background:none;border:none;color:#666;cursor:pointer;font-size:11px;padding:0;display:flex;align-items:center;transition:color .2s}.cm-viewer-zoom-reset:hover{color:#fff}.cm-viewer-zoom-menu{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translate(-50%);background:#141414f2;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:4px;display:none;flex-direction:column;min-width:80px;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 8px 24px #00000080}.cm-viewer-zoom-menu.open{display:flex}.cm-viewer-zoom-menu-item{background:none;border:none;color:#aaa;font-size:12px;font-variant-numeric:tabular-nums;padding:6px 14px;border-radius:6px;cursor:pointer;text-align:center;transition:background .15s,color .15s}.cm-viewer-zoom-menu-item:hover{background:#ffffff1a;color:#fff}.cm-viewer-zoom-menu-item.active{color:#0084ff}.cm-viewer-img-container{flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px 72px;box-sizing:border-box;min-width:0}.cm-viewer-img{max-width:100%;max-height:100%;object-fit:contain;-webkit-user-select:none;user-select:none;transition:transform .1s ease-out}.cm-viewer-panel{width:0;overflow:hidden;background:#111;border-left:1px solid #222;flex-shrink:0;transition:width .25s ease;display:flex;flex-direction:column;padding-top:58px}.cm-viewer-panel.open{width:340px;overflow-y:auto}.cm-viewer-section{border-bottom:1px solid #222}.cm-viewer-section-header{display:flex;align-items:center;gap:8px;width:100%;padding:12px 16px;background:none;border:none;color:#bbb;font-size:13px;font-weight:600;cursor:pointer;text-align:left;transition:background .15s,color .15s}.cm-viewer-section-header:hover{background:#ffffff0a;color:#eee}.cm-viewer-section-chevron{font-size:11px;color:#555;width:14px;text-align:center;flex-shrink:0;transition:color .15s}.cm-viewer-section-header:hover .cm-viewer-section-chevron{color:#999}.cm-viewer-section-body{display:none;padding:0 16px 14px;flex-direction:column;gap:6px}.cm-viewer-section-body.expanded{display:flex}.cm-viewer-row{display:flex;align-items:baseline;gap:8px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.03)}.cm-viewer-row:last-child{border-bottom:none}.cm-viewer-row-label{font-size:12px;font-weight:600;color:#777;white-space:nowrap;flex-shrink:0}.cm-viewer-row-value{font-size:12px;color:#ccc;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1;font-family:monospace}.cm-viewer-row-value.cm-viewer-truncated{cursor:pointer;text-decoration-style:dotted}.cm-viewer-row-value.cm-viewer-truncated:hover{color:#fff}.cm-viewer-row-value.cm-viewer-expanded{white-space:pre-wrap;word-break:break-all;text-align:left}.cm-viewer-copy-btn{background:none;border:none;color:#444;cursor:pointer;padding:2px 4px;border-radius:4px;font-size:11px;flex-shrink:0;transition:color .15s,background .15s;line-height:1}.cm-viewer-copy-btn:hover{color:#ccc;background:#ffffff14}.cm-viewer-node{background:#ffffff08;border:1px solid #1e1e1e;border-radius:6px;padding:8px 10px}.cm-viewer-node+.cm-viewer-node{margin-top:6px}.cm-viewer-node-title{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;font-weight:600;color:#aaa;margin-bottom:4px;padding-bottom:4px;border-bottom:1px solid #1e1e1e}.cm-viewer-copy-node{font-size:13px;color:#4a9;padding:3px 6px;border:1px solid rgba(68,170,153,.25);border-radius:5px;background:#44aa990f}.cm-viewer-copy-node:hover{color:#5cb;border-color:#44aa9980;background:#44aa991f}.cm-viewer-empty{font-size:12px;color:#555;padding:4px 0;font-style:italic}.cm-viewer-carousel-ghost{display:none;position:absolute;top:0;bottom:0;width:40%;align-items:center;justify-content:center;z-index:10021;pointer-events:none;opacity:.5}.cm-viewer-carousel-ghost img{max-width:80%;max-height:70%;object-fit:contain;-webkit-user-select:none;user-select:none}.cm-viewer-carousel-prev{left:0;transform:translate(-50%);-webkit-mask-image:linear-gradient(to right,transparent 10%,rgba(0,0,0,.6));mask-image:linear-gradient(to right,transparent 10%,rgba(0,0,0,.6))}.cm-viewer-carousel-next{right:0;transform:translate(50%);-webkit-mask-image:linear-gradient(to left,transparent 10%,rgba(0,0,0,.6));mask-image:linear-gradient(to left,transparent 10%,rgba(0,0,0,.6))}.cm-carousel-active .cm-viewer-carousel-ghost{display:flex}.cm-carousel-active .cm-viewer-prev{left:calc(20% - 60px)}.cm-carousel-active .cm-viewer-next{right:calc(20% - 60px)}.cm-viewer-overlay.fullscreen .cm-viewer-carousel-ghost{display:none!important}@keyframes cm-slide-out-left{0%{transform:translate(0);opacity:1}to{transform:translate(-100%);opacity:0}}@keyframes cm-slide-out-right{0%{transform:translate(0);opacity:1}to{transform:translate(100%);opacity:0}}@keyframes cm-slide-in-from-right{0%{transform:translate(60%);opacity:0}to{transform:translate(0);opacity:1}}@keyframes cm-slide-in-from-left{0%{transform:translate(-60%);opacity:0}to{transform:translate(0);opacity:1}}.cm-viewer-img-container.cm-slide-out-left{animation:cm-slide-out-left .25s ease forwards}.cm-viewer-img-container.cm-slide-out-right{animation:cm-slide-out-right .25s ease forwards}.cm-viewer-img-container.cm-slide-in-from-right{animation:cm-slide-in-from-right .25s ease forwards}.cm-viewer-img-container.cm-slide-in-from-left{animation:cm-slide-in-from-left .25s ease forwards}.cm-carousel-dragging .cm-viewer-img,.cm-carousel-dragging .cm-viewer-carousel-ghost,.cm-carousel-dragging .cm-viewer-img-container{transition:none!important}.cm-viewer-grid{display:none;position:absolute;top:0;left:0;right:0;bottom:0;z-index:10023;background:#000000f5;padding:64px 24px 24px;overflow-y:auto}.cm-viewer-grid-mode .cm-viewer-grid{display:grid;grid-template-columns:repeat(var(--grid-cols),1fr);grid-auto-rows:min-content;gap:10px;align-content:start}.cm-viewer-grid-mode .cm-viewer-grid.cm-grid-slider-active{grid-template-columns:repeat(auto-fill,minmax(var(--grid-thumb-size, 150px),1fr))}.cm-viewer-grid-toolbar{display:none;position:absolute;top:0;left:0;right:0;height:52px;z-index:10024;align-items:center;justify-content:space-between;padding:0 20px;background:#0f0f0f;border-bottom:1px solid #222}.cm-viewer-grid-mode .cm-viewer-grid-toolbar{display:flex}.cm-viewer-grid-close{background:#ffffff0f;border:none;color:#aaa;width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;transition:background .2s,color .2s}.cm-viewer-grid-close:hover{background:#ffffff1f;color:#fff}.cm-viewer-grid-toolbar-center{display:flex;align-items:center;gap:6px;flex:1;justify-content:center;padding:0 16px}.cm-viewer-grid-search-wrapper{position:relative;max-width:240px;flex:1}.cm-viewer-grid-search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:#555;font-size:11px;pointer-events:none}.cm-viewer-grid-search{width:100%;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:6px;padding:6px 10px 6px 28px;color:#ddd;font-size:12px;outline:none;transition:border-color .15s}.cm-viewer-grid-search:focus{border-color:#0084ff}.cm-viewer-grid-search::placeholder{color:#555}.cm-viewer-grid-btn{background:#ffffff0f;border:1px solid transparent;color:#888;width:32px;height:32px;border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;flex-shrink:0;transition:background .15s,color .15s,border-color .15s}.cm-viewer-grid-btn:hover{background:#ffffff1f;color:#fff}.cm-viewer-grid-btn.active{color:#0084ff;background:#0084ff1f;border-color:#0084ff4d}.cm-viewer-grid-nsfw.active{color:#ff6b6b;background:#ff6b6b1a;border-color:#ff6b6b4d}.cm-viewer-grid-toolbar-slider{display:flex;align-items:center;gap:10px}.cm-viewer-grid-slider-icon{font-size:13px;color:#555}.cm-viewer-grid-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:180px;height:4px;background:#333;border-radius:2px;outline:none;cursor:pointer}.cm-viewer-grid-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:#0084ff;cursor:pointer;border:none;transition:transform .1s}.cm-viewer-grid-slider::-webkit-slider-thumb:hover{transform:scale(1.2)}.cm-viewer-grid-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#0084ff;cursor:pointer;border:none}.cm-viewer-grid-zoom-pct{font-size:11px;color:#888;min-width:36px;text-align:right;font-variant-numeric:tabular-nums;-webkit-user-select:none;user-select:none}.cm-viewer-grid-mode .cm-viewer-img-container,.cm-viewer-grid-mode .cm-viewer-carousel-ghost,.cm-viewer-grid-mode .cm-viewer-nav,.cm-viewer-grid-mode .cm-viewer-zoom-chip{display:none!important}.cm-viewer-grid-item{aspect-ratio:1 / 1;border-radius:8px;overflow:hidden;cursor:pointer;position:relative;background:#181818;border:2px solid transparent;transition:border-color .15s,transform .15s}.cm-viewer-grid-item:hover{border-color:#fff3;transform:scale(1.03)}.cm-viewer-grid-item.active{border-color:#0084ff;box-shadow:0 0 0 1px #0084ff,0 0 12px #0084ff40}.cm-viewer-grid-item img{width:100%;height:100%;object-fit:cover;display:block}.cm-viewer-grid-label{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,#000000d9);color:#ccc;font-size:10px;padding:16px 6px 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0;transition:opacity .2s;pointer-events:none}.cm-viewer-grid-item:hover .cm-viewer-grid-label{opacity:1}.cm-viewer-grid-mode .cm-viewer-topbar{display:none}
`;document.head.appendChild(s)})();
import { app as xs } from "../../scripts/app.js";
import { api as Al } from "../../scripts/api.js";
/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function bn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const _e = {}, Gt = [], ht = () => {
}, _i = () => !1, Ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _n = (e) => e.startsWith("onUpdate:"), Ke = Object.assign, wn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Rl = Object.prototype.hasOwnProperty, ve = (e, t) => Rl.call(e, t), ee = Array.isArray, qt = (e) => ys(e) === "[object Map]", wi = (e) => ys(e) === "[object Set]", Nn = (e) => ys(e) === "[object Date]", ne = (e) => typeof e == "function", Ae = (e) => typeof e == "string", mt = (e) => typeof e == "symbol", ye = (e) => e !== null && typeof e == "object", xi = (e) => (ye(e) || ne(e)) && ne(e.then) && ne(e.catch), Ci = Object.prototype.toString, ys = (e) => Ci.call(e), El = (e) => ys(e).slice(8, -1), Si = (e) => ys(e) === "[object Object]", xn = (e) => Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ls = /* @__PURE__ */ bn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Ol = /-\w/g, Ot = Vs(
  (e) => e.replace(Ol, (t) => t.slice(1).toUpperCase())
), Pl = /\B([A-Z])/g, It = Vs(
  (e) => e.replace(Pl, "-$1").toLowerCase()
), ki = Vs((e) => e.charAt(0).toUpperCase() + e.slice(1)), qs = Vs(
  (e) => e ? `on${ki(e)}` : ""
), Et = (e, t) => !Object.is(e, t), Ts = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, $i = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Cn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Vn;
const js = () => Vn || (Vn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function it(e) {
  if (ee(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = Ae(n) ? Nl(n) : it(n);
      if (i)
        for (const l in i)
          t[l] = i[l];
    }
    return t;
  } else if (Ae(e) || ye(e))
    return e;
}
const Il = /;(?![^(]*\))/g, Ll = /:([^]+)/, Dl = /\/\*[^]*?\*\//g;
function Nl(e) {
  const t = {};
  return e.replace(Dl, "").split(Il).forEach((s) => {
    if (s) {
      const n = s.split(Ll);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function J(e) {
  let t = "";
  if (Ae(e))
    t = e;
  else if (ee(e))
    for (let s = 0; s < e.length; s++) {
      const n = J(e[s]);
      n && (t += n + " ");
    }
  else if (ye(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jl = /* @__PURE__ */ bn(Vl);
function Ti(e) {
  return !!e || e === "";
}
function Hl(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Sn(e[n], t[n]);
  return s;
}
function Sn(e, t) {
  if (e === t) return !0;
  let s = Nn(e), n = Nn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = mt(e), n = mt(t), s || n)
    return e === t;
  if (s = ee(e), n = ee(t), s || n)
    return s && n ? Hl(e, t) : !1;
  if (s = ye(e), n = ye(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, l = Object.keys(t).length;
    if (i !== l)
      return !1;
    for (const o in e) {
      const r = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (r && !a || !r && a || !Sn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Fi = (e) => !!(e && e.__v_isRef === !0), G = (e) => Ae(e) ? e : e == null ? "" : ee(e) || ye(e) && (e.toString === Ci || !ne(e.toString)) ? Fi(e) ? G(e.value) : JSON.stringify(e, Mi, 2) : String(e), Mi = (e, t) => Fi(t) ? Mi(e, t.value) : qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], l) => (s[Js(n, l) + " =>"] = i, s),
    {}
  )
} : wi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Js(s))
} : mt(t) ? Js(t) : ye(t) && !ee(t) && !Si(t) ? String(t) : t, Js = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    mt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xe;
class Bl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Xe, !t && Xe && (this.index = (Xe.scopes || (Xe.scopes = [])).push(
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
      const s = Xe;
      try {
        return Xe = this, t();
      } finally {
        Xe = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Xe, Xe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Xe = this.prevScope, this.prevScope = void 0);
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
function Ul() {
  return Xe;
}
let xe;
const Ys = /* @__PURE__ */ new WeakSet();
class Ai {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Xe && Xe.active && Xe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ys.has(this) && (Ys.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ei(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, jn(this), Oi(this);
    const t = xe, s = at;
    xe = this, at = !0;
    try {
      return this.fn();
    } finally {
      Pi(this), xe = t, at = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Tn(t);
      this.deps = this.depsTail = void 0, jn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ys.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    on(this) && this.run();
  }
  get dirty() {
    return on(this);
  }
}
let Ri = 0, os, rs;
function Ei(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rs, rs = e;
    return;
  }
  e.next = os, os = e;
}
function kn() {
  Ri++;
}
function $n() {
  if (--Ri > 0)
    return;
  if (rs) {
    let t = rs;
    for (rs = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; os; ) {
    let t = os;
    for (os = void 0; t; ) {
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
function Oi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Pi(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), Tn(n), Wl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function on(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ii(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ii(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ps) || (e.globalVersion = ps, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !on(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = xe, n = at;
  xe = e, at = !0;
  try {
    Oi(e);
    const i = e.fn(e._value);
    (t.version === 0 || Et(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    xe = s, at = n, Pi(e), e.flags &= -3;
  }
}
function Tn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let l = s.computed.deps; l; l = l.nextDep)
      Tn(l, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Wl(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let at = !0;
const Li = [];
function kt() {
  Li.push(at), at = !1;
}
function $t() {
  const e = Li.pop();
  at = e === void 0 ? !0 : e;
}
function jn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = xe;
    xe = void 0;
    try {
      t();
    } finally {
      xe = s;
    }
  }
}
let ps = 0;
class Kl {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!xe || !at || xe === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== xe)
      s = this.activeLink = new Kl(xe, this), xe.deps ? (s.prevDep = xe.depsTail, xe.depsTail.nextDep = s, xe.depsTail = s) : xe.deps = xe.depsTail = s, Di(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = xe.depsTail, s.nextDep = void 0, xe.depsTail.nextDep = s, xe.depsTail = s, xe.deps === s && (xe.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, ps++, this.notify(t);
  }
  notify(t) {
    kn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      $n();
    }
  }
}
function Di(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Di(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const rn = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ Symbol(
  ""
), an = /* @__PURE__ */ Symbol(
  ""
), hs = /* @__PURE__ */ Symbol(
  ""
);
function Be(e, t, s) {
  if (at && xe) {
    let n = rn.get(e);
    n || rn.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new Fn()), i.map = n, i.key = s), i.track();
  }
}
function xt(e, t, s, n, i, l) {
  const o = rn.get(e);
  if (!o) {
    ps++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (kn(), t === "clear")
    o.forEach(r);
  else {
    const a = ee(e), p = a && xn(s);
    if (a && s === "length") {
      const f = Number(n);
      o.forEach((h, m) => {
        (m === "length" || m === hs || !mt(m) && m >= f) && r(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && r(o.get(s)), p && r(o.get(hs)), t) {
        case "add":
          a ? p && r(o.get("length")) : (r(o.get(jt)), qt(e) && r(o.get(an)));
          break;
        case "delete":
          a || (r(o.get(jt)), qt(e) && r(o.get(an)));
          break;
        case "set":
          qt(e) && r(o.get(jt));
          break;
      }
  }
  $n();
}
function Wt(e) {
  const t = /* @__PURE__ */ me(e);
  return t === e ? t : (Be(t, "iterate", hs), /* @__PURE__ */ ot(e) ? t : t.map(ut));
}
function Hs(e) {
  return Be(e = /* @__PURE__ */ me(e), "iterate", hs), e;
}
function At(e, t) {
  return /* @__PURE__ */ Tt(e) ? Xt(/* @__PURE__ */ Ht(e) ? ut(t) : t) : ut(t);
}
const zl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zs(this, Symbol.iterator, (e) => At(this, e));
  },
  concat(...e) {
    return Wt(this).concat(
      ...e.map((t) => ee(t) ? Wt(t) : t)
    );
  },
  entries() {
    return Zs(this, "entries", (e) => (e[1] = At(this, e[1]), e));
  },
  every(e, t) {
    return bt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return bt(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => At(this, n)),
      arguments
    );
  },
  find(e, t) {
    return bt(
      this,
      "find",
      e,
      t,
      (s) => At(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return bt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return bt(
      this,
      "findLast",
      e,
      t,
      (s) => At(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return bt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return bt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xs(this, "includes", e);
  },
  indexOf(...e) {
    return Xs(this, "indexOf", e);
  },
  join(e) {
    return Wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return bt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return es(this, "pop");
  },
  push(...e) {
    return es(this, "push", e);
  },
  reduce(e, ...t) {
    return Hn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Hn(this, "reduceRight", e, t);
  },
  shift() {
    return es(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return bt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return es(this, "splice", e);
  },
  toReversed() {
    return Wt(this).toReversed();
  },
  toSorted(e) {
    return Wt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Wt(this).toSpliced(...e);
  },
  unshift(...e) {
    return es(this, "unshift", e);
  },
  values() {
    return Zs(this, "values", (e) => At(this, e));
  }
};
function Zs(e, t, s) {
  const n = Hs(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ ot(e) && (i._next = i.next, i.next = () => {
    const l = i._next();
    return l.done || (l.value = s(l.value)), l;
  }), i;
}
const Gl = Array.prototype;
function bt(e, t, s, n, i, l) {
  const o = Hs(e), r = o !== e && !/* @__PURE__ */ ot(e), a = o[t];
  if (a !== Gl[t]) {
    const h = a.apply(e, l);
    return r ? ut(h) : h;
  }
  let p = s;
  o !== e && (r ? p = function(h, m) {
    return s.call(this, At(e, h), m, e);
  } : s.length > 2 && (p = function(h, m) {
    return s.call(this, h, m, e);
  }));
  const f = a.call(o, p, n);
  return r && i ? i(f) : f;
}
function Hn(e, t, s, n) {
  const i = Hs(e);
  let l = s;
  return i !== e && (/* @__PURE__ */ ot(e) ? s.length > 3 && (l = function(o, r, a) {
    return s.call(this, o, r, a, e);
  }) : l = function(o, r, a) {
    return s.call(this, o, At(e, r), a, e);
  }), i[t](l, ...n);
}
function Xs(e, t, s) {
  const n = /* @__PURE__ */ me(e);
  Be(n, "iterate", hs);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ Rn(s[0]) ? (s[0] = /* @__PURE__ */ me(s[0]), n[t](...s)) : i;
}
function es(e, t, s = []) {
  kt(), kn();
  const n = (/* @__PURE__ */ me(e))[t].apply(e, s);
  return $n(), $t(), n;
}
const ql = /* @__PURE__ */ bn("__proto__,__v_isRef,__isVue"), Ni = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(mt)
);
function Jl(e) {
  mt(e) || (e = String(e));
  const t = /* @__PURE__ */ me(this);
  return Be(t, "has", e), t.hasOwnProperty(e);
}
class Vi {
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
      return n === (i ? l ? lo : Ui : l ? Bi : Hi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = ee(t);
    if (!i) {
      let a;
      if (o && (a = zl[s]))
        return a;
      if (s === "hasOwnProperty")
        return Jl;
    }
    const r = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ We(t) ? t : n
    );
    if ((mt(s) ? Ni.has(s) : ql(s)) || (i || Be(t, "get", s), l))
      return r;
    if (/* @__PURE__ */ We(r)) {
      const a = o && xn(s) ? r : r.value;
      return i && ye(a) ? /* @__PURE__ */ un(a) : a;
    }
    return ye(r) ? i ? /* @__PURE__ */ un(r) : /* @__PURE__ */ Bt(r) : r;
  }
}
class ji extends Vi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let l = t[s];
    const o = ee(t) && xn(s);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ Tt(l);
      if (!/* @__PURE__ */ ot(n) && !/* @__PURE__ */ Tt(n) && (l = /* @__PURE__ */ me(l), n = /* @__PURE__ */ me(n)), !o && /* @__PURE__ */ We(l) && !/* @__PURE__ */ We(n))
        return p || (l.value = n), !0;
    }
    const r = o ? Number(s) < t.length : ve(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ We(t) ? t : i
    );
    return t === /* @__PURE__ */ me(i) && (r ? Et(n, l) && xt(t, "set", s, n) : xt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = ve(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && xt(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!mt(s) || !Ni.has(s)) && Be(t, "has", s), n;
  }
  ownKeys(t) {
    return Be(
      t,
      "iterate",
      ee(t) ? "length" : jt
    ), Reflect.ownKeys(t);
  }
}
class Yl extends Vi {
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
const Zl = /* @__PURE__ */ new ji(), Xl = /* @__PURE__ */ new Yl(), Ql = /* @__PURE__ */ new ji(!0);
const cn = (e) => e, Cs = (e) => Reflect.getPrototypeOf(e);
function eo(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, l = /* @__PURE__ */ me(i), o = qt(l), r = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, p = i[e](...n), f = s ? cn : t ? Xt : ut;
    return !t && Be(
      l,
      "iterate",
      a ? an : jt
    ), Ke(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: h, done: m } = p.next();
          return m ? { value: h, done: m } : {
            value: r ? [f(h[0]), f(h[1])] : f(h),
            done: m
          };
        }
      }
    );
  };
}
function Ss(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function to(e, t) {
  const s = {
    get(i) {
      const l = this.__v_raw, o = /* @__PURE__ */ me(l), r = /* @__PURE__ */ me(i);
      e || (Et(i, r) && Be(o, "get", i), Be(o, "get", r));
      const { has: a } = Cs(o), p = t ? cn : e ? Xt : ut;
      if (a.call(o, i))
        return p(l.get(i));
      if (a.call(o, r))
        return p(l.get(r));
      l !== o && l.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Be(/* @__PURE__ */ me(i), "iterate", jt), i.size;
    },
    has(i) {
      const l = this.__v_raw, o = /* @__PURE__ */ me(l), r = /* @__PURE__ */ me(i);
      return e || (Et(i, r) && Be(o, "has", i), Be(o, "has", r)), i === r ? l.has(i) : l.has(i) || l.has(r);
    },
    forEach(i, l) {
      const o = this, r = o.__v_raw, a = /* @__PURE__ */ me(r), p = t ? cn : e ? Xt : ut;
      return !e && Be(a, "iterate", jt), r.forEach((f, h) => i.call(l, p(f), p(h), o));
    }
  };
  return Ke(
    s,
    e ? {
      add: Ss("add"),
      set: Ss("set"),
      delete: Ss("delete"),
      clear: Ss("clear")
    } : {
      add(i) {
        !t && !/* @__PURE__ */ ot(i) && !/* @__PURE__ */ Tt(i) && (i = /* @__PURE__ */ me(i));
        const l = /* @__PURE__ */ me(this);
        return Cs(l).has.call(l, i) || (l.add(i), xt(l, "add", i, i)), this;
      },
      set(i, l) {
        !t && !/* @__PURE__ */ ot(l) && !/* @__PURE__ */ Tt(l) && (l = /* @__PURE__ */ me(l));
        const o = /* @__PURE__ */ me(this), { has: r, get: a } = Cs(o);
        let p = r.call(o, i);
        p || (i = /* @__PURE__ */ me(i), p = r.call(o, i));
        const f = a.call(o, i);
        return o.set(i, l), p ? Et(l, f) && xt(o, "set", i, l) : xt(o, "add", i, l), this;
      },
      delete(i) {
        const l = /* @__PURE__ */ me(this), { has: o, get: r } = Cs(l);
        let a = o.call(l, i);
        a || (i = /* @__PURE__ */ me(i), a = o.call(l, i)), r && r.call(l, i);
        const p = l.delete(i);
        return a && xt(l, "delete", i, void 0), p;
      },
      clear() {
        const i = /* @__PURE__ */ me(this), l = i.size !== 0, o = i.clear();
        return l && xt(
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
    s[i] = eo(i, e, t);
  }), s;
}
function Mn(e, t) {
  const s = to(e, t);
  return (n, i, l) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    ve(s, i) && i in n ? s : n,
    i,
    l
  );
}
const so = {
  get: /* @__PURE__ */ Mn(!1, !1)
}, no = {
  get: /* @__PURE__ */ Mn(!1, !0)
}, io = {
  get: /* @__PURE__ */ Mn(!0, !1)
};
const Hi = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap();
function oo(e) {
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
function ro(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : oo(El(e));
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return /* @__PURE__ */ Tt(e) ? e : An(
    e,
    !1,
    Zl,
    so,
    Hi
  );
}
// @__NO_SIDE_EFFECTS__
function ao(e) {
  return An(
    e,
    !1,
    Ql,
    no,
    Bi
  );
}
// @__NO_SIDE_EFFECTS__
function un(e) {
  return An(
    e,
    !0,
    Xl,
    io,
    Ui
  );
}
function An(e, t, s, n, i) {
  if (!ye(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = ro(e);
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
function Ht(e) {
  return /* @__PURE__ */ Tt(e) ? /* @__PURE__ */ Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ me(t) : e;
}
function co(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && $i(e, "__v_skip", !0), e;
}
const ut = (e) => ye(e) ? /* @__PURE__ */ Bt(e) : e, Xt = (e) => ye(e) ? /* @__PURE__ */ un(e) : e;
// @__NO_SIDE_EFFECTS__
function We(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  return uo(e, !1);
}
function uo(e, t) {
  return /* @__PURE__ */ We(e) ? e : new fo(e, t);
}
class fo {
  constructor(t, s) {
    this.dep = new Fn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ me(t), this._value = s ? t : ut(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ ot(t) || /* @__PURE__ */ Tt(t);
    t = n ? t : /* @__PURE__ */ me(t), Et(t, s) && (this._rawValue = t, this._value = n ? t : ut(t), this.dep.trigger());
  }
}
function K(e) {
  return /* @__PURE__ */ We(e) ? e.value : e;
}
const po = {
  get: (e, t, s) => t === "__v_raw" ? e : K(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ We(i) && !/* @__PURE__ */ We(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Wi(e) {
  return /* @__PURE__ */ Ht(e) ? e : new Proxy(e, po);
}
class ho {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Fn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ps - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xe !== this)
      return Ei(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ii(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function mo(e, t, s = !1) {
  let n, i;
  return ne(e) ? n = e : (n = e.get, i = e.set), new ho(n, i, s);
}
const ks = {}, Rs = /* @__PURE__ */ new WeakMap();
let Vt;
function vo(e, t = !1, s = Vt) {
  if (s) {
    let n = Rs.get(s);
    n || Rs.set(s, n = []), n.push(e);
  }
}
function go(e, t, s = _e) {
  const { immediate: n, deep: i, once: l, scheduler: o, augmentJob: r, call: a } = s, p = (R) => i ? R : /* @__PURE__ */ ot(R) || i === !1 || i === 0 ? Ct(R, 1) : Ct(R);
  let f, h, m, g, b = !1, y = !1;
  if (/* @__PURE__ */ We(e) ? (h = () => e.value, b = /* @__PURE__ */ ot(e)) : /* @__PURE__ */ Ht(e) ? (h = () => p(e), b = !0) : ee(e) ? (y = !0, b = e.some((R) => /* @__PURE__ */ Ht(R) || /* @__PURE__ */ ot(R)), h = () => e.map((R) => {
    if (/* @__PURE__ */ We(R))
      return R.value;
    if (/* @__PURE__ */ Ht(R))
      return p(R);
    if (ne(R))
      return a ? a(R, 2) : R();
  })) : ne(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      kt();
      try {
        m();
      } finally {
        $t();
      }
    }
    const R = Vt;
    Vt = f;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Vt = R;
    }
  } : h = ht, t && i) {
    const R = h, O = i === !0 ? 1 / 0 : i;
    h = () => Ct(R(), O);
  }
  const T = Ul(), x = () => {
    f.stop(), T && T.active && wn(T.effects, f);
  };
  if (l && t) {
    const R = t;
    t = (...O) => {
      R(...O), x();
    };
  }
  let w = y ? new Array(e.length).fill(ks) : ks;
  const I = (R) => {
    if (!(!(f.flags & 1) || !f.dirty && !R))
      if (t) {
        const O = f.run();
        if (i || b || (y ? O.some((D, Z) => Et(D, w[Z])) : Et(O, w))) {
          m && m();
          const D = Vt;
          Vt = f;
          try {
            const Z = [
              O,
              // pass undefined as the old value when it's changed for the first time
              w === ks ? void 0 : y && w[0] === ks ? [] : w,
              g
            ];
            w = O, a ? a(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            );
          } finally {
            Vt = D;
          }
        }
      } else
        f.run();
  };
  return r && r(I), f = new Ai(h), f.scheduler = o ? () => o(I, !1) : I, g = (R) => vo(R, !1, f), m = f.onStop = () => {
    const R = Rs.get(f);
    if (R) {
      if (a)
        a(R, 4);
      else
        for (const O of R) O();
      Rs.delete(f);
    }
  }, t ? n ? I(!0) : w = f.run() : o ? o(I.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function Ct(e, t = 1 / 0, s) {
  if (t <= 0 || !ye(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ We(e))
    Ct(e.value, t, s);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      Ct(e[n], t, s);
  else if (wi(e) || qt(e))
    e.forEach((n) => {
      Ct(n, t, s);
    });
  else if (Si(e)) {
    for (const n in e)
      Ct(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ct(e[n], t, s);
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
    Bs(i, t, s);
  }
}
function vt(e, t, s, n) {
  if (ne(e)) {
    const i = bs(e, t, s, n);
    return i && xi(i) && i.catch((l) => {
      Bs(l, t, s);
    }), i;
  }
  if (ee(e)) {
    const i = [];
    for (let l = 0; l < e.length; l++)
      i.push(vt(e[l], t, s, n));
    return i;
  }
}
function Bs(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: o } = t && t.appContext.config || _e;
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
      kt(), bs(l, null, 10, [
        e,
        a,
        p
      ]), $t();
      return;
    }
  }
  yo(e, s, i, n, o);
}
function yo(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Je = [];
let dt = -1;
const Jt = [];
let Rt = null, Kt = 0;
const Ki = /* @__PURE__ */ Promise.resolve();
let Es = null;
function Ue(e) {
  const t = Es || Ki;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bo(e) {
  let t = dt + 1, s = Je.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Je[n], l = ms(i);
    l < e || l === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function En(e) {
  if (!(e.flags & 1)) {
    const t = ms(e), s = Je[Je.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ms(s) ? Je.push(e) : Je.splice(bo(t), 0, e), e.flags |= 1, zi();
  }
}
function zi() {
  Es || (Es = Ki.then(qi));
}
function _o(e) {
  ee(e) ? Jt.push(...e) : Rt && e.id === -1 ? Rt.splice(Kt + 1, 0, e) : e.flags & 1 || (Jt.push(e), e.flags |= 1), zi();
}
function Bn(e, t, s = dt + 1) {
  for (; s < Je.length; s++) {
    const n = Je[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Je.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Gi(e) {
  if (Jt.length) {
    const t = [...new Set(Jt)].sort(
      (s, n) => ms(s) - ms(n)
    );
    if (Jt.length = 0, Rt) {
      Rt.push(...t);
      return;
    }
    for (Rt = t, Kt = 0; Kt < Rt.length; Kt++) {
      const s = Rt[Kt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Rt = null, Kt = 0;
  }
}
const ms = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qi(e) {
  try {
    for (dt = 0; dt < Je.length; dt++) {
      const t = Je[dt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; dt < Je.length; dt++) {
      const t = Je[dt];
      t && (t.flags &= -2);
    }
    dt = -1, Je.length = 0, Gi(), Es = null, (Je.length || Jt.length) && qi();
  }
}
let lt = null, Ji = null;
function Os(e) {
  const t = lt;
  return lt = e, Ji = e && e.type.__scopeId || null, t;
}
function wo(e, t = lt, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && si(-1);
    const l = Os(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Os(l), n._d && si(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ct(e, t) {
  if (lt === null)
    return e;
  const s = zs(lt), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [l, o, r, a = _e] = t[i];
    l && (ne(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Ct(o), n.push({
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
function Dt(e, t, s, n) {
  const i = e.dirs, l = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const r = i[o];
    l && (r.oldValue = l[o].value);
    let a = r.dir[n];
    a && (kt(), vt(a, s, 8, [
      e.el,
      r,
      e,
      t
    ]), $t());
  }
}
function qe(e, t) {
  if (Ye) {
    let s = Ye.provides;
    const n = Ye.parent && Ye.parent.provides;
    n === s && (s = Ye.provides = Object.create(n)), s[e] = t;
  }
}
function Re(e, t, s = !1) {
  const n = br();
  if (n || Zt) {
    let i = Zt ? Zt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && ne(t) ? t.call(n && n.proxy) : t;
  }
}
const xo = /* @__PURE__ */ Symbol.for("v-scx"), Co = () => Re(xo);
function Yt(e, t, s) {
  return Yi(e, t, s);
}
function Yi(e, t, s = _e) {
  const { immediate: n, deep: i, flush: l, once: o } = s, r = Ke({}, s), a = t && n || !t && l !== "post";
  let p;
  if (gs) {
    if (l === "sync") {
      const g = Co();
      p = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = ht, g.resume = ht, g.pause = ht, g;
    }
  }
  const f = Ye;
  r.call = (g, b, y) => vt(g, f, b, y);
  let h = !1;
  l === "post" ? r.scheduler = (g) => {
    He(g, f && f.suspense);
  } : l !== "sync" && (h = !0, r.scheduler = (g, b) => {
    b ? g() : En(g);
  }), r.augmentJob = (g) => {
    t && (g.flags |= 4), h && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const m = go(e, t, r);
  return gs && (p ? p.push(m) : a && m()), m;
}
function So(e, t, s) {
  const n = this.proxy, i = Ae(e) ? e.includes(".") ? Zi(n, e) : () => n[e] : e.bind(n, n);
  let l;
  ne(t) ? l = t : (l = t.handler, s = t);
  const o = ws(this), r = Yi(i, l.bind(n), s);
  return o(), r;
}
function Zi(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const Xi = /* @__PURE__ */ Symbol("_vte"), ko = (e) => e.__isTeleport, as = (e) => e && (e.disabled || e.disabled === ""), Un = (e) => e && (e.defer || e.defer === ""), Wn = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Kn = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, fn = (e, t) => {
  const s = e && e.to;
  return Ae(s) ? t ? t(s) : null : s;
}, Qi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, l, o, r, a, p) {
    const {
      mc: f,
      pc: h,
      pbc: m,
      o: { insert: g, querySelector: b, createText: y, createComment: T }
    } = p, x = as(t.props);
    let { shapeFlag: w, children: I, dynamicChildren: R } = t;
    if (e == null) {
      const O = t.el = y(""), D = t.anchor = y("");
      g(O, s, n), g(D, s, n);
      const Z = (fe, $e) => {
        w & 16 && f(
          I,
          fe,
          $e,
          i,
          l,
          o,
          r,
          a
        );
      }, de = () => {
        const fe = t.target = fn(t.props, b), $e = dn(fe, t, y, g);
        fe && (o !== "svg" && Wn(fe) ? o = "svg" : o !== "mathml" && Kn(fe) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(fe), x || (Z(fe, $e), Fs(t, !1)));
      };
      x && (Z(s, D), Fs(t, !0)), Un(t.props) ? (t.el.__isMounted = !1, He(() => {
        de(), delete t.el.__isMounted;
      }, l)) : de();
    } else {
      if (Un(t.props) && e.el.__isMounted === !1) {
        He(() => {
          Qi.process(
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
      const O = t.anchor = e.anchor, D = t.target = e.target, Z = t.targetAnchor = e.targetAnchor, de = as(e.props), fe = de ? s : D, $e = de ? O : Z;
      if (o === "svg" || Wn(D) ? o = "svg" : (o === "mathml" || Kn(D)) && (o = "mathml"), R ? (m(
        e.dynamicChildren,
        R,
        fe,
        i,
        l,
        o,
        r
      ), Ln(e, t, !0)) : a || h(
        e,
        t,
        fe,
        $e,
        i,
        l,
        o,
        r,
        !1
      ), x)
        de ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $s(
          t,
          s,
          O,
          p,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Ee = t.target = fn(
          t.props,
          b
        );
        Ee && $s(
          t,
          Ee,
          null,
          p,
          0
        );
      } else de && $s(
        t,
        D,
        Z,
        p,
        1
      );
      Fs(t, x);
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
      props: m
    } = e;
    if (h && (i(p), i(f)), l && i(a), o & 16) {
      const g = l || !as(m);
      for (let b = 0; b < r.length; b++) {
        const y = r[b];
        n(
          y,
          t,
          s,
          g,
          !!y.dynamicChildren
        );
      }
    }
  },
  move: $s,
  hydrate: $o
};
function $s(e, t, s, { o: { insert: n }, m: i }, l = 2) {
  l === 0 && n(e.targetAnchor, t, s);
  const { el: o, anchor: r, shapeFlag: a, children: p, props: f } = e, h = l === 2;
  if (h && n(o, t, s), (!h || as(f)) && a & 16)
    for (let m = 0; m < p.length; m++)
      i(
        p[m],
        t,
        s,
        2
      );
  h && n(r, t, s);
}
function $o(e, t, s, n, i, l, {
  o: { nextSibling: o, parentNode: r, querySelector: a, insert: p, createText: f }
}, h) {
  function m(T, x) {
    let w = x;
    for (; w; ) {
      if (w && w.nodeType === 8) {
        if (w.data === "teleport start anchor")
          t.targetStart = w;
        else if (w.data === "teleport anchor") {
          t.targetAnchor = w, T._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      w = o(w);
    }
  }
  function g(T, x) {
    x.anchor = h(
      o(T),
      x,
      r(T),
      s,
      n,
      i,
      l
    );
  }
  const b = t.target = fn(
    t.props,
    a
  ), y = as(t.props);
  if (b) {
    const T = b._lpa || b.firstChild;
    t.shapeFlag & 16 && (y ? (g(e, t), m(b, T), t.targetAnchor || dn(
      b,
      t,
      f,
      p,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === b ? e : null
    )) : (t.anchor = o(e), m(b, T), t.targetAnchor || dn(b, t, f, p), h(
      T && o(T),
      t,
      b,
      s,
      n,
      i,
      l
    ))), Fs(t, y);
  } else y && t.shapeFlag & 16 && (g(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const _s = Qi;
function Fs(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, i;
    for (t ? (n = e.el, i = e.anchor) : (n = e.targetStart, i = e.targetAnchor); n && n !== i; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function dn(e, t, s, n, i = null) {
  const l = t.targetStart = s(""), o = t.targetAnchor = s("");
  return l[Xi] = o, e && (n(l, e, i), n(o, e, i)), o;
}
const To = /* @__PURE__ */ Symbol("_leaveCb");
function On(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, On(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function el(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function zn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Ps = /* @__PURE__ */ new WeakMap();
function cs(e, t, s, n, i = !1) {
  if (ee(e)) {
    e.forEach(
      (y, T) => cs(
        y,
        t && (ee(t) ? t[T] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (us(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && cs(e, t, s, n.component.subTree);
    return;
  }
  const l = n.shapeFlag & 4 ? zs(n.component) : n.el, o = i ? null : l, { i: r, r: a } = e, p = t && t.r, f = r.refs === _e ? r.refs = {} : r.refs, h = r.setupState, m = /* @__PURE__ */ me(h), g = h === _e ? _i : (y) => zn(f, y) ? !1 : ve(m, y), b = (y, T) => !(T && zn(f, T));
  if (p != null && p !== a) {
    if (Gn(t), Ae(p))
      f[p] = null, g(p) && (h[p] = null);
    else if (/* @__PURE__ */ We(p)) {
      const y = t;
      b(p, y.k) && (p.value = null), y.k && (f[y.k] = null);
    }
  }
  if (ne(a))
    bs(a, r, 12, [o, f]);
  else {
    const y = Ae(a), T = /* @__PURE__ */ We(a);
    if (y || T) {
      const x = () => {
        if (e.f) {
          const w = y ? g(a) ? h[a] : f[a] : b() || !e.k ? a.value : f[e.k];
          if (i)
            ee(w) && wn(w, l);
          else if (ee(w))
            w.includes(l) || w.push(l);
          else if (y)
            f[a] = [l], g(a) && (h[a] = f[a]);
          else {
            const I = [l];
            b(a, e.k) && (a.value = I), e.k && (f[e.k] = I);
          }
        } else y ? (f[a] = o, g(a) && (h[a] = o)) : T && (b(a, e.k) && (a.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const w = () => {
          x(), Ps.delete(e);
        };
        w.id = -1, Ps.set(e, w), He(w, s);
      } else
        Gn(e), x();
    }
  }
}
function Gn(e) {
  const t = Ps.get(e);
  t && (t.flags |= 8, Ps.delete(e));
}
js().requestIdleCallback;
js().cancelIdleCallback;
const us = (e) => !!e.type.__asyncLoader, tl = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  sl(e, "a", t);
}
function Mo(e, t) {
  sl(e, "da", t);
}
function sl(e, t, s = Ye) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Us(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      tl(i.parent.vnode) && Ao(n, t, s, i), i = i.parent;
  }
}
function Ao(e, t, s, n) {
  const i = Us(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  gt(() => {
    wn(n[t], i);
  }, s);
}
function Us(e, t, s = Ye, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), l = t.__weh || (t.__weh = (...o) => {
      kt();
      const r = ws(s), a = vt(t, s, e, o);
      return r(), $t(), a;
    });
    return n ? i.unshift(l) : i.push(l), l;
  }
}
const Ft = (e) => (t, s = Ye) => {
  (!gs || e === "sp") && Us(e, (...n) => t(...n), s);
}, Ro = Ft("bm"), Mt = Ft("m"), Eo = Ft(
  "bu"
), Oo = Ft("u"), Po = Ft(
  "bum"
), gt = Ft("um"), Io = Ft(
  "sp"
), Lo = Ft("rtg"), Do = Ft("rtc");
function No(e, t = Ye) {
  Us("ec", e, t);
}
const Vo = /* @__PURE__ */ Symbol.for("v-ndc");
function Pe(e, t, s, n) {
  let i;
  const l = s, o = ee(e);
  if (o || Ae(e)) {
    const r = o && /* @__PURE__ */ Ht(e);
    let a = !1, p = !1;
    r && (a = !/* @__PURE__ */ ot(e), p = /* @__PURE__ */ Tt(e), e = Hs(e)), i = new Array(e.length);
    for (let f = 0, h = e.length; f < h; f++)
      i[f] = t(
        a ? p ? Xt(ut(e[f])) : ut(e[f]) : e[f],
        f,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let r = 0; r < e; r++)
      i[r] = t(r + 1, r, void 0, l);
  } else if (ye(e))
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
const pn = (e) => e ? xl(e) ? zs(e) : pn(e.parent) : null, fs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ke(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pn(e.parent),
    $root: (e) => pn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => il(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      En(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ue.bind(e.proxy)),
    $watch: (e) => So.bind(e)
  })
), Qs = (e, t) => e !== _e && !e.__isScriptSetup && ve(e, t), jo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: l, accessCache: o, type: r, appContext: a } = e;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
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
        if (Qs(n, t))
          return o[t] = 1, n[t];
        if (i !== _e && ve(i, t))
          return o[t] = 2, i[t];
        if (ve(l, t))
          return o[t] = 3, l[t];
        if (s !== _e && ve(s, t))
          return o[t] = 4, s[t];
        hn && (o[t] = 0);
      }
    }
    const p = fs[t];
    let f, h;
    if (p)
      return t === "$attrs" && Be(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (f = r.__cssModules) && (f = f[t])
    )
      return f;
    if (s !== _e && ve(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      h = a.config.globalProperties, ve(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: l } = e;
    return Qs(i, t) ? (i[t] = s, !0) : n !== _e && ve(n, t) ? (n[t] = s, !0) : ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: l, type: o }
  }, r) {
    let a;
    return !!(s[r] || e !== _e && r[0] !== "$" && ve(e, r) || Qs(t, r) || ve(l, r) || ve(n, r) || ve(fs, r) || ve(i.config.globalProperties, r) || (a = o.__cssModules) && a[r]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : ve(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function qn(e) {
  return ee(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let hn = !0;
function Ho(e) {
  const t = il(e), s = e.proxy, n = e.ctx;
  hn = !1, t.beforeCreate && Jn(t.beforeCreate, e, "bc");
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
    mounted: m,
    beforeUpdate: g,
    updated: b,
    activated: y,
    deactivated: T,
    beforeDestroy: x,
    beforeUnmount: w,
    destroyed: I,
    unmounted: R,
    render: O,
    renderTracked: D,
    renderTriggered: Z,
    errorCaptured: de,
    serverPrefetch: fe,
    // public API
    expose: $e,
    inheritAttrs: Ee,
    // assets
    components: H,
    directives: X,
    filters: ce
  } = t;
  if (p && Bo(p, n, null), o)
    for (const se in o) {
      const re = o[se];
      ne(re) && (n[se] = re.bind(s));
    }
  if (i) {
    const se = i.call(s, s);
    ye(se) && (e.data = /* @__PURE__ */ Bt(se));
  }
  if (hn = !0, l)
    for (const se in l) {
      const re = l[se], B = ne(re) ? re.bind(s, s) : ne(re.get) ? re.get.bind(s, s) : ht, U = !ne(re) && ne(re.set) ? re.set.bind(s) : ht, Y = Me({
        get: B,
        set: U
      });
      Object.defineProperty(n, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Y.value,
        set: (we) => Y.value = we
      });
    }
  if (r)
    for (const se in r)
      nl(r[se], n, s, se);
  if (a) {
    const se = ne(a) ? a.call(s) : a;
    Reflect.ownKeys(se).forEach((re) => {
      qe(re, se[re]);
    });
  }
  f && Jn(f, e, "c");
  function te(se, re) {
    ee(re) ? re.forEach((B) => se(B.bind(s))) : re && se(re.bind(s));
  }
  if (te(Ro, h), te(Mt, m), te(Eo, g), te(Oo, b), te(Fo, y), te(Mo, T), te(No, de), te(Do, D), te(Lo, Z), te(Po, w), te(gt, R), te(Io, fe), ee($e))
    if ($e.length) {
      const se = e.exposed || (e.exposed = {});
      $e.forEach((re) => {
        Object.defineProperty(se, re, {
          get: () => s[re],
          set: (B) => s[re] = B,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === ht && (e.render = O), Ee != null && (e.inheritAttrs = Ee), H && (e.components = H), X && (e.directives = X), fe && el(e);
}
function Bo(e, t, s = ht) {
  ee(e) && (e = mn(e));
  for (const n in e) {
    const i = e[n];
    let l;
    ye(i) ? "default" in i ? l = Re(
      i.from || n,
      i.default,
      !0
    ) : l = Re(i.from || n) : l = Re(i), /* @__PURE__ */ We(l) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (o) => l.value = o
    }) : t[n] = l;
  }
}
function Jn(e, t, s) {
  vt(
    ee(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function nl(e, t, s, n) {
  let i = n.includes(".") ? Zi(s, n) : () => s[n];
  if (Ae(e)) {
    const l = t[e];
    ne(l) && Yt(i, l);
  } else if (ne(e))
    Yt(i, e.bind(s));
  else if (ye(e))
    if (ee(e))
      e.forEach((l) => nl(l, t, s, n));
    else {
      const l = ne(e.handler) ? e.handler.bind(s) : t[e.handler];
      ne(l) && Yt(i, l, e);
    }
}
function il(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: l,
    config: { optionMergeStrategies: o }
  } = e.appContext, r = l.get(t);
  let a;
  return r ? a = r : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(
    (p) => Is(a, p, o, !0)
  ), Is(a, t, o)), ye(t) && l.set(t, a), a;
}
function Is(e, t, s, n = !1) {
  const { mixins: i, extends: l } = t;
  l && Is(e, l, s, !0), i && i.forEach(
    (o) => Is(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const r = Uo[o] || s && s[o];
      e[o] = r ? r(e[o], t[o]) : t[o];
    }
  return e;
}
const Uo = {
  data: Yn,
  props: Zn,
  emits: Zn,
  // objects
  methods: is,
  computed: is,
  // lifecycle
  beforeCreate: Ge,
  created: Ge,
  beforeMount: Ge,
  mounted: Ge,
  beforeUpdate: Ge,
  updated: Ge,
  beforeDestroy: Ge,
  beforeUnmount: Ge,
  destroyed: Ge,
  unmounted: Ge,
  activated: Ge,
  deactivated: Ge,
  errorCaptured: Ge,
  serverPrefetch: Ge,
  // assets
  components: is,
  directives: is,
  // watch
  watch: Ko,
  // provide / inject
  provide: Yn,
  inject: Wo
};
function Yn(e, t) {
  return t ? e ? function() {
    return Ke(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wo(e, t) {
  return is(mn(e), mn(t));
}
function mn(e) {
  if (ee(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function is(e, t) {
  return e ? Ke(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zn(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ke(
    /* @__PURE__ */ Object.create(null),
    qn(e),
    qn(t ?? {})
  ) : t;
}
function Ko(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Ke(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Ge(e[n], t[n]);
  return s;
}
function ll() {
  return {
    app: null,
    config: {
      isNativeTag: _i,
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
let zo = 0;
function Go(e, t) {
  return function(n, i = null) {
    ne(n) || (n = Ke({}, n)), i != null && !ye(i) && (i = null);
    const l = ll(), o = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const p = l.app = {
      _uid: zo++,
      _component: n,
      _props: i,
      _container: null,
      _context: l,
      _instance: null,
      version: kr,
      get config() {
        return l.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return o.has(f) || (f && ne(f.install) ? (o.add(f), f.install(p, ...h)) : ne(f) && (o.add(f), f(p, ...h))), p;
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
      mount(f, h, m) {
        if (!a) {
          const g = p._ceVNode || Se(n, i);
          return g.appContext = l, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(g, f, m), a = !0, p._container = f, f.__vue_app__ = p, zs(g.component);
        }
      },
      onUnmount(f) {
        r.push(f);
      },
      unmount() {
        a && (vt(
          r,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(f, h) {
        return l.provides[f] = h, p;
      },
      runWithContext(f) {
        const h = Zt;
        Zt = p;
        try {
          return f();
        } finally {
          Zt = h;
        }
      }
    };
    return p;
  };
}
let Zt = null;
const qo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ot(t)}Modifiers`] || e[`${It(t)}Modifiers`];
function Jo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || _e;
  let i = s;
  const l = t.startsWith("update:"), o = l && qo(n, t.slice(7));
  o && (o.trim && (i = s.map((f) => Ae(f) ? f.trim() : f)), o.number && (i = s.map(Cn)));
  let r, a = n[r = qs(t)] || // also try camelCase event handler (#2249)
  n[r = qs(Ot(t))];
  !a && l && (a = n[r = qs(It(t))]), a && vt(
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
    e.emitted[r] = !0, vt(
      p,
      e,
      6,
      i
    );
  }
}
const Yo = /* @__PURE__ */ new WeakMap();
function ol(e, t, s = !1) {
  const n = s ? Yo : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const l = e.emits;
  let o = {}, r = !1;
  if (!ne(e)) {
    const a = (p) => {
      const f = ol(p, t, !0);
      f && (r = !0, Ke(o, f));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !l && !r ? (ye(e) && n.set(e, null), null) : (ee(l) ? l.forEach((a) => o[a] = null) : Ke(o, l), ye(e) && n.set(e, o), o);
}
function Ws(e, t) {
  return !e || !Ns(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, It(t)) || ve(e, t));
}
function Xn(e) {
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
    data: m,
    setupState: g,
    ctx: b,
    inheritAttrs: y
  } = e, T = Os(e);
  let x, w;
  try {
    if (s.shapeFlag & 4) {
      const R = i || n, O = R;
      x = pt(
        p.call(
          O,
          R,
          f,
          h,
          g,
          m,
          b
        )
      ), w = r;
    } else {
      const R = t;
      x = pt(
        R.length > 1 ? R(
          h,
          { attrs: r, slots: o, emit: a }
        ) : R(
          h,
          null
        )
      ), w = t.props ? r : Zo(r);
    }
  } catch (R) {
    ds.length = 0, Bs(R, e, 1), x = Se(Pt);
  }
  let I = x;
  if (w && y !== !1) {
    const R = Object.keys(w), { shapeFlag: O } = I;
    R.length && O & 7 && (l && R.some(_n) && (w = Xo(
      w,
      l
    )), I = Qt(I, w, !1, !0));
  }
  return s.dirs && (I = Qt(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(s.dirs) : s.dirs), s.transition && On(I, s.transition), x = I, Os(T), x;
}
const Zo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ns(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Xo = (e, t) => {
  const s = {};
  for (const n in e)
    (!_n(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Qo(e, t, s) {
  const { props: n, children: i, component: l } = e, { props: o, children: r, patchFlag: a } = t, p = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? Qn(n, o, p) : !!o;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const m = f[h];
        if (rl(o, n, m) && !Ws(p, m))
          return !0;
      }
    }
  } else
    return (i || r) && (!r || !r.$stable) ? !0 : n === o ? !1 : n ? o ? Qn(n, o, p) : !0 : !!o;
  return !1;
}
function Qn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const l = n[i];
    if (rl(t, e, l) && !Ws(s, l))
      return !0;
  }
  return !1;
}
function rl(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && ye(n) && ye(i) ? !Sn(n, i) : n !== i;
}
function er({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const al = {}, cl = () => Object.create(al), ul = (e) => Object.getPrototypeOf(e) === al;
function tr(e, t, s, n = !1) {
  const i = {}, l = cl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fl(e, t, i, l);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ ao(i) : e.type.props ? e.props = i : e.props = l, e.attrs = l;
}
function sr(e, t, s, n) {
  const {
    props: i,
    attrs: l,
    vnode: { patchFlag: o }
  } = e, r = /* @__PURE__ */ me(i), [a] = e.propsOptions;
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
        let m = f[h];
        if (Ws(e.emitsOptions, m))
          continue;
        const g = t[m];
        if (a)
          if (ve(l, m))
            g !== l[m] && (l[m] = g, p = !0);
          else {
            const b = Ot(m);
            i[b] = vn(
              a,
              r,
              b,
              g,
              e,
              !1
            );
          }
        else
          g !== l[m] && (l[m] = g, p = !0);
      }
    }
  } else {
    fl(e, t, i, l) && (p = !0);
    let f;
    for (const h in r)
      (!t || // for camelCase
      !ve(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = It(h)) === h || !ve(t, f))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[f] !== void 0) && (i[h] = vn(
        a,
        r,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (l !== r)
      for (const h in l)
        (!t || !ve(t, h)) && (delete l[h], p = !0);
  }
  p && xt(e.attrs, "set", "");
}
function fl(e, t, s, n) {
  const [i, l] = e.propsOptions;
  let o = !1, r;
  if (t)
    for (let a in t) {
      if (ls(a))
        continue;
      const p = t[a];
      let f;
      i && ve(i, f = Ot(a)) ? !l || !l.includes(f) ? s[f] = p : (r || (r = {}))[f] = p : Ws(e.emitsOptions, a) || (!(a in n) || p !== n[a]) && (n[a] = p, o = !0);
    }
  if (l) {
    const a = /* @__PURE__ */ me(s), p = r || _e;
    for (let f = 0; f < l.length; f++) {
      const h = l[f];
      s[h] = vn(
        i,
        a,
        h,
        p[h],
        e,
        !ve(p, h)
      );
    }
  }
  return o;
}
function vn(e, t, s, n, i, l) {
  const o = e[s];
  if (o != null) {
    const r = ve(o, "default");
    if (r && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ne(a)) {
        const { propsDefaults: p } = i;
        if (s in p)
          n = p[s];
        else {
          const f = ws(i);
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
    ] && (n === "" || n === It(s)) && (n = !0));
  }
  return n;
}
const nr = /* @__PURE__ */ new WeakMap();
function dl(e, t, s = !1) {
  const n = s ? nr : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const l = e.props, o = {}, r = [];
  let a = !1;
  if (!ne(e)) {
    const f = (h) => {
      a = !0;
      const [m, g] = dl(h, t, !0);
      Ke(o, m), g && r.push(...g);
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!l && !a)
    return ye(e) && n.set(e, Gt), Gt;
  if (ee(l))
    for (let f = 0; f < l.length; f++) {
      const h = Ot(l[f]);
      ei(h) && (o[h] = _e);
    }
  else if (l)
    for (const f in l) {
      const h = Ot(f);
      if (ei(h)) {
        const m = l[f], g = o[h] = ee(m) || ne(m) ? { type: m } : Ke({}, m), b = g.type;
        let y = !1, T = !0;
        if (ee(b))
          for (let x = 0; x < b.length; ++x) {
            const w = b[x], I = ne(w) && w.name;
            if (I === "Boolean") {
              y = !0;
              break;
            } else I === "String" && (T = !1);
          }
        else
          y = ne(b) && b.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = y, g[
          1
          /* shouldCastTrue */
        ] = T, (y || ve(g, "default")) && r.push(h);
      }
    }
  const p = [o, r];
  return ye(e) && n.set(e, p), p;
}
function ei(e) {
  return e[0] !== "$" && !ls(e);
}
const Pn = (e) => e === "_" || e === "_ctx" || e === "$stable", In = (e) => ee(e) ? e.map(pt) : [pt(e)], ir = (e, t, s) => {
  if (t._n)
    return t;
  const n = wo((...i) => In(t(...i)), s);
  return n._c = !1, n;
}, pl = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (Pn(i)) continue;
    const l = e[i];
    if (ne(l))
      t[i] = ir(i, l, n);
    else if (l != null) {
      const o = In(l);
      t[i] = () => o;
    }
  }
}, hl = (e, t) => {
  const s = In(t);
  e.slots.default = () => s;
}, ml = (e, t, s) => {
  for (const n in t)
    (s || !Pn(n)) && (e[n] = t[n]);
}, lr = (e, t, s) => {
  const n = e.slots = cl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ml(n, t, s), s && $i(n, "_", i, !0)) : pl(t, n);
  } else t && hl(e, t);
}, or = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let l = !0, o = _e;
  if (n.shapeFlag & 32) {
    const r = t._;
    r ? s && r === 1 ? l = !1 : ml(i, t, s) : (l = !t.$stable, pl(t, i)), o = t;
  } else t && (hl(e, t), o = { default: 1 });
  if (l)
    for (const r in i)
      !Pn(r) && o[r] == null && delete i[r];
}, He = fr;
function rr(e) {
  return ar(e);
}
function ar(e, t) {
  const s = js();
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
    nextSibling: m,
    setScopeId: g = ht,
    insertStaticContent: b
  } = e, y = (u, d, v, $ = null, _ = null, S = null, L = void 0, P = null, A = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !ts(u, d) && ($ = ue(u), we(u, _, S, !0), u = null), d.patchFlag === -2 && (A = !1, d.dynamicChildren = null);
    const { type: k, ref: z, shapeFlag: j } = d;
    switch (k) {
      case Ks:
        T(u, d, v, $);
        break;
      case Pt:
        x(u, d, v, $);
        break;
      case tn:
        u == null && w(d, v, $, L);
        break;
      case pe:
        H(
          u,
          d,
          v,
          $,
          _,
          S,
          L,
          P,
          A
        );
        break;
      default:
        j & 1 ? O(
          u,
          d,
          v,
          $,
          _,
          S,
          L,
          P,
          A
        ) : j & 6 ? X(
          u,
          d,
          v,
          $,
          _,
          S,
          L,
          P,
          A
        ) : (j & 64 || j & 128) && k.process(
          u,
          d,
          v,
          $,
          _,
          S,
          L,
          P,
          A,
          Ie
        );
    }
    z != null && _ ? cs(z, u && u.ref, S, d || u, !d) : z == null && u && u.ref != null && cs(u.ref, null, S, u, !0);
  }, T = (u, d, v, $) => {
    if (u == null)
      n(
        d.el = r(d.children),
        v,
        $
      );
    else {
      const _ = d.el = u.el;
      d.children !== u.children && p(_, d.children);
    }
  }, x = (u, d, v, $) => {
    u == null ? n(
      d.el = a(d.children || ""),
      v,
      $
    ) : d.el = u.el;
  }, w = (u, d, v, $) => {
    [u.el, u.anchor] = b(
      u.children,
      d,
      v,
      $,
      u.el,
      u.anchor
    );
  }, I = ({ el: u, anchor: d }, v, $) => {
    let _;
    for (; u && u !== d; )
      _ = m(u), n(u, v, $), u = _;
    n(d, v, $);
  }, R = ({ el: u, anchor: d }) => {
    let v;
    for (; u && u !== d; )
      v = m(u), i(u), u = v;
    i(d);
  }, O = (u, d, v, $, _, S, L, P, A) => {
    if (d.type === "svg" ? L = "svg" : d.type === "math" && (L = "mathml"), u == null)
      D(
        d,
        v,
        $,
        _,
        S,
        L,
        P,
        A
      );
    else {
      const k = u.el && u.el._isVueCE ? u.el : null;
      try {
        k && k._beginPatch(), fe(
          u,
          d,
          _,
          S,
          L,
          P,
          A
        );
      } finally {
        k && k._endPatch();
      }
    }
  }, D = (u, d, v, $, _, S, L, P) => {
    let A, k;
    const { props: z, shapeFlag: j, transition: W, dirs: q } = u;
    if (A = u.el = o(
      u.type,
      S,
      z && z.is,
      z
    ), j & 8 ? f(A, u.children) : j & 16 && de(
      u.children,
      A,
      null,
      $,
      _,
      en(u, S),
      L,
      P
    ), q && Dt(u, null, $, "created"), Z(A, u, u.scopeId, L, $), z) {
      for (const ge in z)
        ge !== "value" && !ls(ge) && l(A, ge, null, z[ge], S, $);
      "value" in z && l(A, "value", null, z.value, S), (k = z.onVnodeBeforeMount) && ft(k, $, u);
    }
    q && Dt(u, null, $, "beforeMount");
    const ae = cr(_, W);
    ae && W.beforeEnter(A), n(A, d, v), ((k = z && z.onVnodeMounted) || ae || q) && He(() => {
      k && ft(k, $, u), ae && W.enter(A), q && Dt(u, null, $, "mounted");
    }, _);
  }, Z = (u, d, v, $, _) => {
    if (v && g(u, v), $)
      for (let S = 0; S < $.length; S++)
        g(u, $[S]);
    if (_) {
      let S = _.subTree;
      if (d === S || yl(S.type) && (S.ssContent === d || S.ssFallback === d)) {
        const L = _.vnode;
        Z(
          u,
          L,
          L.scopeId,
          L.slotScopeIds,
          _.parent
        );
      }
    }
  }, de = (u, d, v, $, _, S, L, P, A = 0) => {
    for (let k = A; k < u.length; k++) {
      const z = u[k] = P ? wt(u[k]) : pt(u[k]);
      y(
        null,
        z,
        d,
        v,
        $,
        _,
        S,
        L,
        P
      );
    }
  }, fe = (u, d, v, $, _, S, L) => {
    const P = d.el = u.el;
    let { patchFlag: A, dynamicChildren: k, dirs: z } = d;
    A |= u.patchFlag & 16;
    const j = u.props || _e, W = d.props || _e;
    let q;
    if (v && Nt(v, !1), (q = W.onVnodeBeforeUpdate) && ft(q, v, d, u), z && Dt(d, u, v, "beforeUpdate"), v && Nt(v, !0), (j.innerHTML && W.innerHTML == null || j.textContent && W.textContent == null) && f(P, ""), k ? $e(
      u.dynamicChildren,
      k,
      P,
      v,
      $,
      en(d, _),
      S
    ) : L || re(
      u,
      d,
      P,
      null,
      v,
      $,
      en(d, _),
      S,
      !1
    ), A > 0) {
      if (A & 16)
        Ee(P, j, W, v, _);
      else if (A & 2 && j.class !== W.class && l(P, "class", null, W.class, _), A & 4 && l(P, "style", j.style, W.style, _), A & 8) {
        const ae = d.dynamicProps;
        for (let ge = 0; ge < ae.length; ge++) {
          const he = ae[ge], Ve = j[he], Oe = W[he];
          (Oe !== Ve || he === "value") && l(P, he, Ve, Oe, _, v);
        }
      }
      A & 1 && u.children !== d.children && f(P, d.children);
    } else !L && k == null && Ee(P, j, W, v, _);
    ((q = W.onVnodeUpdated) || z) && He(() => {
      q && ft(q, v, d, u), z && Dt(d, u, v, "updated");
    }, $);
  }, $e = (u, d, v, $, _, S, L) => {
    for (let P = 0; P < d.length; P++) {
      const A = u[P], k = d[P], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ts(A, k) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 198) ? h(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      y(
        A,
        k,
        z,
        null,
        $,
        _,
        S,
        L,
        !0
      );
    }
  }, Ee = (u, d, v, $, _) => {
    if (d !== v) {
      if (d !== _e)
        for (const S in d)
          !ls(S) && !(S in v) && l(
            u,
            S,
            d[S],
            null,
            _,
            $
          );
      for (const S in v) {
        if (ls(S)) continue;
        const L = v[S], P = d[S];
        L !== P && S !== "value" && l(u, S, P, L, _, $);
      }
      "value" in v && l(u, "value", d.value, v.value, _);
    }
  }, H = (u, d, v, $, _, S, L, P, A) => {
    const k = d.el = u ? u.el : r(""), z = d.anchor = u ? u.anchor : r("");
    let { patchFlag: j, dynamicChildren: W, slotScopeIds: q } = d;
    q && (P = P ? P.concat(q) : q), u == null ? (n(k, v, $), n(z, v, $), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      v,
      z,
      _,
      S,
      L,
      P,
      A
    )) : j > 0 && j & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === W.length ? ($e(
      u.dynamicChildren,
      W,
      v,
      _,
      S,
      L,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || _ && d === _.subTree) && Ln(
      u,
      d,
      !0
      /* shallow */
    )) : re(
      u,
      d,
      v,
      z,
      _,
      S,
      L,
      P,
      A
    );
  }, X = (u, d, v, $, _, S, L, P, A) => {
    d.slotScopeIds = P, u == null ? d.shapeFlag & 512 ? _.ctx.activate(
      d,
      v,
      $,
      L,
      A
    ) : ce(
      d,
      v,
      $,
      _,
      S,
      L,
      A
    ) : De(u, d, A);
  }, ce = (u, d, v, $, _, S, L) => {
    const P = u.component = yr(
      u,
      $,
      _
    );
    if (tl(u) && (P.ctx.renderer = Ie), _r(P, !1, L), P.asyncDep) {
      if (_ && _.registerDep(P, te, L), !u.el) {
        const A = P.subTree = Se(Pt);
        x(null, A, d, v), u.placeholder = A.el;
      }
    } else
      te(
        P,
        u,
        d,
        v,
        _,
        S,
        L
      );
  }, De = (u, d, v) => {
    const $ = d.component = u.component;
    if (Qo(u, d, v))
      if ($.asyncDep && !$.asyncResolved) {
        se($, d, v);
        return;
      } else
        $.next = d, $.update();
    else
      d.el = u.el, $.vnode = d;
  }, te = (u, d, v, $, _, S, L) => {
    const P = () => {
      if (u.isMounted) {
        let { next: j, bu: W, u: q, parent: ae, vnode: ge } = u;
        {
          const nt = vl(u);
          if (nt) {
            j && (j.el = ge.el, se(u, j, L)), nt.asyncDep.then(() => {
              He(() => {
                u.isUnmounted || k();
              }, _);
            });
            return;
          }
        }
        let he = j, Ve;
        Nt(u, !1), j ? (j.el = ge.el, se(u, j, L)) : j = ge, W && Ts(W), (Ve = j.props && j.props.onVnodeBeforeUpdate) && ft(Ve, ae, j, ge), Nt(u, !0);
        const Oe = Xn(u), st = u.subTree;
        u.subTree = Oe, y(
          st,
          Oe,
          // parent may have changed if it's in a teleport
          h(st.el),
          // anchor may have changed if it's in a fragment
          ue(st),
          u,
          _,
          S
        ), j.el = Oe.el, he === null && er(u, Oe.el), q && He(q, _), (Ve = j.props && j.props.onVnodeUpdated) && He(
          () => ft(Ve, ae, j, ge),
          _
        );
      } else {
        let j;
        const { el: W, props: q } = d, { bm: ae, m: ge, parent: he, root: Ve, type: Oe } = u, st = us(d);
        Nt(u, !1), ae && Ts(ae), !st && (j = q && q.onVnodeBeforeMount) && ft(j, he, d), Nt(u, !0);
        {
          Ve.ce && Ve.ce._hasShadowRoot() && Ve.ce._injectChildStyle(Oe);
          const nt = u.subTree = Xn(u);
          y(
            null,
            nt,
            v,
            $,
            u,
            _,
            S
          ), d.el = nt.el;
        }
        if (ge && He(ge, _), !st && (j = q && q.onVnodeMounted)) {
          const nt = d;
          He(
            () => ft(j, he, nt),
            _
          );
        }
        (d.shapeFlag & 256 || he && us(he.vnode) && he.vnode.shapeFlag & 256) && u.a && He(u.a, _), u.isMounted = !0, d = v = $ = null;
      }
    };
    u.scope.on();
    const A = u.effect = new Ai(P);
    u.scope.off();
    const k = u.update = A.run.bind(A), z = u.job = A.runIfDirty.bind(A);
    z.i = u, z.id = u.uid, A.scheduler = () => En(z), Nt(u, !0), k();
  }, se = (u, d, v) => {
    d.component = u;
    const $ = u.vnode.props;
    u.vnode = d, u.next = null, sr(u, d.props, $, v), or(u, d.children, v), kt(), Bn(u), $t();
  }, re = (u, d, v, $, _, S, L, P, A = !1) => {
    const k = u && u.children, z = u ? u.shapeFlag : 0, j = d.children, { patchFlag: W, shapeFlag: q } = d;
    if (W > 0) {
      if (W & 128) {
        U(
          k,
          j,
          v,
          $,
          _,
          S,
          L,
          P,
          A
        );
        return;
      } else if (W & 256) {
        B(
          k,
          j,
          v,
          $,
          _,
          S,
          L,
          P,
          A
        );
        return;
      }
    }
    q & 8 ? (z & 16 && M(k, _, S), j !== k && f(v, j)) : z & 16 ? q & 16 ? U(
      k,
      j,
      v,
      $,
      _,
      S,
      L,
      P,
      A
    ) : M(k, _, S, !0) : (z & 8 && f(v, ""), q & 16 && de(
      j,
      v,
      $,
      _,
      S,
      L,
      P,
      A
    ));
  }, B = (u, d, v, $, _, S, L, P, A) => {
    u = u || Gt, d = d || Gt;
    const k = u.length, z = d.length, j = Math.min(k, z);
    let W;
    for (W = 0; W < j; W++) {
      const q = d[W] = A ? wt(d[W]) : pt(d[W]);
      y(
        u[W],
        q,
        v,
        null,
        _,
        S,
        L,
        P,
        A
      );
    }
    k > z ? M(
      u,
      _,
      S,
      !0,
      !1,
      j
    ) : de(
      d,
      v,
      $,
      _,
      S,
      L,
      P,
      A,
      j
    );
  }, U = (u, d, v, $, _, S, L, P, A) => {
    let k = 0;
    const z = d.length;
    let j = u.length - 1, W = z - 1;
    for (; k <= j && k <= W; ) {
      const q = u[k], ae = d[k] = A ? wt(d[k]) : pt(d[k]);
      if (ts(q, ae))
        y(
          q,
          ae,
          v,
          null,
          _,
          S,
          L,
          P,
          A
        );
      else
        break;
      k++;
    }
    for (; k <= j && k <= W; ) {
      const q = u[j], ae = d[W] = A ? wt(d[W]) : pt(d[W]);
      if (ts(q, ae))
        y(
          q,
          ae,
          v,
          null,
          _,
          S,
          L,
          P,
          A
        );
      else
        break;
      j--, W--;
    }
    if (k > j) {
      if (k <= W) {
        const q = W + 1, ae = q < z ? d[q].el : $;
        for (; k <= W; )
          y(
            null,
            d[k] = A ? wt(d[k]) : pt(d[k]),
            v,
            ae,
            _,
            S,
            L,
            P,
            A
          ), k++;
      }
    } else if (k > W)
      for (; k <= j; )
        we(u[k], _, S, !0), k++;
    else {
      const q = k, ae = k, ge = /* @__PURE__ */ new Map();
      for (k = ae; k <= W; k++) {
        const Q = d[k] = A ? wt(d[k]) : pt(d[k]);
        Q.key != null && ge.set(Q.key, k);
      }
      let he, Ve = 0;
      const Oe = W - ae + 1;
      let st = !1, nt = 0;
      const C = new Array(Oe);
      for (k = 0; k < Oe; k++) C[k] = 0;
      for (k = q; k <= j; k++) {
        const Q = u[k];
        if (Ve >= Oe) {
          we(Q, _, S, !0);
          continue;
        }
        let le;
        if (Q.key != null)
          le = ge.get(Q.key);
        else
          for (he = ae; he <= W; he++)
            if (C[he - ae] === 0 && ts(Q, d[he])) {
              le = he;
              break;
            }
        le === void 0 ? we(Q, _, S, !0) : (C[le - ae] = k + 1, le >= nt ? nt = le : st = !0, y(
          Q,
          d[le],
          v,
          null,
          _,
          S,
          L,
          P,
          A
        ), Ve++);
      }
      const F = st ? ur(C) : Gt;
      for (he = F.length - 1, k = Oe - 1; k >= 0; k--) {
        const Q = ae + k, le = d[Q], Fe = d[Q + 1], Le = Q + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Fe.el || gl(Fe)
        ) : $;
        C[k] === 0 ? y(
          null,
          le,
          v,
          Le,
          _,
          S,
          L,
          P,
          A
        ) : st && (he < 0 || k !== F[he] ? Y(le, v, Le, 2) : he--);
      }
    }
  }, Y = (u, d, v, $, _ = null) => {
    const { el: S, type: L, transition: P, children: A, shapeFlag: k } = u;
    if (k & 6) {
      Y(u.component.subTree, d, v, $);
      return;
    }
    if (k & 128) {
      u.suspense.move(d, v, $);
      return;
    }
    if (k & 64) {
      L.move(u, d, v, Ie);
      return;
    }
    if (L === pe) {
      n(S, d, v);
      for (let j = 0; j < A.length; j++)
        Y(A[j], d, v, $);
      n(u.anchor, d, v);
      return;
    }
    if (L === tn) {
      I(u, d, v);
      return;
    }
    if ($ !== 2 && k & 1 && P)
      if ($ === 0)
        P.beforeEnter(S), n(S, d, v), He(() => P.enter(S), _);
      else {
        const { leave: j, delayLeave: W, afterLeave: q } = P, ae = () => {
          u.ctx.isUnmounted ? i(S) : n(S, d, v);
        }, ge = () => {
          S._isLeaving && S[To](
            !0
            /* cancelled */
          ), j(S, () => {
            ae(), q && q();
          });
        };
        W ? W(S, ae, ge) : ge();
      }
    else
      n(S, d, v);
  }, we = (u, d, v, $ = !1, _ = !1) => {
    const {
      type: S,
      props: L,
      ref: P,
      children: A,
      dynamicChildren: k,
      shapeFlag: z,
      patchFlag: j,
      dirs: W,
      cacheIndex: q
    } = u;
    if (j === -2 && (_ = !1), P != null && (kt(), cs(P, null, v, u, !0), $t()), q != null && (d.renderCache[q] = void 0), z & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const ae = z & 1 && W, ge = !us(u);
    let he;
    if (ge && (he = L && L.onVnodeBeforeUnmount) && ft(he, d, u), z & 6)
      ie(u.component, v, $);
    else {
      if (z & 128) {
        u.suspense.unmount(v, $);
        return;
      }
      ae && Dt(u, null, d, "beforeUnmount"), z & 64 ? u.type.remove(
        u,
        d,
        v,
        Ie,
        $
      ) : k && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !k.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (S !== pe || j > 0 && j & 64) ? M(
        k,
        d,
        v,
        !1,
        !0
      ) : (S === pe && j & 384 || !_ && z & 16) && M(A, d, v), $ && Ze(u);
    }
    (ge && (he = L && L.onVnodeUnmounted) || ae) && He(() => {
      he && ft(he, d, u), ae && Dt(u, null, d, "unmounted");
    }, v);
  }, Ze = (u) => {
    const { type: d, el: v, anchor: $, transition: _ } = u;
    if (d === pe) {
      rt(v, $);
      return;
    }
    if (d === tn) {
      R(u);
      return;
    }
    const S = () => {
      i(v), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: L, delayLeave: P } = _, A = () => L(v, S);
      P ? P(u.el, S, A) : A();
    } else
      S();
  }, rt = (u, d) => {
    let v;
    for (; u !== d; )
      v = m(u), i(u), u = v;
    i(d);
  }, ie = (u, d, v) => {
    const { bum: $, scope: _, job: S, subTree: L, um: P, m: A, a: k } = u;
    ti(A), ti(k), $ && Ts($), _.stop(), S && (S.flags |= 8, we(L, u, d, v)), P && He(P, d), He(() => {
      u.isUnmounted = !0;
    }, d);
  }, M = (u, d, v, $ = !1, _ = !1, S = 0) => {
    for (let L = S; L < u.length; L++)
      we(u[L], d, v, $, _);
  }, ue = (u) => {
    if (u.shapeFlag & 6)
      return ue(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = m(u.anchor || u.el), v = d && d[Xi];
    return v ? m(v) : d;
  };
  let Ce = !1;
  const Te = (u, d, v) => {
    let $;
    u == null ? d._vnode && (we(d._vnode, null, null, !0), $ = d._vnode.component) : y(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      v
    ), d._vnode = u, Ce || (Ce = !0, Bn($), Gi(), Ce = !1);
  }, Ie = {
    p: y,
    um: we,
    m: Y,
    r: Ze,
    mt: ce,
    mc: de,
    pc: re,
    pbc: $e,
    n: ue,
    o: e
  };
  return {
    render: Te,
    hydrate: void 0,
    createApp: Go(Te)
  };
}
function en({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Nt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ln(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (ee(n) && ee(i))
    for (let l = 0; l < n.length; l++) {
      const o = n[l];
      let r = i[l];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = i[l] = wt(i[l]), r.el = o.el), !s && r.patchFlag !== -2 && Ln(o, r)), r.type === Ks && (r.patchFlag === -1 && (r = i[l] = wt(r)), r.el = o.el), r.type === Pt && !r.el && (r.el = o.el);
    }
}
function ur(e) {
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
function vl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vl(t);
}
function ti(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function gl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? gl(t.subTree) : null;
}
const yl = (e) => e.__isSuspense;
function fr(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : _o(e);
}
const pe = /* @__PURE__ */ Symbol.for("v-fgt"), Ks = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), tn = /* @__PURE__ */ Symbol.for("v-stc"), ds = [];
let Qe = null;
function E(e = !1) {
  ds.push(Qe = e ? null : []);
}
function dr() {
  ds.pop(), Qe = ds[ds.length - 1] || null;
}
let vs = 1;
function si(e, t = !1) {
  vs += e, e < 0 && Qe && t && (Qe.hasOnce = !0);
}
function bl(e) {
  return e.dynamicChildren = vs > 0 ? Qe || Gt : null, dr(), vs > 0 && Qe && Qe.push(e), e;
}
function V(e, t, s, n, i, l) {
  return bl(
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
function Ut(e, t, s, n, i) {
  return bl(
    Se(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function _l(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ts(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wl = ({ key: e }) => e ?? null, Ms = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Ae(e) || /* @__PURE__ */ We(e) || ne(e) ? { i: lt, r: e, k: t, f: !!s } : e : null);
function c(e, t = null, s = null, n = 0, i = null, l = e === pe ? 0 : 1, o = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wl(t),
    ref: t && Ms(t),
    scopeId: Ji,
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
    ctx: lt
  };
  return r ? (Dn(a, s), l & 128 && e.normalize(a)) : s && (a.shapeFlag |= Ae(s) ? 8 : 16), vs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Qe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Qe.push(a), a;
}
const Se = pr;
function pr(e, t = null, s = null, n = 0, i = null, l = !1) {
  if ((!e || e === Vo) && (e = Pt), _l(e)) {
    const r = Qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Dn(r, s), vs > 0 && !l && Qe && (r.shapeFlag & 6 ? Qe[Qe.indexOf(e)] = r : Qe.push(r)), r.patchFlag = -2, r;
  }
  if (Sr(e) && (e = e.__vccOpts), t) {
    t = hr(t);
    let { class: r, style: a } = t;
    r && !Ae(r) && (t.class = J(r)), ye(a) && (/* @__PURE__ */ Rn(a) && !ee(a) && (a = Ke({}, a)), t.style = it(a));
  }
  const o = Ae(e) ? 1 : yl(e) ? 128 : ko(e) ? 64 : ye(e) ? 4 : ne(e) ? 2 : 0;
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
function hr(e) {
  return e ? /* @__PURE__ */ Rn(e) || ul(e) ? Ke({}, e) : e : null;
}
function Qt(e, t, s = !1, n = !1) {
  const { props: i, ref: l, patchFlag: o, children: r, transition: a } = e, p = t ? mr(i || {}, t) : i, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && wl(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && l ? ee(l) ? l.concat(Ms(t)) : [l, Ms(t)] : Ms(t)
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
    patchFlag: t && e.type !== pe ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Qt(e.ssContent),
    ssFallback: e.ssFallback && Qt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && On(
    f,
    a.clone(f)
  ), f;
}
function Ne(e = " ", t = 0) {
  return Se(Ks, null, e, t);
}
function ke(e = "", t = !1) {
  return t ? (E(), Ut(Pt, null, e)) : Se(Pt, null, e);
}
function pt(e) {
  return e == null || typeof e == "boolean" ? Se(Pt) : ee(e) ? Se(
    pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _l(e) ? wt(e) : Se(Ks, null, String(e));
}
function wt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qt(e);
}
function Dn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Dn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !ul(t) ? t._ctx = lt : i === 3 && lt && (lt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: lt }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Ne(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function mr(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = J([t.class, n.class]));
      else if (i === "style")
        t.style = it([t.style, n.style]);
      else if (Ns(i)) {
        const l = t[i], o = n[i];
        o && l !== o && !(ee(l) && l.includes(o)) && (t[i] = l ? [].concat(l, o) : o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ft(e, t, s, n = null) {
  vt(e, t, 7, [
    s,
    n
  ]);
}
const vr = ll();
let gr = 0;
function yr(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || vr, l = {
    uid: gr++,
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
    scope: new Bl(
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
    propsOptions: dl(n, i),
    emitsOptions: ol(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _e,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: _e,
    data: _e,
    props: _e,
    attrs: _e,
    slots: _e,
    refs: _e,
    setupState: _e,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Jo.bind(null, l), e.ce && e.ce(l), l;
}
let Ye = null;
const br = () => Ye || lt;
let Ls, gn;
{
  const e = js(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (l) => {
      i.length > 1 ? i.forEach((o) => o(l)) : i[0](l);
    };
  };
  Ls = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ye = s
  ), gn = t(
    "__VUE_SSR_SETTERS__",
    (s) => gs = s
  );
}
const ws = (e) => {
  const t = Ye;
  return Ls(e), e.scope.on(), () => {
    e.scope.off(), Ls(t);
  };
}, ni = () => {
  Ye && Ye.scope.off(), Ls(null);
};
function xl(e) {
  return e.vnode.shapeFlag & 4;
}
let gs = !1;
function _r(e, t = !1, s = !1) {
  t && gn(t);
  const { props: n, children: i } = e.vnode, l = xl(e);
  tr(e, n, l, t), lr(e, i, s || t);
  const o = l ? wr(e, t) : void 0;
  return t && gn(!1), o;
}
function wr(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, jo);
  const { setup: n } = s;
  if (n) {
    kt();
    const i = e.setupContext = n.length > 1 ? Cr(e) : null, l = ws(e), o = bs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), r = xi(o);
    if ($t(), l(), (r || e.sp) && !us(e) && el(e), r) {
      if (o.then(ni, ni), t)
        return o.then((a) => {
          ii(e, a);
        }).catch((a) => {
          Bs(a, e, 0);
        });
      e.asyncDep = o;
    } else
      ii(e, o);
  } else
    Cl(e);
}
function ii(e, t, s) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ye(t) && (e.setupState = Wi(t)), Cl(e);
}
function Cl(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || ht);
  {
    const i = ws(e);
    kt();
    try {
      Ho(e);
    } finally {
      $t(), i();
    }
  }
}
const xr = {
  get(e, t) {
    return Be(e, "get", ""), e[t];
  }
};
function Cr(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, xr),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wi(co(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in fs)
        return fs[s](e);
    },
    has(t, s) {
      return s in t || s in fs;
    }
  })) : e.proxy;
}
function Sr(e) {
  return ne(e) && "__vccOpts" in e;
}
const Me = (e, t) => /* @__PURE__ */ mo(e, t, gs), kr = "3.5.28";
/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yn;
const li = typeof window < "u" && window.trustedTypes;
if (li)
  try {
    yn = /* @__PURE__ */ li.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Sl = yn ? (e) => yn.createHTML(e) : (e) => e, $r = "http://www.w3.org/2000/svg", Tr = "http://www.w3.org/1998/Math/MathML", _t = typeof document < "u" ? document : null, oi = _t && /* @__PURE__ */ _t.createElement("template"), Fr = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? _t.createElementNS($r, e) : t === "mathml" ? _t.createElementNS(Tr, e) : s ? _t.createElement(e, { is: s }) : _t.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => _t.createTextNode(e),
  createComment: (e) => _t.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => _t.querySelector(e),
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
      oi.innerHTML = Sl(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const r = oi.content;
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
}, Mr = /* @__PURE__ */ Symbol("_vtc");
function Ar(e, t, s) {
  const n = e[Mr];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Ds = /* @__PURE__ */ Symbol("_vod"), kl = /* @__PURE__ */ Symbol("_vsh"), $l = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Ds] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : ss(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), ss(e, !0), n.enter(e)) : n.leave(e, () => {
      ss(e, !1);
    }) : ss(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ss(e, t);
  }
};
function ss(e, t) {
  e.style.display = t ? e[Ds] : "none", e[kl] = !t;
}
const Rr = /* @__PURE__ */ Symbol(""), Er = /(?:^|;)\s*display\s*:/;
function Or(e, t, s) {
  const n = e.style, i = Ae(s);
  let l = !1;
  if (s && !i) {
    if (t)
      if (Ae(t))
        for (const o of t.split(";")) {
          const r = o.slice(0, o.indexOf(":")).trim();
          s[r] == null && As(n, r, "");
        }
      else
        for (const o in t)
          s[o] == null && As(n, o, "");
    for (const o in s)
      o === "display" && (l = !0), As(n, o, s[o]);
  } else if (i) {
    if (t !== s) {
      const o = n[Rr];
      o && (s += ";" + o), n.cssText = s, l = Er.test(s);
    }
  } else t && e.removeAttribute("style");
  Ds in e && (e[Ds] = l ? n.display : "", e[kl] && (n.display = "none"));
}
const ri = /\s*!important$/;
function As(e, t, s) {
  if (ee(s))
    s.forEach((n) => As(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Pr(e, t);
    ri.test(s) ? e.setProperty(
      It(n),
      s.replace(ri, ""),
      "important"
    ) : e[n] = s;
  }
}
const ai = ["Webkit", "Moz", "ms"], sn = {};
function Pr(e, t) {
  const s = sn[t];
  if (s)
    return s;
  let n = Ot(t);
  if (n !== "filter" && n in e)
    return sn[t] = n;
  n = ki(n);
  for (let i = 0; i < ai.length; i++) {
    const l = ai[i] + n;
    if (l in e)
      return sn[t] = l;
  }
  return t;
}
const ci = "http://www.w3.org/1999/xlink";
function ui(e, t, s, n, i, l = jl(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(ci, t.slice(6, t.length)) : e.setAttributeNS(ci, t, s) : s == null || l && !Ti(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : mt(s) ? String(s) : s
  );
}
function fi(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Sl(s) : s);
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
    r === "boolean" ? s = Ti(s) : s == null && r === "string" ? (s = "", o = !0) : r === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function zt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ir(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const di = /* @__PURE__ */ Symbol("_vei");
function Lr(e, t, s, n, i = null) {
  const l = e[di] || (e[di] = {}), o = l[t];
  if (n && o)
    o.value = n;
  else {
    const [r, a] = Dr(t);
    if (n) {
      const p = l[t] = jr(
        n,
        i
      );
      zt(e, r, p, a);
    } else o && (Ir(e, r, o, a), l[t] = void 0);
  }
}
const pi = /(?:Once|Passive|Capture)$/;
function Dr(e) {
  let t;
  if (pi.test(e)) {
    t = {};
    let n;
    for (; n = e.match(pi); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : It(e.slice(2)), t];
}
let nn = 0;
const Nr = /* @__PURE__ */ Promise.resolve(), Vr = () => nn || (Nr.then(() => nn = 0), nn = Date.now());
function jr(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    vt(
      Hr(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Vr(), s;
}
function Hr(e, t) {
  if (ee(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Br = (e, t, s, n, i, l) => {
  const o = i === "svg";
  t === "class" ? Ar(e, n, o) : t === "style" ? Or(e, s, n) : Ns(t) ? _n(t) || Lr(e, t, s, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ur(e, t, n, o)) ? (fi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ui(e, t, n, o, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ae(n)) ? fi(e, Ot(t), n, l, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ui(e, t, n, o));
};
function Ur(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hi(t) && ne(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return hi(t) && Ae(s) ? !1 : t in e;
}
const mi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (s) => Ts(t, s) : t;
};
function Wr(e) {
  e.target.composing = !0;
}
function vi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ln = /* @__PURE__ */ Symbol("_assign");
function gi(e, t, s) {
  return t && (e = e.trim()), s && (e = Cn(e)), e;
}
const St = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[ln] = mi(i);
    const l = n || i.props && i.props.type === "number";
    zt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[ln](gi(e.value, s, l));
    }), (s || l) && zt(e, "change", () => {
      e.value = gi(e.value, s, l);
    }), t || (zt(e, "compositionstart", Wr), zt(e, "compositionend", vi), zt(e, "change", vi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: l } }, o) {
    if (e[ln] = mi(o), e.composing) return;
    const r = (l || e.type === "number") && !/^0\d/.test(e.value) ? Cn(e.value) : e.value, a = t ?? "";
    r !== a && (document.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === a) || (e.value = a));
  }
}, Kr = ["ctrl", "shift", "alt", "meta"], zr = {
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
  exact: (e, t) => Kr.some((s) => e[`${s}Key`] && !t.includes(s))
}, oe = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = ((i, ...l) => {
    for (let o = 0; o < t.length; o++) {
      const r = zr[t[o]];
      if (r && r(i, t)) return;
    }
    return e(i, ...l);
  }));
}, Gr = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, yi = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = ((i) => {
    if (!("key" in i))
      return;
    const l = It(i.key);
    if (t.some(
      (o) => o === l || Gr[o] === l
    ))
      return e(i);
  }));
}, qr = /* @__PURE__ */ Ke({ patchProp: Br }, Fr);
let bi;
function Jr() {
  return bi || (bi = rr(qr));
}
const Yr = ((...e) => {
  const t = Jr().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = Xr(n);
    if (!i) return;
    const l = t._component;
    !ne(l) && !l.render && !l.template && (l.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = s(i, !1, Zr(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function Zr(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Xr(e) {
  return Ae(e) ? document.querySelector(e) : e;
}
const Qr = /* @__PURE__ */ Bt({
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
  totalAssets: 0,
  currentOffset: 0,
  isLoadingMore: !1,
  hasMore: !1,
  version: "",
  // UI panel visibility
  settingsVisible: !1,
  infoPanelVisible: !1
});
function et() {
  return { state: Qr };
}
function Gs() {
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
  async function m() {
    return (await fetch("/dnh-assetmanager/index/stats")).json();
  }
  async function g() {
    return fetch("/dnh-assetmanager/index/rebuild", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
  }
  async function b(y) {
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
    fetchIndexStats: m,
    postIndexRebuild: g,
    fetchFileBlob: b
  };
}
const ea = { class: "cm-top-nav" }, ta = { class: "cm-brand" }, sa = { class: "cm-version-badge" }, na = { class: "cm-nav-tabs" }, ia = ["onClick"], la = {
  __name: "TopNav",
  setup(e) {
    const { state: t } = et(), s = Re("update"), n = [
      { key: "all", label: "All" },
      { key: "input", label: "Inputs" },
      { key: "output", label: "Outputs" },
      { key: "custom", label: "Custom" }
    ];
    function i(l) {
      t.activeTab = l, s();
    }
    return (l, o) => (E(), V("header", ea, [
      c("div", ta, [
        o[1] || (o[1] = c("span", { class: "pi pi-folder cm-brand-icon" }, null, -1)),
        o[2] || (o[2] = c("span", { class: "cm-brand-title" }, "Assets Manager", -1)),
        c("span", sa, G(K(t).version ? `v${K(t).version}` : "v..."), 1)
      ]),
      c("nav", na, [
        (E(), V(pe, null, Pe(n, (r) => c("button", {
          key: r.key,
          class: J(["cm-nav-btn", { active: K(t).activeTab === r.key }]),
          onClick: (a) => i(r.key)
        }, G(r.label), 11, ia)), 64)),
        c("button", {
          class: J(["cm-icon-only-btn", { active: K(t).settingsVisible }]),
          onClick: o[0] || (o[0] = (r) => K(t).settingsVisible = !K(t).settingsVisible)
        }, [...o[3] || (o[3] = [
          c("span", { class: "pi pi-cog" }, null, -1)
        ])], 2)
      ])
    ]));
  }
}, oa = ["onClick"], ra = {
  key: 0,
  class: "pi pi-check"
}, aa = {
  key: 1,
  style: { width: "16px", display: "inline-block" }
}, ca = { class: "cm-context-menu-label" }, ua = ["title", "onClick"], fa = { class: "cm-context-menu-label" }, da = ["title", "onClick"], Tl = {
  __name: "FilterMenu",
  setup(e, { expose: t }) {
    const { state: s } = et(), n = Re("update"), i = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N({ x: 0, y: 0 }), o = /* @__PURE__ */ N(null);
    let r = null;
    const a = [
      { value: "all", label: "All types" },
      { value: "generation", label: "Generated (has workflow)" },
      { value: "input", label: "Input (no workflow)" }
    ];
    function p(I) {
      return I.split(/[\\/]/).pop();
    }
    function f() {
      i.value = !1;
    }
    async function h(I, R) {
      I.stopPropagation(), r = R, i.value = !0, await Ue(), m();
    }
    function m() {
      if (!o.value || !r) return;
      const I = r.getBoundingClientRect(), R = o.value.getBoundingClientRect();
      let O = I.left, D = I.bottom + 4;
      O + R.width > window.innerWidth && (O = window.innerWidth - R.width - 4), D + R.height > window.innerHeight && (D = I.top - R.height - 4), l.value = { x: O, y: D };
    }
    function g(I) {
      s.activeUtility = I, f(), n();
    }
    function b(I) {
      s.activeModelFilters.has(I) ? s.activeModelFilters.delete(I) : s.activeModelFilters.add(I), f(), n(), Ue(() => r == null ? void 0 : r.click());
    }
    function y() {
      s.activeModelFilters.clear(), f(), n(), Ue(() => r == null ? void 0 : r.click());
    }
    function T(I) {
      s.activeLoraFilters.has(I) ? s.activeLoraFilters.delete(I) : s.activeLoraFilters.add(I), f(), n(), Ue(() => r == null ? void 0 : r.click());
    }
    function x() {
      s.activeLoraFilters.clear(), f(), n(), Ue(() => r == null ? void 0 : r.click());
    }
    function w() {
      f();
    }
    return Mt(() => document.addEventListener("click", w)), gt(() => document.removeEventListener("click", w)), t({ show: h }), (I, R) => (E(), Ut(_s, { to: "body" }, [
      i.value ? (E(), V("div", {
        key: 0,
        ref_key: "menuEl",
        ref: o,
        class: "cm-context-menu",
        style: it({ left: l.value.x + "px", top: l.value.y + "px" })
      }, [
        R[4] || (R[4] = c("div", { class: "cm-context-menu-label" }, "Asset Type", -1)),
        (E(), V(pe, null, Pe(a, (O) => c("button", {
          key: O.value,
          class: J(["cm-context-menu-item", { "cm-active": K(s).activeUtility === O.value }]),
          onClick: oe((D) => g(O.value), ["stop"])
        }, [
          K(s).activeUtility === O.value ? (E(), V("span", ra)) : (E(), V("span", aa)),
          Ne(" " + G(O.label), 1)
        ], 10, oa)), 64)),
        K(s).availableModels.length > 0 ? (E(), V(pe, { key: 0 }, [
          R[1] || (R[1] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          c("div", ca, " Checkpoint" + G(K(s).activeModelFilters.size > 0 ? ` (${K(s).activeModelFilters.size})` : ""), 1),
          K(s).activeModelFilters.size > 0 ? (E(), V("button", {
            key: 0,
            class: "cm-context-menu-item",
            onClick: oe(y, ["stop"])
          }, [...R[0] || (R[0] = [
            c("span", { class: "pi pi-stop cm-check-icon" }, null, -1),
            Ne(" Clear all ", -1)
          ])])) : ke("", !0),
          (E(!0), V(pe, null, Pe(K(s).availableModels.slice(0, 15), (O) => (E(), V("button", {
            key: O,
            class: J(["cm-context-menu-item", { "cm-active": K(s).activeModelFilters.has(O) }]),
            title: O,
            onClick: oe((D) => b(O), ["stop"])
          }, [
            c("span", {
              class: J(["pi", "cm-check-icon", K(s).activeModelFilters.has(O) ? "pi-check-square" : "pi-stop"])
            }, null, 2),
            Ne(" " + G(p(O)), 1)
          ], 10, ua))), 128))
        ], 64)) : ke("", !0),
        K(s).availableLoras.length > 0 ? (E(), V(pe, { key: 1 }, [
          R[3] || (R[3] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          c("div", fa, " LoRA" + G(K(s).activeLoraFilters.size > 0 ? ` (${K(s).activeLoraFilters.size})` : ""), 1),
          K(s).activeLoraFilters.size > 0 ? (E(), V("button", {
            key: 0,
            class: "cm-context-menu-item",
            onClick: oe(x, ["stop"])
          }, [...R[2] || (R[2] = [
            c("span", { class: "pi pi-stop cm-check-icon" }, null, -1),
            Ne(" Clear all ", -1)
          ])])) : ke("", !0),
          (E(!0), V(pe, null, Pe(K(s).availableLoras.slice(0, 15), (O) => (E(), V("button", {
            key: O,
            class: J(["cm-context-menu-item", { "cm-active": K(s).activeLoraFilters.has(O) }]),
            title: O,
            onClick: oe((D) => T(O), ["stop"])
          }, [
            c("span", {
              class: J(["pi", "cm-check-icon", K(s).activeLoraFilters.has(O) ? "pi-check-square" : "pi-stop"])
            }, null, 2),
            Ne(" " + G(p(O)), 1)
          ], 10, da))), 128))
        ], 64)) : ke("", !0)
      ], 4)) : ke("", !0)
    ]));
  }
}, pa = ["onClick"], ha = {
  key: 0,
  class: "pi pi-check"
}, ma = {
  key: 1,
  style: { width: "16px", display: "inline-block" }
}, Fl = {
  __name: "SortMenu",
  setup(e, { expose: t }) {
    const { state: s } = et(), n = Re("update"), i = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N({ x: 0, y: 0 }), o = /* @__PURE__ */ N(null), r = [
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
    async function p(m, g) {
      if (m.stopPropagation(), i.value = !0, await Ue(), !o.value || !g) return;
      const b = g.getBoundingClientRect(), y = o.value.getBoundingClientRect();
      let T = b.left, x = b.bottom + 4;
      T + y.width > window.innerWidth && (T = window.innerWidth - y.width - 4), x + y.height > window.innerHeight && (x = b.top - y.height - 4), l.value = { x: T, y: x };
    }
    function f(m) {
      s.sortBy = m, a(), n();
    }
    function h() {
      a();
    }
    return Mt(() => document.addEventListener("click", h)), gt(() => document.removeEventListener("click", h)), t({ show: p }), (m, g) => (E(), Ut(_s, { to: "body" }, [
      i.value ? (E(), V("div", {
        key: 0,
        ref_key: "menuEl",
        ref: o,
        class: "cm-context-menu",
        style: it({ left: l.value.x + "px", top: l.value.y + "px" })
      }, [
        g[0] || (g[0] = c("div", { class: "cm-context-menu-label" }, "Sort By", -1)),
        (E(), V(pe, null, Pe(r, (b) => c("button", {
          key: b.value,
          class: J(["cm-context-menu-item", { "cm-active": K(s).sortBy === b.value }]),
          onClick: oe((y) => f(b.value), ["stop"])
        }, [
          K(s).sortBy === b.value ? (E(), V("span", ha)) : (E(), V("span", ma)),
          Ne(" " + G(b.label), 1)
        ], 10, pa)), 64))
      ], 4)) : ke("", !0)
    ]));
  }
}, va = { class: "cm-search-container" }, ga = { class: "cm-search-wrapper" }, ya = { class: "cm-action-buttons" }, ba = ["title"], _a = ["title"], wa = ["title"], xa = ["title"], Ca = {
  __name: "SearchBar",
  setup(e) {
    const { state: t } = et(), s = Re("update"), n = /* @__PURE__ */ N(null), i = /* @__PURE__ */ N(null), l = /* @__PURE__ */ N(null), o = /* @__PURE__ */ N(null), r = [
      { value: "date_desc", label: "Date (newest first)" },
      { value: "date_asc", label: "Date (oldest first)" },
      { value: "size_desc", label: "Size (largest first)" },
      { value: "size_asc", label: "Size (smallest first)" },
      { value: "name_asc", label: "Name (A → Z)" },
      { value: "name_desc", label: "Name (Z → A)" }
    ], a = Me(() => {
      const T = r.find((x) => x.value === t.sortBy);
      return T ? T.label : "Sort";
    }), p = Me(
      () => t.activeUtility !== "all" || t.activeModelFilters.size > 0 || t.activeLoraFilters.size > 0
    );
    function f(T) {
      var x;
      (x = l.value) == null || x.show(T, n.value);
    }
    function h() {
      const [T, x] = t.sortBy.split("_");
      t.sortBy = `${T}_${x === "desc" ? "asc" : "desc"}`, s();
    }
    function m(T) {
      var x;
      (x = o.value) == null || x.show(T, i.value);
    }
    function g() {
      t.workflowOnly = !t.workflowOnly, s();
    }
    function b() {
      t.showFavorites = !t.showFavorites, s();
    }
    function y() {
      t.hideNsfw = !t.hideNsfw, s();
    }
    return (T, x) => (E(), V(pe, null, [
      c("div", va, [
        c("div", ga, [
          x[2] || (x[2] = c("span", { class: "pi pi-search cm-search-icon" }, null, -1)),
          ct(c("input", {
            type: "text",
            placeholder: 'Search: name, seed:, model:, prompt:"..."',
            title: 'Search tips: type freely to search all fields, or use prefixes like seed:12345 model:sdxl prompt:"a brown kitty" lora:detail node:KSampler steps:20 cfg:7 sampler:euler filename:img type:png size:2.3 path:/output date:"Jan 15". Wrap values with spaces/commas in quotes. Multiple terms are AND-matched.',
            class: "cm-search-input",
            "onUpdate:modelValue": x[0] || (x[0] = (w) => K(t).searchQuery = w),
            onInput: x[1] || (x[1] = (w) => K(s)())
          }, null, 544), [
            [St, K(t).searchQuery]
          ])
        ]),
        c("div", ya, [
          c("button", {
            ref_key: "filterBtnRef",
            ref: n,
            class: J(["cm-tool-btn", { active: p.value }]),
            title: "Filter options",
            onClick: f
          }, [...x[3] || (x[3] = [
            c("span", { class: "pi pi-filter" }, null, -1)
          ])], 2),
          c("button", {
            ref_key: "sortBtnRef",
            ref: i,
            class: J(["cm-tool-btn", { active: K(t).sortBy !== "date_desc" }]),
            title: a.value,
            onClick: h,
            onContextmenu: oe(m, ["prevent"])
          }, [...x[4] || (x[4] = [
            c("span", { class: "pi pi-sort-alt" }, null, -1)
          ])], 42, ba),
          c("button", {
            class: J(["cm-tool-btn", { active: K(t).workflowOnly }]),
            title: K(t).workflowOnly ? "Showing workflow assets only" : "Show only assets with workflows",
            onClick: g
          }, [...x[5] || (x[5] = [
            c("span", { class: "pi pi-sitemap" }, null, -1)
          ])], 10, _a),
          c("button", {
            class: J(["cm-tool-btn", { active: K(t).showFavorites }]),
            title: K(t).showFavorites ? "Showing favorites only" : "Show favorites only",
            onClick: b
          }, [...x[6] || (x[6] = [
            c("span", { class: "pi pi-bookmark" }, null, -1)
          ])], 10, wa),
          c("button", {
            class: J(["cm-tool-btn cm-nsfw-toggle", { active: K(t).hideNsfw }]),
            title: K(t).hideNsfw ? "NSFW hidden" : "NSFW visible",
            onClick: y
          }, [
            c("span", {
              class: J(K(t).hideNsfw ? "pi pi-eye-slash" : "pi pi-eye")
            }, null, 2)
          ], 10, xa)
        ])
      ]),
      Se(Tl, {
        ref_key: "filterMenuRef",
        ref: l
      }, null, 512),
      Se(Fl, {
        ref_key: "sortMenuRef",
        ref: o
      }, null, 512)
    ], 64));
  }
}, Sa = { class: "cm-active-filters" }, ka = ["onClick"], $a = {
  __name: "FilterChips",
  setup(e) {
    const { state: t } = et(), s = Re("update"), n = {
      date_asc: "Oldest first",
      size_desc: "Largest first",
      size_asc: "Smallest first",
      name_asc: "Name A→Z",
      name_desc: "Name Z→A"
    }, i = Me(() => {
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
    return (l, o) => (E(), V("div", Sa, [
      (E(!0), V(pe, null, Pe(i.value, (r) => (E(), V("div", {
        key: r.label,
        class: "cm-filter-chip"
      }, [
        Ne(G(r.label) + " ", 1),
        c("span", {
          class: "pi pi-times cm-chip-close",
          onClick: (a) => r.clear()
        }, null, 8, ka)
      ]))), 128))
    ]));
  }
}, Ta = { class: "cm-status-line" }, Fa = { class: "cm-stats-text" }, Ma = {
  __name: "StatusLine",
  setup(e) {
    const { state: t } = et(), s = { all: "All", input: "Inputs", output: "Outputs", custom: "Custom" }, n = Me(() => {
      const i = t.currentFiles.length;
      return `assets: ${i}/${i} | ${s[t.activeTab] || t.activeTab}`;
    });
    return (i, l) => (E(), V("div", Ta, [
      c("span", Fa, G(n.value), 1),
      Se($a)
    ]));
  }
}, Aa = ["title"], Ra = {
  key: 0,
  class: "cm-workflow-badge",
  title: "Has embedded workflow"
}, Ea = {
  key: 1,
  class: "cm-date-badge"
}, Oa = {
  key: 2,
  class: "cm-card-spinner"
}, Pa = ["src"], Ia = { class: "cm-card-overlay" }, La = ["title"], Da = { class: "cm-overlay-meta" }, Na = { class: "cm-overlay-type" }, Va = { class: "cm-overlay-size" }, ja = {
  __name: "AssetCard",
  props: {
    file: { type: Object, required: !0 }
  },
  emits: ["open-viewer", "toggle-favorite", "context-menu"],
  setup(e) {
    const t = e, { state: s } = et(), n = Re("comfyApp"), i = Re("registerVisibility"), l = /* @__PURE__ */ N(null), o = /* @__PURE__ */ N(!1), r = /* @__PURE__ */ N(!1), a = Me(() => {
      const g = t.file.filename;
      return g.length > 20 ? g.substring(0, 17) + "..." : g;
    }), p = Me(() => t.file.created_at ? new Date(t.file.created_at * 1e3).toLocaleDateString(void 0, {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) : ""), f = Me(() => s.selectedFile === t.file);
    let h = null;
    Mt(() => {
      l.value && (h = i(l.value, (g) => {
        o.value = g, g || (r.value = !1);
      }));
    }), gt(() => h == null ? void 0 : h());
    async function m() {
      const g = await (await fetch(t.file.url)).blob();
      await n.handleFile(g);
    }
    return (g, b) => (E(), V("div", {
      ref_key: "cardEl",
      ref: l,
      class: J(["cm-card", { selected: f.value }]),
      onClick: m,
      onDblclick: b[2] || (b[2] = oe((y) => g.$emit("open-viewer"), ["prevent"])),
      onContextmenu: b[3] || (b[3] = oe((y) => g.$emit("context-menu", y), ["prevent"]))
    }, [
      c("button", {
        class: J(["cm-fav-btn", { active: e.file.is_favorite }]),
        title: e.file.is_favorite ? "Remove from favorites" : "Add to favorites",
        onClick: b[0] || (b[0] = oe((y) => g.$emit("toggle-favorite"), ["stop"]))
      }, [
        c("span", {
          class: J(["pi", e.file.is_favorite ? "pi-bookmark-fill" : "pi-bookmark"])
        }, null, 2)
      ], 10, Aa),
      e.file.has_workflow ? (E(), V("div", Ra, [...b[4] || (b[4] = [
        c("span", { class: "pi pi-sitemap" }, null, -1)
      ])])) : ke("", !0),
      p.value ? (E(), V("div", Ea, G(p.value), 1)) : ke("", !0),
      o.value && !r.value ? (E(), V("div", Oa, [...b[5] || (b[5] = [
        c("span", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : ke("", !0),
      o.value ? ct((E(), V("img", {
        key: 3,
        src: e.file.url,
        onLoad: b[1] || (b[1] = (y) => r.value = !0)
      }, null, 40, Pa)), [
        [$l, r.value]
      ]) : ke("", !0),
      c("div", Ia, [
        c("span", {
          class: "cm-overlay-name",
          title: e.file.filename
        }, G(a.value), 9, La),
        c("div", Da, [
          c("span", Na, G(e.file.file_type), 1),
          c("span", Va, G(e.file.file_size_formatted), 1)
        ])
      ])
    ], 34));
  }
}, Ha = {
  key: 0,
  class: "cm-empty-state"
}, Ba = {
  key: 2,
  class: "cm-loading-more"
}, Ua = {
  __name: "AssetGrid",
  emits: ["open-viewer", "toggle-favorite", "context-menu"],
  setup(e) {
    const { state: t } = et(), s = Re("loadMore"), n = /* @__PURE__ */ N(null), i = /* @__PURE__ */ N(null);
    let l = null;
    const o = /* @__PURE__ */ new Map();
    let r = null;
    function a() {
      if (r == null || r.disconnect(), !!n.value) {
        r = new IntersectionObserver(
          (h) => {
            var m;
            for (const g of h)
              (m = o.get(g.target)) == null || m(g.isIntersecting);
          },
          { root: n.value, rootMargin: "400px 0px 400px 0px" }
        );
        for (const h of o.keys())
          r.observe(h);
      }
    }
    function p(h, m) {
      return o.set(h, m), r == null || r.observe(h), () => {
        o.delete(h), r == null || r.unobserve(h);
      };
    }
    qe("registerVisibility", p);
    function f() {
      l && l.disconnect(), !(!i.value || !n.value) && (l = new IntersectionObserver(
        (h) => {
          h[0].isIntersecting && s();
        },
        {
          root: n.value,
          rootMargin: "0px 0px 800px 0px",
          threshold: 0
        }
      ), l.observe(i.value));
    }
    return Mt(() => {
      a(), f();
    }), gt(() => {
      l == null || l.disconnect(), r == null || r.disconnect();
    }), Yt(() => t.currentFiles.length, () => {
      Ue(f);
    }), (h, m) => (E(), V("section", {
      ref_key: "gridEl",
      ref: n,
      class: "cm-asset-grid"
    }, [
      K(t).activeTab === "custom" && K(t).customFolderCount === 0 ? (E(), V("div", Ha, [...m[0] || (m[0] = [
        c("span", { class: "pi pi-folder-open cm-empty-icon" }, null, -1),
        c("p", { class: "cm-empty-text" }, "No custom folders configured", -1),
        c("p", { class: "cm-empty-hint" }, [
          Ne("Click the "),
          c("span", { class: "pi pi-cog" }),
          Ne(" settings button to add custom paths.")
        ], -1)
      ])])) : (E(!0), V(pe, { key: 1 }, Pe(K(t).currentFiles, (g) => (E(), Ut(ja, {
        key: g.full_path,
        file: g,
        onOpenViewer: (b) => h.$emit("open-viewer", g),
        onToggleFavorite: (b) => h.$emit("toggle-favorite", g),
        onContextMenu: (b) => h.$emit("context-menu", b, g)
      }, null, 8, ["file", "onOpenViewer", "onToggleFavorite", "onContextMenu"]))), 128)),
      K(t).isLoadingMore ? (E(), V("div", Ba, [...m[1] || (m[1] = [
        c("span", { class: "pi pi-spin pi-spinner" }, null, -1)
      ])])) : ke("", !0),
      c("div", {
        ref_key: "sentinel",
        ref: i,
        class: "cm-scroll-sentinel"
      }, null, 512)
    ], 512));
  }
}, Wa = { class: "cm-settings-group" }, Ka = { class: "cm-settings-row" }, za = { class: "cm-settings-group" }, Ga = { class: "cm-folder-list" }, qa = ["onClick"], Ja = { class: "cm-add-folder-row" }, Ya = { class: "cm-settings-group" }, Za = {
  key: 0,
  class: "cm-index-stats"
}, Xa = { class: "cm-index-stat-row" }, Qa = { class: "cm-index-stat-value" }, ec = { class: "cm-index-stat-row" }, tc = { class: "cm-index-stat-value" }, sc = { class: "cm-index-stat-row" }, nc = { class: "cm-index-stat-value" }, ic = { class: "cm-index-stat-row" }, lc = { class: "cm-index-stat-value" }, oc = { class: "cm-index-stat-row" }, rc = { class: "cm-index-stat-value" }, ac = { class: "cm-index-stat-row" }, cc = { class: "cm-index-stat-value" }, uc = {
  key: 0,
  class: "cm-index-stat-row"
}, fc = { class: "cm-index-stat-value" }, dc = {
  key: 1,
  class: "cm-index-stats-loading"
}, pc = { class: "cm-settings-row" }, hc = ["disabled"], mc = {
  __name: "SettingsPanel",
  setup(e, { expose: t }) {
    const { state: s } = et(), n = Gs(), i = Re("update"), l = Re("folderSelectorRef"), o = /* @__PURE__ */ N(""), r = /* @__PURE__ */ N(""), a = /* @__PURE__ */ N([]), p = /* @__PURE__ */ N(null), f = /* @__PURE__ */ N(!1);
    let h = null;
    async function m() {
      const O = await n.fetchConfig();
      a.value = O.custom_folders || [], s.customFolderCount = a.value.length, o.value = O.output_path || "";
    }
    async function g() {
      try {
        p.value = await n.fetchIndexStats();
      } catch {
        p.value = null;
      }
    }
    async function b(O) {
      h === "output" ? o.value = O : (r.value = O, await w());
    }
    function y() {
      var O;
      h = "output", (O = l.value) == null || O.show(b);
    }
    function T() {
      var O;
      h = "custom", (O = l.value) == null || O.show(b);
    }
    async function x() {
      const O = await n.postSettings({ output_path: o.value.trim() });
      if (O.ok)
        i();
      else {
        const D = await O.json();
        alert(D.error || "Failed to save setting");
      }
    }
    async function w() {
      const O = r.value.trim();
      if (!O) return;
      (await n.postFolder("add", O)).ok && (r.value = "", await m(), i());
    }
    async function I(O) {
      await n.postFolder("remove", O), await m(), i();
    }
    async function R() {
      f.value = !0;
      try {
        await n.postIndexRebuild(), setTimeout(async () => {
          await g(), f.value = !1, i();
        }, 2e3);
      } catch {
        f.value = !1;
      }
    }
    return Yt(() => s.settingsVisible, (O) => {
      O && g();
    }), Mt(() => {
      m(), s.settingsVisible && g();
    }), t({ loadSettings: m }), (O, D) => (E(), V("section", {
      class: J(["cm-advanced-panel", { visible: K(s).settingsVisible }])
    }, [
      c("div", Wa, [
        D[2] || (D[2] = c("label", { class: "cm-settings-label" }, "Output Directory", -1)),
        c("div", Ka, [
          ct(c("input", {
            "onUpdate:modelValue": D[0] || (D[0] = (Z) => o.value = Z),
            type: "text",
            placeholder: "Default: ComfyUI output folder",
            class: "comfy-input"
          }, null, 512), [
            [St, o.value]
          ]),
          c("button", {
            class: "comfy-btn comfy-btn-secondary",
            onClick: y
          }, "📂"),
          c("button", {
            class: "comfy-btn comfy-btn-primary",
            onClick: x
          }, "Save")
        ])
      ]),
      D[13] || (D[13] = c("hr", { class: "cm-settings-divider" }, null, -1)),
      c("div", za, [
        D[4] || (D[4] = c("label", { class: "cm-settings-label" }, "Custom Folders", -1)),
        c("div", Ga, [
          (E(!0), V(pe, null, Pe(a.value, (Z) => (E(), V("div", {
            key: Z.path,
            class: "cm-folder-item"
          }, [
            c("span", null, G(Z.path), 1),
            c("button", {
              class: "cm-folder-remove-btn",
              title: "Remove folder",
              onClick: (de) => I(Z.path)
            }, [...D[3] || (D[3] = [
              c("span", { class: "pi pi-times" }, null, -1)
            ])], 8, qa)
          ]))), 128))
        ]),
        c("div", Ja, [
          ct(c("input", {
            "onUpdate:modelValue": D[1] || (D[1] = (Z) => r.value = Z),
            type: "text",
            placeholder: "Add custom path...",
            class: "comfy-input"
          }, null, 512), [
            [St, r.value]
          ]),
          c("button", {
            class: "comfy-btn comfy-btn-secondary",
            onClick: T
          }, "📂"),
          c("button", {
            class: "comfy-btn comfy-btn-primary",
            onClick: w
          }, "+")
        ])
      ]),
      D[14] || (D[14] = c("hr", { class: "cm-settings-divider" }, null, -1)),
      c("div", Ya, [
        D[12] || (D[12] = c("label", { class: "cm-settings-label" }, "Index Health", -1)),
        p.value ? (E(), V("div", Za, [
          c("div", Xa, [
            D[5] || (D[5] = c("span", { class: "cm-index-stat-label" }, "Total assets", -1)),
            c("span", Qa, G(p.value.total_assets), 1)
          ]),
          c("div", ec, [
            D[6] || (D[6] = c("span", { class: "cm-index-stat-label" }, "With workflow", -1)),
            c("span", tc, G(p.value.with_workflow), 1)
          ]),
          c("div", sc, [
            D[7] || (D[7] = c("span", { class: "cm-index-stat-label" }, "Without workflow", -1)),
            c("span", nc, G(p.value.without_workflow), 1)
          ]),
          c("div", ic, [
            D[8] || (D[8] = c("span", { class: "cm-index-stat-label" }, "Models", -1)),
            c("span", lc, G(p.value.distinct_models), 1)
          ]),
          c("div", oc, [
            D[9] || (D[9] = c("span", { class: "cm-index-stat-label" }, "LoRAs", -1)),
            c("span", rc, G(p.value.distinct_loras), 1)
          ]),
          c("div", ac, [
            D[10] || (D[10] = c("span", { class: "cm-index-stat-label" }, "DB size", -1)),
            c("span", cc, G(p.value.db_size_formatted), 1)
          ]),
          Object.keys(p.value.extensions).length ? (E(), V("div", uc, [
            D[11] || (D[11] = c("span", { class: "cm-index-stat-label" }, "Types", -1)),
            c("span", fc, [
              (E(!0), V(pe, null, Pe(p.value.extensions, (Z, de) => (E(), V("span", {
                key: de,
                class: "cm-index-ext-chip"
              }, G(de.replace(".", "").toUpperCase()) + ": " + G(Z), 1))), 128))
            ])
          ])) : ke("", !0)
        ])) : (E(), V("div", dc, "Loading...")),
        c("div", pc, [
          c("button", {
            class: "comfy-btn comfy-btn-secondary cm-rebuild-btn",
            disabled: f.value,
            onClick: R
          }, G(f.value ? "Rebuilding..." : "Rebuild Index"), 9, hc),
          c("button", {
            class: "comfy-btn comfy-btn-secondary",
            onClick: g
          }, "Refresh")
        ])
      ])
    ], 2));
  }
}, vc = { class: "cm-info-panel-header" }, gc = ["title"], yc = ["src"], bc = { class: "cm-info-file-meta" }, _c = { class: "cm-info-field" }, wc = { class: "cm-info-field" }, xc = { class: "cm-info-field" }, Cc = { class: "cm-info-field" }, Sc = { class: "cm-info-rating" }, kc = ["onClick"], $c = { class: "cm-info-actions" }, Tc = ["disabled"], Fc = {
  __name: "InfoPanel",
  setup(e) {
    const { state: t } = et(), s = Gs(), n = /* @__PURE__ */ N(""), i = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(!1), r = /* @__PURE__ */ N(!1);
    Yt(() => t.selectedFile, (h) => {
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
            const m = await h.json();
            alert(m.error || "Failed to save metadata");
          }
        } finally {
          o.value = !1;
        }
      }
    }
    return (h, m) => {
      var g, b, y, T, x;
      return E(), V("section", {
        class: J(["cm-info-panel", { visible: K(t).infoPanelVisible }])
      }, [
        c("div", vc, [
          c("span", {
            class: "cm-info-panel-title",
            title: (g = K(t).selectedFile) == null ? void 0 : g.filename
          }, G((b = K(t).selectedFile) == null ? void 0 : b.filename), 9, gc),
          c("button", {
            class: "cm-info-close-btn",
            onClick: p
          }, [...m[3] || (m[3] = [
            c("span", { class: "pi pi-times" }, null, -1)
          ])])
        ]),
        K(t).selectedFile ? (E(), V("img", {
          key: 0,
          class: "cm-info-preview",
          src: (y = K(t).selectedFile) == null ? void 0 : y.url,
          alt: ""
        }, null, 8, yc)) : ke("", !0),
        c("div", bc, [
          c("span", null, G((T = K(t).selectedFile) == null ? void 0 : T.file_type), 1),
          c("span", null, G((x = K(t).selectedFile) == null ? void 0 : x.file_size_formatted), 1)
        ]),
        c("div", _c, [
          m[4] || (m[4] = c("label", { class: "cm-info-label" }, "Title", -1)),
          ct(c("input", {
            "onUpdate:modelValue": m[0] || (m[0] = (w) => n.value = w),
            class: "cm-info-input",
            type: "text",
            placeholder: "Image title..."
          }, null, 512), [
            [St, n.value]
          ])
        ]),
        c("div", wc, [
          m[5] || (m[5] = c("label", { class: "cm-info-label" }, "Description", -1)),
          ct(c("textarea", {
            "onUpdate:modelValue": m[1] || (m[1] = (w) => i.value = w),
            class: "cm-info-input",
            placeholder: "Image description...",
            rows: "2"
          }, null, 512), [
            [St, i.value]
          ])
        ]),
        c("div", xc, [
          m[6] || (m[6] = c("label", { class: "cm-info-label" }, "Tags", -1)),
          ct(c("input", {
            "onUpdate:modelValue": m[2] || (m[2] = (w) => l.value = w),
            class: "cm-info-input",
            type: "text",
            placeholder: "Comma-separated tags..."
          }, null, 512), [
            [St, l.value]
          ])
        ]),
        c("div", Cc, [
          m[7] || (m[7] = c("label", { class: "cm-info-label" }, "Rating", -1)),
          c("div", Sc, [
            (E(), V(pe, null, Pe(5, (w) => c("button", {
              key: w,
              class: J(["cm-info-star", { active: w <= K(t).currentRating }]),
              onClick: (I) => a(w)
            }, "★", 10, kc)), 64))
          ])
        ]),
        c("div", $c, [
          c("button", {
            class: "cm-info-save-btn",
            disabled: o.value,
            onClick: f
          }, G(o.value ? "Saving..." : "Save Metadata"), 9, Tc)
        ]),
        c("div", {
          class: J(["cm-info-saved-msg", { show: r.value }])
        }, "Saved!", 2)
      ], 2);
    };
  }
}, Mc = ["onClick"], Ac = { class: "cm-submenu-key" }, Rc = ["title"], Ec = ["onMouseenter"], Oc = { class: "cm-submenu-label" }, Pc = ["onClick"], Ic = { class: "cm-submenu-key" }, Lc = ["title"], Dc = {
  __name: "ContextMenu",
  setup(e, { expose: t }) {
    const { state: s } = et(), n = Gs(), i = Re("comfyApp"), l = Re("update"), o = Re("openViewer"), r = Re("toggleFavorite"), a = /* @__PURE__ */ N(!1), p = /* @__PURE__ */ N(null), f = /* @__PURE__ */ N({ x: 0, y: 0 }), h = /* @__PURE__ */ N(null), m = /* @__PURE__ */ N(null), g = /* @__PURE__ */ N({ x: 0, y: 0 }), b = /* @__PURE__ */ N(null);
    let y = null;
    const T = /* @__PURE__ */ N(null), x = /* @__PURE__ */ N({ x: 0, y: 0 }), w = /* @__PURE__ */ N(null);
    let I = null;
    const R = Me(() => {
      var ue;
      if (!((ue = p.value) != null && ue.file_metadata)) return [];
      const ie = p.value.file_metadata, M = [];
      return ie.filename && M.push({ label: "filename", value: ie.filename }), ie.file_type && M.push({ label: "file_type", value: ie.file_type }), ie.file_size && M.push({ label: "file_size", value: ie.file_size }), ie.created_date && M.push({ label: "created", value: ie.created_date }), ie.full_path && M.push({ label: "path", value: ie.full_path }), M;
    }), O = Me(() => {
      var ie, M;
      return !((ie = p.value) != null && ie.has_workflow) || !((M = p.value) != null && M.workflow_nodes) ? [] : p.value.workflow_nodes.map((ue) => ({
        label: `${ue.class_type || "Node"} #${ue.id}`,
        children: Object.entries(ue.inputs).map(([Ce, Te]) => ({ label: Ce, value: Te }))
      }));
    });
    function D(ie, M = 40) {
      const ue = String(ie);
      return ue.length > M ? ue.substring(0, M - 1) + "…" : ue;
    }
    function Z(ie) {
      navigator.clipboard.writeText(String(ie)).then(() => {
        const M = document.createElement("div");
        M.className = "cm-copy-toast", M.textContent = "Copied!", document.body.appendChild(M), requestAnimationFrame(() => M.classList.add("show")), setTimeout(() => {
          M.classList.remove("show"), setTimeout(() => M.remove(), 200);
        }, 1200);
      });
    }
    function de(ie) {
      Z(ie), fe();
    }
    function fe() {
      a.value = !1, m.value = null, T.value = null, clearTimeout(y), clearTimeout(I);
    }
    async function $e(ie, M) {
      if (ie.preventDefault(), ie.stopPropagation(), fe(), p.value = M, a.value = !0, await Ue(), !h.value) return;
      const ue = h.value.getBoundingClientRect();
      let Ce = ie.clientX, Te = ie.clientY;
      Ce + ue.width > window.innerWidth && (Ce = window.innerWidth - ue.width - 4), Te + ue.height > window.innerHeight && (Te = window.innerHeight - ue.height - 4), f.value = { x: Ce, y: Te };
    }
    async function Ee(ie, M) {
      ce(), T.value = null, m.value = M, await Ue(), H(ie.currentTarget, b);
    }
    function H(ie, M) {
      if (!M.value) return;
      const ue = ie.getBoundingClientRect(), Ce = M.value.getBoundingClientRect();
      let Te = ue.right + 2, Ie = ue.top;
      Te + Ce.width > window.innerWidth && (Te = ue.left - Ce.width - 2), Ie + Ce.height > window.innerHeight && (Ie = Math.max(4, window.innerHeight - Ce.height - 4)), g.value = { x: Te, y: Ie };
    }
    function X(ie) {
      y = setTimeout(() => {
        m.value = null, T.value = null;
      }, 150);
    }
    function ce() {
      clearTimeout(y);
    }
    async function De(ie, M) {
      if (se(), ce(), T.value = M, await Ue(), !w.value) return;
      const ue = ie.currentTarget.getBoundingClientRect(), Ce = w.value.getBoundingClientRect();
      let Te = ue.right + 2, Ie = ue.top;
      Te + Ce.width > window.innerWidth && (Te = ue.left - Ce.width - 2), Ie + Ce.height > window.innerHeight && (Ie = Math.max(4, window.innerHeight - Ce.height - 4)), x.value = { x: Te, y: Ie };
    }
    function te() {
      I = setTimeout(() => {
        T.value = null;
      }, 150);
    }
    function se() {
      clearTimeout(I);
    }
    function re() {
      fe(), p.value && r(p.value);
    }
    async function B() {
      if (fe(), !p.value) return;
      const ie = await (await fetch(p.value.url)).blob();
      await i.handleFile(ie);
    }
    function U() {
      fe(), p.value && o(p.value);
    }
    async function Y() {
      fe(), p.value && await n.postOpenFile(p.value.full_path);
    }
    function we() {
      fe(), p.value && (s.selectedFile = p.value, s.infoPanelVisible = !0);
    }
    async function Ze() {
      if (fe(), !p.value || !confirm(`Delete "${p.value.filename}"? This cannot be undone.`)) return;
      (await n.postDelete(p.value.full_path)).ok && l();
    }
    function rt() {
      fe();
    }
    return Mt(() => {
      document.addEventListener("click", rt), document.addEventListener("contextmenu", rt);
    }), gt(() => {
      document.removeEventListener("click", rt), document.removeEventListener("contextmenu", rt);
    }), t({ show: $e }), (ie, M) => {
      var ue, Ce, Te, Ie, tt, u;
      return E(), Ut(_s, { to: "body" }, [
        a.value ? (E(), V("div", {
          key: 0,
          ref_key: "menuEl",
          ref: h,
          class: "cm-context-menu",
          style: it({ left: f.value.x + "px", top: f.value.y + "px" }),
          onClick: M[4] || (M[4] = oe(() => {
          }, ["stop"])),
          onContextmenu: M[5] || (M[5] = oe(() => {
          }, ["stop"]))
        }, [
          c("button", {
            class: "cm-context-menu-item",
            onClick: oe(re, ["stop"])
          }, [
            c("span", {
              class: J(["pi", (ue = p.value) != null && ue.is_favorite ? "pi-bookmark-fill" : "pi-bookmark"])
            }, null, 2),
            Ne(" " + G((Ce = p.value) != null && Ce.is_favorite ? "Remove from favorites" : "Add to favorites"), 1)
          ]),
          M[20] || (M[20] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          c("button", {
            class: "cm-context-menu-item",
            onClick: oe(B, ["stop"])
          }, [...M[13] || (M[13] = [
            c("span", { class: "pi pi-download" }, null, -1),
            Ne(" Load workflow ", -1)
          ])]),
          c("button", {
            class: "cm-context-menu-item",
            onClick: oe(U, ["stop"])
          }, [...M[14] || (M[14] = [
            c("span", { class: "pi pi-eye" }, null, -1),
            Ne(" View image ", -1)
          ])]),
          c("button", {
            class: "cm-context-menu-item",
            onClick: oe(Y, ["stop"])
          }, [...M[15] || (M[15] = [
            c("span", { class: "pi pi-external-link" }, null, -1),
            Ne(" Open in external viewer ", -1)
          ])]),
          ((Te = p.value) == null ? void 0 : Te.file_type) === "PNG" ? (E(), V("button", {
            key: 0,
            class: "cm-context-menu-item",
            onClick: oe(we, ["stop"])
          }, [...M[16] || (M[16] = [
            c("span", { class: "pi pi-pencil" }, null, -1),
            Ne(" Edit metadata ", -1)
          ])])) : ke("", !0),
          M[21] || (M[21] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          M[22] || (M[22] = c("div", { class: "cm-context-menu-label" }, "Copy", -1)),
          R.value.length > 0 ? (E(), V("div", {
            key: 1,
            class: "cm-context-menu-item cm-submenu-item",
            onMouseenter: M[0] || (M[0] = (d) => Ee(d, "meta")),
            onMouseleave: M[1] || (M[1] = (d) => X())
          }, [...M[17] || (M[17] = [
            c("span", { class: "pi pi-info-circle" }, null, -1),
            c("span", { class: "cm-submenu-label" }, "Metadata", -1),
            c("span", { class: "cm-submenu-arrow" }, "►", -1)
          ])], 32)) : ke("", !0),
          (Ie = p.value) != null && Ie.has_workflow && ((u = (tt = p.value) == null ? void 0 : tt.workflow_nodes) == null ? void 0 : u.length) > 0 ? (E(), V("div", {
            key: 2,
            class: "cm-context-menu-item cm-submenu-item",
            onMouseenter: M[2] || (M[2] = (d) => Ee(d, "workflow")),
            onMouseleave: M[3] || (M[3] = (d) => X())
          }, [...M[18] || (M[18] = [
            c("span", { class: "pi pi-sitemap" }, null, -1),
            c("span", { class: "cm-submenu-label" }, "Workflow", -1),
            c("span", { class: "cm-submenu-arrow" }, "►", -1)
          ])], 32)) : ke("", !0),
          M[23] || (M[23] = c("div", { class: "cm-context-menu-separator" }, null, -1)),
          c("button", {
            class: "cm-context-menu-item cm-danger",
            onClick: oe(Ze, ["stop"])
          }, [...M[19] || (M[19] = [
            c("span", { class: "pi pi-trash" }, null, -1),
            Ne(" Delete ", -1)
          ])])
        ], 36)) : ke("", !0),
        m.value === "meta" ? (E(), V("div", {
          key: 1,
          ref_key: "submenuEl",
          ref: b,
          class: "cm-submenu",
          style: it({ left: g.value.x + "px", top: g.value.y + "px" }),
          onMouseenter: M[6] || (M[6] = (d) => ce()),
          onMouseleave: M[7] || (M[7] = (d) => X())
        }, [
          (E(!0), V(pe, null, Pe(R.value, (d) => (E(), V("button", {
            key: d.label,
            class: "cm-context-menu-item cm-submenu-copy-row",
            onClick: oe((v) => de(d.value), ["stop"])
          }, [
            c("span", Ac, G(d.label), 1),
            c("span", {
              class: "cm-submenu-value",
              title: String(d.value)
            }, G(D(d.value)), 9, Rc)
          ], 8, Mc))), 128))
        ], 36)) : ke("", !0),
        m.value === "workflow" ? (E(), V("div", {
          key: 2,
          ref_key: "submenuEl",
          ref: b,
          class: "cm-submenu",
          style: it({ left: g.value.x + "px", top: g.value.y + "px" }),
          onMouseenter: M[9] || (M[9] = (d) => ce()),
          onMouseleave: M[10] || (M[10] = (d) => X())
        }, [
          (E(!0), V(pe, null, Pe(O.value, (d) => (E(), V("div", {
            key: d.label,
            class: "cm-context-menu-item cm-submenu-item",
            onMouseenter: (v) => De(v, d),
            onMouseleave: M[8] || (M[8] = (v) => te())
          }, [
            c("span", Oc, G(d.label), 1),
            M[24] || (M[24] = c("span", { class: "cm-submenu-arrow" }, "►", -1))
          ], 40, Ec))), 128))
        ], 36)) : ke("", !0),
        T.value ? (E(), V("div", {
          key: 3,
          ref_key: "nodeSubmenuEl",
          ref: w,
          class: "cm-submenu",
          style: it({ left: x.value.x + "px", top: x.value.y + "px" }),
          onMouseenter: M[11] || (M[11] = (d) => se()),
          onMouseleave: M[12] || (M[12] = (d) => te())
        }, [
          (E(!0), V(pe, null, Pe(T.value.children, (d) => (E(), V("button", {
            key: d.label,
            class: "cm-context-menu-item cm-submenu-copy-row",
            onClick: oe((v) => de(d.value), ["stop"])
          }, [
            c("span", Ic, G(d.label), 1),
            c("span", {
              class: "cm-submenu-value",
              title: String(d.value)
            }, G(D(d.value)), 9, Lc)
          ], 8, Pc))), 128))
        ], 36)) : ke("", !0)
      ]);
    };
  }
}, Nc = ["onClick"], Vc = {
  key: 0,
  class: "cm-card-spinner"
}, jc = ["src", "onLoad"], Hc = ["title"], Bc = { class: "cm-viewer-grid-toolbar" }, Uc = { class: "cm-viewer-grid-toolbar-center" }, Wc = { class: "cm-viewer-grid-search-wrapper" }, Kc = ["title"], zc = { class: "cm-viewer-grid-toolbar-slider" }, Gc = { class: "cm-viewer-grid-zoom-pct" }, qc = {
  __name: "GridView",
  props: {
    files: { type: Array, required: !0 },
    currentIndex: { type: Number, required: !0 }
  },
  setup(e, { expose: t }) {
    const s = e, { state: n } = et(), i = Re("imageViewerRef"), l = /* @__PURE__ */ N(null), o = /* @__PURE__ */ N([]), r = /* @__PURE__ */ N(null), a = /* @__PURE__ */ N(null), p = /* @__PURE__ */ N(null), f = /* @__PURE__ */ N(null), h = /* @__PURE__ */ N(""), m = /* @__PURE__ */ N(160), g = /* @__PURE__ */ N(160);
    qe("update", () => Z());
    const b = /* @__PURE__ */ Bt(/* @__PURE__ */ new Set()), y = /* @__PURE__ */ Bt(/* @__PURE__ */ new Set());
    let T = null;
    function x() {
      T == null || T.disconnect();
      const B = new Set(s.files.map((Y) => Y.full_path));
      for (const Y of b)
        B.has(Y) || b.delete(Y);
      for (const Y of y)
        B.has(Y) || y.delete(Y);
      const U = l.value;
      U && (T = new IntersectionObserver(
        (Y) => {
          for (const we of Y) {
            const Ze = we.target.dataset.vpath;
            we.isIntersecting ? b.add(Ze) : (b.delete(Ze), y.delete(Ze));
          }
        },
        { root: U, rootMargin: "400px 0px 400px 0px" }
      ), Ue(() => {
        U.querySelectorAll(".cm-viewer-grid-item").forEach((we, Ze) => {
          var rt;
          we.dataset.vpath = (rt = s.files[Ze]) == null ? void 0 : rt.full_path, T.observe(we);
        });
      }));
    }
    gt(() => T == null ? void 0 : T.disconnect());
    const w = Me(
      () => n.activeUtility !== "all" || n.activeModelFilters.size > 0 || n.activeLoraFilters.size > 0
    ), I = Me(() => Math.round(m.value / g.value * 100));
    function R(B) {
      return B.length > 18 ? B.substring(0, 15) + "..." : B;
    }
    function O(B) {
      var U;
      (U = i.value) == null || U.selectFromGrid(B);
    }
    function D() {
      var B;
      (B = i.value) == null || B.close();
    }
    async function Z() {
      var U;
      await ((U = i.value) == null ? void 0 : U.gridUpdate(h.value)) && Ue(() => {
        De();
      });
    }
    function de() {
      Z();
    }
    function fe(B) {
      var U;
      (U = p.value) == null || U.show(B, r.value);
    }
    function $e() {
      const [B, U] = n.sortBy.split("_");
      n.sortBy = `${B}_${U === "desc" ? "asc" : "desc"}`, Z();
    }
    function Ee(B) {
      var U;
      (U = f.value) == null || U.show(B, a.value);
    }
    function H() {
      n.workflowOnly = !n.workflowOnly, Z();
    }
    function X() {
      n.showFavorites = !n.showFavorites, Z();
    }
    function ce() {
      n.hideNsfw = !n.hideNsfw, Z();
    }
    function De() {
      const B = l.value;
      if (!B || !s.files.length) return;
      B.classList.remove("cm-grid-slider-active"), B.style.removeProperty("--grid-thumb-size");
      const U = 7;
      B.style.setProperty("--grid-cols", U);
      const Y = B.getBoundingClientRect(), we = Math.round(Y.width / U);
      g.value = Math.max(80, Math.min(400, we)), m.value = g.value, x();
    }
    function te() {
      const B = l.value;
      B && (B.classList.add("cm-grid-slider-active"), B.style.setProperty("--grid-thumb-size", `${m.value}px`));
    }
    function se(B) {
      if (n.viewerMode !== "grid" || !B.target.closest(".cm-viewer-grid-item.active")) return;
      B.preventDefault();
      const Y = B.deltaY < 0 ? 20 : -20;
      m.value = Math.max(80, Math.min(400, m.value + Y)), te();
    }
    function re() {
      T == null || T.disconnect(), b.clear(), y.clear();
      const B = l.value;
      B && (B.classList.remove("cm-grid-slider-active"), B.style.removeProperty("--grid-thumb-size"), B.style.removeProperty("--grid-cols")), h.value = "";
    }
    return t({ render: De, reset: re }), (B, U) => (E(), V(pe, null, [
      c("div", {
        ref_key: "containerRef",
        ref: l,
        class: "cm-viewer-grid",
        onWheel: se
      }, [
        (E(!0), V(pe, null, Pe(e.files, (Y, we) => (E(), V("div", {
          key: Y.full_path,
          ref_for: !0,
          ref_key: "itemRefs",
          ref: o,
          class: J(["cm-viewer-grid-item", { active: we === e.currentIndex }]),
          onClick: oe((Ze) => O(we), ["stop"])
        }, [
          b.has(Y.full_path) && !y.has(Y.full_path) ? (E(), V("div", Vc, [...U[2] || (U[2] = [
            c("span", { class: "pi pi-spin pi-spinner" }, null, -1)
          ])])) : ke("", !0),
          b.has(Y.full_path) ? ct((E(), V("img", {
            key: 1,
            src: Y.url,
            draggable: "false",
            onLoad: (Ze) => y.add(Y.full_path)
          }, null, 40, jc)), [
            [$l, y.has(Y.full_path)]
          ]) : ke("", !0),
          c("span", {
            class: "cm-viewer-grid-label",
            title: Y.filename
          }, G(R(Y.filename)), 9, Hc)
        ], 10, Nc))), 128))
      ], 544),
      c("div", Bc, [
        c("button", {
          class: "cm-viewer-grid-close",
          title: "Close grid view",
          onClick: D
        }, [...U[3] || (U[3] = [
          c("span", { class: "pi pi-times" }, null, -1)
        ])]),
        c("div", Uc, [
          c("div", Wc, [
            U[4] || (U[4] = c("span", { class: "pi pi-search cm-viewer-grid-search-icon" }, null, -1)),
            ct(c("input", {
              type: "text",
              class: "cm-viewer-grid-search",
              placeholder: "Search...",
              "onUpdate:modelValue": U[0] || (U[0] = (Y) => h.value = Y),
              onInput: de
            }, null, 544), [
              [St, h.value]
            ])
          ]),
          c("button", {
            ref_key: "filterBtnRef",
            ref: r,
            class: J(["cm-viewer-grid-btn cm-viewer-grid-filter", { active: w.value }]),
            title: "Filter options",
            onClick: fe
          }, [...U[5] || (U[5] = [
            c("span", { class: "pi pi-filter" }, null, -1)
          ])], 2),
          c("button", {
            ref_key: "sortBtnRef",
            ref: a,
            class: J(["cm-viewer-grid-btn cm-viewer-grid-sort", { active: K(n).sortBy !== "date_desc" }]),
            title: "Sort by date",
            onClick: $e,
            onContextmenu: oe(Ee, ["prevent"])
          }, [...U[6] || (U[6] = [
            c("span", { class: "pi pi-sort-alt" }, null, -1)
          ])], 34),
          c("button", {
            class: J(["cm-viewer-grid-btn cm-viewer-grid-workflow", { active: K(n).workflowOnly }]),
            title: "Show only assets with workflows",
            onClick: H
          }, [...U[7] || (U[7] = [
            c("span", { class: "pi pi-sitemap" }, null, -1)
          ])], 2),
          c("button", {
            class: J(["cm-viewer-grid-btn cm-viewer-grid-fav", { active: K(n).showFavorites }]),
            title: "Show favorites only",
            onClick: X
          }, [...U[8] || (U[8] = [
            c("span", { class: "pi pi-bookmark" }, null, -1)
          ])], 2),
          c("button", {
            class: J(["cm-viewer-grid-btn cm-viewer-grid-nsfw", { active: K(n).hideNsfw }]),
            title: K(n).hideNsfw ? "NSFW hidden" : "NSFW visible",
            onClick: ce
          }, [
            c("span", {
              class: J(K(n).hideNsfw ? "pi pi-eye-slash" : "pi pi-eye")
            }, null, 2)
          ], 10, Kc)
        ]),
        c("div", zc, [
          U[9] || (U[9] = c("span", { class: "pi pi-search-minus cm-viewer-grid-slider-icon" }, null, -1)),
          ct(c("input", {
            type: "range",
            class: "cm-viewer-grid-slider",
            min: "80",
            max: "400",
            step: "10",
            "onUpdate:modelValue": U[1] || (U[1] = (Y) => m.value = Y),
            onInput: te
          }, null, 544), [
            [
              St,
              m.value,
              void 0,
              { number: !0 }
            ]
          ]),
          U[10] || (U[10] = c("span", { class: "pi pi-search-plus cm-viewer-grid-slider-icon" }, null, -1)),
          c("span", Gc, G(I.value) + "%", 1)
        ])
      ]),
      Se(Tl, {
        ref_key: "filterMenuRef",
        ref: p
      }, null, 512),
      Se(Fl, {
        ref_key: "sortMenuRef",
        ref: f
      }, null, 512)
    ], 64));
  }
}, Jc = { class: "cm-viewer-topbar" }, Yc = ["title"], Zc = { class: "cm-viewer-topbar-size" }, Xc = { class: "cm-viewer-topbar-counter" }, Qc = { class: "cm-viewer-topbar-actions" }, eu = ["src"], tu = ["src"], su = ["src"], nu = ["onClick"], iu = { class: "cm-viewer-section" }, lu = { class: "cm-viewer-row-label" }, ou = ["title", "onClick"], ru = ["onClick"], au = {
  key: 1,
  class: "cm-viewer-empty"
}, cu = { class: "cm-viewer-section" }, uu = { class: "cm-viewer-node-title" }, fu = ["onClick"], du = { class: "cm-viewer-row-label" }, pu = ["title", "onClick"], hu = ["onClick"], mu = {
  key: 1,
  class: "cm-viewer-empty"
}, ns = 32, vu = {
  __name: "ImageViewer",
  setup(e, { expose: t }) {
    const s = Re("comfyApp"), n = [25, 50, 75, 100, 150, 200, 300, 500], i = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N([]), o = /* @__PURE__ */ N(0), r = /* @__PURE__ */ N(1), a = /* @__PURE__ */ N(0), p = /* @__PURE__ */ N(0), f = /* @__PURE__ */ N(1), h = /* @__PURE__ */ N(!1), m = /* @__PURE__ */ N(!1), g = /* @__PURE__ */ N(!1), b = /* @__PURE__ */ N("carousel"), y = /* @__PURE__ */ N(""), T = /* @__PURE__ */ N(!1), x = /* @__PURE__ */ N(!0), w = /* @__PURE__ */ Bt({}), I = /* @__PURE__ */ N(!1);
    let R = /* @__PURE__ */ N(!1), O = 0, D = 0, Z = !1, de = !1, fe = 0, $e = 0, Ee = 0, H = 0, X = !1, ce = null;
    const De = /* @__PURE__ */ N(null), te = /* @__PURE__ */ N(null), se = /* @__PURE__ */ N(null), re = /* @__PURE__ */ N(null), B = /* @__PURE__ */ N(null), U = /* @__PURE__ */ N(null), Y = Me(() => l.value[o.value] || null), we = Me(() => Math.round(r.value * 100)), Ze = Me(
      () => r.value === f.value && a.value === 0 && p.value === 0
    ), rt = Me(() => {
      var F;
      if (!I.value || l.value.length <= 1) return "";
      const C = (o.value - 1 + l.value.length) % l.value.length;
      return ((F = l.value[C]) == null ? void 0 : F.url) || "";
    }), ie = Me(() => {
      var F;
      if (!I.value || l.value.length <= 1) return "";
      const C = (o.value + 1) % l.value.length;
      return ((F = l.value[C]) == null ? void 0 : F.url) || "";
    }), M = Me(() => {
      const C = Y.value;
      if (!C) return [];
      const F = C.file_metadata || {}, Q = [], le = (Fe, Le) => {
        Le && Q.push([Fe, Le]);
      };
      return le("Filename", F.filename || C.filename), le("Type", F.file_type || C.file_type), le("Size", F.file_size || C.file_size_formatted), le("Created", F.created_date || (C.created_at ? new Date(C.created_at * 1e3).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" }) : "")), le("Path", F.full_path || C.full_path), Q;
    });
    function ue(C, F) {
      const Q = String(F);
      return w[C] ? Q : Q.length > ns ? Q.substring(0, ns - 1) + "…" : Q;
    }
    function Ce(C, F) {
      String(F).length <= ns || (w[C] = !w[C]);
    }
    function Te(C) {
      navigator.clipboard.writeText(C).then(() => {
        const F = document.createElement("div");
        F.className = "cm-copy-toast", F.textContent = "Copied!", document.body.appendChild(F), requestAnimationFrame(() => F.classList.add("show")), setTimeout(() => {
          F.classList.remove("show"), setTimeout(() => F.remove(), 200);
        }, 1200);
      });
    }
    function Ie(C) {
      var Fe;
      const F = JSON.stringify({
        nodes: [{ type: C.class_type, pos: [0, 0] }],
        links: []
      }), Q = localStorage.getItem("litegrapheditor_clipboard");
      localStorage.setItem("litegrapheditor_clipboard", F), s.canvas.pasteFromClipboard(), Q !== null ? localStorage.setItem("litegrapheditor_clipboard", Q) : localStorage.removeItem("litegrapheditor_clipboard");
      const le = s.canvas.selected_nodes;
      if (le)
        for (const Le in le) {
          const yt = le[Le];
          if (yt.widgets)
            for (const ze of yt.widgets)
              ze.name in C.inputs && (ze.value = C.inputs[ze.name], (Fe = ze.callback) == null || Fe.call(ze, ze.value));
        }
    }
    function tt() {
      se.value && (se.value.style.transform = `translate(${a.value}px, ${p.value}px) scale(${r.value})`);
    }
    function u() {
      const C = se.value;
      if (!(C != null && C.naturalWidth) || !(C != null && C.naturalHeight)) return;
      const F = te.value;
      if (!F) return;
      const Q = C.naturalWidth, le = C.naturalHeight, Fe = F.getBoundingClientRect(), Le = Math.min(Fe.width / Q, Fe.height / le, 1), yt = Q * Le, ze = le * Le, be = 512, je = Math.max(yt, ze);
      je > be && (r.value = be / je), f.value = r.value;
    }
    function d(C, F, Q) {
      const le = r.value;
      if (r.value = Math.max(0.1, Math.min(10, r.value + C)), F !== void 0 && Q !== void 0) {
        const Fe = te.value.getBoundingClientRect(), Le = F - Fe.left - Fe.width / 2, yt = Q - Fe.top - Fe.height / 2, ze = 1 - r.value / le;
        a.value += Le * ze, p.value += yt * ze;
      }
      tt(), te.value && (te.value.style.cursor = r.value > f.value ? "grab" : ""), _();
    }
    function v() {
      var C;
      if (r.value = 1, a.value = 0, p.value = 0, !m.value && ((C = se.value) != null && C.naturalWidth)) {
        u();
        const F = se.value;
        F.style.transition = "none", tt(), F.offsetHeight, F.style.transition = "";
      } else
        tt();
      te.value && (te.value.style.cursor = ""), _();
    }
    function $(C) {
      r.value = C / 100, a.value = 0, p.value = 0, tt(), te.value && (te.value.style.cursor = r.value > f.value ? "grab" : ""), _(), g.value = !1;
    }
    function _() {
      const C = r.value <= f.value && l.value.length > 1 && !m.value && b.value !== "grid";
      I.value = C;
    }
    function S(C) {
      if (!(l.value.length <= 1 || Z))
        if (I.value) {
          Z = !0;
          const F = C > 0 ? "cm-slide-out-left" : "cm-slide-out-right", Q = C > 0 ? "cm-slide-in-from-right" : "cm-slide-in-from-left", le = te.value;
          le.classList.add(F);
          const Fe = () => {
            le.removeEventListener("animationend", Fe), le.classList.remove(F), o.value = (o.value + C + l.value.length) % l.value.length, v(), le.classList.add(Q);
            const Le = () => {
              le.removeEventListener("animationend", Le), le.classList.remove(Q), Z = !1;
            };
            le.addEventListener("animationend", Le, { once: !0 });
          };
          le.addEventListener("animationend", Fe, { once: !0 });
        } else
          o.value = (o.value + C + l.value.length) % l.value.length, v();
    }
    function L() {
      h.value = !h.value;
    }
    function P() {
      m.value = !m.value, m.value ? (f.value = 1, r.value = 1, a.value = 0, p.value = 0, tt(), te.value && (te.value.style.cursor = ""), h.value && (h.value = !1)) : v(), _();
    }
    function A() {
      b.value === "grid" ? (b.value = "carousel", _()) : (b.value = "grid", _(), Ue(() => {
        var C;
        return (C = U.value) == null ? void 0 : C.render();
      }));
    }
    function k() {
      const C = se.value;
      C && (y.value = `${C.naturalWidth} × ${C.naturalHeight}`, m.value ? tt() : (u(), C.style.transition = "none", tt(), C.offsetHeight, C.style.transition = ""), _());
    }
    function z(C) {
      const F = C.deltaY > 0 ? -0.15 : 0.15;
      d(F, C.clientX, C.clientY);
    }
    function j(C) {
      I.value && !Z ? (C.preventDefault(), R.value = !0, O = C.clientX, D = 0, te.value && (te.value.style.cursor = "grabbing")) : r.value > f.value && (C.preventDefault(), de = !0, fe = C.clientX, $e = C.clientY, Ee = a.value, H = p.value, te.value && (te.value.style.cursor = "grabbing"));
    }
    function W(C) {
      if (R.value) {
        D = C.clientX - O, se.value && (se.value.style.transform = `translateX(${D}px) scale(${r.value})`), re.value && (re.value.style.transform = `translateX(calc(-50% + ${D}px))`), B.value && (B.value.style.transform = `translateX(calc(50% + ${D}px))`);
        return;
      }
      de && (a.value = Ee + (C.clientX - fe), p.value = H + (C.clientY - $e), tt());
    }
    function q() {
      if (R.value) {
        if (R.value = !1, X = !0, re.value && (re.value.style.transform = ""), B.value && (B.value.style.transform = ""), Math.abs(D) > 50) {
          const C = D < 0 ? 1 : -1;
          o.value = (o.value + C + l.value.length) % l.value.length, v();
          const F = C > 0 ? "cm-slide-in-from-right" : "cm-slide-in-from-left";
          Z = !0;
          const Q = te.value;
          Q.classList.add(F), Q.addEventListener("animationend", () => {
            Q.classList.remove(F), Z = !1;
          }, { once: !0 });
        } else
          se.value && (se.value.style.transform = `translate(${a.value}px, ${p.value}px) scale(${r.value})`);
        te.value && (te.value.style.cursor = ""), D = 0;
        return;
      }
      de && (de = !1, te.value && (te.value.style.cursor = r.value > f.value ? "grab" : ""));
    }
    function ae(C) {
      if (X) {
        X = !1;
        return;
      }
      if (b.value === "grid") return;
      C.target.closest(".cm-viewer-img, .cm-viewer-panel, .cm-viewer-nav, .cm-viewer-topbar, .cm-viewer-zoom-chip, .cm-viewer-carousel-ghost") || Oe();
    }
    function ge(C) {
      if (i.value && !(C.target.tagName === "INPUT" || C.target.tagName === "TEXTAREA"))
        switch (C.key) {
          case "Escape":
            Oe();
            break;
          case "ArrowLeft":
            C.preventDefault(), S(-1);
            break;
          case "ArrowRight":
            C.preventDefault(), S(1);
            break;
          case "+":
          case "=":
            C.preventDefault(), d(0.25);
            break;
          case "-":
            C.preventDefault(), d(-0.25);
            break;
          case "0":
            C.preventDefault(), v();
            break;
          case "i":
          case "I":
            C.preventDefault(), L();
            break;
          case "f":
          case "F":
            C.preventDefault(), P();
            break;
          case "g":
          case "G":
            C.preventDefault(), A();
            break;
        }
    }
    function he(C, F, Q) {
      l.value = C, o.value = Math.max(0, Math.min(F, C.length - 1)), ce = Q || null, v(), i.value = !0, Object.keys(w).forEach((le) => delete w[le]);
    }
    function Ve(C, F) {
      l.value = C, o.value = 0, ce = F || null, v(), i.value = !0, b.value = "grid", _(), Ue(() => {
        var Q;
        return (Q = U.value) == null ? void 0 : Q.render();
      });
    }
    function Oe() {
      var C;
      i.value = !1, m.value = !1, I.value = !1, Z = !1, R.value = !1, b.value = "carousel", g.value = !1, se.value && (se.value.src = ""), re.value && (re.value.style.transform = ""), B.value && (B.value.style.transform = ""), (C = U.value) == null || C.reset();
    }
    function st(C) {
      o.value = C, v(), b.value = "carousel", _();
    }
    async function nt(C) {
      if (!ce) return null;
      const F = await ce(C);
      return F && (l.value = F, o.value = Math.max(0, Math.min(o.value, F.length - 1))), F;
    }
    return Mt(() => {
      document.addEventListener("mousemove", W), document.addEventListener("mouseup", q), document.addEventListener("keydown", ge);
    }), gt(() => {
      document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", q), document.removeEventListener("keydown", ge);
    }), t({ open: he, openGrid: Ve, close: Oe, selectFromGrid: st, gridUpdate: nt }), (C, F) => {
      var Q, le, Fe, Le, yt, ze;
      return E(), Ut(_s, { to: "body" }, [
        c("div", {
          ref_key: "overlayRef",
          ref: De,
          class: J(["cm-viewer-overlay", {
            visible: i.value,
            fullscreen: m.value,
            "cm-carousel-active": I.value,
            "cm-carousel-dragging": K(R),
            "cm-viewer-grid-mode": b.value === "grid"
          }])
        }, [
          c("div", {
            class: "cm-viewer-body",
            onClick: ae
          }, [
            c("div", Jc, [
              c("span", {
                class: "cm-viewer-topbar-name",
                title: (Q = Y.value) == null ? void 0 : Q.filename
              }, G((le = Y.value) == null ? void 0 : le.filename), 9, Yc),
              c("span", Zc, G(y.value), 1),
              c("span", Xc, G(o.value + 1) + " / " + G(l.value.length), 1),
              c("div", Qc, [
                c("button", {
                  class: J(["cm-viewer-grid-toggle", { active: b.value === "grid" }]),
                  title: "Toggle grid view (G)",
                  onClick: oe(A, ["stop"])
                }, [...F[6] || (F[6] = [
                  c("span", { class: "pi pi-th-large" }, null, -1)
                ])], 2),
                c("button", {
                  class: J(["cm-viewer-panel-toggle", { active: h.value }]),
                  title: "Toggle details (I)",
                  onClick: oe(L, ["stop"])
                }, [...F[7] || (F[7] = [
                  c("span", { class: "pi pi-info-circle" }, null, -1)
                ])], 2),
                c("button", {
                  class: J(["cm-viewer-fullscreen-toggle", { active: m.value }]),
                  title: "Toggle fullscreen (F)",
                  onClick: oe(P, ["stop"])
                }, [
                  c("span", {
                    class: J(["pi", m.value ? "pi-compress" : "pi-expand"])
                  }, null, 2)
                ], 2),
                c("button", {
                  class: "cm-viewer-close",
                  title: "Close (Esc)",
                  onClick: oe(Oe, ["stop"])
                }, [...F[8] || (F[8] = [
                  c("span", { class: "pi pi-times" }, null, -1)
                ])])
              ])
            ]),
            c("button", {
              class: "cm-viewer-nav cm-viewer-prev",
              title: "Previous (Left arrow)",
              style: it({ display: l.value.length > 1 ? "" : "none" }),
              onClick: F[0] || (F[0] = oe((be) => S(-1), ["stop"]))
            }, [...F[9] || (F[9] = [
              c("span", { class: "pi pi-chevron-left" }, null, -1)
            ])], 4),
            c("div", {
              ref_key: "imgContainerRef",
              ref: te,
              class: "cm-viewer-img-container",
              onWheel: oe(z, ["prevent"]),
              onMousedown: j
            }, [
              c("img", {
                ref_key: "imgRef",
                ref: se,
                class: "cm-viewer-img",
                draggable: "false",
                src: (Fe = Y.value) == null ? void 0 : Fe.url,
                onLoad: k
              }, null, 40, eu)
            ], 544),
            c("button", {
              class: "cm-viewer-nav cm-viewer-next",
              title: "Next (Right arrow)",
              style: it({ display: l.value.length > 1 ? "" : "none" }),
              onClick: F[1] || (F[1] = oe((be) => S(1), ["stop"]))
            }, [...F[10] || (F[10] = [
              c("span", { class: "pi pi-chevron-right" }, null, -1)
            ])], 4),
            c("div", {
              ref_key: "ghostPrevRef",
              ref: re,
              class: "cm-viewer-carousel-prev cm-viewer-carousel-ghost"
            }, [
              c("img", {
                draggable: "false",
                src: rt.value
              }, null, 8, tu)
            ], 512),
            c("div", {
              ref_key: "ghostNextRef",
              ref: B,
              class: "cm-viewer-carousel-next cm-viewer-carousel-ghost"
            }, [
              c("img", {
                draggable: "false",
                src: ie.value
              }, null, 8, su)
            ], 512),
            c("div", {
              class: "cm-viewer-zoom-chip",
              onMousedown: F[3] || (F[3] = oe(() => {
              }, ["stop"]))
            }, [
              c("span", {
                class: "cm-viewer-zoom-value",
                onClick: F[2] || (F[2] = oe((be) => g.value = !g.value, ["stop"]))
              }, G(we.value) + "%", 1),
              c("button", {
                class: "cm-viewer-zoom-reset",
                title: "Reset zoom (0)",
                style: it({ display: Ze.value ? "none" : "" }),
                onClick: oe(v, ["stop"])
              }, [...F[11] || (F[11] = [
                c("span", { class: "pi pi-replay" }, null, -1)
              ])], 4),
              c("div", {
                class: J(["cm-viewer-zoom-menu", { open: g.value }])
              }, [
                (E(), V(pe, null, Pe(n, (be) => c("button", {
                  key: be,
                  class: J(["cm-viewer-zoom-menu-item", { active: we.value === be }]),
                  onClick: oe((je) => $(be), ["stop"])
                }, G(be) + "%", 11, nu)), 64))
              ], 2)
            ], 32),
            Se(qc, {
              ref_key: "gridViewRef",
              ref: U,
              files: l.value,
              "current-index": o.value
            }, null, 8, ["files", "current-index"]),
            c("div", {
              class: J(["cm-viewer-panel", { open: h.value }])
            }, [
              c("div", iu, [
                c("button", {
                  class: J(["cm-viewer-section-header", { expanded: T.value }]),
                  onClick: F[4] || (F[4] = (be) => T.value = !T.value)
                }, [
                  c("span", {
                    class: J(["pi", T.value ? "pi-chevron-down" : "pi-chevron-right", "cm-viewer-section-chevron"])
                  }, null, 2),
                  F[12] || (F[12] = c("span", null, "File Info", -1))
                ], 2),
                c("div", {
                  class: J(["cm-viewer-section-body", { expanded: T.value }])
                }, [
                  M.value.length > 0 ? (E(!0), V(pe, { key: 0 }, Pe(M.value, ([be, je]) => (E(), V("div", {
                    key: be,
                    class: "cm-viewer-row"
                  }, [
                    c("span", lu, G(be), 1),
                    c("span", {
                      class: J(["cm-viewer-row-value", {
                        "cm-viewer-truncated": String(je).length > ns,
                        "cm-viewer-expanded": w[be]
                      }]),
                      title: String(je),
                      onClick: (Lt) => Ce(be, je)
                    }, G(ue(be, je)), 11, ou),
                    c("button", {
                      class: "cm-viewer-copy-btn",
                      title: "Copy value",
                      onClick: oe((Lt) => Te(String(je)), ["stop"])
                    }, [...F[13] || (F[13] = [
                      c("span", { class: "pi pi-clone" }, null, -1)
                    ])], 8, ru)
                  ]))), 128)) : (E(), V("div", au, "No file info available"))
                ], 2)
              ]),
              c("div", cu, [
                c("button", {
                  class: J(["cm-viewer-section-header expanded", { expanded: x.value }]),
                  onClick: F[5] || (F[5] = (be) => x.value = !x.value)
                }, [
                  c("span", {
                    class: J(["pi", x.value ? "pi-chevron-down" : "pi-chevron-right", "cm-viewer-section-chevron"])
                  }, null, 2),
                  F[14] || (F[14] = c("span", null, "Workflow", -1))
                ], 2),
                c("div", {
                  class: J(["cm-viewer-section-body", { expanded: x.value }])
                }, [
                  (Le = Y.value) != null && Le.has_workflow && ((ze = (yt = Y.value) == null ? void 0 : yt.workflow_nodes) == null ? void 0 : ze.length) > 0 ? (E(!0), V(pe, { key: 0 }, Pe(Y.value.workflow_nodes, (be) => (E(), V("div", {
                    key: be.id,
                    class: "cm-viewer-node"
                  }, [
                    c("div", uu, [
                      c("span", null, G(be.class_type || "Node") + " #" + G(be.id), 1),
                      c("button", {
                        class: "cm-viewer-copy-btn cm-viewer-copy-node",
                        title: "Add node to canvas",
                        onClick: oe((je) => Ie(be), ["stop"])
                      }, [...F[15] || (F[15] = [
                        c("span", { class: "pi pi-plus-circle" }, null, -1)
                      ])], 8, fu)
                    ]),
                    (E(!0), V(pe, null, Pe(Object.entries(be.inputs), ([je, Lt]) => (E(), V("div", {
                      key: je,
                      class: "cm-viewer-row"
                    }, [
                      c("span", du, G(je), 1),
                      c("span", {
                        class: J(["cm-viewer-row-value", {
                          "cm-viewer-truncated": String(Lt).length > ns,
                          "cm-viewer-expanded": w[`${be.id}_${je}`]
                        }]),
                        title: String(Lt),
                        onClick: (Ml) => Ce(`${be.id}_${je}`, Lt)
                      }, G(ue(`${be.id}_${je}`, Lt)), 11, pu),
                      c("button", {
                        class: "cm-viewer-copy-btn",
                        title: "Copy value",
                        onClick: oe((Ml) => Te(String(Lt)), ["stop"])
                      }, [...F[16] || (F[16] = [
                        c("span", { class: "pi pi-clone" }, null, -1)
                      ])], 8, hu)
                    ]))), 128))
                  ]))), 128)) : (E(), V("div", mu, "No workflow data"))
                ], 2)
              ])
            ], 2)
          ])
        ], 2)
      ]);
    };
  }
}, gu = { class: "cm-selector-content" }, yu = { class: "cm-current-path" }, bu = ["onKeydown"], _u = { class: "cm-selector-list" }, wu = ["onClick"], xu = {
  __name: "FolderSelector",
  setup(e, { expose: t }) {
    const s = /* @__PURE__ */ N(!1), n = /* @__PURE__ */ N(""), i = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N([]), o = /* @__PURE__ */ N(""), r = /* @__PURE__ */ N(null);
    let a = null, p = null, f = null, h = -1, m = null;
    function g(H) {
      return H.startsWith("/") || /^[A-Za-z]:[\\\/]/.test(H);
    }
    function b(H) {
      return H.includes("\\") ? "\\" : "/";
    }
    function y(H) {
      return H === "/" || /^[A-Za-z]:[\\\/]?$/.test(H);
    }
    function T(H) {
      return /^[A-Za-z]:$/.test(H) ? H + "\\" : H;
    }
    const x = Me(() => n.value && !y(n.value)), w = Me(() => {
      const H = n.value, X = b(H), ce = H.split(/[\\/]/);
      ce.pop();
      const De = ce.join(X);
      return T(De) || X;
    }), I = Me(() => {
      if (!o.value) return l.value;
      const H = o.value.toLowerCase();
      return l.value.filter((X) => X.toLowerCase().includes(H));
    });
    function R(H, X) {
      if (!H) return X;
      const ce = b(H);
      return H.endsWith(ce) ? H + X : H + ce + X;
    }
    async function O(H) {
      const ce = await (await fetch(`/dnh-assetmanager/subdirs?path=${encodeURIComponent(H)}`)).json();
      l.value = ce.dirs || [];
    }
    async function D(H) {
      await O(H), n.value = H, p = H, i.value = H, o.value = "";
    }
    function Z() {
      clearTimeout(a), h = -1, m = null, a = setTimeout(async () => {
        const H = i.value.trim();
        if (!H || !g(H)) {
          o.value = H.toLowerCase();
          return;
        }
        let X, ce;
        if (H.endsWith("/") || H.endsWith("\\"))
          X = T(H.replace(/[\/\\]+$/, "")) || "/", ce = "";
        else {
          const De = Math.max(H.lastIndexOf("/"), H.lastIndexOf("\\"));
          X = T(H.substring(0, De)) || "/", ce = H.substring(De + 1).toLowerCase();
        }
        X !== p && (await O(X), p = X, n.value = X), o.value = ce;
      }, 150);
    }
    function de() {
      const H = I.value;
      if (!H.length) return;
      const X = o.value;
      X !== m && (h = -1, m = X), h = (h + 1) % H.length, i.value = R(n.value, H[h]);
    }
    async function fe(H) {
      var X;
      if (f = H, s.value = !0, !n.value) {
        const De = await (await fetch("/dnh-assetmanager/subdirs?path=")).json();
        n.value = De.home || "/";
      }
      i.value = n.value, p = null, await D(n.value), await Ue(), (X = r.value) == null || X.focus();
    }
    function $e() {
      s.value = !1;
    }
    function Ee() {
      const H = i.value.trim() || n.value;
      f && f(H), s.value = !1;
    }
    return t({ show: fe }), (H, X) => (E(), Ut(_s, { to: "body" }, [
      s.value ? (E(), V("div", {
        key: 0,
        class: "cm-selector-modal",
        style: { display: "flex" },
        onClick: oe($e, ["self"])
      }, [
        c("div", gu, [
          X[2] || (X[2] = c("div", { class: "cm-selector-header" }, "Select Directory", -1)),
          c("div", yu, G(n.value || "Select a starting point"), 1),
          ct(c("input", {
            ref_key: "pathInputRef",
            ref: r,
            type: "text",
            class: "comfy-input cm-selector-path",
            placeholder: "Type a path or pick below...",
            "onUpdate:modelValue": X[0] || (X[0] = (ce) => i.value = ce),
            onInput: Z,
            onKeydown: [
              yi(oe(de, ["prevent"]), ["tab"]),
              yi(oe(Ee, ["prevent"]), ["enter"])
            ]
          }, null, 40, bu), [
            [St, i.value]
          ]),
          c("div", _u, [
            x.value ? (E(), V("div", {
              key: 0,
              class: "cm-dir-item special",
              onClick: X[1] || (X[1] = (ce) => D(w.value))
            }, ".. [Up]")) : ke("", !0),
            (E(!0), V(pe, null, Pe(I.value, (ce) => (E(), V("div", {
              key: ce,
              class: "cm-dir-item",
              onClick: (De) => D(R(n.value, ce))
            }, G(ce), 9, wu))), 128))
          ]),
          c("div", { class: "cm-selector-footer" }, [
            c("button", {
              class: "comfy-btn comfy-btn-secondary cm-cancel",
              onClick: $e
            }, "Cancel"),
            c("button", {
              class: "comfy-btn comfy-btn-primary cm-confirm",
              onClick: Ee
            }, "Select")
          ])
        ])
      ])) : ke("", !0)
    ]));
  }
}, Cu = { class: "cm-sidebar-content" }, Su = 60, ku = {
  __name: "App",
  props: {
    comfyApp: { type: Object, required: !0 },
    comfyApi: { type: Object, required: !0 }
  },
  setup(e) {
    const t = e, { state: s } = et(), n = Gs();
    qe("comfyApp", t.comfyApp), qe("comfyApi", t.comfyApi), qe("api", n), qe("state", s), qe("update", a), qe("loadMore", p), qe("openViewer", h), qe("toggleFavorite", m);
    const i = /* @__PURE__ */ N(null), l = /* @__PURE__ */ N(null), o = /* @__PURE__ */ N(null);
    qe("contextMenuRef", i), qe("imageViewerRef", l), qe("folderSelectorRef", o);
    function r(x, w = 0) {
      return new URLSearchParams({
        q: x !== void 0 ? x : s.searchQuery,
        tab: s.activeTab,
        utility: s.activeUtility,
        favorites_only: s.showFavorites,
        sort: s.sortBy,
        workflow_only: s.workflowOnly,
        hide_nsfw: s.hideNsfw,
        model_filter: s.activeModelFilters.size > 0 ? [...s.activeModelFilters].join(",") : "all",
        lora_filter: s.activeLoraFilters.size > 0 ? [...s.activeLoraFilters].join(",") : "all",
        offset: w,
        limit: Su
      });
    }
    async function a() {
      if (s.activeTab === "custom" && s.customFolderCount === 0) {
        s.currentFiles = [], s.totalAssets = 0, s.currentOffset = 0, s.hasMore = !1;
        return;
      }
      s.infoPanelVisible = !1, s.selectedFile = null;
      const x = r(void 0, 0), w = await n.fetchHistory(x);
      s.currentFiles = w.files, s.totalAssets = w.total ?? w.files.length, s.currentOffset = w.files.length, s.hasMore = s.currentOffset < s.totalAssets;
    }
    async function p() {
      if (!(s.isLoadingMore || !s.hasMore)) {
        s.isLoadingMore = !0;
        try {
          const x = r(void 0, s.currentOffset), w = await n.fetchHistory(x);
          s.currentFiles = [...s.currentFiles, ...w.files], s.totalAssets = w.total ?? s.totalAssets, s.currentOffset += w.files.length, s.hasMore = s.currentOffset < s.totalAssets;
        } finally {
          s.isLoadingMore = !1;
        }
      }
    }
    async function f(x) {
      const w = r(x || "", 0);
      w.set("limit", "9999"), w.set("offset", "0");
      const I = await n.fetchHistory(w);
      return s.currentFiles = I.files, I.files;
    }
    qe("gridFetch", f);
    function h(x) {
      var I;
      const w = s.currentFiles.indexOf(x);
      (I = l.value) == null || I.open(s.currentFiles, w >= 0 ? w : 0, f);
    }
    async function m(x) {
      (await n.postFavorite(x.full_path)).ok && (x.is_favorite = !x.is_favorite, a());
    }
    function g(x, w) {
      var I;
      (I = i.value) == null || I.show(x, w);
    }
    function b() {
      var x;
      s.currentFiles.length > 0 && ((x = l.value) == null || x.openGrid(s.currentFiles, f));
    }
    Mt(() => {
      n.fetchTags().then((w) => {
        s.availableModels = w.models || [], s.availableLoras = w.loras || [];
      }).catch(() => {
      }), n.fetchVersion().then((w) => {
        w.version && (s.version = w.version);
      }).catch(() => {
      }), a();
      const x = () => {
        clearTimeout(y), y = setTimeout(() => a(), 300);
      };
      t.comfyApi.addEventListener("dnh-assets-changed", x), T = () => t.comfyApi.removeEventListener("dnh-assets-changed", x);
    });
    let y = null, T = null;
    return gt(() => {
      clearTimeout(y), T == null || T();
    }), (x, w) => (E(), V("div", Cu, [
      Se(la),
      Se(Ca),
      Se(Ma),
      c("button", {
        class: "cm-grid-view-btn",
        title: "Open grid view",
        onClick: b
      }, [...w[0] || (w[0] = [
        c("span", { class: "pi pi-th-large" }, null, -1),
        Ne(" Grid View ", -1)
      ])]),
      Se(mc),
      Se(Fc),
      Se(Ua, {
        onOpenViewer: h,
        onToggleFavorite: m,
        onContextMenu: g
      }),
      Se(Dc, {
        ref_key: "contextMenuRef",
        ref: i
      }, null, 512),
      Se(vu, {
        ref_key: "imageViewerRef",
        ref: l
      }, null, 512),
      Se(xu, {
        ref_key: "folderSelectorRef",
        ref: o
      }, null, 512)
    ]));
  }
};
xs.registerExtension({
  name: "DefinitelyNotHuman.AssetManager",
  async init() {
    const e = {
      id: "assetmanager.history.tab",
      icon: "pi pi-history",
      title: "History",
      type: "custom",
      render: (i) => {
        if (i.__vue_app__) return;
        Yr(ku, {
          comfyApp: xs,
          comfyApi: Al
        }).mount(i);
      }
    };
    xs.extensionManager.registerSidebarTab(e);
    const t = xs.extensionManager.getSidebarTabs(), s = t.findIndex((i) => i.id === e.id), n = t.findIndex((i) => i.id === "assets");
    if (s !== -1 && n !== -1 && s !== n + 1) {
      const [i] = t.splice(s, 1), l = t.findIndex((o) => o.id === "assets") + 1;
      t.splice(l, 0, i);
    }
  }
});
