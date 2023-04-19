/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightest: "#FEFDF6",
        light: "#C0AEC8",
        primary: "#C45DF5",
        dark: "#A080A1",
        darkest: "#4662B9",
      },
    },
  },
  plugins: [],
};
