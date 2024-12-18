/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    container: {
      padding: "1rem",
    },
    extend: {
      colors: {
        introSectionColor: "#0003",
      }
    },
  },
  plugins: [],
}

