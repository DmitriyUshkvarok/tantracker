import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [],
    },
    transformer: 'postcss',
  },
  build: {
    sourcemap: true,
  },
  plugins: [tsConfigPaths(), tanstackStart()],
});
