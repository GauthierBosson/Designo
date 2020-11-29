import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: {
      peach: "hsl(11, 73%, 66%)",
      black: "hsl(270, 3%, 11%)",
      white: "hsl(0, 0%, 100%)",
    },
    secondary: {
      lightPeach: "hsl(11, 100%, 80%)",
      lightGrey: "hsl(210, 17%, 95%)",
      darkGrey: "hsl(264, 5%, 20%)",
    },
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
  },
  borderRadius: {
    base: "1.5rem",
  },
};

export default theme;
