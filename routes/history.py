import json
import os
import urllib.parse

import folder_paths
from aiohttp import web

from ..utils.config import NSFW_TERMS, load_config
from ..utils.indexer import get_index
from ..utils.search import parse_search_query
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
    utility_type = params.get("utility", "all")
    favorites_only = params.get("favorites_only") == "true"
    model_filter_raw = params.get("model_filter", "all")
    lora_filter_raw = params.get("lora_filter", "all")
    target_models = set() if model_filter_raw == "all" else set(model_filter_raw.split(","))
    target_loras = set() if lora_filter_raw == "all" else set(lora_filter_raw.split(","))
    sort_by = params.get("sort", "date")
    workflow_only = params.get("workflow_only") == "true"
    offset = int(params.get("offset", "0"))
    limit = int(params.get("limit", "60"))

    config = load_config()
    favorites = set(config.get("favorites", []))

    input_dir = folder_paths.get_input_directory()
    output_dir = config.get("output_path") or folder_paths.get_output_directory()
    custom_folders = config.get("custom_folders", [])

    # Build directory list based on tab
    scan_dirs = []
    if tab == "all":
        scan_dirs.append(input_dir)
        scan_dirs.append(output_dir)
        for custom in custom_folders:
            scan_dirs.append(custom["path"])
    elif tab == "input":
        scan_dirs.append(input_dir)
    elif tab == "output":
        scan_dirs.append(output_dir)
    elif tab == "custom":
        for custom in custom_folders:
            scan_dirs.append(custom["path"])

    index = get_index()
    rows, total = index.query_assets(
        directories=scan_dirs,
        search_terms=search_terms if search_terms else None,
        hide_nsfw=hide_nsfw,
        nsfw_terms=NSFW_TERMS if hide_nsfw else None,
        workflow_only=workflow_only,
        utility_type=utility_type,
        target_models=target_models if target_models else None,
        target_loras=target_loras if target_loras else None,
        favorites=favorites,
        favorites_only=favorites_only,
        sort_by=sort_by,
        offset=offset,
        limit=limit,
    )

    # Transform rows into the response shape matching the previous implementation
    filtered = []
    for row in rows:
        full_path = row["path"]
        is_fav = full_path in favorites
        has_workflow = bool(row["has_workflow"])
        ext = row["extension"].lstrip(".").upper()

        # Build metadata summary and workflow_nodes from stored prompt_json
        metadata_summary = {}
        workflow_nodes = []
        if has_workflow and row["prompt_json"]:
            try:
                prompt = json.loads(row["prompt_json"])
            except (json.JSONDecodeError, TypeError):
                prompt = None

            models = json.loads(row["models_json"]) if row["models_json"] else []
            seeds = json.loads(row["seeds_json"]) if row["seeds_json"] else []
            sampler_names = json.loads(row["sampler_names_json"]) if row["sampler_names_json"] else []
            schedulers = json.loads(row["schedulers_json"]) if row["schedulers_json"] else []
            steps = json.loads(row["steps_json"]) if row["steps_json"] else []
            cfg = json.loads(row["cfg_json"]) if row["cfg_json"] else []

            if models:
                metadata_summary["model"] = models[0].split("/")[-1].split("\\")[-1]
            if seeds:
                metadata_summary["seed"] = seeds[0]
            if sampler_names:
                metadata_summary["sampler"] = sampler_names[0]
            if schedulers:
                metadata_summary["scheduler"] = schedulers[0]
            if steps:
                metadata_summary["steps"] = steps[0]
            if cfg:
                metadata_summary["cfg"] = cfg[0]

            # Build workflow_nodes: per-node scalar inputs for copy submenus
            if prompt and isinstance(prompt, dict):
                for node_id, node in prompt.items():
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

        file_metadata = {
            "file_type": ext,
            "file_size": row["size_formatted"],
            "created_date": row["date_formatted"],
            "full_path": full_path,
            "filename": row["filename"],
        }

        filtered.append({
            "filename": row["filename"],
            "url": f"/cm-ext-view?path={urllib.parse.quote(full_path)}",
            "full_path": full_path,
            "has_workflow": has_workflow,
            "is_favorite": is_fav,
            "file_size": row["size"],
            "file_size_formatted": row["size_formatted"],
            "file_type": ext,
            "created_at": row["mtime"],
            "asset_title": row["asset_title"],
            "asset_description": row["asset_description"],
            "asset_tags": row["asset_tags"],
            "asset_rating": row["asset_rating"],
            "metadata_summary": metadata_summary,
            "workflow_nodes": workflow_nodes,
            "file_metadata": file_metadata,
        })

    return web.json_response({
        "files": filtered,
        "total": total,
        "offset": offset,
        "limit": limit,
    })
