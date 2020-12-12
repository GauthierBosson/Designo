import * as React from "react";
import styled from "styled-components";

import { HeadingOne } from "../../../atoms/typography/headings";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { ContactForm } from "../../forms";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 7rem 4rem;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary.peach};

  h1,
  p {
    color: ${({ theme }) => theme.colors.primary.white};
  }

  h1 {
    margin-bottom: 2rem;
  }

  form {
    width: 100%;

    button {
      width: 50%;
      margin: 0 auto;
    }
  }

  .contactheader__content {
    margin-bottom: 4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 3rem;
    border-radius: ${({ theme }) => theme.borderRadius.base};
    text-align: left;

    form {
      button {
        width: 15rem;
        margin: 0 0 0 auto;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    gap: 5rem;
    margin: 3rem 0 0 0;
  }
`;

const ContactHeader: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => (
  <Wrapper>
    <div className="contactheader__content">
      <HeadingOne>{title}</HeadingOne>
      <Paragraph>{text}</Paragraph>
    </div>
    <ContactForm />
  </Wrapper>
);

export default ContactHeader;
