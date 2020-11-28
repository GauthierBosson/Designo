import * as React from "react";

import { HomeCard } from "../HomeCard";

export default {
  title: "Header/Home",
  component: HomeCard,
};

export const Home: React.FC = () => (
  <HomeCard
    title="Award-winning custom designs and digital branding solutions"
    text="With over 10 years in the industry, we are experienced in creating fully responsive websites, apps, and engaging brand experiences. Find out more about our services."
    bg="/assets/shared/desktop/bg-pattern-small-circle.svg"
  />
);
