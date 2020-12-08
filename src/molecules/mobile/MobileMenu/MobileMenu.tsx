import * as React from "react";

import { MobileMenuWrapper as Wrapper } from "../../../atoms/mobile/menu";
import { Link } from "../../../atoms/link";

const MobileMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <Wrapper isOpen={isOpen}>
    <Link href="#">OUR COMPANY</Link>
    <Link href="#">LOCATIONS</Link>
    <Link href="#">CONTACT</Link>
  </Wrapper>
);

export default MobileMenu;
