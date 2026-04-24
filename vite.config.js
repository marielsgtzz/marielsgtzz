import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Avisa si algún chunk supera 600 KB (antes del gzip)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Code splitting manual: separa las librerías grandes en chunks propios
        // para que el navegador pueda cachearlas independientemente del código app.
        // Vite 8 (rolldown) requiere que manualChunks sea una función, no un objeto.
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'; // React core — raramente cambia
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'; // Animaciones — chunk propio
          }
          if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) {
            return 'vendor-i18n'; // Internacionalización
          }
          if (id.includes('node_modules/@mui') || id.includes('node_modules/@emotion')) {
            return 'vendor-mui'; // MUI — librería grande
          }
        },
      },
    },
  },

  // Optimización de dependencias en dev: pre-bundlea las libs para dev server más rápido
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', 'framer-motion', 'i18next', 'react-i18next'],
  },
})
