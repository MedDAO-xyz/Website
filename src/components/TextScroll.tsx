import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import FullBleed from "../global/Layout/FullBleed";
import Logo from "./Logo";

const TextScroll = () => {
  return (
    <FullBleed>
      <Flex w="100%" bg="black" justifyContent="center" alignItems="center">
        <Image
          src="./AngleBackground.png"
          maxH="80vh"
          minW="100%"
          h="100%"
          objectFit="cover"
          zIndex={2}
          //   position="absolute"
        />
        <Flex maxW="1500px">
          <Logo />
        </Flex>
      </Flex>
    </FullBleed>
  );
};

export default TextScroll;
