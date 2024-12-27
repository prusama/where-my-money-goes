/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}
