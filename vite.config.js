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
      name: "DialogTw", // updated name
      fileName: (format) => `rms-vue3-dialog-tw.${format}.js`, // updated filename
    },
    rollupOptions: {
      external: [
        'vue', 'tailwindcss'
      ],
      output: {
        globals: {
          vue: 'Vue',
          tailwindcss: 'tailwindcss'
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'rms-vue3-dialog-tw.css'; // updated CSS filename
          }
          return '[name][extname]';
        },
      },
    },
  }
})
