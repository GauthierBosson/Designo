import styled, { css } from "styled-components";

import { IHeadingProps } from "../types";

const HeadingOne = styled.h1<IHeadingProps>`
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 3rem;
  line-height: 3rem;
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
          margin-left: ${ml};
        `
      : null}
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : null}
`;

export default HeadingOne;
