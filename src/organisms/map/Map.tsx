import * as React from "react";
import styled from "styled-components";

import { MapCard } from "../../molecules/cards/MapCard";
import { MapContentCard } from "../../molecules/cards/MapContentCard";

const Wrapper = styled.div`
  width: 100%;
`;

const Map: React.FC<{
  position: [number, number];
  title: string;
  firstBlock: Array<string>;
  secondBlock: Array<string>;
}> = ({ position, title, firstBlock, secondBlock }) => (
  <Wrapper>
    <MapCard position={position} />
    <MapContentCard
      title={title}
      firstBlock={firstBlock}
      secondBlock={secondBlock}
    />
  </Wrapper>
);

export default Map;
