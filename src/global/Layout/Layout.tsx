import React from "react";
import Head from "next/head";
import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>MedDAO</title>
        <meta name="description" content="MedDAO Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        as="main"
        w="100vw"
        maxW="100%"
        overflowX="hidden"
        minH="100vh"
        bg="#FFFFFF"
        gridTemplateColumns={"1fr minmax(320px, 1280px) 1fr"}
        gridAutoRows={"minmax(min-content, max-content)"}
        // sx={{
        //   "grid-template-columns": "1fr minmax(320px, 1500px) 1fr",
        //   "grid-auto-rows": "minmax(min-content, max-content)",
        // }}
      >
        <Navbar />
        {children}
        <Footer />
      </Grid>
    </>
  );
}
