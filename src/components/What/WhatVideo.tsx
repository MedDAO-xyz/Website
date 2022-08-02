import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Zoom } from "react-awesome-reveal";
import { PlayIcon } from "../../global/Icon/Play";
import VideoModal from "./VideoModal";

const WhatVideo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Zoom
        delay={300}
        style={{
          flexGrow: 1,
          width: "clamp(320px, 100%, 50vw)",
          display: "flex",
        }}
        triggerOnce
      >
        <Flex
          as="button"
          border=".5em solid #1111119f"
          minH="100%"
          w="100%"
          grow={1}
          borderRadius=".5em"
          onClick={onOpen}
        >
          <Flex
            bg="#ffffff"
            grow={1}
            maxH="400px"
            // height="100%"
            direction="row"
            overflow="hidden"
            position="relative"
            justify="center"
            align="center"
            borderRadius=".5em"
            backgroundImage="./VideoPlayer/vidPreview.png"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          >
            <PlayIcon />
          </Flex>
        </Flex>
      </Zoom>
      <VideoModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default WhatVideo;
