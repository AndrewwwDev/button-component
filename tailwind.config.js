/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'fondo-aside': '#FAFBFD',
        'dev': '#F7542E',
        'challenges.io': '#090F31',
        'navegacion': '#9E9E9E',
        'footer': '#A9A9A9',
        'tittle-buttons': '#4F4F4F'
      },
    },
  },
  plugins: [],
};
