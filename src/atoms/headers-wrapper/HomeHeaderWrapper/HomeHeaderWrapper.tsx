import styled from "styled-components";

const HomeHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary.peach};
  background-repeat: no-repeat;
  background-size: 200%;
  position: relative;
  .header__infos {
    padding: 10rem 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 50%;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .header__image {
    min-height: 47rem;
    justify-content: baseline;
    flex-basis: 50%;
    background: url("/assets/home/desktop/image-hero-phone.png") center -7rem no-repeat;
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 0;
    background: url("/assets/shared/desktop/bg-pattern-small-circle.svg");
    background-repeat: no-repeat;
    background-size: 70rem;
    background-position: 0% 30%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 3rem;
    border-radius: ${({ theme }) => theme.borderRadius.base};
    overflow: hidden;

    &::before {
      background-size: 60rem;
      background-position: 130% 55%;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 3rem 0 0 0;
    flex-direction: row;

    &::before {
      background-position: 95% 55%;
    }

    .header__infos {
      flex-basis: 50%;
      padding: 15rem 0 15rem 10rem;
      text-align: left;
      align-items: flex-start;

      p {
        margin: 4rem 0;
      }
    }

    .header__image {
      background: url("/assets/home/desktop/image-hero-phone.png") center 0rem
        no-repeat;
    }
  }
`;

export default HomeHeaderWrapper;
