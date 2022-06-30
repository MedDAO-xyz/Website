import { Box, Flex, HStack, Img, VStack } from "@chakra-ui/react";
import React from "react";
import { roadmap } from "../../constants/daoInfo";

type HeadingProps = {
  title: string;
};

const TableHeading = ({ title }: HeadingProps) => (
  <Flex
    color="black"
    justifyContent="center"
    fontFamily="Neue Montreal"
    fontWeight={400}
    fontSize="22px"
  >
    {title}
  </Flex>
);

const Objectives = roadmap.map((obj) => (
  <Flex
    key={obj.id}
    bg={obj.id % 2 ? "white" : "#fff4f7"}
    justify="space-between"
    p="1em"
    align="center"
    minH="3em"
    w="100%"
  >
    <Flex color="black" borderBottom="none">
      {obj.objective}
    </Flex>
    <HStack spacing={10}>
      //minW based on text width above each icon
      <Flex minW="102px" justify="center">
        {obj.completed ? (
          <Box h="1.5em" width="1.5em">
            <Img src="complete.svg" />
          </Box>
        ) : null}
      </Flex>
      <Flex minW="104px" justify="center">
        {obj.inProgress ? (
          <Box h="1.5em" width="1.5em">
            <Img src="half.svg" />
          </Box>
        ) : null}
      </Flex>
      <Flex minW="114px" justify="center">
        {obj.futurePlans ? (
          <Box h="1.5em" width="1.5em">
            <Img src="empty.svg" />
          </Box>
        ) : null}
      </Flex>
    </HStack>
  </Flex>
));

export const DesktopView = () => (
  <VStack>
    <HStack
      w="100%"
      justify="flex-end"
      spacing={10}
      borderBottom="0.5px solid #231F1F"
      pr=".6em"
    >
      <TableHeading title="Completed" />
      <TableHeading title="In Progress" />
      <TableHeading title="Future Plans" />
    </HStack>
    {Objectives}
  </VStack>
);
