const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      red: colors.rose,
      orange: colors.orange,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.sky,
      indigo: colors.indigo,
      purple: colors.violet,
      violet: colors.violet,
      pink: colors.pink,
    },
    fontFamily: {
      montserrat: ['Montserrat, sans-serif'],
      rammetto: ['Rammetto One, cursive'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
