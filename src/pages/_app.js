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
        <link
          rel="preload"
          href="/onLeaf.ttf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />
      </Head>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </AppLayout>
  );
}
