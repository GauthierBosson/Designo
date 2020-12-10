import * as React from "react";
import styled from "styled-components";

import { HeadingTwo } from "../../../atoms/typography/headings";
import { TextBlock } from "../../text-block";

const Wrapper = styled.div`
  padding: 7rem 4rem;
  background-color: hsla(11, 100%, 80%, 0.4);
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.primary.peach};
  }

  p {
    color: ${({ theme }) => theme.colors.primary.black};
  }

  p:first-child {
    margin-top: 2rem;
  }
`;

const MapContentCard: React.FC<{
  title: string;
  firstBlock: Array<string>;
  secondBlock: Array<string>;
}> = ({ title, firstBlock, secondBlock }) => (
  <Wrapper>
    <HeadingTwo>{title}</HeadingTwo>
    <TextBlock opacity={false} lines={firstBlock} />
    <TextBlock opacity={false} lines={secondBlock} />
  </Wrapper>
);

export default MapContentCard;
