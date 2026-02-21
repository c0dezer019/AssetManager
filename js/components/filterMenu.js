/**
 * Filter dropdown builder.
 */

import { state } from "../state.js";
import { dismissContextMenu, setActiveContextMenu } from "./contextMenu.js";

/**
 * Show the filter dropdown menu.
 * @param {MouseEvent} e
 * @param {HTMLElement} el - The sidebar root element
 * @param {Function} update - Callback to refresh the grid
 */
export function showFilterMenu(e, el, update, anchorEl) {
    e.stopPropagation();
    dismissContextMenu();

    const menu = document.createElement("div");
    menu.className = "cm-context-menu";

    // Section: Utility type
    const utilLabel = document.createElement("div");
    utilLabel.className = "cm-context-menu-label";
    utilLabel.textContent = "Asset Type";
    menu.appendChild(utilLabel);

    [{ value: "all", label: "All types" }, { value: "generation", label: "Generated (has workflow)" }, { value: "input", label: "Input (no workflow)" }].forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "cm-context-menu-item" + (state.activeUtility === opt.value ? " cm-active" : "");
        btn.innerHTML = `${state.activeUtility === opt.value ? '<span class="pi pi-check"></span> ' : '<span style="width:16px;display:inline-block"></span> '}${opt.label}`;
        btn.onclick = (ev) => { ev.stopPropagation(); state.activeUtility = opt.value; dismissContextMenu(); update(); };
        menu.appendChild(btn);
    });

    // Helper to build a multi-select checkbox menu item
    const makeCheckItem = (label, isChecked, onToggle, title) => {
        const btn = document.createElement("button");
        btn.className = "cm-context-menu-item" + (isChecked ? " cm-active" : "");
        const icon = isChecked ? "pi-check-square" : "pi-stop";
        btn.innerHTML = `<span class="pi ${icon} cm-check-icon"></span> ${label}`;
        if (title) btn.title = title;
        btn.onclick = (ev) => {
            ev.stopPropagation();
            onToggle();
            dismissContextMenu();
            update();
            // Re-open the menu after a tick so the user can keep selecting
            setTimeout(() => (anchorEl || el.querySelector("#cm-filter")).click(), 0);
        };
        return btn;
    };

    // Section: Model filter
    if (state.availableModels.length > 0) {
        const sep1 = document.createElement("div");
        sep1.className = "cm-context-menu-separator";
        menu.appendChild(sep1);

        const modelHeader = document.createElement("div");
        modelHeader.className = "cm-context-menu-label";
        modelHeader.textContent = `Checkpoint${state.activeModelFilters.size > 0 ? ` (${state.activeModelFilters.size})` : ""}`;
        menu.appendChild(modelHeader);

        if (state.activeModelFilters.size > 0) {
            menu.appendChild(makeCheckItem("Clear all", false, () => { state.activeModelFilters.clear(); }));
        }

        state.availableModels.slice(0, 15).forEach(m => {
            const shortName = m.split(/[\\/]/).pop();
            const checked = state.activeModelFilters.has(m);
            menu.appendChild(makeCheckItem(shortName, checked, () => {
                if (checked) state.activeModelFilters.delete(m);
                else state.activeModelFilters.add(m);
            }, m));
        });
    }

    // Section: LoRA filter
    if (state.availableLoras.length > 0) {
        const sep2 = document.createElement("div");
        sep2.className = "cm-context-menu-separator";
        menu.appendChild(sep2);

        const loraHeader = document.createElement("div");
        loraHeader.className = "cm-context-menu-label";
        loraHeader.textContent = `LoRA${state.activeLoraFilters.size > 0 ? ` (${state.activeLoraFilters.size})` : ""}`;
        menu.appendChild(loraHeader);

        if (state.activeLoraFilters.size > 0) {
            menu.appendChild(makeCheckItem("Clear all", false, () => { state.activeLoraFilters.clear(); }));
        }

        state.availableLoras.slice(0, 15).forEach(l => {
            const shortName = l.split(/[\\/]/).pop();
            const checked = state.activeLoraFilters.has(l);
            menu.appendChild(makeCheckItem(shortName, checked, () => {
                if (checked) state.activeLoraFilters.delete(l);
                else state.activeLoraFilters.add(l);
            }, l));
        });
    }

    document.body.appendChild(menu);
    setActiveContextMenu(menu);

    // Position below the filter button
    const btnRect = (anchorEl || el.querySelector("#cm-filter")).getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    let x = btnRect.left;
    let y = btnRect.bottom + 4;
    if (x + menuRect.width > window.innerWidth) x = window.innerWidth - menuRect.width - 4;
    if (y + menuRect.height > window.innerHeight) y = btnRect.top - menuRect.height - 4;
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
}
