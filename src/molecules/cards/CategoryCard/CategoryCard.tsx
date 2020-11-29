import * as React from "react";

import { CategoryCard as Card } from "../../../atoms/cards-container/CategoryCard";
import { HeadingTwo } from "../../../atoms/typography/headings";
import { Link } from "../../../atoms/link";

const CategoryCard: React.FC<{
  bg: string;
  title: string;
  linkTxt: string;
}> = ({ bg, title, linkTxt }) => (
  <Card bg={bg}>
    <HeadingTwo color="white">{title}</HeadingTwo>
    <Link href="#" icon>
      {linkTxt}
    </Link>
  </Card>
);

export default CategoryCard;
