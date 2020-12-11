import * as React from "react";

import ContactForm from "./ContactForm";

export default {
  title: "molecules/forms",
  component: ContactForm,
  parameters: {
    backgrounds: {
      default: "peach",
      values: [{ name: "peach", value: "#E7816B" }],
    },
  },
};

export const Contact: React.FC = () => <ContactForm />;
