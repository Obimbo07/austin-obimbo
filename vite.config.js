import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "adata-7a",
    project: "javascript-react"
  })],

  resolve: {
    alias: {
      "@": path.resolve("./src"),
    }
  },

  typescript: {
    tsconfig: './tsconfig.app.json',
  },

  build: {
      chunkSizeWarningLimit: 1000,
      sourcemap: true,
    },
})