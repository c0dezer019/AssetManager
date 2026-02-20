import datetime
import os
import urllib.parse

import folder_paths
from aiohttp import web

from ..utils.config import NSFW_TERMS, load_config
from ..utils.helpers import format_file_size
from ..utils.metadata import get_image_metadata
from ..utils.png_io import get_asset_metadata
from ..utils.search import match_search_terms, parse_search_query
from ..utils.security import is_path_allowed


async def serve_ext_file(request):
    file_path = request.query.get("path")
    if not file_path or not os.path.exists(file_path):
        return web.Response(status=404)
    if not is_path_allowed(file_path):
        return web.Response(status=403)
    return web.FileResponse(file_path)


async def get_history(request):
    params = request.query
    raw_query = params.get("q", "").strip()
    search_terms = parse_search_query(raw_query)
    hide_nsfw = params.get("hide_nsfw", "true") == "true"
    tab = params.get("tab", "all")
    utility_type, favorites_only = params.get("utility", "all"), params.get("favorites_only") == "true"
    model_filter_raw = params.get("model_filter", "all")
    lora_filter_raw = params.get("lora_filter", "all")
    target_models = set() if model_filter_raw == "all" else set(model_filter_raw.split(","))
    target_loras = set() if lora_filter_raw == "all" else set(lora_filter_raw.split(","))
    sort_by = params.get("sort", "date")
    workflow_only = params.get("workflow_only") == "true"

    config = load_config()
    favorites = set(config.get("favorites", []))

    input_dir = folder_paths.get_input_directory()
    output_dir = config.get("output_path") or folder_paths.get_output_directory()
    custom_folders = config.get("custom_folders", [])

    scan_targets = []
    if tab == "all":
        scan_targets.append({"id": "input", "path": input_dir})
        scan_targets.append({"id": "output", "path": output_dir})
        for custom in custom_folders:
            scan_targets.append({"id": custom["path"], "path": custom["path"]})
    elif tab == "input":
        scan_targets.append({"id": "input", "path": input_dir})
    elif tab == "output":
        scan_targets.append({"id": "output", "path": output_dir})
    elif tab == "custom":
        for custom in custom_folders:
            scan_targets.append({"id": custom["path"], "path": custom["path"]})

    all_files = []
    for target in scan_targets:
        if os.path.exists(target["path"]):
            for root, _, files in os.walk(target["path"]):
                for f in files:
                    if f.lower().endswith(('.png', '.webp')):
                        fp = os.path.join(root, f)
                        try:
                            stat = os.stat(fp)
                            all_files.append({"filename": f, "path": root, "mtime": stat.st_mtime, "size": stat.st_size})
                        except OSError:
                            pass

    if sort_by == "size_desc":
        all_files.sort(key=lambda x: x['size'], reverse=True)
    elif sort_by == "size_asc":
        all_files.sort(key=lambda x: x['size'])
    elif sort_by == "name_asc":
        all_files.sort(key=lambda x: x['filename'].lower())
    elif sort_by == "name_desc":
        all_files.sort(key=lambda x: x['filename'].lower(), reverse=True)
    elif sort_by == "date_asc":
        all_files.sort(key=lambda x: x['mtime'])
    else:
        # Default: date_desc (newest first)
        all_files.sort(key=lambda x: x['mtime'], reverse=True)

    filtered = []
    for entry in all_files:
        full_path = os.path.normpath(os.path.join(entry['path'], entry['filename']))
        is_fav = full_path in favorites
        if favorites_only and not is_fav:
            continue
        meta = get_image_metadata(full_path)
        has_workflow = meta is not None
        if workflow_only and not has_workflow:
            continue
        if utility_type == "generation" and not has_workflow:
            continue
        if utility_type == "input" and has_workflow:
            continue
        asset_meta = get_asset_metadata(full_path) if full_path.lower().endswith('.png') else {"title": "", "description": "", "tags": "", "rating": ""}
        # Search filtering -- check after metadata is loaded so all fields are available
        ext = os.path.splitext(entry['filename'])[1].lstrip('.').upper()
        search_file_info = {
            "file_type": ext,
            "file_size": format_file_size(entry['size']),
            "created_date": datetime.datetime.fromtimestamp(entry['mtime']).strftime("%b %d, %Y %H:%M"),
            "full_path": full_path,
        }
        if search_terms and not match_search_terms(search_terms, entry['filename'].lower(), asset_meta, meta, search_file_info):
            continue
        if hide_nsfw:
            # Check filename
            name_lower = entry['filename'].lower()
            if any(term in name_lower for term in NSFW_TERMS):
                continue
            # Check embedded asset metadata (title, description, tags)
            asset_text = f"{asset_meta['title']} {asset_meta['description']} {asset_meta['tags']}".lower()
            if any(term in asset_text for term in NSFW_TERMS):
                continue
        # If model/lora filters are active, images must have workflow metadata
        if (target_models or target_loras) and not meta:
            continue
        if meta:
            if hide_nsfw:
                searchable = str(meta['prompt']).lower()
                model_lora_tags = " ".join(meta['models'] + meta['loras']).lower()
                searchable += " " + model_lora_tags
                if any(term in searchable for term in NSFW_TERMS):
                    continue
            if target_models and not target_models.intersection(meta['models']):
                continue
            if target_loras and not target_loras.intersection(meta['loras']):
                continue
        # Build metadata summary for frontend display
        metadata_summary = {}
        workflow_nodes = []
        if meta:
            if meta["models"]:
                metadata_summary["model"] = meta["models"][0].split("/")[-1].split("\\")[-1]
            if meta["seeds"]:
                metadata_summary["seed"] = meta["seeds"][0]
            if meta["sampler_names"]:
                metadata_summary["sampler"] = meta["sampler_names"][0]
            if meta["schedulers"]:
                metadata_summary["scheduler"] = meta["schedulers"][0]
            if meta["steps"]:
                metadata_summary["steps"] = meta["steps"][0]
            if meta["cfg"]:
                metadata_summary["cfg"] = meta["cfg"][0]
            # Build workflow_nodes: per-node scalar inputs for copy submenus
            for node_id, node in meta["prompt"].items():
                if not isinstance(node, dict):
                    continue
                class_type = node.get("class_type", "")
                inputs = node.get("inputs", {})
                if not isinstance(inputs, dict):
                    continue
                scalar_inputs = {}
                for k, v in inputs.items():
                    if isinstance(v, (str, int, float, bool)):
                        scalar_inputs[k] = v
                if scalar_inputs:
                    workflow_nodes.append({
                        "id": node_id,
                        "class_type": class_type,
                        "inputs": scalar_inputs,
                    })
        # Build file_metadata for copy submenu (reuse search_file_info)
        file_metadata = dict(search_file_info, filename=entry['filename'])
        filtered.append({
            "filename": entry['filename'],
            "url": f"/cm-ext-view?path={urllib.parse.quote(full_path)}",
            "full_path": full_path,
            "has_workflow": has_workflow,
            "is_favorite": is_fav,
            "file_size": entry['size'],
            "file_size_formatted": format_file_size(entry['size']),
            "file_type": ext,
            "created_at": entry['mtime'],
            "asset_title": asset_meta["title"],
            "asset_description": asset_meta["description"],
            "asset_tags": asset_meta["tags"],
            "asset_rating": asset_meta["rating"],
            "metadata_summary": metadata_summary,
            "workflow_nodes": workflow_nodes,
            "file_metadata": file_metadata,
        })
        if len(filtered) >= 60:
            break
    return web.json_response({"files": filtered})
