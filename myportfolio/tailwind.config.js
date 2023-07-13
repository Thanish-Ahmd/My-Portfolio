/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px' ,
      lg:'976px' ,
      xl:'1440px' ,
    },
    extend: {
      colors:{
        brightRed: 'hsl(12, 88% , 59% )',
        brightRedLight : 'hsl(12, 88% , 69% )',
        brightRedSupLight: 'hsl(12, 88% , 95% )',
        darkBlue: 'hsl(228, 39% , 23% )',
        darkGrayishBlue: 'hsl(227 , 12% , 61% )',
        veryDarkBlue: "#1D1F25",
        veryPaleRed: 'hsl(13, 1005 , 96% )',
        veryLightGray: 'hsl(0, 0% , 98% )',
        gray: '#36454F' ,
        bgGray: '#EDF2F7' ,
        darkGray : "#71797E" ,
        darkBrown :"#493C2A"
        

      }
    },
  },
  plugins: [],
}

