import * as React from "react";

import { LocationCard as Card } from "../../../atoms/cards-wrapper";
import { Image } from "../../../atoms/image";
import { HeadingThree } from "../../../atoms/typography/headings";
import { Button } from "../../../atoms/button";

const LocationCard: React.FC<{ src: string; bg?: string; title: string }> = ({
  src,
  bg,
  title,
}) => (
  <Card bg={bg}>
    <div className="locationcard__img">
      <Image src={src} alt="" />
    </div>
    <div className="locationcard__content">
      <HeadingThree>{title}</HeadingThree>
      <Button variant="secondary">SEE LOCATION</Button>
    </div>
  </Card>
);

export default LocationCard;
