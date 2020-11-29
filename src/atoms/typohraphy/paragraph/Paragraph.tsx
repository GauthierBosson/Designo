import styled, { css } from "styled-components";

import { ITextProps } from "../types";

const Paragraph = styled.p<ITextProps>`
  font-family: "Jost", sans-serif;
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

export default Paragraph;
