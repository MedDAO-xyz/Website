import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Grid, GridItem, Box, Heading, VStack } from "@chakra-ui/react";
import FullBleed from "../../global/Layout/FullBleed";
import { BgImage } from "./BgImage";

const Hero = () => {
  return (
    <FullBleed>
      <Grid
        h="70vh"
        w="100vw"
        alignItems="center"
        justifyContent="center"
        bg="white"
        pos="relative"
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr"
        templateAreas={`"main"`}
        overflow="hidden"
      >
        <GridItem area={"main"} w="100vw">
          <BgImage />
        </GridItem>
        <GridItem area={"main"} w="100vw">
          <VStack justifyContent="center" alignItems="center" w="100vw">
            <Slide direction="down" triggerOnce>
              <Heading as="h1" fontSize="3em" mt="1em" color="black">
                A New
              </Heading>
            </Slide>
            <Fade delay={200} triggerOnce>
              <Heading as="h1" fontSize="3em" mt=".75em" color="black">
                Value Layer
              </Heading>
              <Heading as="h1" fontSize="3em" mt=".75em" color="black">
                In Healthcare
              </Heading>
            </Fade>
          </VStack>
          {/* </Flex> */}
        </GridItem>
      </Grid>
    </FullBleed>
  );
};

export default Hero;
