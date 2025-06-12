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
          dark: "#0A0A0A",
          medium: "#993300",
          light: "#cc4400",
        },
        skin: {
          DEFAULT: "#ffbb99",
          light: "#ffddcc",
        },
        gray: {
          DEFAULT: "#fafbfc",
          light: "#ABAABA",
          medium: "#726D8C",
          secondary: "#F5F7FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        nohemi: ["var(--font-nohemi)"],
      },
      spacing: {
        2.5: "0.625rem",
        21: "5.5rem", // 88.5px
        22: "1.406rem", // 22.5px
        17: "4.688rem", // 75px
        8.5: "2.188rem", // 35px
      },
      height: {
        15: "3.75rem", // 60px
        45: "2.813rem", // 45px
      },
      width: {
        15: "3.75rem", // 60px
        45: "2.813rem", // 45px
      },
      boxShadow: {
        subtle: "0px 4px 13.5px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        marquee: "marquee 14s linear infinite",
        slide: "slide 5s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slide: {
          "0%, 40%": { transform: "translateY(0)" },
          /* 60%–100%: hold the second line */
          "60%,100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
