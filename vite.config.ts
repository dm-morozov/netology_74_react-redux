// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Указываем базовый путь для GitHub Pages
  base: '/',
  plugins: [react()],
}))
