import { Box } from "@chakra-ui/react";
import React from "react";

const FullCircle = () => {
  return (
    <Box
      w="20px"
      h="20px"
      borderRadius="50%"
      bg="#FF003F"
      border="1px solid #FF003F"
      overflow="hidden"
    />
  );
};

export default FullCircle;
