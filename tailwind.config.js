/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    options: {
      safelist: ['some-class', 'some-other-class'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '60': '60%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

