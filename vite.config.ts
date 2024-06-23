import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Alias '@' to your src directory
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Adjust path to index.js if needed
      name: 'VueLanding',
      fileName: (format) => `vue-landing.${format}.js`,
      formats: ['es', 'umd']
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
