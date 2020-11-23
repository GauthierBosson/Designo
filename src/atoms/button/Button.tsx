import styled, { css } from "styled-components";

export type ButtonProps = {
  design: "primary" | "secondary";
  children: string;
};

const Button = styled.button<ButtonProps>`
  border-radius: 0.8rem;
  padding: 1.3rem 2rem;
  border: none;
  font-family: inherit;
  color: ${({ design }) =>
    design === "primary" ? css`var(--dark-grey)` : css`var(--white)`};
  background-color: ${({ design }) =>
    design === "primary" ? css`var(--white)` : css`var(--peach)`};
  transition: 0.2s;

  &:hover {
    background-color: var(--light-peach);
    color: var(--white);
  }
`;

export default Button;
