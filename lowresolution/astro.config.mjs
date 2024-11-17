// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Configuración de Astro
export default defineConfig({
  integrations: [
    react(),    // Habilitar soporte para React
    tailwind(), // Habilitar soporte para Tailwind
  ],
});
