import styled from "styled-components";

const Input = styled.input.attrs(({ type }) => ({
  type: type,
}))`
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
