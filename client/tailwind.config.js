/** @type {import('tailwindcss').Config} */

const { nextui, colors } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(
    {
    themes:{
      light:{
        colors:{
          primary:'#ffcf40',
          secondary:'#000'
        }
      },
      dark:{
        colors:{
          primary:"#ffcf40",
          secondary:'#000'
        }
      }
    }
  }
  )],
}

