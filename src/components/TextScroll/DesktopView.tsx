import {
  Grid,
  GridItem,
  Heading,
  Box,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { BgImage } from "./BgImage";
import { TrippleChevron } from "../../global/Icon/TrippleChevron";
import HThree from "../HealthCareThree";
import { Fade, Slide } from "react-awesome-reveal";

export const DesktopView = () => {
  return (
    <Grid
      h="auto"
      minH="80vh"
      w="100%"
      alignItems="center"
      justifyContent="center"
      bg="black"
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr"
      templateAreas={`"main"`}
      overflow="hidden"
    >
      <GridItem area={"main"} h="100%" w="100%">
        <BgImage />
      </GridItem>
      <GridItem area={"main"} w="100%" zIndex={2}>
        <VStack h="100%" w="100%" align="center" className="Vstack">
          <Box>
            <Fade>
              <Heading
                as="h2"
                fontFamily="Neue Montreal"
                color="white"
                fontSize={{ base: "2em", md: "4em" }}
              >
                Web3
                <TrippleChevron />
                Healthcare 3.0
              </Heading>
            </Fade>
          </Box>
          <Grid
            w="100%"
            maxW="1440px"
            gridTemplateColumns="40% 60%"
            gridTemplateRows="1fr"
            templateAreas={`"left right"`}
          >
            <GridItem
              h="100%"
              area="left"
              justifySelf="center"
              alignSelf="center"
            >
              <Flex h="100%" justifyItems="flex-end" align="center">
                <Slide
                  direction="up"
                  duration={150}
                  triggerOnce
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Flex justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 161 137"
                      height="auto"
                      width="70%"
                    >
                      <path
                        fill="#FF003F"
                        fillRule="evenodd"
                        d="m45.2 43.6 18.2-18.3-4.9-5-23.2 23.3H30l25.8-26-4.9-4.8-30.7 30.8h-5.4L48.2 10l-4.7-4.7L5.4 43.6H0L43.5 0l35 35V20.4L70.2 12 80.5 1.5 90.8 12l-8.4 8.4V35l35-35.1L161 43.6h-5.4L117.5 5.4l-5 4.9 33.3 33.3h-5.4L109.9 13l-5 4.9 25.6 25.7h-5.4l-22.8-23-4.8 4.8 18 18.2h-5.3L94.8 28 82.4 40.5v23.4h1.3l14.6-14.6L115 65.9l-7.7 7.8 4.3 4.3-14 14h-3.8l10.3 10.4-14 14h-2l4 3.9-8.3 8.3h-1.4v6.5l-2 1.9-1.8-2v-6.4H75l-14-14.1 10.2-10.3h-3.5l-14-14L64 79.9h-4l-13.9-14 16.6-16.6 14.6 14.6h1.3V40.5L66 28 50.6 43.6h-5.4Zm37.5 72.8h-4.1l-1.9-2 1.9-1.8v-8.4h-1.9l-10.2 10.3 10.2 10.2h5.5l4.5-4.4-4-4ZM88.4 92H71.2l-1.9-1.9 2-1.9h7.2V80h-9.2L59.1 90.2l10.2 10.2h17.2l1.9 2-2 1.8h-4v8.4h6.1l10.2-10.2L88.4 92Zm17.7-14L95.9 67.7H63.5l-2-1.9 2-1.9h8.4l-9.2-9.2L51.5 66l10.2 10h32.2l1.9 1.9-2 1.9H82.4v8.3H96L106 78Zm-17-14h8.3l7 7 5.1-5-11.2-11.2L89 64ZM75.5 11.9l5 5 4.9-5-5-5-4.9 5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Flex>
                </Slide>
              </Flex>
            </GridItem>
            <GridItem area="right">
              <HThree />
            </GridItem>
          </Grid>
          <HStack
            w="100%"
            justify="center"
            align="center"
            className="Hstack"
          ></HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};
