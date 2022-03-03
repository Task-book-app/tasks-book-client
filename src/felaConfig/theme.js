// Breakpoints
const bp = {
  mobile_M: "23.4375em", // 375px
  mobile_L: "26.5625em", // 425px
  tablet: "48em", // 768px
  laptop: "64em", // 1024px
  laptop_L: "90em", // 1440px
  desktop: "100em", // 1600px
};

const theme = {
  breakpoints: {
    mobile_M: `@media only screen and (min-width: ${bp.mobile_M})`, // 375px
    mobile_L: `@media only screen and (min-width: ${bp.mobile_L})`, // 425px
    tablet: `@media only screen and (min-width: ${bp.tablet})`, // 768px
    laptop: `@media only screen and (min-width: ${bp.laptop})`, // 1024px
    laptop_L: `@media only screen and (min-width: ${bp.laptop_L})`, // 1440px
    desktop: `@media only screen and (min-width: ${bp.desktop})`, // 1600px
  },

  //  colors
  colors: {
    dark: "#4b4b4b",
    bg_dark: "#222831",
    blue: "#0aa7bd",
    black: "#000000",

    white: "#ffffff",
    whiteBtn: "#f9f7f6",
    bg_light: "#fafafa",

    greyLight: "#bebebe",
  },

  // gradients
  gradients: {
    blueGradient: "linear-gradient(90.17deg, #09A7BC 0.19%, #2EC0EE 99.77%)",
  },

  // box-shadow
  shadows: {
    boxShadow_1: "0 1rem 2rem rgba(0, 0, 0, 0.1)",
    boxShadow_2: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    boxShadow_3: "0px 10px 25px rgba(29, 52, 54, 0.08)",
  },

  // flex combis
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // button styles
  buttonStyles: {
    borderRadius: ".5rem",
    transition: "all 0.2s",
    ":hover": {
      transform: "translateY(-2px)",
      cursor: "pointer",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
    ":active": {
      transform: "translateY(0)",
    },
  },

  boxesGeneral: {
    padding: "2rem",
    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    backgroundColor: "#fafafa",
    borderRadius: "1rem",
  },
};

export default theme;
