import json

from .png_io import read_png_chunks


def get_image_metadata(full_path):
    """Read ComfyUI workflow prompt metadata from PNG tEXt chunks.

    Extracts models, LoRAs, seeds, sampler settings, prompt text, node types,
    and builds a unified searchable_text string for broad substring matching.
    """
    chunks = read_png_chunks(full_path)
    if not chunks:
        return None
    for chunk_type, data, _ in chunks:
        if chunk_type == b"tEXt" and b"\x00" in data:
            key, value = data.split(b"\x00", 1)
            if key == b"prompt":
                try:
                    prompt = json.loads(value)
                except (json.JSONDecodeError, AttributeError):
                    continue

                models = []
                loras = []
                seeds = []
                sampler_names = []
                schedulers = []
                steps_list = []
                cfg_list = []
                prompt_texts = []
                node_types = []
                all_text_values = []

                for _node_id, node in prompt.items():
                    if not isinstance(node, dict):
                        continue
                    class_type = node.get("class_type", "")
                    if class_type:
                        node_types.append(class_type)

                    inputs = node.get("inputs", {})
                    if not isinstance(inputs, dict):
                        continue

                    # Models & LoRAs
                    if "ckpt_name" in inputs:
                        models.append(inputs["ckpt_name"])
                    if "lora_name" in inputs:
                        loras.append(inputs["lora_name"])

                    # Sampler settings
                    if "seed" in inputs:
                        val = inputs["seed"]
                        if isinstance(val, (int, float)):
                            seeds.append(str(int(val)))
                    if "sampler_name" in inputs:
                        val = inputs["sampler_name"]
                        if isinstance(val, str):
                            sampler_names.append(val)
                    if "scheduler" in inputs:
                        val = inputs["scheduler"]
                        if isinstance(val, str):
                            schedulers.append(val)
                    if "steps" in inputs:
                        val = inputs["steps"]
                        if isinstance(val, (int, float)):
                            steps_list.append(str(int(val)))
                    if "cfg" in inputs:
                        val = inputs["cfg"]
                        if isinstance(val, (int, float)):
                            cfg_list.append(str(val))

                    # Prompt text from CLIPTextEncode and similar nodes
                    if "text" in inputs:
                        val = inputs["text"]
                        if isinstance(val, str) and val.strip():
                            prompt_texts.append(val.strip())

                    # Collect all string-type input values for broad search
                    for v in inputs.values():
                        if isinstance(v, str) and v.strip():
                            all_text_values.append(v.strip())

                # Build a single lowercased searchable string
                searchable_parts = (
                    models + loras + seeds + sampler_names + schedulers
                    + steps_list + cfg_list + prompt_texts + node_types
                    + all_text_values
                )
                searchable_text = " ".join(searchable_parts).lower()

                return {
                    "prompt": prompt,
                    "models": models,
                    "loras": loras,
                    "seeds": seeds,
                    "sampler_names": sampler_names,
                    "schedulers": schedulers,
                    "steps": steps_list,
                    "cfg": cfg_list,
                    "prompt_texts": prompt_texts,
                    "node_types": node_types,
                    "searchable_text": searchable_text,
                }
    return None
