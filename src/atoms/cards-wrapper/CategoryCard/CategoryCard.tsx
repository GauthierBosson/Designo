/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";

import { ICardProps } from "../type";

export interface ICategoryCardProps extends ICardProps {
  bg: string;
}

const CategoryCard = styled.div<ICategoryCardProps>`
  ${({ test }) =>
    test
      ? css`
          border: 1px solid black;
        `
      : null}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 7rem 2rem;
  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.4)), 
    url("${({ bg }) => bg}") no-repeat center center;
  background-size: cover;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: linear-gradient(${({ theme }) =>
      theme.colors.primary.peach}, hsla(11, 73%, 66%, 0.4)),
      url("${({ bg }) => bg}") no-repeat center center;
    background-size: cover;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.4)), 
      url("${({ bg }) =>
        bg.replace("mobile", "tablet")}") no-repeat center center;
    background-size: cover;

    &:hover {
      background: linear-gradient(${({ theme }) =>
        theme.colors.primary.peach}, hsla(11, 73%, 66%, 0.4)),
        url("${({ bg }) =>
          bg.replace("mobile", "tablet")}") no-repeat center center;
      background-size: cover;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.4)), 
      url("${({ bg }) =>
        bg.replace("mobile", "desktop")}") no-repeat center center;
    background-size: cover;

    &:hover {
      background: linear-gradient(${({ theme }) =>
        theme.colors.primary.peach}, hsla(11, 73%, 66%, 0.4)),
        url("${({ bg }) =>
          bg.replace("mobile", "desktop")}") no-repeat center center;
      background-size: cover;
    }
  }
`;

export default CategoryCard;
