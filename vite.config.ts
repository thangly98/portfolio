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
  build: {
    rollupOptions: {
      output: {
        // manualChunks configures how Rollup splits the build output into separate files.
        // This helps optimize browser caching and prevents a single massive "index.js" file.
        // See Vite/Rollup guide: https://vitejs.dev/guide/build.html#chunking-strategy
        // Rollup specific options: https://rollupjs.org/configuration-options/#output-manualchunks
        manualChunks: {
          // Grouping React ecosystem libraries into a "vendor" chunk
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Grouping heavy animation libraries into an "animations" chunk
          animations: ['framer-motion', 'gsap', 'ogl'],
        },
      },
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
