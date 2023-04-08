/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B302D'
      },
      backgroundImage: {
        'fall-patern': "url('/img/bg.png')"
      }
    }
  },
  plugins: []
}
