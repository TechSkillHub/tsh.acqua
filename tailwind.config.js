import { _height } from '#tailwind-config/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand1': '#F95B22',
        'brand2': '#FD9C3A',
        'brand3': '#FFAF41',
        'gradient': 'linear-gradient(180deg, rgba(249,91,34,1) 0%, rgba(249,91,34,0.5046393557422969) 100%)'
      },
      backgroundImage: {
        'cover': "url('/assets/images/cover.webp')"
      },
      fontFamily: {
        'sans': ['Trebuchet'],
        'theme': ['Sansation']
      },
    },
    header: {
      height: '50rem'
    }
    
  },
  plugins: [require('flowbite/plugin')],
}