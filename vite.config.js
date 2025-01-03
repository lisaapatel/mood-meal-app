import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/recipe-finder/',
  server: {
    port: 3006,
    open: true,
    host: true // This enables listening on all addresses
  }
}) 