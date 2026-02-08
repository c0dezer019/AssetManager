# GenHistory: The Ultimate ComfyUI Asset Manager

**GenHistory** is a high-performance asset management extension for ComfyUI. It categorizes your images based on their functional utility and allows you to browse, filter, and reload workflows from any directory on your machine.

## 🚀 Key Features
- **Utility Filtering**: Toggle between **Generations** (images with workflow metadata) and **Static Assets** (raw inputs).
- **Deep Metadata Scan**: Filter your library by specific **Checkpoints (Models)** or **LoRAs** used in the original generation.
- **Custom Folder Support**: Add any absolute path on your hard drive to your scan locations.
- **Safe Mode**: Integrated NSFW filter that scans prompt metadata against a customizable keyword list.
- **Modern UI**: A responsive grid with collapsible advanced settings and blueprint-style indicators for workflow-ready images.
- **Secure File Proxy**: Serves images from any local path without violating browser security or freezing the ComfyUI router.

## 🛠️ Installation
1. Navigate to your `ComfyUI/custom_nodes` folder.
2. Create a folder named `GenHistory`.
3. Copy the `__init__.py`, `pyproject.toml`, `filters.json`, and the `js/` folder into it.
4. Restart ComfyUI.

## ⚙️ Configuration
- **NSFW Filter**: Add or remove terms in `filters.json`.
- **Custom Paths**: Use the ⚙️ icon in the sidebar to add absolute directory paths. These are saved to `config.json` automatically.

---
*Engineered for performance by The Comfymeister.*
