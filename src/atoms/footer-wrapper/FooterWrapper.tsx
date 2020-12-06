import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.black};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default FooterWrapper;
