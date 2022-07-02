import { AspectRatio, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ArrowIcon } from "../global/Icon/Arrow";
import MainColumn from "../global/Layout/MainColumn";
import { BaseButton } from "./BaseButton";
import dynamic from "next/dynamic";
import { Slide, Zoom } from "react-awesome-reveal";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const highFive =
  "https://image1.masterfile.com/getImage/NjQwLTA2MDUwNzc4ZW4uMDAwMDAwMDA=AK5V19/640-06050778en_Masterfile.jpg";

const What = () => {
  return (
    <MainColumn>
      <Flex
        as="section"
        w="100%"
        px={{ base: "none", md: "1em" }}
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        my="10em"
      >
        <Flex
          direction="column"
          alignItems="flex-start"
          w={{ base: "80%", md: "40%" }}
          minW="320px"
          minH="100px"
          color="black"
        >
          <Heading
            as="h3"
            mb="1rem"
            fontFamily="IBM Plex Mono"
            fontSize={{ base: "1.8rem", lg: "3rem" }}
            fontWeight={500}
            sx={{ wordSpacing: ".02em" }}
          >
            What We Do
          </Heading>
          <Text
            as="p"
            mb="1.6rem"
            fontSize="1.2em"
            fontFamily="Neue Montreal"
            w={{ base: "100%", lg: "76%" }}
          >
            MedDAO creates new incentives and systems for a global, distributed
            medical knowledge network leveraging a highly-engaged community of
            public health stakeholders who are co-owners of the organization.
          </Text>
          <BaseButton href="https://docs.meddao.xyz/" text="LEARN MORE">
            <ArrowIcon />
          </BaseButton>
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          w={{ base: "90%", md: "60%" }}
          pr="1em"
          minW="320px"
          minH="430px"
        >
          <Flex
            minW="320px"
            w="100%"
            className="rightContainer"
            minH="430px"
            maxH="100%"
            ml={{ base: "none", md: "2em" }}
            justify="center"
            alignItems="center"
            position="relative"
          >
            <AspectRatio
              w="80%"
              zIndex={2}
              position="absolute"
              top="13%"
              borderBottom="8px solid red"
            >
              <Zoom delay={1000}>
                <ReactPlayer
                  url="KRJourney.mp4"
                  width="100%"
                  height="auto"
                  controls
                />
              </Zoom>
            </AspectRatio>
            <Flex w="100%" h="100%" position="absolute">
              <Slide direction="up">
                <Flex
                  position="relative"
                  justify="center"
                  className="container"
                  top="-30%"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 161 137"
                    height="auto"
                    width="100%"
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
            {/* </Flex> */}
          </Flex>
        </Flex>
      </Flex>
    </MainColumn>
  );
};

export default What;
