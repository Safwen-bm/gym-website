/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#FF1414',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],     
        montserrat: ['Montserrat', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}