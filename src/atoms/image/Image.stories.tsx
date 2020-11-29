import * as React from "react";

import { Image } from "../image";

export default {
  title: "atoms/Image",
  component: Image,
};

export const Logo: React.FC = () => (
  <Image src="/assets/shared/desktop/logo-dark.png" width={100} height={100} />
);
