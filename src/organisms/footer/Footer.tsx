import * as React from "react";
import styled from "styled-components";

import { Image } from "../../atoms/image";
import { Link } from "../../atoms/link";
import { TextBlock } from "../../molecules/text-block";

const FooterWrapper = styled.footer`
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .footer {
    &__links {
      width: 100%;
      display: inherit;
      flex-direction: inherit;
      justify-content: inherit;
      align-items: inherit;
      text-align: inherit;

      &--block {
        padding-top: 3rem;
        display: inherit;
        flex-direction: inherit;
        justify-content: inherit;
        align-items: inherit;
        text-align: inherit;
      }
    }

    &__logo {
      width: 100%;
      padding-bottom: 3rem;
      border-bottom: 1px solid white;
    }

    &__contact {
      padding: 3rem 0;
    }
  }

  p:nth-child(3) {
    margin-bottom: 3rem;
  }
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <div className="footer__links">
      <div className="footer__logo">
        <Image src="/assets/shared/desktop/logo-light.png" width={150} />
      </div>
      <div className="footer__links--block">
        <Link href="#">OUR COMPANY</Link>
        <Link href="#">LOCATIONS</Link>
        <Link href="#">CONTACT</Link>
      </div>
    </div>
    <div className="footer__contact">
      <TextBlock
        lines={[
          "Designo Central Office",
          "3886 Wellington Street",
          "Toronto, Ontario M9C 3J5",
        ]}
      />
      <TextBlock
        lines={[
          "Contact Us (Central Office)",
          "P : +1 253-863-8967",
          "M : contact@designo.co",
        ]}
      />
    </div>
  </FooterWrapper>
);

export default Footer;
