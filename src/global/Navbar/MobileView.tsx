import { Box, Flex, Image, Link } from "@chakra-ui/react";
export const MobileView = () => (
  <Flex
    align="center"
    justifyContent="center"
    w="100%"
    h='6rem'
    px="1rem"
    maxW={{ base: "100%", lg: "1440px" }}
  >
    <Box w="12rem" h="auto">
      <Image src="./MedDAO_Logo_WName.png" alt="MedDAO logo" />
    </Box>
  </Flex>
);
