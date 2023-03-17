/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Karla', sans-serif",
      },
      boxShadow: {
        "3xl": "0px 3.57447px 3.57447px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
