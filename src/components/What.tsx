import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { ArrowIcon } from "../global/Icon/Arrow";
import MainColumn from "../global/Layout/MainColumn";
import { BaseButton } from "./BaseButton";

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
        my="1em"
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
          minH="100px"
        >
          <Flex
            minW="320px"
            w="100%"
            maxH="100%"
            ml={{ base: "none", md: "2em" }}
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Image w="100%" maxH="100%" objectFit="fill" src="./grid.svg" />
            <Flex
              maxW={{ base: "100%", md: "95%" }}
              w="100%"
              minH="80%"
              position="absolute"
              left={{ base: 0, md: "2em" }}
              border="1px solid red"
              justifyContent="center"
              alignItems="center"
            >
              <AspectRatio w="80%">
                <iframe title="KR Journey" src="KRJourney.mp4" />
              </AspectRatio>
              {/* <Box as="video" w="80%" h="auto" src="KRJourney.mp4"></Box> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </MainColumn>
  );
};

export default What;
