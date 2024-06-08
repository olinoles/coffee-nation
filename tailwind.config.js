/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: {
          50: "#fff1f3",
          100: "#ffdfe3",
          200: "#ffc4cc",
          300: "#ff9ba8",
          400: "#ff6276",
          500: "#ff314c",
          600: "#f0122f",
          700: "#bb0a21",
          800: "#a70d21",
          900: "#8a1222",
          950: "#4b040d",
        },
      },
    },
  },
  plugins: [],
};
