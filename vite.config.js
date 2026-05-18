import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Rick-Morty-Appi/',
  plugins: [react()],
})
