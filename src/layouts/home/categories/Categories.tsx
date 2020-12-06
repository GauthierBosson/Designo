import * as React from "react";
import styled from "styled-components";

import { CategoryCard } from "../../../molecules/cards/CategoryCard";

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const Categories: React.FC = () => (
  <CategoryGrid>
    <CategoryCard
      bg="/assets/home/mobile/image-web-design.jpg"
      title="WEB DESIGN"
      linkTxt="VIEW PROJECTS"
    />
    <CategoryCard
      bg="/assets/home/mobile/image-app-design.jpg"
      title="APP DESIGN"
      linkTxt="VIEW PROJECTS"
    />
    <CategoryCard
      bg="/assets/home/mobile/image-graphic-design.jpg"
      title="GRAPHIC DESIGN"
      linkTxt="VIEW PROJECTS"
    />
  </CategoryGrid>
);

export default Categories;
