import styled from "styled-components";

const NavbarWrapper = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  padding: 0 3rem;
  justify-content: space-between;
  align-items: center;

  .navbar__links {
    display: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    img:last-child {
      display: none;
    }

    .navbar__links {
      display: flex;

      & a:not(:last-child) {
        margin-right: 5rem;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 3rem;
    height: 100px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem 3rem 0 3rem;
    max-width: ${({ theme }) => theme.content.maxWidth};
    margin: 0 auto;
  }
`;

export default NavbarWrapper;
