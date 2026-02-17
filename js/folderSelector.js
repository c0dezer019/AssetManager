export class FolderSelector {
    constructor(onSelect) {
        this.onSelect = onSelect;
        this.currentPath = "";
        this.allDirs = [];
        this.modal = null;
        this._debounceTimer = null;
        // Track the last parent we fetched so we don't re-fetch on every keystroke
        // when the user is just refining the partial name within the same directory
        this._lastFetchedParent = null;
    }

    _isAbsolute(p) {
        return p.startsWith("/") || /^[A-Za-z]:[\\\/]/.test(p);
    }

    async fetchDirs(path) {
        const res = await fetch(`/dnh-assetmanager/subdirs?path=${encodeURIComponent(path)}`);
        const data = await res.json();
        this.allDirs = data.dirs || [];
        return data;
    }

    /**
     * Navigate to a path via click (not typing). Updates the input, current path,
     * and renders the full directory listing.
     */
    async navigateTo(path) {
        await this.fetchDirs(path);
        this.currentPath = path;
        this._lastFetchedParent = path;
        const pathInput = this.modal.querySelector(".cm-selector-path");
        pathInput.value = path;
        this.modal.querySelector(".cm-current-path").textContent = path || "Select a starting point";
        this.renderList();
    }

    /**
     * Handle live input: split typed value into parentDir + partial,
     * fetch parentDir if needed, and filter the listing by partial.
     * If the value isn't an absolute path, filter the current listing instead.
     */
    async handleInput(typed) {
        if (!typed || !this._isAbsolute(typed)) {
            // Not an absolute path — filter current directory by name
            this.renderList(typed.toLowerCase());
            return;
        }

        let parentDir, partial;

        // Ends with separator → treat entire value as the directory, no filter
        if (typed.endsWith("/") || typed.endsWith("\\")) {
            parentDir = typed.replace(/[\/\\]+$/, "") || "/";
            partial = "";
        } else {
            // Split into parent + trailing partial name
            const sepIdx = Math.max(typed.lastIndexOf("/"), typed.lastIndexOf("\\"));
            parentDir = typed.substring(0, sepIdx) || "/";
            partial = typed.substring(sepIdx + 1).toLowerCase();
        }

        // Only fetch if the parent directory changed
        if (parentDir !== this._lastFetchedParent) {
            await this.fetchDirs(parentDir);
            this._lastFetchedParent = parentDir;
            this.currentPath = parentDir;
            this.modal.querySelector(".cm-current-path").textContent = parentDir;
        }

        this.renderList(partial);
    }

    renderList(filter = "") {
        const listEl = this.modal.querySelector(".cm-selector-list");
        listEl.innerHTML = "";

        // "Up" entry
        if (this.currentPath && this.currentPath !== "/" && !this.currentPath.endsWith(":\\")) {
            const up = this.currentPath.split(/[\\/]/).slice(0, -1).join("/") || "/";
            const div = document.createElement("div");
            div.className = "cm-dir-item special";
            div.textContent = ".. [Up]";
            div.onclick = () => this.navigateTo(up);
            listEl.appendChild(div);
        }

        const filtered = filter
            ? this.allDirs.filter(d => d.toLowerCase().includes(filter))
            : this.allDirs;

        filtered.forEach(d => {
            const div = document.createElement("div");
            div.className = "cm-dir-item";
            div.textContent = d;
            div.onclick = () => {
                const next = this.currentPath
                    ? `${this.currentPath}/${d}`.replace(/\/+/g, "/")
                    : d;
                this.navigateTo(next);
            };
            listEl.appendChild(div);
        });
    }

    show() {
        if (!this.modal) {
            this.modal = document.createElement("div");
            this.modal.className = "cm-selector-modal";
            this.modal.innerHTML = `
                <div class="cm-selector-content">
                    <div class="cm-selector-header">Select Directory</div>
                    <div class="cm-current-path"></div>
                    <input type="text" class="comfy-input cm-selector-path" placeholder="Type a path or pick below..." />
                    <div class="cm-selector-list"></div>
                    <div class="cm-selector-footer">
                        <button class="comfy-btn comfy-btn-secondary cm-cancel">Cancel</button>
                        <button class="comfy-btn comfy-btn-primary cm-confirm">Select</button>
                    </div>
                </div>`;
            document.body.appendChild(this.modal);

            const pathInput = this.modal.querySelector(".cm-selector-path");

            pathInput.oninput = () => {
                clearTimeout(this._debounceTimer);
                this._debounceTimer = setTimeout(() => {
                    this.handleInput(pathInput.value.trim());
                }, 150);
            };

            // Enter key commits the typed path as the current selection
            pathInput.onkeydown = (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    clearTimeout(this._debounceTimer);
                    const typed = pathInput.value.trim();
                    if (typed && this._isAbsolute(typed)) {
                        this.navigateTo(typed);
                    }
                }
            };

            this.modal.querySelector(".cm-cancel").onclick = () => {
                this.modal.style.display = "none";
            };
            this.modal.querySelector(".cm-confirm").onclick = () => {
                const selected = pathInput.value.trim() || this.currentPath;
                this.onSelect(selected);
                this.modal.style.display = "none";
            };
        }

        this.modal.style.display = "flex";
        const pathInput = this.modal.querySelector(".cm-selector-path");
        pathInput.value = this.currentPath;
        this._lastFetchedParent = null;
        this.navigateTo(this.currentPath);
    }
}
