/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize:{
      md: 18,
      sm: 16,
      xs: 12,

      '2xl': 32,
      xl: 28,
      lg:24,
      
    },
    colors:{
      background: '#F5F3FF',
      transparent:'transparent',
      white: '#FFFFFF',
      black: '#000000',
      'purple-300': '#C4B5FD',
      'purple-200': '#DDD6FE',
      'purple-400': '#c084fc',
      'purple-50': '#F3E8FF'
    },
    extend: {
      fontFamily: {
        sans:'Roboto, sans-serif'
      },
    },
  },
  plugins: [],
}
