import re as _re


def parse_search_query(raw_query):
    """Parse a search query string into a list of search terms.

    Supports:
    - key:"quoted value" for values with spaces/commas (e.g. prompt:"a brown kitty, realistic")
    - key:value prefix syntax for simple values (e.g. seed:12345, model:sdxl)
    - "quoted phrase" for multi-word unprefixed search
    - Multiple space-separated terms are AND-matched

    Workflow prefixes: seed, model, lora, node, sampler, scheduler, steps, cfg, prompt
    File-level prefixes: filename (or name), type, size, path, date

    Returns a list of dicts: [{"key": str|None, "value": str}, ...]
    """
    if not raw_query or not raw_query.strip():
        return []

    terms = []
    # Match quoted strings or key:value pairs or plain words
    pattern = _re.compile(
        r'(\w+):"([^"]*)"'   # key:"quoted value"
        r'|(\w+):(\S+)'      # key:value
        r'|"([^"]*)"'        # "quoted phrase"
        r"|(\S+)"            # plain word
    )
    for m in pattern.finditer(raw_query):
        if m.group(1) is not None:
            # key:"quoted value"
            terms.append({"key": m.group(1).lower(), "value": m.group(2).lower()})
        elif m.group(3) is not None:
            # key:value
            terms.append({"key": m.group(3).lower(), "value": m.group(4).lower()})
        elif m.group(5) is not None:
            # "quoted phrase"
            terms.append({"key": None, "value": m.group(5).lower()})
        elif m.group(6) is not None:
            # plain word
            terms.append({"key": None, "value": m.group(6).lower()})
    return terms


def match_search_terms(terms, filename_lower, asset_meta, meta, file_info=None):
    """Check if ALL search terms match against the available data.

    - Unprefixed terms: substring match across filename, asset metadata,
      file-level info, and workflow searchable_text.
    - Prefixed terms (key:value): targeted matching against specific metadata
      fields. seed/steps use exact match; others use substring.
    - File-level prefixes: filename, name, type, size, path, date.

    Returns True if every term matches.
    """
    # Build broad search corpus once (for unprefixed terms)
    broad_parts = [filename_lower]
    if asset_meta:
        broad_parts.extend([
            asset_meta.get("title", "").lower(),
            asset_meta.get("description", "").lower(),
            asset_meta.get("tags", "").lower(),
        ])
    if meta:
        broad_parts.append(meta.get("searchable_text", ""))
    if file_info:
        broad_parts.extend([
            file_info.get("file_type", "").lower(),
            file_info.get("file_size", "").lower(),
            file_info.get("created_date", "").lower(),
            file_info.get("full_path", "").lower(),
        ])
    broad_text = " ".join(broad_parts)

    for term in terms:
        key, value = term["key"], term["value"]
        if not value:
            continue

        if key is None:
            # Broad substring search
            if value not in broad_text:
                return False
        # -- File-level prefixes --
        elif key in ("filename", "name"):
            if value not in filename_lower:
                return False
        elif key == "type":
            file_type = (file_info or {}).get("file_type", "").lower()
            if value != file_type:
                return False
        elif key == "size":
            file_size = (file_info or {}).get("file_size", "").lower()
            if value not in file_size:
                return False
        elif key == "path":
            full_path = (file_info or {}).get("full_path", "").lower()
            if value not in full_path:
                return False
        elif key == "date":
            created_date = (file_info or {}).get("created_date", "").lower()
            if value not in created_date:
                return False
        # -- Workflow prefixes --
        elif key == "seed":
            if not meta or value not in meta.get("seeds", []):
                return False
        elif key == "model":
            if not meta or not any(value in m.lower() for m in meta.get("models", [])):
                return False
        elif key == "lora":
            if not meta or not any(value in la.lower() for la in meta.get("loras", [])):
                return False
        elif key == "node":
            if not meta or not any(value in n.lower() for n in meta.get("node_types", [])):
                return False
        elif key == "sampler":
            if not meta or not any(value in s.lower() for s in meta.get("sampler_names", [])):
                return False
        elif key == "scheduler":
            if not meta or not any(value in s.lower() for s in meta.get("schedulers", [])):
                return False
        elif key == "steps":
            if not meta or value not in meta.get("steps", []):
                return False
        elif key == "cfg":
            if not meta or not any(value == c for c in meta.get("cfg", [])):
                return False
        elif key == "prompt":
            if not meta or not any(value in p.lower() for p in meta.get("prompt_texts", [])):
                return False
        else:
            # Unknown prefix -- fall back to broad search
            prefixed = f"{key}:{value}"
            if prefixed not in broad_text:
                return False
    return True
