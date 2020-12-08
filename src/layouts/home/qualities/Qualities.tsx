import * as React from "react";
import styled from "styled-components";

import { QualityCard } from "../../../molecules/cards/QualityCard";

const QualitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 10rem 3rem 0 3rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 10%;
    padding: 10rem 0 0 0;
  }
`;

const Qualities: React.FC = () => (
  <QualitiesGrid>
    <QualityCard
      bg="/assets/shared/desktop/bg-pattern-small-circle.svg"
      src="/assets/home/desktop/illustration-passionate.svg"
      title="PASSIONATE"
      text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
    />
    <QualityCard
      rotation={-85}
      bg="/assets/shared/desktop/bg-pattern-small-circle.svg"
      src="/assets/home/desktop/illustration-resourceful.svg"
      title="RESOURCEFUL"
      text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
    />
    <QualityCard
      rotation={90}
      bg="/assets/shared/desktop/bg-pattern-small-circle.svg"
      src="/assets/home/desktop/illustration-friendly.svg"
      title="FRIENDLY"
      text=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
    />
  </QualitiesGrid>
);

export default Qualities;
