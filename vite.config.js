import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['*5173*.manus.computer']
  },
  build: {
    outDir: 'dist'
  }
})
