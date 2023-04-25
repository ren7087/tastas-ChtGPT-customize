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
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SaleScripter" />
        <meta
          property="og:description"
          content="This site is useful for creating content tailored for users of free market apps."
        />
        <meta
          property="og:image"
          content="https://media.istockphoto.com/id/1251007505/ja/%E3%83%99%E3%82%AF%E3%82%BF%E3%83%BC/%E4%BA%BA%E3%80%85%E3%81%AF%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%83%9C%E3%83%83%E3%83%88%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E6%89%8B%E3%81%AF%E4%BB%AE%E6%83%B3%E3%82%A2%E3%82%B7%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%88%E3%81%A8%E9%9B%BB%E8%A9%B1%E3%82%92%E6%8F%A1%E3%82%8A%E3%81%BE%E3%81%99%E4%BA%8B%E6%A5%AD%E9%96%8B%E7%99%BA%E8%B2%A9%E5%A3%B2%E5%A2%97%E5%8A%A0%E3%83%98%E3%83%AB%E3%83%97%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%83%BC%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E3%81%AE%E3%82%B3%E3%83%B3%E3%82%BB%E3%83%97%E3%83%88%E3%83%95%E3%83%A9%E3%83%83%E3%83%88%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE.jpg?s=612x612&w=0&k=20&c=vZpmyS9nzHvanZm9D3MB9zQiH9q2WDnnUL27uPBMIYA="
        />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
