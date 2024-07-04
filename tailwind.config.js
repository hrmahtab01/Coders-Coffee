/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Primary:"#f19509",
        PrimaryDark:"#e86f00",
        LightOrange:"#f1dabf",
        DarkGray:"#1af125",
        LightGray:"#272c35"
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem"
        }
      }
    },
  },
  plugins: [],
}