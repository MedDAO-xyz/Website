import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { BaseButton } from "../../components/BaseButton";

export const MobileView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      align="center"
      w="100%"
      h="6rem"
      px="1rem"
      position="absolute"
      maxW={{ base: "100%", lg: "1440px" }}
      justifyContent="space-between"
    >
      <Box w="200px" h="auto">
        <Image src="./MedDAO_Logo_Red.svg" alt="MedDAO logo" />
      </Box>
      <VStack
        as="button"
        h="100px"
        w="50px"
        onClick={onOpen}
        spacing={2}
        justify="center"
      >
        <Box bg="#FF003F" h=".25em" w="100%" />
        <Box bg="#FF003F" h=".25em" w="100%" />
        <Box bg="#FF003F" h=".25em" w="100%" />
      </VStack>
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xs">
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton />
          <DrawerHeader>
            <Box w="270px">
              <Image src="./MedDAO_Logo_Red.svg" alt="MedDAO logo" />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing="2em" align="center">
              <Link href="/#why">
                <Text
                  color="#5d5d5d"
                  fontFamily="Neue Montreal"
                  fontSize="1.2em"
                  fontWeight={500}
                >
                  Why MedDAO
                </Text>
              </Link>
              <Link href="https://docs.meddao.xyz/" target="_blank">
                <Text
                  color="#5d5d5d"
                  fontFamily="Neue Montreal"
                  fontSize="1.2em"
                  fontWeight={500}
                >
                  Documents
                </Text>
              </Link>
              <Link href="/#roadmap">
                <Text
                  color="#5d5d5d"
                  fontFamily="Neue Montreal"
                  fontSize="1.2em"
                  fontWeight={500}
                >
                  Roadmap
                </Text>
              </Link>
              <BaseButton href="https://discord.gg/ZHE7BrQD" text="JOIN US" />
            </VStack>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
