/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.15px',
      },
      width: {
        // 240px
        'card': "15rem",
        // 224px
        "card-image": "14rem"
      },
      height: {
        // 356px
        'card': "22.25rem",
        // 200px
        "card-image": "12.5rem"
      },
      colors: {
        green: {
          primary: '#036256',
          secondary: '#0E8663'
        },
        'discount': '#593BCE',
        'gray': {
          'primary': '#F3F3F5'
        }
      },
    },
  },
  plugins: [],
}

