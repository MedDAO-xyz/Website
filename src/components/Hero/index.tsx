import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-awesome-reveal";
import FullBleed from "../../global/Layout/FullBleed";

const Hero = () => {
  return (
    <FullBleed>
      <Flex
        as="section"
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
              <Heading
                as="h1"
                fontFamily="Neue Montreal"
                fontWeight={700}
                fontSize={{ base: "3em", md: "4em", xl: "5em" }}
                color="black"
              >
                A New
              </Heading>
              <Heading
                as="h1"
                fontFamily="Neue Montreal"
                textAlign="center"
                fontWeight={700}
                fontSize={{ base: "3em", md: "4em", xl: "5em" }}
                color="black"
              >
                Value Layer
              </Heading>
              <Heading
                as="h1"
                fontFamily="Neue Montreal"
                fontWeight={700}
                fontSize={{ base: "3em", md: "4em", xl: "5em" }}
                color="black"
              >
                In
              </Heading>
              <Heading
                as="h1"
                fontFamily="Neue Montreal"
                fontWeight={700}
                fontSize={{ base: "3em", md: "4em", xl: "5em" }}
                color="black"
              >
                Healthcare
              </Heading>
            </Slide>
          </Flex>
        </Flex>
      </Flex>
    </FullBleed>
  );
};

export default Hero;
