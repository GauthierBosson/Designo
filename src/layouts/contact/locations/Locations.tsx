import * as React from "react";
import styled from "styled-components";

import { LocationCard } from "../../../molecules/cards/LocationCard";

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10rem 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 10%;
  }
`;

const Locations: React.FC = () => (
  <LocationsGrid>
    <LocationCard
      bg="/assets/shared/desktop/bg-pattern-small-circle.svg"
      src="/assets/shared/desktop/illustration-canada.svg"
      title="CANADA"
    />
    <LocationCard
      bg="/assets/shared/desktop/bg-pattern-small-circle.svg"
      src="/assets/shared/desktop/illustration-australia.svg"
      title="AUSTRALIA"
    />
    <LocationCard
      bg="/assets/shared/desktop/bg-pattern-small-circle.svg"
      src="/assets/shared/desktop/illustration-united-kingdom.svg"
      title="UNITED KINGDOM"
    />
  </LocationsGrid>
);

export default Locations;
