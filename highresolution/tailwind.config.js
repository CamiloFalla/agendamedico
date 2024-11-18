// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Ajusta los valores de color según tus necesidades
        secondary: '#6b7280',
        info: '#2563eb',
        background: '#f9fafb',
      },
    },
  },
  plugins: [],
};
