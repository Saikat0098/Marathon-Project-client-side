/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bannerImg: "url('https://i.ibb.co.com/7Q1ZDBW/hero1.jpg')" ,
        bannerImg2 : "url('https://i.ibb.co.com/6BnLj92/marathon-4631285-1280.jpg')" , 
        // bannerImg: "./src/assets/hero1.jpg"
        // blackOverlay : "linear-gradient(to bottom , rgba(0,0,0,0) 0% ) , rgba(0,0,0.8) 100%"
        blackOverlay : "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) )"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

