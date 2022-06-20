import { Box } from "@chakra-ui/react";
import React from "react";

const HalfCircle = () => {
  return (
    <Box
      h={{ base: "16px", lg: "20px" }}
      w={{ base: "16px", lg: "20px" }}
      borderRadius="50%"
      border="1px solid #FF003F"
      overflow="hidden"
      display="inline-flex"
      justifyContent="start"
      bg="#FF003F"
    >
      <Box flex="0 0 50%" bg="#FF003F" h={{ base: "20px", lg: "24px" }} />
      <Box flex="0 0 50%" bg="white" h={{ base: "20px", lg: "24px" }} />
    </Box>
  );
};

export default HalfCircle;
