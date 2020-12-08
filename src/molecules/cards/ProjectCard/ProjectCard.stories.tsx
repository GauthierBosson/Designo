import * as React from "react";

import ProjectCard from "./ProjectCard";

export default {
  title: "molecules/cards/project",
  component: ProjectCard,
};

export const Express: React.FC = () => (
  <ProjectCard
    bg="/assets/web-design/desktop/image-express.jpg"
    title="EXPRESS"
    text="A multi-carrier shipping website for ecommerce businesses"
  />
);
