import { VStack } from "@chakra-ui/react";
import React from "react";
import MainColumn from "../../global/Layout/MainColumn";
import Socials from "./Socials";
import SubBlock from "./SubBlock";

const Subscribe = () => {
  return (
    <MainColumn>
      <VStack w="100%" py="2em" spacing={8}>
        <SubBlock />
        <Socials />
      </VStack>
    </MainColumn>
  );
};

export default Subscribe;
