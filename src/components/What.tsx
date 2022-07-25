import { AspectRatio, Text, Flex, Heading, Box, Image } from "@chakra-ui/react";
import React from "react";
import { ArrowIcon } from "../global/Icon/Arrow";
import MainColumn from "../global/Layout/MainColumn";
import { BaseButton } from "./BaseButton";
import dynamic from "next/dynamic";
import { Zoom } from "react-awesome-reveal";
import { PlayIcon } from "../global/Icon/Play";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const What = () => {
  return (
    <MainColumn>
      <Flex
        as="section"
        w="100%"
        // px={{ base: "none", md: "1em" }}
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        my={{ base: "none", md: "3em", lg: "8em" }}
        bg="white"
        zIndex={3}
      >
        <Flex
          direction="column"
          alignItems="flex-start"
          w={{ base: "80%", md: "40%" }}
          minW="320px"
          minH="100px"
          color="black"
          bg="white"
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
          justify="center"
          className="rightContainer"
          w={{ base: "100%", md: "60%" }}
          minH={{ base: "200px", md: "420px" }}
          minW="320px"
          mt="1em"
          backgroundImage="./waveMesh.svg"
          py="1em"
        >
          <AspectRatio
            maxW={{ base: "95%", md: "80%" }}
            minW={{ base: "90%", md: "80%" }}
            h="100%"
            zIndex={5}
            className="video"
          >
            <Zoom delay={300} triggerOnce>
              <ReactPlayer
                url="KRJourney.mp4"
                width="100%"
                height="100%"
                controls
                light="KRJourneyScreenshot.jpg"
                playing
                playIcon={<PlayIcon />}
              />
            </Zoom>
          </AspectRatio>
        </Flex>
      </Flex>
    </MainColumn>
  );
};

export default What;
