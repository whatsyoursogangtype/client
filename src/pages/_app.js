import GlobalStyle from "~/@styles/globalStyle";
import "~/@styles/fonts.css";
import AppLayout from "~/@components/templates/AppLayout";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppLayout>
  );
}
