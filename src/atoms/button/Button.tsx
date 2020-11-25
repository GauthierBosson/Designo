import styled, { css } from "styled-components";
import theme from "../../theme";

export type ButtonProps = {
  design: "primary" | "secondary";
};

const Button = styled.button<ButtonProps>`
  border-radius: 0.8rem;
  padding: 1.3rem 2rem;
  border: none;
  font-family: inherit;
  transition: 0.2s;

  ${({ design, theme }) =>
    design === "primary"
      ? css`
          color: ${theme.colors.secondary.darkGrey};
          background-color: ${theme.colors.primary.white};
        `
      : design === "secondary"
      ? css`
          color: ${theme.colors.primary.white};
          background-color: ${theme.colors.primary.peach};
        `
      : null}

  &:hover {
    background-color: ${theme.colors.secondary.lightPeach};
    color: ${theme.colors.primary.white};
  }
`;

export default Button;
