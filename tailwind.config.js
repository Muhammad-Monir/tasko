/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#60E5AE',
        headingColor:'#1F1F1F',
        paraColor:'#667085', 
        paraLight:'#667085',
      }
    },
  },
  plugins: [],
}