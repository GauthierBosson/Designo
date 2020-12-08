import styled, { css } from "styled-components";

import { ICardProps } from "../type";

const ProjectCard = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .projectcard__img {
    background-image: ${({ bg }) => css`url("${bg}")`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-top-right-radius: ${({ theme }) => theme.borderRadius.base};
    border-top-left-radius: ${({ theme }) => theme.borderRadius.base};
    min-height: 27rem;
  }

  .projectcard__text {
    padding: 2rem;
    background-color: hsla(11, 100%, 80%, 0.4);
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.base};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.base};
    text-align: center;
    transition: 0.2s;

    h3 {
      color: ${({ theme }) => theme.colors.primary.peach};
    }

    p {
      color: ${({ theme }) => theme.colors.secondary.darkGrey};
    }
  }

  &:hover {
    .projectcard__text {
      background-color: ${({ theme }) => theme.colors.primary.peach};

      h3 {
        color: ${({ theme }) => theme.colors.primary.white};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.sm}) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}) {
    flex-direction: row;

    div {
      flex-basis: 50%;
    }

    .projectcard__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-bottom-left-radius: 0;
      border-bottom-right-radius: ${({ theme }) => theme.borderRadius.base};
      border-top-right-radius: ${({ theme }) => theme.borderRadius.base};
    }

    .projectcard__img {
      border-top-right-radius: 0;
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.base};
    }
  }
`;

export default ProjectCard;
