import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "adata-7a",
    project: "javascript-react"
  }), visualizer({ open: true }), compression()],

  resolve: {
    alias: {
      "@": path.resolve("./src"),
    }
  },

  typescript: {
    tsconfig: './tsconfig.app.json',
  },

  build: {
    rollupOptions: {
      output: {
          manualChunks(id) {
              if (id.includes('node_modules')) {
                  return id
                      .toString()
                      .split('node_modules/')[1]
                      .split('/')[0]
                      .toString();
                    }
                  },
              },
          },
          chunkSizeWarningLimit: 1000,
      sourcemap: true,
    },
})