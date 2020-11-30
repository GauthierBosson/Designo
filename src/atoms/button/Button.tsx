import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant: "primary" | "secondary";
  margin?: string;
  padding?: string;
}

const Button = styled.button<IButtonProps>`
  border-radius: 0.8rem;
  padding: 1.3rem 2rem;
  border: none;
  font-family: inherit;
  cursor: pointer;
  transition: 0.2s;

  ${({ variant, theme }) =>
    variant === "primary"
      ? css`
          color: ${theme.colors.secondary.darkGrey};
          background-color: ${theme.colors.primary.white};
        `
      : variant === "secondary"
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
