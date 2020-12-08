import * as React from "react";

import MobileMenu from "./MobileMenu";

export default {
  title: "mobile/menu",
  component: MobileMenu,
};

export const Menu: React.FC = () => <MobileMenu isOpen />;
