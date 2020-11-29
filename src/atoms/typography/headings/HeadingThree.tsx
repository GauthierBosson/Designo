import styled, { css } from "styled-components";

import { IHeadingProps } from "../types";

const HeadingThree = styled.h3<IHeadingProps>`
  font-family: "Jost", sans-serif;
  font-weight: 500;
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

export default HeadingThree;
