import * as React from "react";

import { FooterCard as Card } from "../../../atoms/cards-wrapper";
import { HeadingTwo } from "../../../atoms/typography/headings";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Button } from "../../../atoms/button";

const FooterCard: React.FC = () => (
  <Card>
    <HeadingTwo mb="2.5" color="white">
      Let’s talk about your project
    </HeadingTwo>
    <Paragraph mb="2.5" color="white">
      Ready to take it to the next level? Contact us today and find out how our
      expertise can help your business grow.
    </Paragraph>
    <Button variant="primary">GET IN TOUCH</Button>
  </Card>
);

export default FooterCard;
