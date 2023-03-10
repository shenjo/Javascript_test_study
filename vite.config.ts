import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      parserOpts: {
        plugins: ['decorators-legacy']
      }
    }
  })],
  server: {
    port: 8888,
    open: true
  },
  css: {
    preprocessorOptions: {
      less: {
        modules: {
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
        javascriptEnabled: true,
      },
    }
  },
});
