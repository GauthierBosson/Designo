import * as React from "react";

import Input from "./Input";

export default {
  title: "atoms/Input",
  component: Input,
  parameters: {
    backgrounds: {
      default: "peach",
      values: [{ name: "peach", value: "#E7816B" }],
    },
  },
};

export const Primary: React.FC = () => <Input type="text" placeholder="Name" />;
