import * as React from "react";
import styled from "styled-components";

import { CategoryCard } from "../../../molecules/cards/CategoryCard";

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 10rem 3rem 0 3rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 30rem);
    padding: 10rem 0 0 0;
    margin: 0 10%;

    & > div:first-child {
      grid-column: 1/2;
      grid-row: 1/3;
    }

    & > div:nth-child(2) {
      grid-column: 2/3;
      grid-row: 1/2;
    }

    & > div:last-child {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }
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
