/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f4',
          100: '#f3eee6',
          200: '#e7ddd0',
          300: '#d4c5b3',
          400: '#ad9b86',
          500: '#887866',
          600: '#675b4e',
          700: '#4b443c',
          800: '#332f2a',
          900: '#211f1c',
        },
        accent: {
          DEFAULT: '#9a4f36',
          hover: '#773b29',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
