/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#fbfaff",
        thistle: "#dcd4ff",
        white: "#fff",
        lavender: {
          "100": "#f1efff",
          "200": "#ece8ff",
          "300": "#e2dff2",
        },
        darkslateblue: {
          "100": "#40347d",
          "200": "rgba(64, 52, 125, 0.36)",
        },
        darkslategray: {
          "100": "#464646",
          "200": "#3a3a3a",
        },
        "content-gray": "#b4b7c1",
        "added-secondary-surface": "rgba(9, 8, 32, 0.7)",
        gray: {
          "100": "#fffdf9",
          "200": "#929292",
          "300": "#1a1a1a",
          "400": "#090909",
        },
        goldenrod: "#e0ad4c",
        "content-main": "#02234d",
        tomato: "#fa4343",
        cornflowerblue: "#8f81ce",
        gainsboro: "#e6e6e6",
        whitesmoke: "#f3f3f3",
      },
      spacing: {},
      fontFamily: {
        small: "Roboto",
        montserrat: "Montserrat",
        inter: "Inter",
      },
    },
    fontSize: {
      lg: "1.125rem",
      smi: "0.813rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "8xs-9": "0.306rem",
      "2xs": "0.688rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
