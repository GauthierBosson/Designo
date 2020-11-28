import * as React from "react";
import OthersHeader from "../OthersHeader";

export default {
  title: "Header/Others",
  component: OthersHeader,
};

export const HeaderOthers: React.FC = () => (
  <OthersHeader
    title="Web Design"
    text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    bg="/assets/shared/desktop/bg-pattern-small-circle.svg"
  />
);
