import * as React from "react";

import { CategoryCard } from "../CategoryCard";

export default {
  title: "molecules/cards/category",
  component: CategoryCard,
};

export const WebDesign: React.FC = () => (
  <CategoryCard
    href="#"
    bg="/assets/home/mobile/image-web-design.jpg"
    title="WEB DESIGN"
    linkTxt="VIEW PROJECTS"
  />
);

export const AppDesign: React.FC = () => (
  <CategoryCard
    href="#"
    bg="/assets/home/mobile/image-app-design.jpg"
    title="APP DESIGN"
    linkTxt="VIEW PROJECTS"
  />
);

export const GraphicDesign: React.FC = () => (
  <CategoryCard
    href="#"
    bg="/assets/home/mobile/image-graphic-design.jpg"
    title="GRAPHIC DESIGN"
    linkTxt="VIEW PROJECTS"
  />
);
