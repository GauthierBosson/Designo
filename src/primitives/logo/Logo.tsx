import * as React from "react";
import styled from "styled-components";

export interface LogoProps {
  variant?: "black" | "white";
}

const StyledLogo = styled.img``;

const Logo: React.FC<LogoProps> = ({ variant }) => (
  <a href="/">
    <StyledLogo
      src={
        variant === "black"
          ? "/assets/shared/desktop/logo-dark.png"
          : "/assets/shared/desktop/logo-light.png"
      }
      width="100px"
      alt="logo designo"
    />
  </a>
);

export default Logo;
