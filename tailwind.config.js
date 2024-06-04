/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "src/**/*.mjs", "src/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        regular: `0px 4px 4px 0px rgba(0, 0, 0, 0.25);`,
        rightBox: `-3px 5px 11.2px 6px rgba(0, 0, 0, 0.25);`,
        dot: `0 0 5px #fff`,
      },
      colors: {
        logoBlue: "#5D8EA4",
        white: "#FFFFFF",
      },
      fontFamily: {
        quote: ["La Belle Aurore", `cursive`],
        Karla: ["Karla", "sans-serif"],
        Title: ["Kantumruy Pro", "sans-serif"],
      },
      backgroundImage: {
        colorBg: "url('../public/pictures/colorBg.png')",
      },
    },
  },
  plugins: [],
};
