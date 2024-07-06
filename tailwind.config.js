/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundColor:{
        'BrandcolorTwo': '#CBD5E1'
      },  
      colors:{
        'TextColors': '#CBD5E1'
      },
      fontFamily:{
        'BrandFont': ['"Encode Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}