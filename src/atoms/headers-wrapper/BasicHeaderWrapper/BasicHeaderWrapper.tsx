import styled from "styled-components";

const BasicHeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.peach};
  padding: 7rem 2rem;
  background-repeat: no-repeat;
  background-position: 9rem 0;
  background-size: 75%;
  text-align: center;
  position: relative;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-image: url("/assets/shared/desktop/bg-pattern-small-circle.svg");
    background-repeat: no-repeat;
    background-size: 23rem;
    background-position: center center;
    transform: rotate(-75deg);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 3rem;
    border-radius: ${({ theme }) => theme.borderRadius.base};

    &::before {
      background-image: url("/assets/shared/desktop/bg-pattern-call-to-action.svg");
      transform: scaleY(-1);
      background-size: 100rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 3rem 0;

    h1 {
      margin-bottom: 3rem;
    }

    p {
      max-width: 35%;
      margin: 0 auto;
    }
  }
`;

export default BasicHeaderWrapper;
