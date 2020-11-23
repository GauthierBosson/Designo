import { createGlobalStyle } from "styled-components";

const BaseStyle = createGlobalStyle`
  :root {
    // PRIMARY COLORS
    --peach: hsl(11, 73%, 66%);
    --black: hsl(270, 3%, 11%);
    --white: hsl(0, 0%, 100%);

    // SECONDARY COLORS
    --light-peach: hsl(11, 100%, 80%);
    --dark-grey: hsl(264, 5%, 20%);
    --light-grey: hsl(210, 17%, 95%);
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: "Jost", sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default BaseStyle;
