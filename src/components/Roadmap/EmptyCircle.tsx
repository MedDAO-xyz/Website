import { Box } from "@chakra-ui/react";
import React from "react";

const EmptyCircle = () => {
  return (
    <Box
      w={{ base: "16px", lg: "20px" }}
      h={{ base: "16px", lg: "20px" }}
      borderRadius="50%"
      border="1px solid #FF003F"
      overflow="hidden"
    />
  );
};

export default EmptyCircle;
