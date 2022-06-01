import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import MainColumn from "../global/Layout/MainColumn";
import Logo from "./Logo";

type Props = {};

const LogoTransition = (props: Props) => {
  return (
    <MainColumn>
      <Flex
        as="section"
        w="100%"
        minH="450px"
        justifyContent="center"
        alignItems="center"
        align="center"
      >
        <Fade delay={400}>
          <Logo />
        </Fade>
      </Flex>
    </MainColumn>
  );
};

export default LogoTransition;
