import * as React from "react";
import styled, { css } from "styled-components";

export interface ILinkProps
  extends React.DetailedHTMLProps<
    React.LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > {
  underline?: boolean;
  icon?: boolean;
  color?: "white" | "black";
}

const Link = styled.a<ILinkProps>`
  font-family: inherit;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 1rem 0;

  ${({ color, theme }) =>
    color === "white"
      ? css`
          color: ${theme.colors.primary.white};
        `
      : color === "black"
      ? css`
          color: ${theme.colors.primary.black};
        `
      : css`
          color: ${theme.colors.primary.white};
        `}

  ${({ icon }) =>
    icon
      ? css`
          ::after {
            content: "";
            height: 10px;
            width: 10px;
            background-image: url("/assets/shared/desktop/icon-right-arrow.svg");
            background-repeat: no-repeat;
            margin-left: 1.5rem;
          }
        `
      : null}

  &:hover {
    ${({ underline }) =>
      underline
        ? css`
            text-decoration: underline;
            text-underline-position: under;
          `
        : null}
  }
`;

export default Link;
