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
        // Retained so pages outside the homepage redesign keep rendering.
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
        ground: '#ede9e0',
        paper: '#f6f4ee',
        ink: {
          DEFAULT: '#171a1c',
          soft: '#33312b',
          muted: '#3c3a34',
        },
        muted: '#5c5850',
        faint: '#8a8377',
        rule: {
          DEFAULT: '#cfc9bc',
          warm: '#dcd6c9',
          dark: '#383a35',
        },
        onink: {
          DEFAULT: '#c9c3b6',
          strong: '#e5e0d5',
        },
        accent: {
          DEFAULT: '#9a4f36',
          hover: '#773b29',
          light: '#c98a6f',
          pale: '#e6c4b5',
          prose: '#f0d9cf',
          on: '#f7f2ec',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
}
