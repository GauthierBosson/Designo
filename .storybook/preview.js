import * as React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../src/theme.ts";
import BaseStyle from "../src/layouts/base-style/BaseStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
