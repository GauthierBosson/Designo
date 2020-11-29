import * as React from "react";
import styled from "styled-components";

export type IInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = styled.input<IInputProps>`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.white};
  padding: 1.5rem;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary.lightGrey};
  }
`;

export default Input;
