import styled from "styled-components";

const FooterCard = styled.div`
  background-image: url("/assets/shared/desktop/bg-pattern-call-to-action.svg");
  background-repeat: no-repeat;
  background-position: 45% 50%;
  background-color: ${({ theme }) => theme.colors.primary.peach};
  padding: 7rem 4rem;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  margin: 0 3rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    transform: translateY(-70%);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 7rem 10rem;
    background-position: 100% 50%;

    div {
      flex-basis: 40%;
    }
  }
`;

export default FooterCard;
