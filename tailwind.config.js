module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('tailwindcss'), require('autoprefixer')],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'san serif'],
      },
      colors: {
        theme: {
          100: '#61C8F3',
          300: '#4DABD7',
          500: '#4982A6',
          700: '#04588C',
        },
      },
      height: {
        // sm: '8px',
        // md: '16px',
        lg: '800px',
        xl: '1000px',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
  },
  variants: {
    scale: ['hover', 'group-hover'],
    translate: ['hover', 'group-hover'],
    extend: {},
  },
  plugins: [],
};
