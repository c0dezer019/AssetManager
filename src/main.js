/**
 * Extension entry point — registers the sidebar tab with ComfyUI
 * and mounts the Vue app inside the render callback.
 */

import { app } from '../../scripts/app.js'
import { api } from '../../scripts/api.js'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

app.registerExtension({
    name: 'DefinitelyNotHuman.AssetManager',
    async init() {
        const tabDef = {
            id: 'assetmanager.history.tab',
            icon: 'pi pi-history',
            title: 'History',
            type: 'custom',
            render: (el) => {
                // Prevent double-mounting if ComfyUI re-calls render
                if (el.__vue_app__) return

                const vueApp = createApp(App, {
                    comfyApp: app,
                    comfyApi: api,
                })
                vueApp.mount(el)
            }
        }

        app.extensionManager.registerSidebarTab(tabDef)

        // Reorder: place our tab right after the built-in "assets" tab
        const tabs = app.extensionManager.getSidebarTabs()
        const ourIdx = tabs.findIndex(t => t.id === tabDef.id)
        const assetsIdx = tabs.findIndex(t => t.id === 'assets')
        if (ourIdx !== -1 && assetsIdx !== -1 && ourIdx !== assetsIdx + 1) {
            const [ourTab] = tabs.splice(ourIdx, 1)
            const insertAt = tabs.findIndex(t => t.id === 'assets') + 1
            tabs.splice(insertAt, 0, ourTab)
        }
    }
})
