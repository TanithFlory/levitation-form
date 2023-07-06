/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "input-gray": "var(--clr-gray)",
      "color-button": "var(--clr-button)",
      "color-button-hover": "var(--clr-button-hover)",
      "color-blue": "var(--clr-blue)",
    },
    maxWidth: {
      "400px": "400px",
      "1200px": "1200px",
    },
    width: {
      "100%": "100%",
    },
    extend: {},
  },
  plugins: [],
};
