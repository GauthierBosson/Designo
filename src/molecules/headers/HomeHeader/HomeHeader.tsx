import * as React from "react";

import { HomeHeaderWrapper as Wrapper } from "../../../atoms/headers-wrapper";
import { HeadingOne } from "../../../atoms/typography/headings";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Button } from "../../../atoms/button";

const HomeHeader: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => (
  <Wrapper>
    <div className="header__infos">
      <HeadingOne color="white">{title}</HeadingOne>
      <Paragraph mt="2" mb="2" color="white">
        {text}
      </Paragraph>
      <Button variant="primary">LEARN MORE</Button>
    </div>
    <div className="header__image" />
  </Wrapper>
);

export default HomeHeader;
