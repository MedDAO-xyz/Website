import { Box, Button, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BaseButton } from "../../components/BaseButton";

export const MobileView = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  if (isMobileMenu) {
    return (
      <Flex
        position="absolute"
        top={0}
        w="100%"
        h="75vh"
        direction="column"
        align="center"
        bg="black"
        p="4em 2em"
        zIndex={9}
      >
        <Box w="270px">
          <Link href="/#hero">
            <Image src="./MedDAO_Logo_Red.svg" alt="MedDAO logo" />
          </Link>
        </Box>
        <Button
          fontSize="16px"
          color="#5d5d5d"
          bg="black"
          border="1px solid #5d5d5d"
          borderRadius=".75em"
          position="absolute"
          top="25px"
          right="25px"
          w="1em"
          h="2em"
          onClick={() => setIsMobileMenu(false)}
        >
          X
        </Button>
        <VStack py="2em" spacing="2em" align="center">
          <Link href="/#why">
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1.2em"
              fontWeight={500}
            >
              Why MedDAO
            </Text>
          </Link>
          <Link href="/#roadmap">
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1.2em"
              fontWeight={500}
            >
              Roadmap
            </Text>
          </Link>
          <Link href="/#FAQ">
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1.2em"
              fontWeight={500}
            >
              FAQ
            </Text>
          </Link>
          <Link href="https://docs.meddao.xyz/" target="_blank">
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1.2em"
              fontWeight={500}
            >
              Documents
            </Text>
          </Link>
          <BaseButton href="https://discord.gg/qwWATcETDq" text="JOIN US" />
        </VStack>
      </Flex>
    );
  }

  return (
    <Flex
      align="center"
      w="100%"
      h="6rem"
      px="1rem"
      position="absolute"
      maxW={{ base: "100%", lg: "1440px" }}
      justifyContent="space-between"
    >
      <Box w="200px" h="auto">
        <Link href="/#hero">
          <Image src="./MedDAO_Logo_Red.svg" alt="MedDAO logo" />
        </Link>
      </Box>
      <VStack
        as="button"
        h="100px"
        w="50px"
        spacing={2}
        justify="center"
        onClick={() => setIsMobileMenu(true)}
      >
        <Box bg="#FF003F" h=".25em" w="100%" />
        <Box bg="#FF003F" h=".25em" w="100%" />
        <Box bg="#FF003F" h=".25em" w="100%" />
      </VStack>
    </Flex>
  );
};
