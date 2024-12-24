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
    },
  },
  plugins: [],
};
