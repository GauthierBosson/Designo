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
  min-height: 30rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 7rem 2rem;
  background: url("${({ bg }) => bg}") no-repeat center center;
  background-size: cover;
  cursor: pointer;
  transition: 0.2s;

  div {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    justify-content: inherit;
    padding: inherit;
    background-color: hsla(270, 3%, 11%, 0.4);
    border-radius: ${({ theme }) => theme.borderRadius.base};
    transition: 0.2s;

    &:hover {
      background-color: hsla(11, 73%, 66%, 0.6);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background: url("${({ bg }) =>
      bg.replace("mobile", "tablet")}") no-repeat center center;
    background-size: cover;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background: url("${({ bg }) =>
      bg.replace("mobile", "desktop")}") no-repeat center center;
    background-size: cover;
  }
`;

export default CategoryCard;
