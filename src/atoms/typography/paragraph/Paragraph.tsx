import styled, { css } from "styled-components";

import { ITextProps } from "../types";

const Paragraph = styled.p<ITextProps>`
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
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

export default Paragraph;
