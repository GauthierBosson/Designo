import * as React from "react";

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
      <BaseStyle />
      <Story />
    </>
  ),
];
