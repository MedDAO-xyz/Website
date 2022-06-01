import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MainColumn from "../global/Layout/MainColumn";
import { Box, Flex, Heading, Image, Img } from "@chakra-ui/react";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const HeroTitle = styled.div`
//   margin-top: 80px;
//   z-index: 2;
// `;

// const HeroHeader = styled.h1`
//   font-size: 92px;
//   font-style: "Futura";
//   color: #231f1f;
//   margin-top: 30;
//   margin-bottom: 0;
//   text-align: center;
// `;

// const LogoContainer = styled.div`
//   margin-top: 100px;
//   width: 239px;
//   height: 209px;
//   display: flex;
//   justify-content: center;
// `;

// const Logo = styled.img`
//   max-width: 100%;
//   height: auto;
// `;

// const Wave = styled.img`
//   position: absolute;
//   top: 149px;
//   width: 100%;
//   z-index: 0;
// `;

const Hero = () => {
  return (
    <MainColumn>
      <Flex as="section" w="100%" direction="column" alignItems="center">
        <Flex mt="2rem" minH="auto" minW="1000px" position="absolute">
          <Image src="./mesh.svg" left={0} objectFit="cover" />
        </Flex>
        <Flex
          h="100%"
          w="100%"
          justifyContent="center"
          alignItems="center"
          direction="column"
          mt="2rem"
        >
          <Slide direction="down" triggerOnce>
            <Heading as="h1" fontSize="3em" mt="1em" color="black">
              A New
            </Heading>
          </Slide>
          <Fade delay={200} triggerOnce>
            <Heading as="h1" fontSize="3em" mt=".75em" color="black">
              Value Layer
            </Heading>
            <Heading as="h1" fontSize="3em" mt=".75em" color="black">
              In Healthcare
            </Heading>
          </Fade>
        </Flex>
      </Flex>
    </MainColumn>
  );
};

export default Hero;
