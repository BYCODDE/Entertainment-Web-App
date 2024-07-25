/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
