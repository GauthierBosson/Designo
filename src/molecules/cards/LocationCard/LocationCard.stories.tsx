import * as React from "react";

import LocationCard from "./LocationCard";

export default {
  title: "molecules/cards/location",
  component: LocationCard,
};

export const Canada: React.FC = () => (
  <LocationCard
    bg="/assets/shared/desktop/bg-pattern-small-circle.svg"
    src="/assets/shared/desktop/illustration-canada.svg"
    title="CANADA"
  />
);
