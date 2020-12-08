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
      bg="/assets/web-design/desktop/image-express.jpg"
      title="EXPRESS"
      text="A multi-carrier shipping website for ecommerce businesses"
    />
    <ProjectCard
      bg="/assets/web-design/desktop/image-transfer.jpg"
      title="TRANSFER"
      text="Site for low-cost money transfers and sending money within seconds"
    />
    <ProjectCard
      bg="/assets/web-design/desktop/image-photon.jpg"
      title="PHOTON"
      text="A state-of-the-art music player with high-resolution audio and DSP effects"
    />
    <ProjectCard
      bg="/assets/web-design/desktop/image-builder.jpg"
      title="BUILDER"
      text="Connects users with local contractors based on their location"
    />
    <ProjectCard
      bg="/assets/web-design/desktop/image-blogr.jpg"
      title="BLOGR"
      text="Blogr is a platform for creating an online blog or publication"
    />
    <ProjectCard
      bg="/assets/web-design/desktop/image-camp.jpg"
      title="CAMP"
      text="Get expert training in coding, data, design, and digital marketing"
    />
  </ProjectsGrid>
);

export default Projects;
