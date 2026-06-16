/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a6957',
          light: '#2d8a71',
          dark: '#134d3f',
        },
        cream: {
          DEFAULT: '#f0ede4',
          light: '#f8f6f1',
          dark: '#e0dbd0',
        },
        charcoal: {
          DEFAULT: '#2c2622',
          light: '#4a3f38',
          muted: '#7a6e67',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#d9be8e',
          dark: '#a8863f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.45s ease-out both',
      },
    },
  },
  plugins: [],
}
