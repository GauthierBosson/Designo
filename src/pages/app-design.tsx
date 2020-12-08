import * as React from "react";

import { BasicHeader } from "../molecules/headers";
import { Projects, Categories } from "../layouts/app-design";
import { Footer } from "../organisms/footer";

const AppDesign: React.FC = () => (
  <>
    <main>
      <BasicHeader
        title="App Design"
        text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <Projects />
      <Categories />
      <Footer hasCard />
    </main>
  </>
);

export default AppDesign;
