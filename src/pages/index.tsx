import { GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Subscribe from "../components/Subscribe";
import What from "../components/What/What";
import { WhyMedDAO } from "../components/WhyMedDAO";
import HealthThree from "../components/HealthThree";

const Home: NextPage = () => {
  return (
    <>
      {/* grid item ensures the 1st item starts below navbar */}
      <GridItem gridColumn={2} h="5rem" />
      <Hero />
      <What />
      <HealthThree />
      <WhyMedDAO />
      <Roadmap />
      <FAQ />
      <Subscribe />
    </>
  );
};

export default Home;
