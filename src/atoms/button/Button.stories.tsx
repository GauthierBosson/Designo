import * as React from "react";

import { Button } from "../button";

export default {
  title: "Button",
  component: Button,
};

export const Primary: React.FC = () => (
  <Button variant="primary">LEARN MORE</Button>
);

export const Secondary: React.FC = () => (
  <Button variant="secondary">LEARN MORE</Button>
);
