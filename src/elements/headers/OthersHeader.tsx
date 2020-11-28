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

interface OthersProps extends HeaderProps, TextProps, Props {}

const StyledOthersHeader = styled(BaseHeader)`
  padding: 7rem 2rem;
  background-repeat: no-repeat;
  background-position: 9rem 0;
  background-size: 75%;
  text-align: center;
`;

const OthersHeader: React.FC<OthersProps> = ({ bg, title, text }) => (
  <StyledOthersHeader bg={bg}>
    <HeaderOne color={theme.colors.primary.white}>{title}</HeaderOne>
    <Text color={theme.colors.primary.white}>{text}</Text>
  </StyledOthersHeader>
);

export default OthersHeader;
