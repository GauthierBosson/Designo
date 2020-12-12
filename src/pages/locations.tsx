import * as React from "react";

import { Maps } from "../layouts/locations";
import { Footer } from "../organisms/footer";
import { Main } from "../layouts/main";

const Locations: React.FC = () => (
  <>
    <Main>
      <Maps />
    </Main>
    <Footer hasCard />
  </>
);

export default Locations;
