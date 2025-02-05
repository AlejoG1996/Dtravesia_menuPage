/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        fadeIn:'fadeIn',
        fadeOut:'fadeOut',
        scaleIn:'scaleIn',
        scaleOut:'scaleOut'
      },
      keyframes:{
        fadeIn:{
          "0%":{opacity:0},
          "100%":{opacity:1},
        },
        fadeOut:{
          "0%":{opacity:1},
          "100%":{opacity:0},
        },
        scaleIn:{
          "0%":{transform:"scale(0)"},
          "100%":{transform:"scale(1)"},
        },
        scaleOut:{
          "0%":{transform:"scale(1)"},
          "100%":{transform:"scale(0)"},
        }

      },
      colors: {
        primary: "#2E8B57",
        secondary: "#c19d68"
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
        londrina: ['Londrina Sketch', 'cursive'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          '2xl': "6rem"
        }
      }
    },
  },
  plugins: [],
}