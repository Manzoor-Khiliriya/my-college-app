import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>My College App</title>
        <meta name="description" content="Welcome to the college app!" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
