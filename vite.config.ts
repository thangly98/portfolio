/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@components', replacement: '/src/components' }],
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        svgProps: { width: '1em' },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
