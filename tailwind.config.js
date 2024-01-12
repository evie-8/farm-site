//** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "900px",
      lg: "1024px",
      xl: "1300px",
    },
    colors: {
      grey: "#7a7a7a",
      green: "#7ec242",
      green2: "#5e962c",
      green3: "#bdc886",
      white: "#fff",
      white2: "#f8f8f8",
      black: "#000",
      black2: "#202020",
      black3: '#3a3a3a',
      grey2: "#d8d8d8",
      transparent: "transparent",
    },

    fontSize: {
      sm: "12px",
      base: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "28px",
      "4xl": "38px",
      "5xl": "50px",
    },

    extend: {},
  },
  plugins: [],
};
