import * as React from "react";

import NextLink from "next/link";
import Link from "./Link";

export default {
  title: "atoms/Link",
  component: Link,
};

export const WithoutIconAndUnderline: React.FC = () => (
  <NextLink href="/" passHref prefetch={false}>
    <Link color="black">VIEW MORE</Link>
  </NextLink>
);

export const WithIconAndUnderline: React.FC = () => (
  <NextLink href="/" passHref prefetch={false}>
    <Link color="black" icon underline>
      VIEW MORE
    </Link>
  </NextLink>
);
