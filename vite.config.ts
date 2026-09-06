import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// The site is served from https://akourk.github.io/website/, so every asset URL and
// every route is prefixed with /website/. The dev server runs on the same base on
// purpose: a base-path mistake then shows up locally instead of only in production.
export default defineConfig({
  base: '/website/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
