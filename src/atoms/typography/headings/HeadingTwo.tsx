import styled, { css } from "styled-components";

import { IHeadingProps } from "../types";

export const HeadingTwo = styled.h2<IHeadingProps>`
  font-family: "Jost", sans-serif;
  font-weight: 500;
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

export default HeadingTwo;
