import * as React from "react";
import styled from "styled-components";

import { HeaderTwo } from "../../atoms/typohraphy/Typography";
import Link, { LinkProps } from "../../atoms/link/Link";
import theme from "../../theme";

type CardProps = {
  bg: string;
};

type CategoryCardProps = CardProps &
  LinkProps & {
    title: string;
  };

const Card = styled.div<CardProps>`
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${({ bg }) => `url("${bg}");`};
  background-position: center center;
  padding: 10rem 4rem;
`;

const CategoryCard: React.FC<CategoryCardProps> = ({ title, href, bg }) => (
  <Card bg={bg}>
    <HeaderTwo color={theme.colors.primary.white}>{title}</HeaderTwo>
    <Link href={href} icon={true} color={theme.colors.primary.white}>
      VIEW PROJECTS
    </Link>
  </Card>
);

export default CategoryCard;
