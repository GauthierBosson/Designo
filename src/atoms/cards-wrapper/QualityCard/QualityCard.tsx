import styled, { css } from "styled-components";

import { ICardProps } from "../type";

const QualityCard = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .qualitycard__img {
    ${({ bg }) =>
      bg
        ? css`
            background-image: url("${bg}");
            background-repeat: no-repeat;
            background-position: center center;
          `
        : null}
  }

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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;

    h3,
    p {
      text-align: center;
    }
  }
`;

export default QualityCard;
