import { AppProps } from "next/app";
import "@/styles/global.css";
import Layout from "@/components/Layout";
import "@/sentry.browser";
import { useEffect } from "react";
// import { sentryBrowserInit } from "@/sentry.browser";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   sentryBrowserInit();
  // }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
