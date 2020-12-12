import * as React from "react";

import { ContactHeader } from "../molecules/headers";
import { Footer } from "../organisms/footer";
import { Locations } from "../layouts/contact";
import { Main } from "../layouts/main";

const Contact: React.FC = () => (
  <>
    <Main>
      <ContactHeader
        title="Contact Us"
        text="Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."
      />
      <Locations />
    </Main>
    <Footer hasCard={false} />
  </>
);

export default Contact;
