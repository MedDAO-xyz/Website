import { Box, Text, Flex, Image, Link, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { BaseButton } from "../../components/BaseButton";

export const DesktopView = () => {
  return (
    <VStack
      as="nav"
      width="100vw"
      maxW="100%"
      h="5rem"
      position="fixed"
      top={0}
      alignItems="center"
      justifyContent="center"
      zIndex={10}
      bg="#FFFFFF"
    >
      <Flex
        align="center"
        justifyContent="space-between"
        w="100%"
        px="1rem"
        maxW={{ base: "100%", lg: "1440px" }}
      >
        <Box w="13rem" h="auto" mr="1em">
          <Link href="/#hero">
            <Image src="./MedDAO_Logo_Red.svg" alt="MedDAO logo" />
          </Link>
        </Box>
        <HStack spacing="2em" align="center">
          <Link href="/#why">
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize={{ sm: "1em", md: "1.2em" }}
              fontWeight={500}
            >
              Why MedDAO
            </Text>
          </Link>
          <Link href="https://docs.meddao.xyz/" target="_blank">
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize={{ sm: "1em", md: "1.2em" }}
              fontWeight={500}
            >
              Documents
            </Text>
          </Link>
          <Link href="/#roadmap">
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize={{ sm: "1em", md: "1.2em" }}
              fontWeight={500}
              scrollMarginTop="800px"
            >
              Roadmap
            </Text>
          </Link>
          <BaseButton href="https://discord.gg/6Sf9GmEx" text="JOIN US" />
        </HStack>
      </Flex>
    </VStack>
  );
};
