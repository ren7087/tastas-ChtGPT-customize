import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SaleScripter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This site is useful for creating content tailored for users of free market apps."
        />
        <meta
          name="keywords"
          content="文章作成, フリマ, mercari, chatGPT, openAI, SaleScripter"
        />
        <meta name="author" content="ren" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
