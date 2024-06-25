/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hunterGreen: "#355E3B",
      },
    },
  },
  plugins: [require("daisyui")],
};
