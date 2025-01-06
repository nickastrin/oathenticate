import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#94EFFF",
        "primary": "#61B4C3",
        "primary-dark": "#366373",
        "accent": "#EABD35",
        "neutral-light": "#E8EAED",
        "neutral": "#A8BCC2",
        "neutral-dark": "#74878D",
        "muted": "#394B50",
        "dark": "#1F282D",
        "darker": "#0D1316",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "375px",
      sm: "580px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  plugins: [autoprefixer],
};
