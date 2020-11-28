import * as React from "react";
import styled from "styled-components";

import BaseCard, { Props } from "./BaseCard";
import Button from "../../atoms/button/Button";
import {
  HeaderOne,
  Text,
  HeaderProps,
  TextProps,
} from "../../atoms/typohraphy/Typography";
import theme from "../../theme";

interface CardProps extends HeaderProps, TextProps, Props {}

const StyledHomeCard = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: 200%;

  .infos {
    padding: 10rem 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 50%;
    text-align: center;
  }

  .image {
    min-height: 47rem;
    justify-content: baseline;
    flex-basis: 50%;
    background: url("/assets/home/desktop/image-hero-phone.png") center -7rem no-repeat;
  }
`;

export const HomeCard: React.FC<CardProps> = ({ bg, text, title }) => (
  <StyledHomeCard bg={bg}>
    <div className="infos">
      <HeaderOne color={theme.colors.primary.white}>{title}</HeaderOne>
      <Text color={theme.colors.primary.white}>{text}</Text>
      <Button design="primary">LEARN MORE</Button>
    </div>
    <div className="image" />
  </StyledHomeCard>
);
