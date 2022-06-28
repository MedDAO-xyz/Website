import {
  Box,
  Flex,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { roadmap } from "../../constants/daoInfo";

const Objectives = roadmap.map((obj) => (
  <Tr key={obj.id} bg={obj.id % 2 ? "white" : "#fff4f7"}>
    <Td color="black" borderBottom="none">
      {obj.objective}
    </Td>
    <Td borderBottom="none">
      <Flex justifyContent="center">
        {obj.completed ? (
          <Box h="32px" width="32px">
            <Img src="complete.svg" />
          </Box>
        ) : null}
      </Flex>
    </Td>
    <Td borderBottom="none">
      <Flex justifyContent="center">
        {obj.inProgress ? (
          <Box h="32px" width="32px">
            <Img src="half.svg" />
          </Box>
        ) : null}
      </Flex>
    </Td>
    <Td borderBottom="none">
      <Flex justifyContent="center">
        {obj.futurePlans ? (
          <Box h="32px" width="32px">
            <Img src="empty.svg" />
          </Box>
        ) : null}
      </Flex>
    </Td>
  </Tr>
));

export const DesktopView = () => (
  <TableContainer>
    <Table variant="striped" colorScheme="brand" textAlign="center">
      <Thead>
        <Tr display={{ base: "none", md: "table-row" }}>
          <Th></Th>
          <Th color="black">
            <Flex
              justifyContent="center"
              fontFamily="Neue Montreal"
              fontWeight={400}
            >
              Completed
            </Flex>
          </Th>
          <Th color="black">
            <Flex
              justifyContent="center"
              fontFamily="Neue Montreal"
              fontWeight={400}
            >
              In Progress
            </Flex>
          </Th>
          <Th color="black" fontFamily="Neue Montreal" fontWeight={400}>
            <Flex justifyContent="center">Future Plans</Flex>
          </Th>
        </Tr>
      </Thead>
      <Tbody>{Objectives}</Tbody>
    </Table>
  </TableContainer>
);
