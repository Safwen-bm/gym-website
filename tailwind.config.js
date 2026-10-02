/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { red: { DEFAULT: "#ff1f1f", 500: "#ff1f1f", 600: "#e60f0f", 700: "#b80a0a" }, bone: "#efece6", ink: "#0a0a0a" },
      fontFamily: { display: ['"Big Shoulders Display"', "Impact", "sans-serif"], body: ["Barlow", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
