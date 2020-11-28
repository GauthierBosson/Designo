import * as React from "react";
import styled, { css } from "styled-components";

export interface LinkProps {
  icon?: boolean;
  href: string;
  color?: string;
}

const StyledLink = styled.a<LinkProps>`
  font-family: inherit;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 1rem 0;

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : css`
          color: ${({ theme }) => theme.colors.primary.black};
        `}

  span {
    ${({ icon }) =>
      icon
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
`;

const StyledIcon = styled.span`
  height: 10px;
  width: 10px;
  background-image: url("/assets/shared/desktop/icon-right-arrow.svg");
  background-repeat: no-repeat;
  margin-left: 1.5rem;
`;

const Link: React.FC<LinkProps> = ({ children, icon, href, color }) => (
  <StyledLink color={color} href={href} icon={icon}>
    {children}
    <StyledIcon />
  </StyledLink>
);

export default Link;
