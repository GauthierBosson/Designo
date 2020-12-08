import styled from "styled-components";

const BasicHeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.peach};
  padding: 7rem 2rem;
  background-repeat: no-repeat;
  background-position: 9rem 0;
  background-size: 75%;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 3rem;
    border-radius: ${({ theme }) => theme.borderRadius.base};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 3rem 10%;
  }
`;

export default BasicHeaderWrapper;
