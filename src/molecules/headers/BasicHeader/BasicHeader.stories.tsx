import * as React from "react";

import BasicHeader from "./BasicHeader";

export default {
  title: "molecules/headers",
  component: BasicHeader,
};

export const WebDesign: React.FC = () => (
  <BasicHeader
    title="Web Design"
    text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
  />
);

export const AppDesign: React.FC = () => (
  <BasicHeader
    title="App Design"
    text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
  />
);

export const GraphicDesign: React.FC = () => (
  <BasicHeader
    title="Graphic Design"
    text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
  />
);
