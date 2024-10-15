/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],

  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
  
      colors: {
        gray400: "#878EA1",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        cinza: "#333",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
  
      backgroundImage: {
        hero: "url('./assets/Texture 22.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}