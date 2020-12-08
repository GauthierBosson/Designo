import * as React from "react";

import { CategoryCard as Card } from "../../../atoms/cards-wrapper";
import { HeadingTwo } from "../../../atoms/typography/headings";
import { Link } from "../../../atoms/link";

const CategoryCard: React.FC<{
  bg: string;
  title: string;
  linkTxt: string;
  href: string;
}> = ({ bg, title, linkTxt, href }) => (
  <Card bg={bg}>
    <HeadingTwo color="white">{title}</HeadingTwo>
    <Link href={href} icon>
      {linkTxt}
    </Link>
  </Card>
);

export default CategoryCard;
