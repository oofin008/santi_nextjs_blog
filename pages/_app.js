import App from "next/app";
import React from "react";
import Head from "next/head";
import { Layout } from "@layouts";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    try {
      if (ctx.req) {
        return {};
      }
    } catch (error) {
      console.log(error);
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {};
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
