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
  css: {
    preprocessorOptions: {
      scss: {
        // The inherited html5up/skel stylesheet predates the Sass module system and
        // triggers a wall of deprecation warnings on every build. Section 6 replaces
        // it outright; until then, keep the build log readable.
        silenceDeprecations: [
          'import',
          'global-builtin',
          'color-functions',
          'slash-div',
          'if-function',
        ],
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    include: ['src/**/*.{test,spec}.{js,jsx}'],
  },
});
