/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#011638',
        'primary-light': '#E3E6EC',
        'primary-100': '#B8C1D1',
        'primary-200': '#8B99B2',
        'primary-300': '#617293',
        'primary-400': '#40577F',
        'primary-500': '#1C3D6D',
        secondary: '#EECD86',
        'white-custom': '#E9EDEC',
      }
    },  
  },
  plugins: [],
}
