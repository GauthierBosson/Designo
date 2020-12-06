import * as React from "react";

import { NavbarWrapper as Wrapper } from "../../atoms/navbar-wrapper";
import { Image } from "../../atoms/image";

const Navbar: React.FC = () => (
  <Wrapper>
    <Image src="/assets/shared/desktop/logo-dark.png" width={150} />
    <Image src="/assets/shared/mobile/icon-hamburger.svg" />
  </Wrapper>
);

export default Navbar;
