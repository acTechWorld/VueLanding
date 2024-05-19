/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'bg-primary': '#3D52A0',
      'bg-secondary': '#7091E6',
      'bg-tertiary': '#964734',
      'txt-primary': '#fff',
      'txt-secondary': '#fff',
      'txt-tertiary': '#fff'
    },
    extend: {
      keyframes: {
        loadingSlide: {
          '0%': { width: 0 },
          '100%': { width: '100%' }
        },
        loadingDots: {
          '0%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1, 1.5)' },
          '75%': { transform: 'scale(1, 1)' },
          '100%': { transform: 'scale(1, 1)' }
        },
        loadingDotsBefore: {
          '0%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(1, 1.5)' },
          '50%': { transform: 'scale(1, 0.67)' },
          '75%': { transform: 'scale(1, 1)' },
          '100%': { transform: 'scale(1, 1)' }
        },
        loadingDotsAfter: {
          '0%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1, 0.67)' },
          '75%': { transform: 'scale(1, 1.5)' },
          '100%': { transform: 'scale(1, 1)' }
        },
        translateTopSlideAppear: {
          '0%': { transform: 'translateY(2rem)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        translateBottomSlideDisappear: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(2rem)', opacity: 0 }
        }
      }
    }
  },
  plugins: []
}
