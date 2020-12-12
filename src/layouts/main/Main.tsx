import styled from "styled-components";

const Main = styled.main`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.content.maxWidth};
    padding: 0 3rem;
    margin: 0 auto;
  }
`;

export default Main;
