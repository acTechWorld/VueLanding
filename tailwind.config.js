/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        loadingSlide: {
          '0%': { width: 0 },
          '100%': { width: '100%' }
        }
      }
    }
  },
  plugins: []
}
