/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Necesario para la plantilla
    './src/**/*.{js,jsx}', // Detecta las clases en los archivos React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
