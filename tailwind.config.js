/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '3rem',
      '5xl': '6rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'accent-color': '#D2B48C',
        'text-color': '#5D5046',
        'main-color': '#FDFDFD',
        'news-color': '#FFF2ED',
        'Instagram': '#C13584',
        'Facebook': '#4267B2',
      },
      height: {
        0.1: '0.1rem',
        0.25: '0.25rem',
        0.5: '0.5rem',
        0.75: '0.75rem',
      },
      letterSpacing: {
        wide: '.25em',
      },
      fontFamily: {
        sans: ['Hiragino Mincho Pro', 'sans-serif'],
      },
      animation: {
        slideInFromBottom: 'slideInFromBottom 1s ease-in forwards',
        slideInFromRight: 'slideInFromRight 1s ease-in forwards',
        slideInFromLeft: 'slideInFromLeft 1s ease-in forwards',
      },
      keyframes: {
        slideInFromBottom: {
          '0%': {
            opacity: 0,
            transform: 'translateY(60px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        slideInFromRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(60px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        slideInFromLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-60px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
