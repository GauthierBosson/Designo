import styled from "styled-components";

const fontFamily = `"Jost"`;
const fontWeight = 500;

export const HeaderOne = styled.h1`
  font-family: ${fontFamily}, sans-serif;
  font-weight: ${fontWeight};
  font-size: 4.8rem;
  line-height: 4.8rem;
`;

export const HeaderTwo = styled.h2`
  font-family: ${fontFamily}, sans-serif;
  font-weight: ${fontWeight};
  font-size: 4rem;
  line-height: 4.8rem;
  letter-spacing: 0.2rem;
`;

export const HeaderThree = styled.h3`
  font-family: ${fontFamily}, sans-serif;
  font-weight: ${fontWeight};
  font-size: 2rem;
  line-height: 4.8rem;
  letter-spacing: 0.5rem;
`;

export const Text = styled.p`
  font-family: ${fontFamily}, sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
`;
