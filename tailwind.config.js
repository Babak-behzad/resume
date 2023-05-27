/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'interests-color' : '#F8F8F8'
      },
      screens: {
        'md' : '770px',
        'lg' : '770px',
        'xl' : '770px',
        '2xl': '770px',
      }
    },
  },
  plugins: [],
}

