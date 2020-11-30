import * as React from "react";

import CategoryCard from "./CategoryCard";

export default {
  title: "atoms/Card",
  component: CategoryCard,
};

export const Category: React.FC = () => (
  <CategoryCard bg="/assets/home/mobile/image-web-design.jpg" />
);
