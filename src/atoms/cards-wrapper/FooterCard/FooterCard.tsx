import styled from "styled-components";

const FooterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.peach};
  padding: 7rem 2rem;
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
`;

export default FooterCard;
