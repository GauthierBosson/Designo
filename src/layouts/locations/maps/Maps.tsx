import * as React from "react";
import styled from "styled-components";

import { Map } from "../../../organisms/map";

const MapsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 10rem;
    padding: 0 3rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 3rem;
    padding: 0;
    margin: 3rem 10% 0 10%;
  }
`;

const Maps: React.FC = () => (
  <MapsGrid>
    <Map
      flex="row"
      position={[43.644001, -79.394561]}
      title="Canada"
      firstBlock={[
        "Designo Central Office",
        "3886 Wellington Street",
        "Toronto, Ontario M9C 3J5",
      ]}
      secondBlock={["Contact", "P : +1 253-863-8967", "M : contact@designo.co"]}
    />
    <Map
      flex="row-reverse"
      position={[-31.445824, 152.920129]}
      title="Australia"
      firstBlock={[
        "Designo AU Office",
        "19 Balonne Street",
        "New South Wales 2443",
      ]}
      secondBlock={["Contact", "P : (02) 6720 9092", "M : contact@designo.au"]}
    />
    <Map
      flex="row"
      position={[51.727192, -3.861238]}
      title="United Kingdom"
      firstBlock={[
        "Designo UK Office",
        "13  Colorado Way",
        "Rhyd-y-fro SA8 9GA",
      ]}
      secondBlock={["Contact", "P : 078 3115 1400", "M : contact@designo.uk"]}
    />
  </MapsGrid>
);

export default Maps;
