import * as React from "react";
import styled from "styled-components";

import { CategoryCard } from "../../../molecules/cards/CategoryCard";

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 10rem 3rem 0 3rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 10rem 0 0 0;
    margin: 0 10%;
  }
`;

const Categories: React.FC = () => (
  <CategoriesGrid>
    <CategoryCard
      bg="/assets/home/mobile/image-app-design.jpg"
      title="APP DESIGN"
      linkTxt="VIEW PROJECTS"
      href="/app-design"
    />
    <CategoryCard
      bg="/assets/home/mobile/image-web-design.jpg"
      title="WEB DESIGN"
      linkTxt="VIEW PROJECTS"
      href="/web-design"
    />
  </CategoriesGrid>
);

export default Categories;
