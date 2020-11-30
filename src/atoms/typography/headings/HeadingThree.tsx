import styled, { css } from "styled-components";

import { IHeadingProps } from "../types";

const HeadingThree = styled.h3<IHeadingProps>`
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  line-height: 4.8rem;
  letter-spacing: 0.5rem;
  ${({ m }) =>
    m
      ? css`
          margin: ${m}rem;
        `
      : null}
  ${({ mt }) =>
    mt
      ? css`
          margin-top: ${mt}rem;
        `
      : null}
  ${({ mr }) =>
    mr
      ? css`
          margin-right: ${mr}rem;
        `
      : null}
  ${({ mb }) =>
    mb
      ? css`
          margin-bottom: ${mb}rem;
        `
      : null}
  ${({ ml }) =>
    ml
      ? css`
          margin-left: ${ml}rem;
        `
      : null}
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : null}
`;

export default HeadingThree;
