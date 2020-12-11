import * as React from "react";
import styled from "styled-components";

export type IInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = styled.input<IInputProps>`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.white};
  padding: 1.5rem;
  transition: 0.2s;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary.lightGrey};
    opacity: 0.5;
    transition: 0.2s;
  }

  &:hover {
    ::placeholder {
      opacity: 1;
    }
  }
`;

export default Input;
