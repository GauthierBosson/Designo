import * as React from "react";

import { CompetenceCard as Card } from "../../../atoms/cards-wrapper";
import { HeadingTwo } from "../../../atoms/typography/headings";
import { Paragraph } from "../../../atoms/typography/paragraph";

const CompetenceCard: React.FC<{
  bg: string;
  title: string;
  texts: Array<string>;
  flex: "row" | "row-reverse";
}> = ({ bg, title, texts, flex }) => (
  <Card flex={flex} bg={bg}>
    <div className="competencecard__img" />
    <div className="competencecard__content">
      <HeadingTwo>{title}</HeadingTwo>
      {texts.map((text) => (
        <Paragraph key={text}>{text}</Paragraph>
      ))}
    </div>
  </Card>
);

export default CompetenceCard;
