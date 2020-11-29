import * as React from "react";

import { QualityCard as Card } from "../../../atoms/cards-container/QualityCard";
import { Image } from "../../../atoms/image";
import { HeadingThree } from "../../../atoms/typography/headings";
import { Paragraph } from "../../../atoms/typography/paragraph";

const QualityCard: React.FC<{ src: string; title: string; text: string }> = ({
  src,
  title,
  text,
}) => (
  <Card>
    <Image src={src} alt="" />
    <div>
      <HeadingThree>{title}</HeadingThree>
      <Paragraph>{text}</Paragraph>
    </div>
  </Card>
);

export default QualityCard;
