import { resolve } from 'path';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, './src/components/'),
      helpers: resolve(__dirname, './src/helpers/'),
      hooks: resolve(__dirname, './src/hooks/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }
})
