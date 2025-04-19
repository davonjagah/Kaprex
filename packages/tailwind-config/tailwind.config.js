/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff5500",
          medium: "#ff7733",
          light: "#ff9966",
        },
        secondary: {
          DEFAULT: "#662200",
          medium: "#993300",
          light: "#cc4400",
        },
        skin: {
          DEFAULT: "#ffbb99",
          light: "#ffddcc",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        nohemi: ['"Nohemi"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
