import styled from "styled-components";

const HomeHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary.peach};
  background-repeat: no-repeat;
  background-size: 200%;
  .header__infos {
    padding: 10rem 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 50%;
    text-align: center;
  }
  .header__image {
    min-height: 47rem;
    justify-content: baseline;
    flex-basis: 50%;
    background: url("/assets/home/desktop/image-hero-phone.png") center -7rem no-repeat;
  }
`;

export default HomeHeaderWrapper;
