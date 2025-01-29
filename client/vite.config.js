import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Define your API base URLs
const isProduction = process.env.NODE_ENV === 'production';
const target = isProduction ? process.env.NODE_ENV_URL : 'http://127.0.0.1:3000/';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
