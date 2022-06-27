import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { RedBullet } from "../../global/Icon/RedBullet";

const BulletPoints = () => {
  return (
    <Flex w="100%" pt="0.5em" px="1.25em" mt="0.5em" direction="column">
      <Slide direction="right" delay={100} triggerOnce>
        <HStack alignItems="center" mb="1em">
          <RedBullet />
          <Text
            color="white"
            fontSize={{ base: "1em", md: "1.5em" }}
            fontFamily="Neue Montreal"
          >
            Aligned incentives using blockchain technology
          </Text>
        </HStack>
      </Slide>
      <Slide direction="right" delay={150} triggerOnce>
        <HStack alignItems="center" mb="1em">
          <RedBullet />
          <Text
            color="white"
            fontSize={{ base: "1em", md: "1.5em" }}
            fontFamily="Neue Montreal"
          >
            Knowledge and data owned by members of the DAO rather than companies
          </Text>
        </HStack>
      </Slide>
      <Slide direction="right" delay={200} triggerOnce>
        <HStack alignItems="center" mb="1em">
          <RedBullet />
          <Text
            color="white"
            fontSize={{ base: "1em", md: "1.5em" }}
            fontFamily="Neue Montreal"
          >
            Increase trust in the knowledge available through multiple opinions
            & collective wisdom
          </Text>
        </HStack>
      </Slide>
      <Slide direction="right" delay={250} triggerOnce>
        <HStack alignItems="center" mb="1em">
          <RedBullet />
          <Text
            color="white"
            fontSize={{ base: "1em", md: "1.5em" }}
            fontFamily="Neue Montreal"
          >
            Collaborative participation of our community including healthcare
            providers, patients, developers and industry partners
          </Text>
        </HStack>
      </Slide>
    </Flex>
  );
};

export default BulletPoints;
