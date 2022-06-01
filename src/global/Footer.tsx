import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import FullBleed from "./Layout/FullBleed";

const Footer = () => {
  return (
    <FullBleed>
      <Flex
        as="footer"
        height="5rem"
        width="100%"
        bg="#1d1d1d"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          <Image h="65px" src="./logo_wName_White.png" />
        </Box>
        <Flex justifyContent="space-between">
          <Box ml="2em">MedDAO Healthcare © 2022</Box>
          <Box ml="2em">Built with ❤️ by</Box>
          <Link
            href="https://www.banklessconsulting.com/"
            color="red"
            ml=".5em"
          >
            Bankless Consulting
          </Link>
        </Flex>
      </Flex>
    </FullBleed>
  );
};

export default Footer;
