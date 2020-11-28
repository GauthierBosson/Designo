import * as React from "react";

import AboutHeader from "../AboutHeader";

export default {
  title: "Header/About",
  component: AboutHeader,
};

export const HeaderAbout: React.FC = () => (
  <AboutHeader
    bg="/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
    title="About Us"
    text="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
    src="/assets/about/desktop/image-about-hero.jpg"
  />
);
