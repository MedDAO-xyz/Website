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
import { ArrowIcon } from "../../global/Icon/Arrow";
import SubForm from "./SubForm";

const SubBlock = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      w="100%"
      justifyContent="space-between"
      px={{ base: "2em", md: "none" }}
    >
      <Flex alignItems="center" py=".5em" minW="320px" flexWrap="nowrap">
        <Heading
          as="h6"
          fontFamily="Neue Montreal"
          fontWeight={700}
          fontSize="42px"
          color="black"
          w="auto"
        >
          STAY IN TOUCH
        </Heading>
      </Flex>
      <SubForm />
    </Flex>
  );
};

export default SubBlock;
