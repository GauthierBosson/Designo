import styled, { css } from "styled-components";

type TypoProps = {
  color?: string;
};

const fontFamily = `"Jost"`;
const fontWeight = 500;

export const HeaderOne = styled.h1<TypoProps>`
  font-family: ${fontFamily}, sans-serif;
  font-weight: ${fontWeight};
  font-size: 4.8rem;
  line-height: 4.8rem;
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : null}
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
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : null}
`;
