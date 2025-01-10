import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte({ compilerOptions: { generate: 'ssr' } })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'SvelteMasonry',
      fileName: (format) => `index.${format === 'es' ? 'js' : format}`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['svelte', 'svelte/internal'],
      output: {
        globals: {
          svelte: 'Svelte'
        }
      }
    }
  }
}); 