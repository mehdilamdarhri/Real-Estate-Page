/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      mw: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mx: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      mg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#1f3e72",
      secondary: "#8c8b8b",
      white: "#fff",
      black: "#131110",
      grey: {
        100: "#7878785f",
        200: "#ffffff1f",
        300: "#ffffff96",
        400: "#eeeeff",
      },
      blue: {
        100: "#4066ff",
        200: "#2949c6",
        300: "#4161df",
        400: "#88a0ff36",
        500: "#0000ff",
        600: "#5d77d6",
      },
      orange: {
        100: "#ffb978",
        200: "#ff922d",
        300: "#ffa500",
      },
      shadow: "0px 23px 21px -8px rgba(136, 160, 255, 0.25)",
    },

    extend: {},
  },
  plugins: [],
};
