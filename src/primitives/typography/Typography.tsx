import styled, { css } from "styled-components";
import theme from "../../theme";

export type TypoProps = {
  color?: string;
};

export type HeaderProps = TypoProps & {
  title: string;
};

export type TextProps = TypoProps & {
  text: string;
};

const fontFamily = `"Jost"`;
const fontWeight = 500;

export const HeaderOne = styled.h1<TypoProps>`
  font-family: ${fontFamily}, sans-serif;
  font-weight: ${fontWeight};
  font-size: 3rem;
  line-height: 3.6rem;
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : null}

  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 4.8rem;
    line-height: 4.8rem;
  }
`;

export const HeaderTwo = styled.h2<TypoProps>`
  font-family: ${fontFamily}, sans-serif;
  font-weight: ${fontWeight};
  font-size: 4rem;
  line-height: 4.8rem;
  letter-spacing: 0.2rem;
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : null}
`;

export const HeaderThree = styled.h3<TypoProps>`
  font-family: ${fontFamily}, sans-serif;
  font-weight: ${fontWeight};
  font-size: 2rem;
  line-height: 4.8rem;
  letter-spacing: 0.5rem;
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : null}
`;

export const Text = styled.p<TypoProps>`
  font-family: ${fontFamily}, sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  margin: 2rem 0;
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : null}
`;
