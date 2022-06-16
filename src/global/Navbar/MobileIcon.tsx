import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";

type MobileIconProps = {
  onOpen: void;
};

const MobileIcon = ({ onOpen }: MobileIconProps) => {
  return (
    <VStack as="button" h="100px" w="50px" spacing={2} justify="center">
      <Box bg="#FF003F" h=".25em" w="100%" />
      <Box bg="#FF003F" h=".25em" w="100%" />
      <Box bg="#FF003F" h=".25em" w="100%" />
    </VStack>
  );
};

export default MobileIcon;
