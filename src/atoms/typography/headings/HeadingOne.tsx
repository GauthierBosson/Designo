import styled, { css } from "styled-components";

import { IHeadingProps } from "../types";

const HeadingOne = styled.h1<IHeadingProps>`
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 4.8rem;
  line-height: 4.8rem;
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : null}
`;

export default HeadingOne;
