import { Box } from "@chakra-ui/react";
import React from "react";

const HalfCircle = () => {
  return (
    <Box
      w="20px"
      h="20px"
      borderRadius="50%"
      border="1px solid #FF003F"
      overflow="hidden"
    >
      <Box
        display="inline-block"
        bg="#FF003F"
        h="20px"
        w="10px"
        borderRight="2px solid #FF003F"
      />
      <Box display="inline-block" bg="white" h="20px" w="10px" />
    </Box>
  );
};

export default HalfCircle;
