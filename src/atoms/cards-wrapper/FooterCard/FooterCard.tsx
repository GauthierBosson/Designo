import styled from "styled-components";

const FooterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.peach};
  padding: 7rem 4rem;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default FooterCard;
