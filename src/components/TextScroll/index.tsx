import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import FullBleed from "../../global/Layout/FullBleed";
import { useIsMobile } from "../_hooks";
import { DesktopView } from "./DesktopView";
import { MobileView } from "./MobileView";

const TextScroll = () => {
  const isMobile = useIsMobile();
  return (
    <FullBleed>
      {isMobile && <MobileView />}
      {!isMobile && <DesktopView />}
    </FullBleed>
  );
};

export default TextScroll;
