import * as React from "react";

import { ProjectCard as Card } from "../../../atoms/cards-wrapper";
import { HeadingThree } from "../../../atoms/typography/headings";
import { Paragraph } from "../../../atoms/typography/paragraph";

const ProjectCard: React.FC<{ bg: string; title: string; text: string }> = ({
  bg,
  title,
  text,
}) => (
  <Card bg={bg}>
    <div className="projectcard__img" />
    <div className="projectcard__text">
      <HeadingThree>{title}</HeadingThree>
      <Paragraph>{text}</Paragraph>
    </div>
  </Card>
);

export default ProjectCard;
