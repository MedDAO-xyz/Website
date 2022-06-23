import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import FullBleed from "./Layout/FullBleed";

const Footer = () => {
  return (
    <FullBleed>
      <Flex w="100%" bg="#1d1d1d" justifyContent="center">
        <Flex
          as="footer"
          minH="100px"
          w="100%"
          maxW="1440px"
          border="none"
          px="1em"
          bg="#1d1d1d"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
        >
          <Box py="1em">
            <Image h="65px" src="./MedDAO_Logo_White.svg" />
          </Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            py="1em"
          >
            <Box color="white" ml={{ base: "none", md: "2em" }}>
              MedDAO © 2022
            </Box>
            <Box color="white" ml={{ base: "none", md: "2em" }}>
              Built with ❤️ by
            </Box>
            <Link
              href="https://www.banklessconsulting.com/"
              color="red"
              ml={{ base: "none", md: ".5em" }}
            >
              Bankless Consulting
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </FullBleed>
  );
};

export default Footer;
