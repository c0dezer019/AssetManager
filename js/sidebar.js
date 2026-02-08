import { app } from "../../scripts/app.js";

app.registerExtension({
  name: "Comfymeister.WorkflowHistory",
  
  async init() {
    // Register the sidebar tab using the official Extension API
    app.extensionManager.registerSidebarTab({
      id: "comfymeister.history.tab",
      icon: "pi pi-history",
      title: "History",
      type: "custom",
      render: (el) => {
        el.innerHTML = `
          <div style="display: flex; flex-direction: column; height: 100%; padding: 12px; gap: 10px; font-family: sans-serif; color: #eee;">
            
            <section style="display: flex; flex-direction: column; gap: 8px; flex-shrink: 0;">
                <button id="cm-refresh" class="comfy-btn" style="width: 100%; font-weight: bold; background: #3a3a3a; border: 1px solid #444;">🔄 Refresh Library</button>
                
                <div style="display: flex; flex-direction: column; gap: 6px;">
                    <input id="cm-search" type="text" placeholder="Search filenames..." class="comfy-input" style="width: 100%;" />
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
                        <select id="cm-utility-select" class="comfy-input" style="font-size: 11px; width: 100%; background: #222;">
                            <option value="all">All Utility</option>
                            <option value="generation">Generations (Workflows)</option>
                            <option value="input">Static Assets (Inputs)</option>
                        </select>
                        <select id="cm-model-select" class="comfy-input" style="font-size: 11px; width: 100%;"><option value="all">All Models</option></select>
                    </div>
                    <select id="cm-lora-select" class="comfy-input" style="font-size: 11px; width: 100%;"><option value="all">All LoRAs</option></select>
                </div>

                <button id="cm-toggle-advanced" class="comfy-btn" style="width: 100%; font-size: 11px; padding: 4px; opacity: 0.7; background: transparent; border: 1px dashed #444;">
                    ⚙️ Manage Folders & Safety
                </button>
            </section>

            <section id="cm-advanced-panel" style="display: none; flex-direction: column; gap: 8px; background: #1a1a1a; padding: 10px; border-radius: 6px; border: 1px solid #333; flex-shrink: 0;">
              <div style="font-weight: bold; font-size: 10px; color: #888; text-transform: uppercase;">Scan Locations</div>
              <div id="cm-folder-list" style="display: flex; flex-direction: column; gap: 4px; font-size: 10px; max-height: 100px; overflow-y: auto; background: #0c0c0c; padding: 8px; border-radius: 4px;">
                </div>

              <div style="display: flex; gap: 4px;">
                <input id="cm-new-path" type="text" placeholder="Add path..." class="comfy-input" style="flex: 1; font-size: 10px;" />
                <button id="cm-add-btn" class="comfy-btn" style="padding: 1px 8px;">+</button>
              </div>
              
              <div style="border-top: 1px solid #333; padding-top: 6px;">
                <label style="font-size: 11px; cursor:pointer; display: flex; align-items: center; gap: 6px;">
                    <input id="cm-nsfw" type="checkbox" checked /> 🔞 Hide NSFW Content
                </label>
              </div>
            </section>

            <section id="cm-container" style="flex-grow: 1; overflow-y: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; align-content: start; padding-right: 4px;">
              </section>
          </div>
        `;

        const container = el.querySelector("#cm-container");
        const advancedPanel = el.querySelector("#cm-advanced-panel");
        const folderList = el.querySelector("#cm-folder-list");
        const utilitySelect = el.querySelector("#cm-utility-select");
        const modelSelect = el.querySelector("#cm-model-select");
        const loraSelect = el.querySelector("#cm-lora-select");

        // Logic: Panel Toggling
        el.querySelector("#cm-toggle-advanced").onclick = () => {
            advancedPanel.style.display = advancedPanel.style.display === "none" ? "flex" : "none";
        };

        const updateFolderUI = async () => {
            const config = await (await fetch('/comfymeister/config')).json();
            let html = `
                <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="checkbox" class="cm-folder-toggle" value="output" checked /> /output</label>
                <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="checkbox" class="cm-folder-toggle" value="input" checked /> /input</label>
            `;
            config.custom_folders.forEach(f => {
                const name = f.path.split(/[\\/]/).pop() || f.path;
                html += `
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <label title="${f.path}" style="display:flex; align-items:center; gap:6px; cursor:pointer; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                        <input type="checkbox" class="cm-folder-toggle" value="${f.path}" checked /> ${name}
                    </label>
                    <span class="cm-del" data-path="${f.path}" style="color:#ff5555; cursor:pointer; font-weight:bold;">×</span>
                  </div>`;
            });
            folderList.innerHTML = html;
            
            el.querySelectorAll(".cm-del").forEach(btn => btn.onclick = async () => {
                await fetch('/comfymeister/folders', { method: 'POST', body: JSON.stringify({ action: 'remove', path: btn.dataset.path }) });
                updateFolderUI(); update();
            });
            el.querySelectorAll(".cm-folder-toggle").forEach(i => i.onchange = update);
        };

        const updateTags = async () => {
            const { models, loras } = await (await fetch('/comfymeister/tags')).json();
            modelSelect.innerHTML = '<option value="all">All Models</option>' + models.map(m => `<option value="${m}">${m}</option>`).join("");
            loraSelect.innerHTML = '<option value="all">All LoRAs</option>' + loras.map(l => `<option value="${l}">${l}</option>`).join("");
        };

        const update = async () => {
            const folders = Array.from(el.querySelectorAll(".cm-folder-toggle:checked")).map(i => i.value).join(",");
            const params = new URLSearchParams({
                q: el.querySelector("#cm-search").value,
                hide_nsfw: el.querySelector("#cm-nsfw").checked,
                folders: folders,
                utility: utilitySelect.value,
                model_filter: modelSelect.value,
                lora_filter: loraSelect.value
            });
            
            container.innerHTML = `<div style="grid-column: span 2; text-align:center; padding: 20px; opacity: 0.5;">Scanning assets...</div>`;
            const res = await fetch(`/comfymeister/history?${params.toString()}`);
            const data = await res.json();
            container.innerHTML = "";

            data.files.forEach(f => {
                const item = document.createElement("div");
                item.style = `
                    cursor: pointer; aspect-ratio: 1; border: 1px solid #333; 
                    border-radius: 6px; background: #111; overflow: hidden; 
                    position: relative; transition: all 0.1s;
                `;
                item.onmouseenter = () => { item.style.borderColor = "#666"; item.style.transform = "scale(0.98)"; };
                item.onmouseleave = () => { item.style.borderColor = "#333"; item.style.transform = "scale(1)"; };
                
                // Blueprint indicator for Generations
                const badge = f.has_workflow ? `<div style="position:absolute; top:4px; right:4px; background:rgba(0,180,255,0.7); width:6px; height:6px; border-radius:50%;" title="Workflow Attached"></div>` : '';

                item.innerHTML = `
                    ${badge}
                    <img src="${f.url}" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
                `;
                
                item.onclick = async () => {
                    const blob = await (await fetch(f.url)).blob();
                    await app.handleFile(blob); // Core workflow injector
                    app.extensionManager.toast.add({ 
                        severity: f.has_workflow ? 'success' : 'info', 
                        summary: f.has_workflow ? 'Workflow Restored' : 'Image Loaded', 
                        life: 1500 
                    });
                };
                container.appendChild(item);
            });
        };

        el.querySelector("#cm-refresh").onclick = () => { updateTags(); update(); };
        el.querySelector("#cm-add-btn").onclick = async () => {
            const pathVal = el.querySelector("#cm-new-path").value;
            if (pathVal) {
                await fetch('/comfymeister/folders', { method: 'POST', body: JSON.stringify({ action: 'add', path: pathVal }) });
                el.querySelector("#cm-new-path").value = "";
                await updateFolderUI(); update();
            }
        };

        [utilitySelect, modelSelect, loraSelect, el.querySelector("#cm-nsfw")].forEach(i => i.onchange = update);
        el.querySelector("#cm-search").oninput = update;

        updateFolderUI().then(() => updateTags().then(update));
      }
    });
  }
});
