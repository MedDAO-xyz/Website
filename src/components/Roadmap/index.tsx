import {
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import MainColumn from "../../global/Layout/MainColumn";
import { useIsMobile } from "../_hooks";
import { DesktopView } from "./DesktopView";


const Roadmap = () => {
  const isMobile = useIsMobile();
  return (
    <MainColumn>
      <Flex py="2em" direction="column">
        <Heading as="h3" color="black" id="Roadmap">
          Roadmap
        </Heading>
        {!isMobile && <DesktopView/>}
      </Flex>
    </MainColumn>
  );
};

export default Roadmap;
