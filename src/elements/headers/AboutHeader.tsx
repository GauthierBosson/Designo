import * as React from "react";
import styled from "styled-components";

import {
  HeaderOne,
  Text,
  HeaderProps,
  TextProps,
} from "../../primitives/typography/Typography";
import theme from "../../theme";
import BaseHeader, { Props } from "./BaseHeader";

interface AboutProps extends HeaderProps, TextProps, Props {
  src: string;
}

const StyledAboutHeader = styled(BaseHeader)`
  background-repeat: no-repeat;
  background-position: 98% -40%;

  .content {
    padding: 7rem 2rem;
    text-align: center;
  }
`;

const AboutHeader: React.FC<AboutProps> = ({ bg, title, text, src }) => (
  <StyledAboutHeader bg={bg}>
    <div className="image__container">
      <img className="image__image" src={src} alt="" />
    </div>
    <div className="content">
      <HeaderOne color={theme.colors.primary.white}>{title}</HeaderOne>
      <Text color={theme.colors.primary.white}>{text}</Text>
    </div>
  </StyledAboutHeader>
);

export default AboutHeader;
