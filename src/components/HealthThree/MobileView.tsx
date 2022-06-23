import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import HThree from "./BulletPoints";
import { BgImage } from "./BgImage";

export const MobileView = () => (
  <Grid
    w="100%"
    alignItems="center"
    justifyContent="center"
    bg="black"
    gridTemplateColumns="1fr"
    gridTemplateRows="1fr"
    templateAreas={`"main"`}
  >
    <GridItem area={"main"} maxH="100%" h="100%" w="100%" overflow="hidden">
      <BgImage />
    </GridItem>
    <GridItem area={"main"} w="100%" zIndex={1}>
      <Flex w="100%" px=".5em" direction="column" align="center">
        <Heading
          as="h2"
          fontFamily="Neue Montreal"
          color="white"
          fontSize="2em"
        >
          Healthcare 3.0
        </Heading>
        <HThree />
      </Flex>
    </GridItem>
  </Grid>
);
