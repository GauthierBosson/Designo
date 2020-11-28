import styled, { css } from "styled-components";

export interface Props {
  bg: string;
}

const BaseHeader = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.primary.peach};
  ${({ bg }) =>
    css`
      background-image: url("${bg}");
    `};
`;

export default BaseHeader;
