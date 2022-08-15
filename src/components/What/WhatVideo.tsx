import { Box, Flex, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { PlayIcon } from "../../global/Icon/Play";
import VideoModal from "./VideoModal";

const WhatVideo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Zoom delay={300} style={{ flexGrow: 1, width: "100%", display: "flex" }}>
        <Flex
          as="button"
          border=".5em solid #1111119f"
          minH="100%"
          w="100%"
          minW="320px"
          grow={1}
          borderRadius=".5em"
          onClick={onOpen}
        >
          <Flex
            bg="#ffffff"
            grow={1}
            maxH="400px"
            direction="row"
            overflow="hidden"
            position="relative"
            borderRadius=".5em"
          >
            <Box w="45%" h="100%" className="leftBody">
              <Box
                position="relative"
                top={{ base: "70%", sm: "35%" }}
                left={{ base: "-50%", sm: "-40%" }}
              >
                <Fade delay={700}>
                  <Box h="auto" w={{ base: "300px", sm: "400px" }}>
                    <Image
                      src="./VideoPlayer/body.svg"
                      transform={`scaleX(-1)`}
                      alt="Wireframe body"
                    />
                  </Box>
                </Fade>
              </Box>
            </Box>
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform={"translate(-50%, -50%)"}
            >
              <Fade delay={500} className="fadePlay">
                <PlayIcon />
              </Fade>
            </Box>
            <Box w="45%" h="100%">
              <Box
                position="relative"
                top={{ base: "65%", sm: "15%", md: "15%", lg: "15%" }}
                right={{
                  base: "5%",
                  sm: "10%",
                  md: "50%",
                  lg: "30%",
                }}
              >
                <Fade delay={700}>
                  <Box h="auto" w={{ base: "300px", sm: "600px" }}>
                    <Image src="./VideoPlayer/body.svg" alt="Wireframe body" />
                  </Box>
                </Fade>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Zoom>
      <VideoModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default WhatVideo;
