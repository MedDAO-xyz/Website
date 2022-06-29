import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-awesome-reveal";
import FullBleed from "../../global/Layout/FullBleed";

type HeadingProps = {
  title: string;
};

const HeroHeading = ({ title }: HeadingProps) => (
  <Heading
    as="h1"
    fontFamily="IBM Plex Mono"
    fontWeight={500}
    fontSize={{ base: "3em", sm: "4em", md: "6em", xl: "6em" }}
    color="#FF003F"
  >
    {title}
  </Heading>
);

const Hero = () => {
  return (
    <FullBleed>
      <Flex
        as="section"
        id="hero"
        scrollMarginTop="5em"
        py="50px"
        w="100%"
        position="relative"
        justify="center"
        minH="350px"
        overflow="hidden"
      >
        <Flex
          h={{ base: "400px", md: "550px" }}
          width="100%"
          maxW="1920px"
          backgroundImage="mesh.svg"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="clamp(1400px, 100% ,1920px)"
          overflow="hidden"
          justify="center"
          align="center"
        >
          <Flex
            h="100%"
            w="100%"
            justify="center"
            align="center"
            direction="column"
          >
            <Slide direction="down" triggerOnce>
              <HeroHeading title="A New" />
              <HeroHeading title="Value Layer" />
              <HeroHeading title="In" />
              <HeroHeading title="Healthcare" />
            </Slide>
          </Flex>
        </Flex>
      </Flex>
    </FullBleed>
  );
};

export default Hero;
