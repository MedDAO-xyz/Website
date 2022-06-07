import { Box, Flex, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { BaseButton } from "../../components/BaseButton";
import FullBleed from "../Layout/FullBleed";
import { useIsMobile } from '../../components/_hooks';
import { DesktopView } from "./DesktopView";
import { MobileView } from "./MobileView";

const Navbar = () => {
  const isMobile = useIsMobile();
  return (
    <FullBleed>
      {isMobile && <MobileView/>}
      {!isMobile && <DesktopView/>}
    </FullBleed>
  );
};

export default Navbar;
