import * as React from "react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary: React.FC = () => (
  <Button design="primary">LEARN MORE</Button>
);

export const Secondary: React.FC = () => (
  <Button design="secondary">LEARN MORE</Button>
);
