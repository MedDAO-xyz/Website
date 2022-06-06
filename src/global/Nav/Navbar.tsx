import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import FullBleed from "../Layout/FullBleed";

const Navbar = () => {
  return (
    <FullBleed>
      <Flex
        as="nav"
        width="100%"
        h="5rem"
        justifyContent="center"
        position="fixed"
        top={0}
        zIndex={10}
        bg="#FFFFFF"
      >
        <Flex align="center" w="100%" maxW="1500px" grow={1}>
          <Box w="10.2rem" h="auto">
            <Image src="./MedDAO_Logo_WName.png" alt="MedDAO logo" />
          </Box>
          <Flex grow={1} justifyContent="flex-end" align="center">
            {/* 5d5d5d color for links */}
            <Link
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1em"
              mr="2em"
            >
              Why MedDAO
            </Link>
            <Link
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1em"
              mr="2em"
            >
              Documents
            </Link>
            <Link
              color="#5d5d5d"
              fontFamily="Neue Montreal"
              fontSize="1em"
              mr="2em"
            >
              Roadmap
            </Link>
          </Flex>
          <Button bg="red" minH="3em" color="white">
            Join Us
          </Button>
        </Flex>
      </Flex>
    </FullBleed>
  );
};

export default Navbar;
