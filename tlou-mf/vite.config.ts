import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3002,
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: 'tlou-mf',
      filename: 'remoteEntry.js',
      exposes: {
        './ListOfCharacters': './src/components/ListOfCharacters',
      },
      shared: ['react', 'react-dom', 'styled-components'],
    }),
  ],
  build: {
    target: 'esnext',
  }
});
