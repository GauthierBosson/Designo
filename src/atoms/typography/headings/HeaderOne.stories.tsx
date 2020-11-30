import * as React from "react";
import { HeadingOne } from ".";

export default {
  title: "atoms/Typography/headings",
  component: HeadingOne,
};

export const H1: React.FC = () => <HeadingOne>I am a H1</HeadingOne>;
