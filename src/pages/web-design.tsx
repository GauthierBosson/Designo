import * as React from "react";

import { BasicHeader } from "../molecules/headers";
import { Projects, Categories } from "../layouts/web-design";
import { Footer } from "../organisms/footer";
import { Main } from "../layouts/main";

const WebDesign: React.FC = () => (
  <>
    <Main>
      <BasicHeader
        title="Web Design"
        text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <Projects />
      <Categories />
    </Main>
    <Footer hasCard />
  </>
);

export default WebDesign;
