import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../global/Nav/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MedDAO</title>
        <meta name="description" content="MedDAO Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
