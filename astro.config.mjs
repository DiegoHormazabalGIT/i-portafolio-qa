// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind"; // <-- Usa la integración de Astro para Tailwind

// https://astro.build/config
export default defineConfig({
  // ¡MUY IMPORTANTE! Configura la base URL para GitHub Pages
  // Debe ser el nombre de tu repositorio.
  base: '/i-portafolio-qa', 

  // Integra las herramientas directamente con Astro
  integrations: [
    react(),
    tailwind() // <-- Añade Tailwind como integración de Astro
  ],

  // Si tienes otras configuraciones de Vite, irían aquí,
  // pero la integración de Tailwind de Astro ya maneja el plugin de Vite.
  // vite: {
  //   plugins: [],
  // },

  // Si no estás usando la salida estática, Astro lo hace por defecto para despliegue.
  // output: 'static', 
});