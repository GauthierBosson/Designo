import * as React from "react";
import styled from "styled-components";

import { ProjectCard } from "../../../molecules/cards/ProjectCard";

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 10rem 3rem 0 3rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 10rem 0 0 0;
    margin: 0 10%;
  }
`;

const Projects: React.FC = () => (
  <ProjectsGrid>
    <ProjectCard
      bg="/assets/graphic-design/desktop/image-change.jpg"
      title="TIM BROWN"
      text="A book cover designed for Tim Brown’s new release, ‘Change’"
    />
    <ProjectCard
      bg="/assets/graphic-design/desktop/image-boxed-water.jpg"
      title="BOXED WATER"
      text="A simple packaging concept made for Boxed Water"
    />
    <ProjectCard
      bg="/assets/graphic-design/desktop/image-science.jpg"
      title="SCIENCE!"
      text="A poster made in collaboration with the Federal Art Project"
    />
  </ProjectsGrid>
);

export default Projects;
