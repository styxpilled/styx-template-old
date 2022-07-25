import { sveltekit } from '@sveltejs/kit/vite';
import { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
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