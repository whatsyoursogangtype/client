import GlobalStyle from "~/@styles/GlobalStyle";
import "~/@styles/fonts.css";
import AppLayout from "~/@components/templates/AppLayout";
import Head from "next/head";

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
      <GlobalStyle />
      <Component {...pageProps} />
    </AppLayout>
  );
}
