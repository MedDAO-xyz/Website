import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const VideoModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className="Overlay" />
      <ModalContent
        my="1em"
        display="flex"
        // The ratio on the video is 1.5w to 1h.  clamping at 140v prevents vertical overflow
        minW="clamp(320px, 80vw, 140vh)"
        m="auto"
        maxH="90vh"
      >
        <video width="100%" height="100%" controls autoPlay>
          <source src="./VideoPlayer/demo.mp4" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
