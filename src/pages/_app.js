import GlobalStyle from "~/@styles/GlobalStyle";
import "~/@styles/fonts.css";
import AppLayout from "~/@components/templates/AppLayout";
import Head from "next/head";
import Script from "next/script";
import { Footer } from "~/@components/organisms/Footer";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Head>
        <link rel="preload" href="/onLeaf.woff" as="font" type="font/woff" />
        <link rel="icon" href="https://sogangtype.com/likelion-logo.png" />
        <title>당신의 서강 유형은?</title>
        <meta property="og:title" content="당신의 서강 유형은?" key="title" />
        <meta property="og:url" content="https://sogangtype.com" />
        <meta property="og:image" content="https://sogangtype.com/meta-img.png" />
        <meta property="og:description" content="What's your Sogang type?" />
        <meta property="og:site_name" content="whatsyoursogangtype" />
      </Head>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </AppLayout>
  );
}
