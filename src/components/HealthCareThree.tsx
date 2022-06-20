import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { healthThree } from "../constants/daoInfo";
import { RedBullet } from "../global/Icon/RedBullet";
import { TrippleChevron } from "../global/Icon/TrippleChevron";
import FullBleed from "../global/Layout/FullBleed";

const bulletPoints = healthThree.map((obj) => (
  <HStack alignItems="center" key={obj.id} mb="1em">
    <RedBullet />
    <Text
      color="black"
      fontSize={{ base: "1em", md: "20px" }}
      fontFamily="Neue Montreal"
    >
      {obj.bulletPoint}
    </Text>
  </HStack>
));

const HThree = () => {
  return (
    <FullBleed>
      <Flex
        as="section"
        w="100%"
        minH="500px"
        p={{ base: "1em", md: ".25em" }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        bg="linear-gradient(180deg, #ff003f 0%, #0b0006 211.38%)"
      >
        <Box>
          <Heading as="h2" fontFamily="Neue Montreal" color="white">
            Web3
            <TrippleChevron />
            Healthcare 3.0
          </Heading>{" "}
        </Box>

        <Flex
          w="100%"
          direction="column"
          maxW="1280px"
          bg="white"
          pt="1em"
          px="1em"
          justify="flex-start"
          borderRadius="1em"
          mt="1em"
        >
          {bulletPoints}
        </Flex>
      </Flex>
    </FullBleed>
  );
};

export default HThree;
