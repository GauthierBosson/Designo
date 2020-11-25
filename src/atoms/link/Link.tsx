import * as React from "react";
import styled, { css } from "styled-components";

type LinkProps = {
  icon?: boolean;
  href: string;
};

const StyledLink = styled.a<LinkProps>`
  font-family: inherit;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.black};

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

const Link: React.FC<LinkProps> = ({ children, icon, href }) => (
  <StyledLink href={href} icon={icon}>
    {children}
    <StyledIcon />
  </StyledLink>
);

export default Link;
