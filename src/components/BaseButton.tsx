import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

type BaseButtonProps = {
  text: string;
  href: string;
  children?: React.ReactNode;
};

export const BaseButton = ({ text, href, children }: BaseButtonProps) => (
  <NextLink href={href} passHref>
    <Button
      bg="rgb(255, 0, 63)"
      minW="9em"
      minH="3em"
      _hover={{ backgroundColor: "rgb(181, 0, 45)" }}
    >
      <Text
        color="white"
        fontFamily="Neue Montreal"
        fontWeight={500}
        fontSize="1.2em"
      >
        {text}
      </Text>
      <Box h="100%" w="auto">
        {children}
      </Box>
    </Button>
  </NextLink>
);
