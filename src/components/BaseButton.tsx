import React from "react";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

type BaseButtonProps = {
  text: string;
  href: string;
};

export const BaseButton = ({ text, href }: BaseButtonProps) => (
  <NextLink href={href}>
    <Button
      bg="rgb(255, 0, 63)"
      w="8em"
      minH="3em"
      color="white"
      _hover={{ backgroundColor: "rgb(181, 0, 45)" }}
    >
      {text}
    </Button>
  </NextLink>
);
