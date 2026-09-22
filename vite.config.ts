import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fortune-weave-planner/',
  plugins: [react()],
  test: { include: ['tests/unit/**/*.test.ts'], environment: 'node' },
});
