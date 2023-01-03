/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#A259FF",
        secondary : "#2B2B2B",
        gray : "#3B3B3B",
        white : "#ffff",
      },
      fontFamily : {
        mono : "'Space Mono', monospace",
      },
    },
  },
  plugins: [],
}
