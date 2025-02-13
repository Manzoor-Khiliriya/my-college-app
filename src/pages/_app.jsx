import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { CssBaseline, Box } from "@mui/material";

function MyApp({ Component, pageProps }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

      <Box
        sx={{
          fontFamily: "'Poppins', sans-serif",
          textTransform: "none",
          transition: "transform 0.3s ease-in-out",
          transform: isDrawerOpen
            ? { xs: "translateX(-45%)", sm: "translateX(-330px)" }
            : "translateX(0)",
        }}
      >
        <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />

        <main>
          <Component {...pageProps} />
        </main>

        <Footer />
      </Box>
    </>
  );
}

export default MyApp;
