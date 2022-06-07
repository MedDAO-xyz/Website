import { Box, Flex, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { BaseButton } from "../../components/BaseButton";
import FullBleed from "../Layout/FullBleed";

const Navbar = () => {
  return (
    <FullBleed>
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
          <Flex align="center">
            <Link
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1rem"
              fontWeight={500}
              mr="2em"
            >
              Why MedDAO
            </Link>
            <Link
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1rem"
              fontWeight={500}
              mr="2em"
            >
              Documents
            </Link>
            <Link
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1rem"
              fontWeight={500}
              mr="2em"
            >
              Roadmap
            </Link>
            <BaseButton href='/' text="Join Us"/>
          </Flex>
        </Flex>
      </VStack>
    </FullBleed>
  );
};

export default Navbar;
