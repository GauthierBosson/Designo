import "styled-components";

declare module "styled-components" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
  export interface DefaultTheme {
    colors: {
      primary: {
        peach: string;
        black: string;
        white: string;
      };
      secondary: {
        lightPeach: string;
        darkGrey: string;
        lightGrey: string;
      };
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
