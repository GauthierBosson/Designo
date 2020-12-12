import * as React from "react";

import { BasicHeader } from "../molecules/headers";
import { Projects, Categories } from "../layouts/app-design";
import { Footer } from "../organisms/footer";
import { Main } from "../layouts/main";

const AppDesign: React.FC = () => (
  <>
    <Main>
      <BasicHeader
        title="App Design"
        text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <Projects />
      <Categories />
    </Main>
    <Footer hasCard />
  </>
);

export default AppDesign;
