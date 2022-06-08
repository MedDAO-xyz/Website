import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { roadmap } from "../../constants/daoInfo";
import MainColumn from "../../global/Layout/MainColumn";
import EmptyCircle from "./EmptyCircle";
import FullCircle from "./FullCircle";
import HalfCircle from "./HalfCircle";

const Objectives = roadmap.map((obj) => (
  <Tr key={obj.id} bg={obj.id % 2 ? "white" : "#fff4f7"}>
    <Td color="black" borderBottom="none">
      {obj.objective}
    </Td>
    <Td>
      <Flex justifyContent="center">
        {obj.completed ? <FullCircle /> : <EmptyCircle />}
      </Flex>
    </Td>
    <Td>
      <Flex justifyContent="center">
        {obj.inProgress ? <HalfCircle /> : <EmptyCircle />}
      </Flex>
    </Td>
    <Td>
      <Flex justifyContent="center">
        {obj.futurePlans ? <FullCircle /> : <EmptyCircle />}
      </Flex>
    </Td>
  </Tr>
));

const Roadmap = () => {
  return (
    <MainColumn>
      <Flex py="2em" direction="column">
        <Heading as="h3" color="black" id="Roadmap">
          Roadmap
        </Heading>
        <TableContainer>
          <Table variant="striped" colorScheme="brand" textAlign="center">
            <Thead>
              <Tr display={{ base: "none", md: "table-row" }}>
                <Th></Th>
                <Th color="black">
                  <Flex justifyContent="center">Completed</Flex>
                </Th>
                <Th color="black">
                  <Flex justifyContent="center">In Progress</Flex>
                </Th>
                <Th color="black">
                  <Flex justifyContent="center">Future Plans</Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>{Objectives}</Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </MainColumn>
  );
};

export default Roadmap;
