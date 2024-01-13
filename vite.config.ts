import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { resolve } from 'path';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 7070,
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [
      {
        find: '@api',
        replacement: resolve(__dirname, 'src', 'api'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src', 'components'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, 'src', 'hooks'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src', 'pages'),
      },
      {
        find: '@store',
        replacement: resolve(__dirname, 'src', 'store'),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, 'src', 'utils'),
      },
      {
        find: '@services',
        replacement: resolve(__dirname, 'src', 'services'),
      },
      {
        find: '@constants',
        replacement: resolve(__dirname, 'src', 'constants'),
      },
    ],
  },
  plugins: [react()],
});
