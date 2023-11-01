/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      red: colors.red,
      'primary-color-light': "#98B7DD",
      'secondary-color-light': "#B9D1EE",
      'accent-color-light': "#2B67B1",
      'primary-color-dark': "#224167",
      'secondary-color-dark': "#112946",
      'accent-color-dark': "#4E8BD4",
      'text-light': "#081321",
      'text-dark': "#EDEEEE",
      'background-dark': "#070708",
      'background-light': "#F7F8F8",
    },
  },
  plugins: [],
  darkMode: 'class',
}

