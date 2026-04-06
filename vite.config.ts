import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using PostCSS for Tailwind v4 processing now to resolve plugin conflicts
export default defineConfig({
  plugins: [
    react(),
  ],
})
