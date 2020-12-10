import * as React from "react";

import MapContentCard from "./MapContentCard";

export default {
  title: "molecules/map/contentCard",
  component: MapContentCard,
};

export const Canada: React.FC = () => (
  <MapContentCard
    title="Canada"
    firstBlock={[
      "Designo Central Office",
      "3886 Wellington Street",
      "Toronto, Ontario M9C 3J5",
    ]}
    secondBlock={["Contact", "P : +1 253-863-8967", "M : contact@designo.co"]}
  />
);
