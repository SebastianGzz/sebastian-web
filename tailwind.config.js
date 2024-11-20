/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        app: {
          900: '#030303', // Negro oscuro
          600: '#939392', // Gris medio
          500: '#CACACA', // Gris suave
          400: '#E3E0DD', // Gris claro
          200: '#EDE9E6', // Gris muy claro
        },
      },
    },
  },
  plugins: [],
};
