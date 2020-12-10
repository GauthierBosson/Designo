import styled, { css } from "styled-components";

import { ICardProps } from "../type";

interface ICompetenceCard extends ICardProps {
  flex: "row" | "row-reverse";
}

const CompetenceCard = styled.div<ICompetenceCard>`
  .competencecard__img {
    background-image: ${({ bg }) => css`url("${bg}")`};
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 30rem;
  }

  .competencecard__content {
    padding: 7rem 4rem;
    background-color: hsla(11, 100%, 80%, 0.4);
    text-align: center;

    h2 {
      color: ${({ theme }) => theme.colors.primary.peach};
    }

    p {
      margin: 2rem 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 3rem;

    .competencecard__img {
      background-image: ${({ bg }) =>
        css`url("${bg.replace("mobile", "tablet")}")`};
      border-top-left-radius: ${({ theme }) => theme.borderRadius.base};
      border-top-right-radius: ${({ theme }) => theme.borderRadius.base};
    }

    .competencecard__content {
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.base};
      border-bottom-right-radius: ${({ theme }) => theme.borderRadius.base};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
    margin: 0 10%;
    display: flex;
    flex-direction: ${({ flex }) => flex};

    .competencecard__img {
      background-image: ${({ bg }) =>
        css`url("${bg.replace("mobile", "desktop")}")`};
      flex-basis: 40%;
      ${({ flex }) =>
        flex === "row"
          ? css`
              border-top-right-radius: 0;
              border-bottom-left-radius: ${({ theme }) =>
                theme.borderRadius.base};
            `
          : css`
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: ${({ theme }) =>
                theme.borderRadius.base};
              border-top-right-radius: ${({ theme }) =>
                theme.borderRadius.base};
            `}
    }

    .competencecard__content {
      flex-basis: 60%;
      text-align: left;
      ${({ flex }) =>
        flex === "row"
          ? css`
              border-bottom-left-radius: 0;
              border-top-right-radius: ${({ theme }) =>
                theme.borderRadius.base};
            `
          : css`
              border-bottom-right-radius: 0;
              border-top-right-radius: 0;
              border-top-left-radius: ${({ theme }) => theme.borderRadius.base};
              border-bottom-left-radius: ${({ theme }) =>
                theme.borderRadius.base};
            `}
    }
  }
`;

export default CompetenceCard;
