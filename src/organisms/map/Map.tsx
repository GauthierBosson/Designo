import * as React from "react";
import styled, { css } from "styled-components";
import dynamic from "next/dynamic";

import { MapContentCard } from "../../molecules/cards/MapContentCard";

const MapCard = dynamic(
  () => import("../../molecules/cards/MapCard").then((mod) => mod.MapCard),
  {
    loading: function load() {
      return <p>A map is loading</p>;
    },
    ssr: false,
  }
);

const Wrapper = styled.div<{ flex: "row" | "row-reverse" }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    div {
      border-radius: ${({ theme }) => theme.borderRadius.base};
    }

    div:first-child {
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: ${({ flex }) => flex};
    gap: 3rem;

    div:first-child {
      flex-basis: 30%;
      height: 100%;
    }

    div:last-child {
      flex-basis: 70%;
    }
  }
`;

const Map: React.FC<{
  position: [number, number];
  title: string;
  firstBlock: Array<string>;
  secondBlock: Array<string>;
  flex: "row" | "row-reverse";
}> = ({ position, title, firstBlock, secondBlock, flex }) => (
  <Wrapper flex={flex}>
    <MapCard position={position} />
    <MapContentCard
      title={title}
      firstBlock={firstBlock}
      secondBlock={secondBlock}
    />
  </Wrapper>
);

export default Map;
