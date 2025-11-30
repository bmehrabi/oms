import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/**/*.test.tsx', 'src/*.test.tsx'],
    coverage: {
      provider: 'v8',
      exclude: [
        'node_modules/**',
        'dist/**',
        'coverage/**',
        'src/assets/**'
      ]
    }
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src'),
    },
  },
});
