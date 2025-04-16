import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: 'arcane-mf',
      filename: 'remoteEntry.js',
      exposes: {
        './ArcaneCharacters': './src/ArcaneCharacters',
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
