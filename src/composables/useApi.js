/**
 * API client composable — wraps fetch calls from api.js
 * Same endpoints, same logic.
 */

export function useApi() {
    async function fetchHistory(params) {
        const res = await fetch(`/dnh-assetmanager/history?${params.toString()}`)
        return res.json()
    }

    async function fetchTags() {
        const res = await fetch('/dnh-assetmanager/tags')
        return res.json()
    }

    async function fetchConfig() {
        const res = await fetch('/dnh-assetmanager/config')
        return res.json()
    }

    async function fetchVersion() {
        const res = await fetch('/dnh-assetmanager/version')
        return res.json()
    }

    async function fetchSubdirectories(path) {
        const res = await fetch(`/dnh-assetmanager/subdirs?path=${encodeURIComponent(path)}`)
        return res.json()
    }

    async function postFavorite(fullPath) {
        return fetch('/dnh-assetmanager/favorite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: fullPath }),
        })
    }

    async function postDelete(fullPath) {
        return fetch('/dnh-assetmanager/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: fullPath }),
        })
    }

    async function postFolder(action, path) {
        return fetch('/dnh-assetmanager/folders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action, path }),
        })
    }

    async function postSettings(settings) {
        return fetch('/dnh-assetmanager/settings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(settings),
        })
    }

    async function postOpenFile(fullPath) {
        return fetch('/dnh-assetmanager/open', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: fullPath }),
        })
    }

    async function fetchMetadata(path) {
        return fetch(`/dnh-assetmanager/metadata?path=${encodeURIComponent(path)}`)
    }

    async function postMetadata(data) {
        return fetch('/dnh-assetmanager/metadata', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
    }

    async function fetchFileBlob(url) {
        const res = await fetch(url)
        return res.blob()
    }

    return {
        fetchHistory,
        fetchTags,
        fetchConfig,
        fetchVersion,
        fetchSubdirectories,
        postFavorite,
        postDelete,
        postFolder,
        postSettings,
        postOpenFile,
        fetchMetadata,
        postMetadata,
        fetchFileBlob,
    }
}
