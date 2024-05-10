import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [],
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [react(), tsconfigPaths(), svgr({ svgrOptions: { svgProps: { fill: 'currentColor', width: '1em' } } })],
})
