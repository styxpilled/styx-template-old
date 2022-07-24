import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '$lib': path.resolve('./src/lib'),
      '$styles': path.resolve('./src/styles'),
      '$components': path.resolve('./src/components'),
    }
  }
};

export default config;