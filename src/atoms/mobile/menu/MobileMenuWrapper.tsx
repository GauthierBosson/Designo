import styled from "styled-components";

export interface IMobileMenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen?: boolean;
}

const MobileMenuWrapper = styled.div<IMobileMenuProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.primary.black};
`;

export default MobileMenuWrapper;
