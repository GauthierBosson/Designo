import * as React from "react";

import { BasicHeaderWrapper as Wrapper } from "../../../atoms/headers-wrapper";
import { HeadingOne } from "../../../atoms/typography/headings";
import { Paragraph } from "../../../atoms/typography/paragraph";

const BasicHeader: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => (
  <Wrapper>
    <HeadingOne color="white">{title}</HeadingOne>
    <Paragraph mt="2" color="white">
      {text}
    </Paragraph>
  </Wrapper>
);

export default BasicHeader;
