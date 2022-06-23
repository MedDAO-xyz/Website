import { GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import FAQ from "../components/FAQ";
import HealthCareThree from "../components/HealthCareThree";
import Hero from "../components/Hero";
import LogoTransition from "../components/LogoTransition";
import Roadmap from "../components/Roadmap";
import Subscribe from "../components/Subscribe";
import TextScroll from "../components/TextScroll";
import What from "../components/What";
import { WhyMedDAO } from "../components/WhyMedDAO";

const Home: NextPage = () => {
  return (
    <>
      {/* grid item ensures the 1st item starts below navbar */}
      <GridItem gridColumn={2} h="5rem" />
      <Hero />
      {/* <LogoTransition /> */}
      <What />
      <TextScroll />
      {/* <HealthCareThree /> */}
      <WhyMedDAO />
      <Roadmap />
      <FAQ />
      <Subscribe />
    </>
  );
};

export default Home;
