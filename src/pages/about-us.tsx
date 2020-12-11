import * as React from "react";

import { AboutHeader } from "../molecules/headers";
import { CompetenceCard } from "../molecules/cards/CompetenceCard";
import { Footer } from "../organisms/footer";
import { Locations } from "../layouts/about-us";

const AboutUs: React.FC = () => (
  <>
    <main>
      <AboutHeader />
      <CompetenceCard
        flex="row"
        bg="/assets/about/mobile/image-world-class-talent.jpg"
        title="World-class talent"
        texts={[
          "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
          "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
        ]}
      />
      <Locations />
      <CompetenceCard
        flex="row-reverse"
        bg="/assets/about/mobile/image-real-deal.jpg"
        title="The real deal"
        texts={[
          "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
          "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results",
        ]}
      />
    </main>
    <Footer hasCard />
  </>
);

export default AboutUs;
