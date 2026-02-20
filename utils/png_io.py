import struct
import zlib

from .config import ASSET_META_KEYS


def read_png_chunks(full_path):
    """Read all PNG chunks from a file. Returns list of (type_bytes, data_bytes, crc_bytes) tuples."""
    chunks = []
    try:
        with open(full_path, "rb") as f:
            signature = f.read(8)
            if signature != b"\x89PNG\r\n\x1a\n":
                return None
            while True:
                chunk_hdr = f.read(8)
                if not chunk_hdr or len(chunk_hdr) < 8:
                    break
                length, chunk_type = struct.unpack(">I4s", chunk_hdr)
                data = f.read(length)
                crc = f.read(4)
                chunks.append((chunk_type, data, crc))
    except Exception:
        return None
    return chunks


def get_asset_metadata(full_path):
    """Read custom asset metadata (title, description, tags, rating) from PNG tEXt chunks."""
    meta = {"title": "", "description": "", "tags": "", "rating": ""}
    chunks = read_png_chunks(full_path)
    if not chunks:
        return meta
    for chunk_type, data, _ in chunks:
        if chunk_type == b"tEXt" and b"\x00" in data:
            key, value = data.split(b"\x00", 1)
            key_str = key.decode("ascii", errors="replace")
            if key_str == "asset_title":
                meta["title"] = value.decode("utf-8", errors="replace")
            elif key_str == "asset_description":
                meta["description"] = value.decode("utf-8", errors="replace")
            elif key_str == "asset_tags":
                meta["tags"] = value.decode("utf-8", errors="replace")
            elif key_str == "asset_rating":
                meta["rating"] = value.decode("utf-8", errors="replace")
    return meta


def write_asset_metadata(full_path, title="", description="", tags="", rating=""):
    """Write custom asset metadata into PNG tEXt chunks. Preserves all other chunks."""
    chunks = read_png_chunks(full_path)
    if chunks is None:
        return False
    # Filter out existing asset metadata chunks
    filtered = [
        c for c in chunks
        if not (c[0] == b"tEXt" and c[1].split(b"\x00", 1)[0].decode("ascii", errors="replace") in ASSET_META_KEYS)
    ]
    # Build new metadata chunks (insert before IEND)
    new_meta = {"asset_title": title, "asset_description": description, "asset_tags": tags, "asset_rating": rating}
    meta_chunks = []
    for key, val in new_meta.items():
        if val:
            chunk_data = key.encode("ascii") + b"\x00" + val.encode("utf-8")
            meta_chunks.append((b"tEXt", chunk_data, None))
    # Rebuild: all chunks except IEND, then meta chunks, then IEND
    iend = [c for c in filtered if c[0] == b"IEND"]
    body = [c for c in filtered if c[0] != b"IEND"]
    final = body + meta_chunks + iend
    # Write file
    try:
        with open(full_path, "wb") as f:
            f.write(b"\x89PNG\r\n\x1a\n")
            for chunk_type, data, original_crc in final:
                f.write(struct.pack(">I", len(data)))
                f.write(chunk_type)
                f.write(data)
                if original_crc is not None:
                    f.write(original_crc)
                else:
                    crc = zlib.crc32(chunk_type + data) & 0xFFFFFFFF
                    f.write(struct.pack(">I", crc))
        return True
    except Exception:
        return False
