import { Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ArrowIcon } from "../../global/Icon/Arrow";
import MainColumn from "../../global/Layout/MainColumn";
import { BaseButton } from "../BaseButton";
import WhatVideo from "./WhatVideo";

const What = () => {
  return (
    <MainColumn>
      <Flex
        as="section"
        w="100%"
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
          px="10px"
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
          px={{ base: "none", sm: "2em" }}
        >
          <WhatVideo />
        </Flex>
      </Flex>
    </MainColumn>
  );
};

export default What;
