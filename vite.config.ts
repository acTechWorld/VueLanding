import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MyComponentLibrary'
    },
    rollupOptions: {
      // Make sure to externalize Vue to prevent it from being bundled
      external: ['vue'],
      output: {
        // Provide global variables to use externally
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
