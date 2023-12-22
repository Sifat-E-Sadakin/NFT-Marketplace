import Layout from "@/components/layouts/layout";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";
import GlobalStyle from "@/styles/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
