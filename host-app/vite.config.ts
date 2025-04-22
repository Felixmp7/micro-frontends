import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    tsconfigPaths(),
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
    target: 'esnext',
  }
});
