import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Box w="auto" position="relative">
      <Image h="150px" src="./CenterCad.png" zIndex={4} />
      <Image
        h="50px"
        position="absolute"
        top="5%"
        right="53%"
        src="./LeftCad.png"
        zIndex={4}
      />
      <Image
        h="50px"
        src="./RightCad.png"
        position="absolute"
        top="5%"
        left="53%"
        zIndex={4}
      />
    </Box>
  );
};

export default Logo;
