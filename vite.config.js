import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Plugin to inject CSS into the JS bundle via a <style> tag at runtime
function cssInjectPlugin() {
  return {
    name: 'css-inject',
    apply: 'build',
    enforce: 'post',
    generateBundle(options, bundle) {
      let cssContent = ''
      const cssFiles = []

      for (const [name, chunk] of Object.entries(bundle)) {
        if (name.endsWith('.css')) {
          cssContent += chunk.source
          cssFiles.push(name)
        }
      }

      // Remove the CSS files from the bundle
      for (const name of cssFiles) {
        delete bundle[name]
      }

      // Inject CSS into the JS entry
      if (cssContent) {
        for (const [name, chunk] of Object.entries(bundle)) {
          if (chunk.type === 'chunk' && chunk.isEntry) {
            const escaped = cssContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')
            const injector = `(function(){const s=document.createElement("style");s.textContent=\`${escaped}\`;document.head.appendChild(s)})();\n`
            chunk.code = injector + chunk.code
            break
          }
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [vue(), cssInjectPlugin()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    lib: {
      entry: 'src/main.js',
      formats: ['es'],
      fileName: () => 'assetmanager.js'
    },
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: [
        /^\.\.\/.*scripts\//
      ]
    }
  }
})
