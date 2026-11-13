import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuração do Vite; o plugin faz o Vite entender os componentes React/JSX.
export default defineConfig({
  plugins: [react()],
})
