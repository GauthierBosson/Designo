import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import theme from "../theme";
import BaseStyle from "../layouts/base-style/BaseStyle";
import { Navbar } from "../organisms/navbar";

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
      <ThemeProvider theme={theme}>
        <BaseStyle />
        <header>
          <Navbar />
        </header>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
