import * as React from "react";

import { BasicHeader } from "../molecules/headers";
import { Projects, Categories } from "../layouts/web-design";
import { Footer } from "../organisms/footer";

const WebDesign: React.FC = () => (
  <>
    <main>
      <BasicHeader
        title="Web Design"
        text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <Projects />
      <Categories />
    </main>
    <Footer hasCard />
  </>
);

export default WebDesign;
