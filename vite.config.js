import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    lib: {
      entry: "src/index.js",
      name: "ConfirmDialog",
      fileName: (format) => `rms-vue3-confirm-dialog.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue', 'bulma'
      ],
      output: {
        globals: {
          vue: 'Vue',
          'bulma': 'Bulma'
        },
        exports: 'named',
      },
    },
  }
})
