import type { NextPage } from "next";
import Head from "next/head";
import GridSection from "../components/GridSection";
import Grid from "../components/GridSection";
import HealthCareThree from "../components/HealthCareThree";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import Why from "../components/Why";
import Footer from "../global/Footer";
import Navbar from "../global/Nav/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MedDAO</title>
        <meta name="description" content="MedDAO Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Why />
        {/* /* likely delete <GridSection />  */}
        <HealthCareThree />
        <Socials />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
