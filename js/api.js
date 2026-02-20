/**
 * API client — all fetch() calls as named async exports.
 */

export async function fetchHistory(params) {
    const res = await fetch(`/dnh-assetmanager/history?${params.toString()}`);
    return res.json();
}

export async function fetchTags() {
    const res = await fetch("/dnh-assetmanager/tags");
    return res.json();
}

export async function fetchConfig() {
    const res = await fetch("/dnh-assetmanager/config");
    return res.json();
}

export async function fetchVersion() {
    const res = await fetch("/dnh-assetmanager/version");
    return res.json();
}

export async function fetchSubdirectories(path) {
    const res = await fetch(`/dnh-assetmanager/subdirs?path=${encodeURIComponent(path)}`);
    return res.json();
}

export async function postFavorite(fullPath) {
    const res = await fetch("/dnh-assetmanager/favorite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: fullPath }),
    });
    return res;
}

export async function postDelete(fullPath) {
    const res = await fetch("/dnh-assetmanager/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: fullPath }),
    });
    return res;
}

export async function postFolder(action, path) {
    const res = await fetch("/dnh-assetmanager/folders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, path }),
    });
    return res;
}

export async function postSettings(settings) {
    const res = await fetch("/dnh-assetmanager/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
    });
    return res;
}

export async function postOpenFile(fullPath) {
    const res = await fetch("/dnh-assetmanager/open", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: fullPath }),
    });
    return res;
}

export async function fetchMetadata(path) {
    const res = await fetch(`/dnh-assetmanager/metadata?path=${encodeURIComponent(path)}`);
    return res;
}

export async function postMetadata(data) {
    const res = await fetch("/dnh-assetmanager/metadata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res;
}

export async function fetchFileBlob(url) {
    const res = await fetch(url);
    return res.blob();
}
