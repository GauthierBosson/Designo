import * as React from "react";
import CategoryCard from "./CategoryCard";

export default {
  title: "cards/categoryCard",
  component: CategoryCard,
};

export const Card: React.FC = () => (
  <CategoryCard
    bg={"/assets/home/desktop/image-web-design-small.jpg"}
    href="#"
    title="WEB DESIGN"
  />
);
