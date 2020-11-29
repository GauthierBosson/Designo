import styled from "styled-components";

import { ICardProps } from "../type";

const QualityCard = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;

    img {
      margin-right: 3rem;
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
`;

export default QualityCard;
