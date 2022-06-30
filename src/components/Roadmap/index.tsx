import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import MainColumn from "../../global/Layout/MainColumn";
import { useIsMobile } from "../_hooks";
import { DesktopView } from "./DesktopView";
import { MobileView } from "./MobileView";

const Roadmap = () => {
  const isMobile = useIsMobile();
  return (
    <MainColumn>
      <Flex py="2em" id="roadmap" scrollMarginTop="5em" direction="column">
        <Heading fontFamily="IBM Plex Mono" as="h3" color="black" pl=".4em">
          Roadmap
        </Heading>
        {!isMobile && <DesktopView />}
        {isMobile && <MobileView />}
      </Flex>
    </MainColumn>
  );
};

export default Roadmap;
