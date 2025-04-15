import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        arcaneMf: 'http://localhost:3001/assets/remoteEntry.js',
        tlouMf: 'http://localhost:3002/assets/remoteEntry.js',
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
