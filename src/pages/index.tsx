import * as React from "react";

import { HomeHeader } from "../molecules/headers";
import { Categories, Qualities } from "../layouts/home";
import { Footer } from "../organisms/footer";
import { Main } from "../layouts/main";

const Home: React.FC = () => (
  <>
    <Main>
      <HomeHeader
        title="Award-winning custom designs and digital branding solutions"
        text="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
      />
      <Categories />
      <Qualities />
    </Main>
    <Footer hasCard />
  </>
);

export default Home;
