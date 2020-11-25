import * as React from "react";

import Link from "./Link";

export default {
  title: "Link/basic",
  component: Link,
};

export const WithoutIcon: React.FC = () => <Link href="#">VIEW MORE</Link>;

export const WithIcon: React.FC = () => (
  <Link href="#" icon={true}>
    VIEW MORE
  </Link>
);
