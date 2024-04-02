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
        'button-color': '#D2B48C',
        'text-color': '#5D5046',
        'Instagram': '#C13584',
        'Facebook': '#4267B2'
      },
      letterSpacing: {
        wide: '.25em',
      },
      fontFamily: {
        sans: ['Hiragino Mincho Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}