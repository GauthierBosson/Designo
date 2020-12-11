import * as React from "react";

import Map from "./Map";

export default {
  title: "organisms/map",
  component: Map,
};

export const CanadaMap: React.FC = () => (
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
);
