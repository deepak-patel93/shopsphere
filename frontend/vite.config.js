import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
  outDir: 'dist'  // correct (or just remove outDir, dist is default)
},
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:5000'
      }
    }
  }
})
