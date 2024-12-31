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
        bannerImg3 : "url('https://i.ibb.co.com/k20ZXP3/marathon-4646827-1920.jpg')" , 
        bannerImg4 : "url('https://i.ibb.co.com/LZCcR5D/martins-zemlickis-NPFu4-Gf-FZ7-E-unsplash.jpg')" , 
        
        blackOverlay : "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) )"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

