import { Flex, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { ulid } from "ulid";
import { BgImage } from "./BgImage";

export const MobileView = () => (
  <Grid
    h="80vh"
    w="100vw"
    alignItems="center"
    justifyContent="center"
    bg="black"
    gridTemplateColumns="1fr"
    gridTemplateRows="1fr"
    templateAreas={`"main"`}
    overflow="hidden"
  >
    <GridItem area={"main"} w="100%">
      <BgImage />
    </GridItem>
    <GridItem area={"main"} w="100%" zIndex={1}>
      <Flex w="100%" px="3rem">
        <Heading
          key={ulid()}
          as="h2"
          size="3xl"
          color="white"
          textAlign="center"
        >
          A decentralized medical knowledge network at your fingertips.
        </Heading>
      </Flex>
    </GridItem>
  </Grid>
);
