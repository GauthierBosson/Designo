import * as React from "react";
import styled from "styled-components";

import { Paragraph } from "../../atoms/typography/paragraph";

const TextWrapper = styled.div<{ opacity?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.white};
  opacity: ${({ opacity }) => (opacity === false ? 1 : 0.5)};
`;

const TextBlock: React.FC<{ lines: Array<string>; opacity?: boolean }> = ({
  lines,
  opacity,
}) => (
  <TextWrapper opacity={opacity}>
    {lines.map((line) => (
      <Paragraph key={line}>{line}</Paragraph>
    ))}
  </TextWrapper>
);

export default TextBlock;
