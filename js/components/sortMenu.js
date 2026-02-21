/**
 * Sort dropdown builder.
 */

import { state } from "../state.js";
import { dismissContextMenu, setActiveContextMenu } from "./contextMenu.js";

export const sortOptions = [
    { value: "date_desc", label: "Date (newest first)", icon: "pi-sort-amount-down" },
    { value: "date_asc",  label: "Date (oldest first)", icon: "pi-sort-amount-up" },
    { value: "size_desc", label: "Size (largest first)", icon: "pi-sort-amount-down" },
    { value: "size_asc",  label: "Size (smallest first)", icon: "pi-sort-amount-up" },
    { value: "name_asc",  label: "Name (A \u2192 Z)", icon: "pi-sort-alpha-down" },
    { value: "name_desc", label: "Name (Z \u2192 A)", icon: "pi-sort-alpha-up" },
];

/**
 * Update the sort button's title and active state.
 * @param {HTMLElement} el - The sidebar root element
 */
export function updateSortButton(el) {
    const btn = el.querySelector("#cm-sort");
    if (!btn) return;
    const current = sortOptions.find(o => o.value === state.sortBy);
    btn.title = current ? current.label : "Sort";
    btn.classList.toggle("active", state.sortBy !== "date_desc");
}

/**
 * Show the full sort options menu.
 * @param {MouseEvent} e
 * @param {HTMLElement} el - The sidebar root element
 * @param {Function} update - Callback to refresh the grid
 */
export function showSortMenu(e, el, update, anchorEl) {
    e.preventDefault();
    e.stopPropagation();
    dismissContextMenu();

    const menu = document.createElement("div");
    menu.className = "cm-context-menu";

    const header = document.createElement("div");
    header.className = "cm-context-menu-label";
    header.textContent = "Sort By";
    menu.appendChild(header);

    sortOptions.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "cm-context-menu-item" + (state.sortBy === opt.value ? " cm-active" : "");
        btn.innerHTML = `${state.sortBy === opt.value ? '<span class="pi pi-check"></span> ' : '<span style="width:16px;display:inline-block"></span> '}${opt.label}`;
        btn.onclick = (ev) => {
            ev.stopPropagation();
            state.sortBy = opt.value;
            updateSortButton(el);
            dismissContextMenu();
            update();
        };
        menu.appendChild(btn);
    });

    document.body.appendChild(menu);
    setActiveContextMenu(menu);

    const btnRect = (anchorEl || el.querySelector("#cm-sort")).getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    let x = btnRect.left;
    let y = btnRect.bottom + 4;
    if (x + menuRect.width > window.innerWidth) x = window.innerWidth - menuRect.width - 4;
    if (y + menuRect.height > window.innerHeight) y = btnRect.top - menuRect.height - 4;
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
}
