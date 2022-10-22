import type { Theme } from "theme-ui";

const theme: Theme = {
  fonts: {
    body: "Inter, system-ui, sans-serif",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
    album: "#E6E5E1",
    moonstoneBlue: "#647B96",
  },
  text: {
    default: {
      fontFamily: "body",
    },
    moonstoneBlue: {
      fontFamily: "body",
      backgroundColor: "moonstoneBlue",
      backgroundImage: "linear-gradient(to right, #647B96 25%, #81AAC0 75%)",
      backgroundSize: "100%",
      "-webkit-background-clip": "text",
      "-moz-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "-moz-text-fill-color": "transparent",
    },
    jadeGreen: {
      fontFamily: "body",
      backgroundColor: "jadeGreen",
      backgroundImage: "linear-gradient(to right, #4A5856 25%, #5E7F76 75%)",
      backgroundSize: "100%",
      "-webkit-background-clip": "text",
      "-moz-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "-moz-text-fill-color": "transparent",
    },
    bloodMoon: {
      fontFamily: "body",
      backgroundColor: "jadeGreen",
      backgroundImage: "linear-gradient(to right, #754644 25%, #A15953 75%)",
      backgroundSize: "100%",
      "-webkit-background-clip": "text",
      "-moz-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "-moz-text-fill-color": "transparent",
    },
    mahogany: {
      fontFamily: "body",
      backgroundColor: "jadeGreen",
      backgroundImage: "linear-gradient(to right, #917737 25%, #B29C62 75%)",
      backgroundSize: "100%",
      "-webkit-background-clip": "text",
      "-moz-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "-moz-text-fill-color": "transparent",
    },
    lavender: {
      fontFamily: "body",
      backgroundColor: "jadeGreen",
      backgroundImage: "linear-gradient(to right, #6B6271 25%, #928C99 75%)",
      backgroundSize: "100%",
      "-webkit-background-clip": "text",
      "-moz-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "-moz-text-fill-color": "transparent",
    },
  },
  buttons: {
    primary: {
      fontFamily: "body",
      padding: ".75rem",
      textDecoration: "none",
      backgroundColor: "moonstoneBlue",
      alignItems: "center",
      color: "white",
      width: "fit-content",
      display: "block",
      fontWeight: "bold",
      borderRadius: 0,
      ":hover": {
        backgroundColor: "black",
        cursor: "pointer",
      },
    },
  },
  forms: {
    input: {
      width: "min-content",
      borderRadius: 0,
      fontFamily: "body",
      ":focus": {
        outlineColor: "moonstoneBlue",
        borderRadius: 0,
      },
    },
  },
  links: {
    button: {
      fontFamily: "body",
      paddingX: "1.5rem",
      paddingY: ".75rem",
      textDecoration: "none",
      backgroundColor: "moonstoneBlue",
      alignItems: "center",
      color: "white",
      width: "fit-content",
      display: "block",
      fontWeight: "bold",
      letterSpacing: "-.5px",
      fontSize: "1.5rem",
    },
  },
};

export default theme;
