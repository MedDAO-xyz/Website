import { Box, Text, Flex, Image, Link, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { BaseButton } from "../../components/BaseButton";

export const DesktopView = () => {
  return (
    <VStack
      as="nav"
      width="100vw"
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
        <Box w="10.2rem" h="auto">
          <Image src="./MedDAO_Logo_WName.png" alt="MedDAO logo" />
        </Box>
        <HStack spacing='2em' align="center">
          <Link>
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1.2em"
              fontWeight={500}
            >
              Why MedDAO
            </Text>
          </Link>
          <Link>
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1.2em"
              fontWeight={500}
            >
              Documents
            </Text>
          </Link>
          <Link>
            <Text
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1.2em"
              fontWeight={500}
            >
              Roadmap
            </Text>
          </Link>
          <BaseButton href="/" text="JOIN US" />
        </HStack>
      </Flex>
    </VStack>
  );
};
