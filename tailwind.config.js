module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    colors: {
      dark: {
        primary: "#343433",
        secondary: "#2B2A29",
      },
      white: {
        primary: "#EDECE8",
        secondary: "#F4F3F1",
      },
      light_gold: {
        primary: "#A89C83",
        secondary: "#9D9480",
      },
      grey: {
        primary: "#D2CCBF",
        secondary: "#D7D1C5",
      },
    },

    fontFamily: {
      libre: ["Libre Bodoni", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontSize: {
        logo_small: "1.5rem",
      },
      screens: {
        "3xl": "1600px",
      },
      width: {
        "75p": "75%",
        "40p": "40%",
        "60p": "60%",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "85%",
          },
          /*  "@screen xl": {
            maxWidth: "1280px",
          }, */
          "@screen 3xl": {
            maxWidth: "1536px",
          },
        },
      });
    },
  ],
};
