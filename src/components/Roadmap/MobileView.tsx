import { HStack, VStack, Text, Spacer, Box, Img, Flex } from "@chakra-ui/react";
import React from "react";
import { roadmap } from "../../constants/daoInfo";
import { IconCheck } from "./IconCheck";
import { IconFuture } from "./IconFuture";
import { IconProgress } from "./IconProgress";
import { ulid } from "ulid";

export const MobileView = () => (
  <VStack color="black" px="1.6rem" spacing="0.8rem">
    <Flex
      w="100%"
      minH="3rem"
      pr="0.6em"
      borderBottom="0.5px solid #231F1F"
      justifyContent="flex-end"
    >
      <HStack>
        <IconCheck />
        <IconProgress />
        <IconFuture />
      </HStack>
    </Flex>
    {roadmap.map((obj) => (
      <Flex
        key={ulid()}
        w="100%"
        minH="3rem"
        bg={obj.id % 2 ? "white" : "#fff4f7"}
        justify="space-between"
      >
        <Flex align="center" justify="flex-start">
          {obj.objective}
        </Flex>
        <HStack pr="0.6em">
          {obj.completed ? (
            <Box h="1em" width="1em">
              <Img h="100%" src="complete.svg" />
            </Box>
          ) : (
            <Spacer maxW="1em" minW="1em" />
          )}
          {obj.inProgress ? (
            <Box h="1em" width="1em">
              <Img src="half.svg" />
            </Box>
          ) : (
            <Spacer maxW="1em" minW="1em" />
          )}
          {obj.futurePlans ? (
            <Box h="1em" width="1em">
              <Img src="empty.svg" />
            </Box>
          ) : (
            <Spacer maxW="1em" minW="1em" />
          )}
        </HStack>
      </Flex>
    ))}
    {/* <HStack
      justifyContent="flex-end"
      w="100%"
      spacing="0.5rem"
      minH="3rem"
      pr="0.6rem"
      borderBottom="0.5px solid #231F1F"
    >
      <IconCheck />
      <IconProgress />
      <IconFuture />
    </HStack>
    {roadmap.map((obj) => (
      <HStack
        key={ulid()}
        w="100%"
        minH="3rem"
        bg={obj.id % 2 ? "white" : "#fff4f7"}
      >
        <HStack justifyContent="center" flex="1">
          <Text textAlign="left" w="100%" p="0.5rem">
            {obj.objective}
          </Text>
        </HStack>
        <HStack
          justifyContent="center"
          flex="0 0 20vw"
          spacing="1rem"
          mr=".5em"
        >
          {obj.completed ? (
            <Box h="28px" width="28px">
              <Img src="complete.svg" />
            </Box>
          ) : (
            <Spacer maxW="10px" minW="10px" />
          )}
          {obj.inProgress ? (
            <Box h="28px" width="28px">
              <Img src="half.svg" />
            </Box>
          ) : (
            <Spacer maxW="10px" minW="10px" />
          )}
          {obj.futurePlans ? (
            <Box h="28px" width="28px">
              <Img src="empty.svg" />
            </Box>
          ) : (
            <Spacer maxW="10px" minW="10px" />
          )}
        </HStack>
      </HStack>
    ))} */}
  </VStack>
);
