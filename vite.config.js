import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // This is important for Netlify or static hosting
  plugins: [react()],
});
