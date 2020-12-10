import * as React from "react";
import MapCard from "./MapCard";

export default {
  title: "Map",
  component: MapCard,
};

export const SampleMap: React.FC = () => (
  <MapCard position={[43.644001, -79.394561]} />
);
