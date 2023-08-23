/** @type {import('tailwindcss').Config} */
module.exports = {

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  content:
    ["./src/**/*.{html,js,css,vue}",
      './pages/**/*.{html,js}',
      './components/**/*.{html,js}',],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [require("daisyui"), 
  require('@tailwindcss/forms')(),],

  variants: {
    extend: {
    },
  },

}


