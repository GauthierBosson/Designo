import * as React from "react";
import styled from "styled-components";

import { BasicHeader } from "../../headers";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .aboutheader__img {
    min-height: 30rem;
    background-image: url("/assets/about/mobile/image-about-hero.jpg");
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    .aboutheader__img {
      background-image: url("/assets/about/tablet/image-about-hero.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }

    .aboutheader__content {
      div {
        margin: 0;
        border-radius: 0;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row-reverse;

    .aboutheader__img {
      flex-basis: 45%;
      border-top-right-radius: ${({ theme }) => theme.borderRadius.base};
      border-bottom-right-radius: ${({ theme }) => theme.borderRadius.base};
      background-image: url("/assets/about/desktop/image-about-hero.jpg");
      background-position: center center;
    }

    .aboutheader__content {
      flex-basis: 55%;
      div {
        text-align: left;
        padding: 10rem 7rem;
      }
    }
  }
`;

const AboutHeader: React.FC = () => (
  <AboutWrapper>
    <div className="aboutheader__img" />
    <div className="aboutheader__content">
      <BasicHeader
        title="About Us"
        text="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
      />
    </div>
  </AboutWrapper>
);

export default AboutHeader;
