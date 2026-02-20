/**
 * Context menu + submenu system + clipboard helpers.
 */

let activeContextMenu = null;
let activeSubmenuCleanups = [];

export function dismissContextMenu() {
    activeSubmenuCleanups.forEach(fn => fn());
    activeSubmenuCleanups = [];
    if (activeContextMenu) {
        activeContextMenu.remove();
        activeContextMenu = null;
    }
}

export function copyToClipboard(text) {
    navigator.clipboard.writeText(String(text)).then(() => {
        const toast = document.createElement("div");
        toast.className = "cm-copy-toast";
        toast.textContent = "Copied!";
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add("show"));
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 200);
        }, 1200);
    });
}

function truncateValue(val, max = 40) {
    const s = String(val);
    return s.length > max ? s.substring(0, max - 1) + "\u2026" : s;
}

/**
 * Attach a hover-triggered submenu to a parent menu item.
 * `items` is [{label, value}] — clicking copies value.
 * If `items` contains entries with `children` instead of `value`,
 * a nested submenu is created (for workflow nodes).
 * `cancelParentHide` — optional callback to cancel the ancestor
 *   submenu's hide timer when a nested submenu is entered.
 * Returns a cleanup function.
 */
export function attachSubmenu(parentItem, items, cancelParentHide = null) {
    let submenuEl = null;
    let hideTimer = null;
    const cleanups = [];

    const cancelHide = () => {
        clearTimeout(hideTimer);
        if (cancelParentHide) cancelParentHide();
    };

    const showSubmenu = () => {
        cancelHide();
        if (submenuEl) return;
        submenuEl = document.createElement("div");
        submenuEl.className = "cm-submenu";

        items.forEach(item => {
            if (item.children) {
                const nodeItem = document.createElement("div");
                nodeItem.className = "cm-context-menu-item cm-submenu-item";
                nodeItem.innerHTML = `<span class="cm-submenu-label">${item.label}</span><span class="cm-submenu-arrow">\u25BA</span>`;
                submenuEl.appendChild(nodeItem);
                const childCleanup = attachSubmenu(nodeItem, item.children, cancelHide);
                cleanups.push(childCleanup);
            } else {
                const row = document.createElement("button");
                row.className = "cm-context-menu-item cm-submenu-copy-row";
                row.innerHTML = `<span class="cm-submenu-key">${item.label}</span><span class="cm-submenu-value" title="${String(item.value).replace(/"/g, '&quot;')}">${truncateValue(item.value)}</span>`;
                row.onclick = (ev) => {
                    ev.stopPropagation();
                    copyToClipboard(item.value);
                    dismissContextMenu();
                };
                submenuEl.appendChild(row);
            }
        });

        document.body.appendChild(submenuEl);

        const parentRect = parentItem.getBoundingClientRect();
        const subRect = submenuEl.getBoundingClientRect();
        let left = parentRect.right + 2;
        let top = parentRect.top;
        if (left + subRect.width > window.innerWidth) {
            left = parentRect.left - subRect.width - 2;
        }
        if (top + subRect.height > window.innerHeight) {
            top = Math.max(4, window.innerHeight - subRect.height - 4);
        }
        submenuEl.style.left = `${left}px`;
        submenuEl.style.top = `${top}px`;

        submenuEl.addEventListener("mouseenter", cancelHide);
        submenuEl.addEventListener("mouseleave", scheduleHide);
    };

    const scheduleHide = () => {
        hideTimer = setTimeout(() => {
            if (submenuEl) {
                cleanups.forEach(fn => fn());
                submenuEl.remove();
                submenuEl = null;
            }
        }, 150);
    };

    parentItem.addEventListener("mouseenter", showSubmenu);
    parentItem.addEventListener("mouseleave", scheduleHide);

    return () => {
        clearTimeout(hideTimer);
        cleanups.forEach(fn => fn());
        if (submenuEl) { submenuEl.remove(); submenuEl = null; }
    };
}

/**
 * Show the right-click context menu for an asset card.
 * @param {MouseEvent} e
 * @param {Object} file - The file data object from the API
 * @param {Object} callbacks - { toggleFavorite, openInfoPanel, update, el, openViewer }
 */
export function showContextMenu(e, file, { toggleFavorite, openInfoPanel, update, el, openViewer }) {
    e.preventDefault();
    e.stopPropagation();
    dismissContextMenu();

    const menu = document.createElement("div");
    menu.className = "cm-context-menu";

    // Toggle favorite
    const favBtn = document.createElement("button");
    favBtn.className = "cm-context-menu-item";
    favBtn.innerHTML = `<span class="pi ${file.is_favorite ? 'pi-bookmark-fill' : 'pi-bookmark'}"></span> ${file.is_favorite ? 'Remove from favorites' : 'Add to favorites'}`;
    favBtn.onclick = async (ev) => {
        ev.stopPropagation();
        dismissContextMenu();
        await toggleFavorite(file);
    };
    menu.appendChild(favBtn);

    // Separator
    const favSep = document.createElement("div");
    favSep.className = "cm-context-menu-separator";
    menu.appendChild(favSep);

    // Load workflow
    const loadBtn = document.createElement("button");
    loadBtn.className = "cm-context-menu-item";
    loadBtn.innerHTML = `<span class="pi pi-download"></span> Load workflow`;
    loadBtn.onclick = async (ev) => {
        ev.stopPropagation();
        dismissContextMenu();
        const { app } = await import("../../../scripts/app.js");
        const blob = await (await fetch(file.url)).blob();
        await app.handleFile(blob);
    };
    menu.appendChild(loadBtn);

    // View image in viewer
    const viewBtn = document.createElement("button");
    viewBtn.className = "cm-context-menu-item";
    viewBtn.innerHTML = `<span class="pi pi-eye"></span> View image`;
    viewBtn.onclick = (ev) => {
        ev.stopPropagation();
        dismissContextMenu();
        openViewer(file);
    };
    menu.appendChild(viewBtn);

    // Open in external viewer
    const openBtn = document.createElement("button");
    openBtn.className = "cm-context-menu-item";
    openBtn.innerHTML = `<span class="pi pi-external-link"></span> Open in external viewer`;
    openBtn.onclick = async (ev) => {
        ev.stopPropagation();
        dismissContextMenu();
        const { postOpenFile } = await import("../api.js");
        await postOpenFile(file.full_path);
    };
    menu.appendChild(openBtn);

    // Edit metadata
    if (file.file_type === "PNG") {
        const editBtn = document.createElement("button");
        editBtn.className = "cm-context-menu-item";
        editBtn.innerHTML = `<span class="pi pi-pencil"></span> Edit metadata`;
        editBtn.onclick = (ev) => {
            ev.stopPropagation();
            dismissContextMenu();
            el.querySelectorAll(".cm-card").forEach(c => c.classList.remove("selected"));
            const cards = el.querySelectorAll(".cm-card");
            cards.forEach(c => {
                if (c.querySelector("img")?.src?.includes(encodeURIComponent(file.full_path))) {
                    c.classList.add("selected");
                }
            });
            openInfoPanel(file);
        };
        menu.appendChild(editBtn);
    }

    // --- Copy Section ---
    const copySep = document.createElement("div");
    copySep.className = "cm-context-menu-separator";
    menu.appendChild(copySep);

    const copyLabel = document.createElement("div");
    copyLabel.className = "cm-context-menu-label";
    copyLabel.textContent = "Copy";
    menu.appendChild(copyLabel);

    // Metadata submenu (always present — file-level info)
    const metaItems = [];
    if (file.file_metadata) {
        const fm = file.file_metadata;
        if (fm.filename) metaItems.push({ label: "filename", value: fm.filename });
        if (fm.file_type) metaItems.push({ label: "file_type", value: fm.file_type });
        if (fm.file_size) metaItems.push({ label: "file_size", value: fm.file_size });
        if (fm.created_date) metaItems.push({ label: "created", value: fm.created_date });
        if (fm.full_path) metaItems.push({ label: "path", value: fm.full_path });
    }
    if (metaItems.length > 0) {
        const metaItem = document.createElement("div");
        metaItem.className = "cm-context-menu-item cm-submenu-item";
        metaItem.innerHTML = `<span class="pi pi-info-circle"></span><span class="cm-submenu-label">Metadata</span><span class="cm-submenu-arrow">\u25BA</span>`;
        menu.appendChild(metaItem);
        activeSubmenuCleanups.push(attachSubmenu(metaItem, metaItems));
    }

    // Workflow submenu (only if has_workflow)
    if (file.has_workflow && file.workflow_nodes && file.workflow_nodes.length > 0) {
        const nodeItems = file.workflow_nodes.map(node => {
            const label = `${node.class_type || "Node"} #${node.id}`;
            const children = Object.entries(node.inputs).map(([k, v]) => ({
                label: k,
                value: v,
            }));
            return { label, children };
        });
        const wfItem = document.createElement("div");
        wfItem.className = "cm-context-menu-item cm-submenu-item";
        wfItem.innerHTML = `<span class="pi pi-sitemap"></span><span class="cm-submenu-label">Workflow</span><span class="cm-submenu-arrow">\u25BA</span>`;
        menu.appendChild(wfItem);
        activeSubmenuCleanups.push(attachSubmenu(wfItem, nodeItems));
    }

    // Separator
    const sep = document.createElement("div");
    sep.className = "cm-context-menu-separator";
    menu.appendChild(sep);

    // Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "cm-context-menu-item cm-danger";
    deleteBtn.innerHTML = `<span class="pi pi-trash"></span> Delete`;
    deleteBtn.onclick = async (ev) => {
        ev.stopPropagation();
        dismissContextMenu();
        if (!confirm(`Delete "${file.filename}"? This cannot be undone.`)) return;
        const { postDelete } = await import("../api.js");
        const res = await postDelete(file.full_path);
        if (res.ok) update();
    };
    menu.appendChild(deleteBtn);

    document.body.appendChild(menu);
    activeContextMenu = menu;

    // Position: keep within viewport
    const rect = menu.getBoundingClientRect();
    let x = e.clientX;
    let y = e.clientY;
    if (x + rect.width > window.innerWidth) x = window.innerWidth - rect.width - 4;
    if (y + rect.height > window.innerHeight) y = window.innerHeight - rect.height - 4;
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
}

/**
 * Set the active context menu element (for use by filter/sort menus).
 * @param {HTMLElement} menu
 */
export function setActiveContextMenu(menu) {
    activeContextMenu = menu;
}

// Global listeners (registered once)
document.addEventListener("click", dismissContextMenu);
document.addEventListener("contextmenu", dismissContextMenu);
