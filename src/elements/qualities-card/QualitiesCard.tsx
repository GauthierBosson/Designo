import * as React from "react";
import styled from "styled-components";

import {
  HeaderThree,
  HeaderProps,
  Text,
  TextProps,
} from "../../primitives/typography/Typography";

interface QualitiesCardProps extends HeaderProps, TextProps {}

const StyledQualitiesCard = styled.div``;

const QualitiesCard: React.FC<QualitiesCardProps> = () => (
  <StyledQualitiesCard>
    <div className="illustration">
      <img className="illustration__img" src="" alt="" />
    </div>
    <div className="content">
      <HeaderThree></HeaderThree>
      <Text></Text>
    </div>
  </StyledQualitiesCard>
);

export default QualitiesCard;
