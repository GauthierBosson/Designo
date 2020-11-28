import * as React from "react";

import Logo from "./Logo";

export default {
  title: "Logo",
  component: Logo,
};

export const BlackLogo: React.FC = () => <Logo variant="black" />;

export const WhiteLogo: React.FC = () => <Logo variant="white" />;
