import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Alias '@' to your src directory
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'), // Adjust path to index.js if needed
      name: 'MyLibrary',
      fileName: (format) => `vue-landing.${format}.js`
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into your library
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
