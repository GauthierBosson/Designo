import styled, { css } from "styled-components";

import { ICardProps } from "../type";

const LocationCard = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    margin: 2rem 0;
  }

  .locationcard__img {
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
`;

export default LocationCard;
