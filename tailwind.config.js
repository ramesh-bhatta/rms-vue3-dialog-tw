export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
       colors: {
        primary: {
          50: '#fff1ee',
          100: '#ffe0dc',
          200: '#feb8ac',
          300: '#fd8f7d',
          400: '#fb664e',
          500: '#F1532E', // your base
          600: '#d84229',
          700: '#b03222',
          800: '#88231a',
          900: '#601513',
          DEFAULT: '#F1532E'
        },
        secondary: {
          50: '#fff8eb',
          100: '#fde9c6',
          200: '#fcd08d',
          300: '#fbb754',
          400: '#f99e1b',
          500: '#F59E0B', // your base
          600: '#d48209',
          700: '#b26707',
          800: '#8f4d05',
          900: '#6d3804',
          DEFAULT: '#F59E0B',
        },
        accent: {
          50: '#ecfdf7',
          100: '#d1faeb',
          200: '#a7f3d7',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10B981', // your base
          600: '#0ea271',
          700: '#0b815a',
          800: '#086947',
          900: '#064236',
          DEFAULT: '#10B981',
        }
      },
    },
  },
  plugins: [],
}
