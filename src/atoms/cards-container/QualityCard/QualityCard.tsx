import styled from "styled-components";

import { ICardProps } from "../type";

const QualityCard = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default QualityCard;
