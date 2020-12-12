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
  }
`;

const Projects: React.FC = () => (
  <ProjectsGrid>
    <ProjectCard
      bg="/assets/app-design/desktop/image-airfilter.jpg"
      title="AIRFILTER"
      text="A multi-carrier shipping website for ecommerce businesses"
    />
    <ProjectCard
      bg="/assets/app-design/desktop/image-eyecam.jpg"
      title="EYECAM"
      text="Site for low-cost money transfers and sending money within seconds"
    />
    <ProjectCard
      bg="/assets/app-design/desktop/image-faceit.jpg"
      title="FACEIT"
      text="A state-of-the-art music player with high-resolution audio and DSP effects"
    />
    <ProjectCard
      bg="/assets/app-design/desktop/image-loopstudios.jpg"
      title="TODO"
      text="Connects users with local contractors based on their location"
    />
    <ProjectCard
      bg="/assets/app-design/desktop/image-todo.jpg"
      title="LOOPSTUDIOS"
      text="Blogr is a platform for creating an online blog or publication"
    />
  </ProjectsGrid>
);

export default Projects;
