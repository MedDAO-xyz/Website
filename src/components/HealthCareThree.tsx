import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FullBleed from "../global/Layout/FullBleed";
import { RedBullet } from "./RedBullet";
import { TrippleChevron } from "./TrippleChevron";

const HealthCareThree = () => {
  return (
    <FullBleed>
      <Flex
        as="section"
        w="100%"
        minH="500px"
        p=".25em"
        direction="column"
        justifyContent="center"
        alignItems="center"
        bg="linear-gradient(180deg, #ff003f 0%, #0b0006 211.38%)"
      >
        {/* &gt;&gt;&gt; */}
        <Box>
          <Heading as="h2" fontFamily="Neue Montreal" color="white">
            Web3
            <TrippleChevron />
            Healthcare 3.0
          </Heading>{" "}
        </Box>
        <List
          w="100%"
          maxW="1280px"
          bg="white"
          spacing={4}
          py="1em"
          px="2em"
          listStyleImage="./bullet.png"
          borderRadius="1em"
          mt="1em"
        >
          <ListItem color="black" fontSize="24px" fontFamily="Neue Montreal">
            <ListIcon as={RedBullet} />
            <Text as="span" ml="1em">
              Aligned incentives using blockchain technology
            </Text>
          </ListItem>
          <ListItem color="black" fontSize="24px" fontFamily="Neue Montreal">
            <ListIcon as={RedBullet} />
            <Text as="span" ml="1em">
              Knowledge and data owned by members of the DAO rather than
              companies
            </Text>
          </ListItem>
          <ListItem color="black" fontSize="24px" fontFamily="Neue Montreal">
            <ListIcon as={RedBullet} />
            <Text as="span" ml="1em">
              Increase trust in the knowledge available through multiple
              opinions & collective wisdom
            </Text>
          </ListItem>
          <ListItem color="black" fontSize="24px" fontFamily="Neue Montreal">
            <ListIcon as={RedBullet} />
            <Text as="span" ml="1em">
              Collaborative participation of our community including healthcare
              providers, patients, developers and industry partners
            </Text>
          </ListItem>
        </List>
      </Flex>
    </FullBleed>
    // <GradientContainer>
    //   <Header> Healthcare 3.0</Header>
    //   <Container />
    // </GradientContainer>
  );
};

export default HealthCareThree;
