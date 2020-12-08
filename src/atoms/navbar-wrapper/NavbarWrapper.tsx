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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 3rem;
    height: 100px;

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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem 10% 0 10%;
  }
`;

export default NavbarWrapper;
