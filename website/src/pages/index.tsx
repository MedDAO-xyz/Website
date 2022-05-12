import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Why from "../components/Why";
import Navbar from "../global/Nav/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MedDAO</title>
        <meta name="description" content="MedDAO Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        <Hero />
        <Why />
      </body>
    </div>
  );
};

export default Home;
