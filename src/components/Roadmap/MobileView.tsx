import { HStack, VStack, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import { roadmap } from "../../constants/daoInfo";
import EmptyCircle from "./EmptyCircle";
import FullCircle from "./FullCircle";
import HalfCircle from "./HalfCircle";
import { IconCheck } from "./IconCheck";
import { IconFuture } from "./IconFuture";
import { IconProgress } from "./IconProgress";
import { ulid } from "ulid";

export const MobileView = () => (
  <VStack color="black" px="1.6rem" spacing="0.8rem">
    <HStack
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
          // pr="0.8rem"
        >
          {obj.completed ? <FullCircle /> : <Spacer maxW="20px" minW="20px" />}
          {obj.inProgress ? <HalfCircle /> : <Spacer maxW="20px" minW="20px" />}
          {obj.futurePlans ? (
            <EmptyCircle />
          ) : (
            <Spacer maxW="20px" minW="20px" />
          )}
        </HStack>
      </HStack>
    ))}
  </VStack>
);
