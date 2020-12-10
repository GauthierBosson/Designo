import styled from "styled-components";

type ITextArea = React.DetailedHTMLFactory<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const TextArea = styled.textarea<ITextArea>`
  background-color: transparent;
  border: none;
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

export default TextArea;
