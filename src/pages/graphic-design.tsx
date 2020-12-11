import * as React from "react";

import { BasicHeader } from "../molecules/headers";
import { Projects, Categories } from "../layouts/graphic-design";
import { Footer } from "../organisms/footer";

const GraphicDesign: React.FC = () => (
  <>
    <main>
      <BasicHeader
        title="Graphic Design"
        text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <Projects />
      <Categories />
    </main>
    <Footer hasCard />
  </>
);

export default GraphicDesign;
