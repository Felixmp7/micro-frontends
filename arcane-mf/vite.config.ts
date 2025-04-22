import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3001,
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: 'arcane-mf',
      filename: 'remoteEntry.js',
      exposes: {
        './CharactersList': './src/components/CharactersList/index.tsx',
      },
      shared: ['react', 'react-dom', 'styled-components'],
    }),
  ],
  build: {
    target: 'esnext',
  }
});
