import * as React from "react";

import CompetenceCard from "./CompetenceCard";

export default {
  title: "molecules/cards/competence",
  component: CompetenceCard,
};

export const WorldClass: React.FC = () => (
  <CompetenceCard
    flex="row"
    bg="/assets/about/mobile/image-world-class-talent.jpg"
    title="World-class talent"
    texts={[
      "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    ]}
  />
);
