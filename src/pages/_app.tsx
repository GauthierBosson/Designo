import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import BaseStyle from "../layouts/base-style/BaseStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BaseStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
