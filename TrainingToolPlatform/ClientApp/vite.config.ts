import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    cors: true, // Enable CORS support
  },
  build: {
    outDir: '../dist', // Output directory for build files
  },
});