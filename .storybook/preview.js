import * as React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../src/theme.ts";
import BaseStyle from "../src/layouts/base-style/BaseStyle";

const customViewports = {
  sm: {
    name: "small",
    styles: {
      width: "375px",
      height: "100%",
    },
  },
  md: {
    name: "medium",
    styles: {
      width: "640px",
      height: "100%",
    },
  },
  lg: {
    name: "large",
    styles: {
      width: "768px",
      height: "100%",
    },
  },
  xl: {
    name: "extra large",
    styles: {
      width: "1024px",
      height: "100%",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports },
};

export const decorators = [
  (Story) => (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeProvider theme={theme}>
        <BaseStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];
