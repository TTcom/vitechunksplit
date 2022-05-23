import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
// https://vitejs.dev/config/
export default defineConfig({
  base: './', 
  plugins: [
    vue(),
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customSplitting: {
        // `react` and `react-dom` will be bundled together in the `react-vendor` chunk (with their dependencies, such as object-assign)
        'moment-vendor': ['moment']
        // Any file that includes `utils` in src dir will be bundled in the `utils` chunk
      }
    })
  ]
})
