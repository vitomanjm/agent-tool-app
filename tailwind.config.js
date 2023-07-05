/** @type {import('tailwindcss').Config} */
module.exports = {

purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
content: 
["./src/**/*.{html,js,css,vue}",
'./pages/**/*.{html,js}',
'./components/**/*.{html,js}',],
theme: {
  extend: {},
},
plugins: [require("daisyui")],
}


