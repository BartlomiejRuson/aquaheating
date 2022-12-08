/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        firstSlide:"url(/images/1.jpg)",
        secondSlide:"url(/images/2.jpg)",
        thirdSlide:"url(/images/3.jpg)"
      },
      colors:{
        "aquaBlue":"#008DD2"
      }
    },
  },
  plugins: [],
}
