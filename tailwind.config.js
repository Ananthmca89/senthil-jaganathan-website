/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff8f0',
          100: '#ffecd4',
          200: '#ffd5a3',
          300: '#ffb86b',
          400: '#ff9130',
          500: '#f97008',
          600: '#ea5504',
          700: '#c23e07',
          800: '#9a310e',
          900: '#7c2a0f',
        },
        crimson: {
          50: '#fff0f2',
          100: '#ffe0e5',
          200: '#ffc6cf',
          300: '#ff9aaa',
          400: '#ff5f7a',
          500: '#ff2a52',
          600: '#f00038',
          700: '#c80030',
          800: '#a8002c',
          900: '#8c0029',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        ink: {
          50: '#f5f0eb',
          100: '#e8ddd2',
          200: '#d0bba5',
          300: '#b89478',
          400: '#9a7055',
          500: '#7d5a3c',
          600: '#634730',
          700: '#4f3826',
          800: '#3d2b1e',
          900: '#2a1d14',
        }
      },
      fontFamily: {
        tamil: ['Noto Serif Tamil', 'Noto Sans Tamil', 'serif'],
        'tamil-sans': ['Noto Sans Tamil', 'sans-serif'],
        display: ['Playfair Display', 'Noto Serif Tamil', 'serif'],
        body: ['Lora', 'Noto Sans Tamil', 'serif'],
      },
    },
  },
  plugins: [],
}
