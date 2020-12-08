import * as React from "react";

import { QualityCard as Card } from "../../../atoms/cards-wrapper";
import { Image } from "../../../atoms/image";
import { HeadingThree } from "../../../atoms/typography/headings";
import { Paragraph } from "../../../atoms/typography/paragraph";

const QualityCard: React.FC<{
  src: string;
  title: string;
  text: string;
  bg?: string;
  rotation?: number;
}> = ({ src, title, text, bg, rotation }) => (
  <Card rotation={rotation} bg={bg}>
    <div className="qualitycard__img">
      <Image src={src} alt="" />
    </div>
    <div className="qualitycard__text">
      <HeadingThree>{title}</HeadingThree>
      <Paragraph>{text}</Paragraph>
    </div>
  </Card>
);

export default QualityCard;
