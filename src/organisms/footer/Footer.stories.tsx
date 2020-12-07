import * as React from "react";

import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
};

export const WithoutCard: React.FC = () => <Footer />;

export const WithCard: React.FC = () => <Footer hasCard />;
