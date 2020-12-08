import styled, { css } from "styled-components";

import { ICardProps } from "../type";

const QualityCard = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    margin: 2rem 0;
  }

  .qualitycard__img {
    position: relative;

    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      ${({ rotation }) =>
        rotation
          ? css`
              transform: rotate(${rotation}deg);
            `
          : null};
      ${({ bg }) =>
        bg
          ? css`
            background-image: url("${bg}");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
          `
          : null}
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;

    .qualitycard__img {
      flex-basis: 90%;
    }

    .qualitycard__text {
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
