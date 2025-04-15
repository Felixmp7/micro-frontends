import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [
    react(),
    federation({
      name: 'tlou-mf',
      filename: 'remoteEntry.js',
      exposes: {
        './TlouCharacters': './src/TlouCharacters',
      },
      shared: ['react', 'react-dom', 'styled-components'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
});
