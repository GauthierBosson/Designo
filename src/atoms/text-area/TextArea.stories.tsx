import * as React from "react";

import TextArea from "./TextArea";

export default {
  title: "atoms/textarea",
  component: TextArea,
  parameters: {
    backgrounds: {
      default: "peach",
      values: [{ name: "peach", value: "#E7816B" }],
    },
  },
};

export const Primary: React.FC = () => (
  <TextArea name="textarea" placeholder="Your Message" />
);
