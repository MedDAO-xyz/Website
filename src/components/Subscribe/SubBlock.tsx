import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Input,
} from "@chakra-ui/react";
import React from "react";

const SubBlock = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      w="100%"
      justifyContent="space-between"
      px={{ base: "2em", md: "none" }}
    >
      <Flex alignItems="center" py=".5em" minW="320px" flexWrap="nowrap">
        <Heading as="h6" fontSize="42px" color="black" w="auto">
          STAY IN TOUCH
        </Heading>
      </Flex>
      <Flex
        // ml="2em"
        justifyContent={{ base: "flex-start", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
        minW="60%"
      >
        <Input
          bg="black"
          h="70px"
          w={{ base: "60%", md: "100%" }}
          placeholder="Your Email Address"
          _placeholder={{ opacity: 1, color: "grey" }}
          color="white"
          alignSelf="baseline"
          borderRadius={0}
          border="none"
        />
        <Box
          py=".5em"
          px={{ base: "none", md: ".5em" }}
          h={{ base: "54px", md: "70px" }}
          bg={{ base: "white", md: "black" }}
        >
          <Button mt={{ base: ".25em", md: "0px" }} bg="#FF003F">
            SUBSCRIBE
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SubBlock;
