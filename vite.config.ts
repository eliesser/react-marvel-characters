import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_PUBLIC_KEY: process.env.VITE_PUBLIC_KEY,
      VITE_PRIVATE_KEY: process.env.VITE_PRIVATE_KEY,
      VITE_MODE: process.env.VITE_MODE,
    },
  },
  resolve: {
    alias: {
      path: 'path-browserify',
    },
  },
});
