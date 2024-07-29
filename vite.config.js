import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react()],
  };

  if (mode === 'development') {
    config.base = '/';
  } else {
    config.base = '/API-owen-wilson-scenes-finder/';
  }

  return config;
});
