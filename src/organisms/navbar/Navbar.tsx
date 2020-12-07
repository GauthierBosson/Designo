import * as React from "react";

import { NavbarWrapper as Wrapper } from "../../atoms/navbar-wrapper";
import { Image } from "../../atoms/image";
import { Link } from "../../atoms/link";

const Navbar: React.FC = () => (
  <Wrapper>
    <Image src="/assets/shared/desktop/logo-dark.png" width={150} />
    <div className="navbar__links">
      <Link color="black" underline href="#">
        OUR COMPANY
      </Link>
      <Link color="black" underline href="#">
        LOCATIONS
      </Link>
      <Link color="black" underline href="#">
        CONTACT
      </Link>
    </div>
    <Image src="/assets/shared/mobile/icon-hamburger.svg" />
  </Wrapper>
);

export default Navbar;
