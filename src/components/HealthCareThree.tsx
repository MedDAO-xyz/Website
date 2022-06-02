import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FullBleed from "../global/Layout/FullBleed";
import bullet from "../../public/bullet.png";
import { RedBullet } from "./RedBullet";

// const Header = styled.h3`
//   font-size: 2.5rem;
//   font-style: Neue Montreal;
//   color: white;
// `;

// const Container = styled.div`
//   background-color: white;
//   width: 75%;
//   min-height: 300px;
// `;

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
        <Box>
          <Heading as="h2" fontFamily="Neue Montreal" color="white">
            Web3 &gt;&gt;&gt; Healthcare 3.0
          </Heading>{" "}
        </Box>
        <List
          w="100%"
          maxW="1500px"
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
              companies.
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
