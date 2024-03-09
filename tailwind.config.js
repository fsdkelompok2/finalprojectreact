/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    
    

    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWdith : "thin",
          scrollbarColor : "#cbcace"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar" :{
            width: "8px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor : "#cbcace",
            borderRadius : "100vh"
          },
          "&::-webkit-scrollbar-thumb:hover" : {
            backgroundColor : "#97969d",
            cursor: "pointer"
          }
        },
      }
      
      addUtilities(newUtilities);

    }
  ],
};
