import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import MainColumn from "../global/Layout/MainColumn";
import { BaseButton } from "./BaseButton";

const highFive =
  "https://image1.masterfile.com/getImage/NjQwLTA2MDUwNzc4ZW4uMDAwMDAwMDA=AK5V19/640-06050778en_Masterfile.jpg";

const What = () => {
  return (
    <MainColumn>
      <Flex
        as="section"
        w="100%"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        my="1em"
      >
        <Flex
          direction="column"
          alignItems="flex-start"
          w="40%"
          minW="320px"
          minH="100px"
          color="black"
        >
          <Heading
            as="h3"
            mb="1rem"
            fontSize={{ base: "3rem", lg: "4rem" }}
            fontWeight={500}
          >
            What we do
          </Heading>
          <Text
            as="p"
            mb="1.6rem"
            fontSize="1.2em"
            fontFamily="Neue Montreal"
            w={{ base: "100%", lg: "76%" }}
          >
            MedDAO creates new incentives and systems for a global, distributed
            medical knowledge network leveraging a highly-engaged community of
            public health stakeholders who are co-owners of the organization.
          </Text>
          <BaseButton href="/" text="LEARN MORE" />
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          w="60%"
          minW="320px"
          minH="100px"
        >
          <Flex
            minW="320px"
            w="100%"
            ml="2em"
            alignItems="center"
            position="relative"
          >
            <Image objectFit="contain" src="./grid.svg" />
            <Flex
              w="70%"
              minH="80%"
              position="absolute"
              left="2em"
              border="1px solid red"
              justifyContent="center"
              alignItems="center"
            >
              <Box as="video" w="80%" h="auto" src="#" poster={highFive}></Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </MainColumn>
    // <WhatSection>
    //   <Container>
    //     <Description>
    //       <LearnHeader>What We Do</LearnHeader>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
    //         laborum a eum possimus assumenda, magni unde amet quasi, consequatur
    //         in fuga commodi minus ratione illo, provident ab nostrum nulla.
    //         Tempore.
    //       </p>
    //       <LearnBttn>Learn More</LearnBttn>
    //     </Description>
    //     <VidBox>
    //       <Grid src="./grid.svg" />
    //       <Outline>
    //         <Vid src="#" poster={highFive} />
    //       </Outline>
    //     </VidBox>
    //   </Container>
    // </WhatSection>
  );
};

export default What;
