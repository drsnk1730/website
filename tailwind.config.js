/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#071952',
        primaryRed: '#EC568E',
        grayText: '#667085', 
        blackText: '#071952',
        orangeText: '#E4865D',
        secondary: '#38c172', 
        accent: '#ffed4a', 
        bgGray: '#0719520D',
        lineBg:'#D0D5DD'
      },
    },
  },
  plugins: [],
}
 