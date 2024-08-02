import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Directory for the build output
  },
  plugins: [react()],
  base: '/ReactUiTravelWebsite/'
})
 