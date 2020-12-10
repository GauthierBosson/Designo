import * as React from "react";

import { Maps } from "../layouts/locations";
import { Footer } from "../organisms/footer";

const Locations: React.FC = () => (
  <>
    <main>
      <Maps />
    </main>
    <Footer hasCard />
  </>
);

export default Locations;
