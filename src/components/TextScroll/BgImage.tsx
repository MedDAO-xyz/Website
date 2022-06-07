import { Box, Image, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const move = keyframes`
  0% {
    -webkit-transform-origin: bottom left;
    -moz-transform-origin: bottom left;
    -ms-transform-origin: bottom left;
    -o-transform-origin: bottom left;
    transform-origin: bottom left;
    transform: scale(1.0) rotate(0deg);
    -ms-transform: scale(1.0);
    /* IE 9 */
    
    -webkit-transform: scale(1.0);
    /* Safari and Chrome */
    
    -o-transform: scale(1.0);
    /* Opera */
    
    -moz-transform: scale(1.0);
    /* Firefox */
  }
  50% {
    transform: scale(1.2) rotate(360deg);
    -ms-transform: scale(1.2);
    
    /* IE 9 */
    
    -webkit-transform: scale(1.2);
    /* Safari and Chrome */
    
    -o-transform: scale(1.2);
    /* Opera */
    
    -moz-transform: scale(1.2);
    /* Firefox */
  }
  100% {
    -webkit-transform-origin: bottom left;
    -moz-transform-origin: bottom left;
    -ms-transform-origin: bottom left;
    -o-transform-origin: bottom left;
    transform-origin: bottom left;
    transform: scale(1.0) rotate(0deg);
    -ms-transform: scale(1.0);
    /* IE 9 */
    
    -webkit-transform: scale(1.0);
    /* Safari and Chrome */
    
    -o-transform: scale(1.0);
    /* Opera */
    
    -moz-transform: scale(1.0);
    /* Firefox */
  }
  // Source Sanjo George https://codepen.io/SaijoGeorge/pen/LxeGgY
`;

export const BgImage = () => (
  <VStack
    h="80vh"
    w="100vw"
    justifyContent="center"
    alignItems="center"
    pos="relative"
  >
    <Image
      pos="absolute"
      src="./AngleBackground.png"
      h="100%"
      w="100%"
      objectFit="cover"
      zIndex={0}
      animation={`${move} 20s ease-in infinite`}
    />
  </VStack>
);
