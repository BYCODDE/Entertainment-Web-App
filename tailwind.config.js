/** @type {import('tailwindcss').Config} */
import filters from "tailwindcss-filters";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#10141E",
        "custom-blue": "#161D2F",
        "custom-grey": "#5A698F",
        "custom-red": "#FC4747",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      filter: {
        "custom-filter":
          "invert(99%) sepia(0%) saturate(0%) hue-rotate(348deg) brightness(202%) contrast(100%)",
      },
    },
  },
  plugins: [filters],
};
