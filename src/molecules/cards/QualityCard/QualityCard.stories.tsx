import * as React from "react";

import { QualityCard } from "../QualityCard";

export default {
  title: "molecules/cards/quality",
  component: QualityCard,
};

export const Passionate: React.FC = () => (
  <QualityCard
    src="/assets/home/desktop/illustration-passionate.svg"
    title="PASSIONATE"
    text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
  />
);

export const Resourceful: React.FC = () => (
  <QualityCard
    src="/assets/home/desktop/illustration-resourceful.svg"
    title="RESOURCEFUL"
    text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
  />
);

export const Friendly: React.FC = () => (
  <QualityCard
    src="/assets/home/desktop/illustration-friendly.svg"
    title="FRIENDLY"
    text=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
  />
);
