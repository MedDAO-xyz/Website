import { Box, Flex, HStack, Link, StackDivider } from "@chakra-ui/react";
import React from "react";
import { DiscordIcon } from "./DiscordIcon";
import { MirrorIcon } from "./MirrorIcon";
import { TwitterIcon } from "./TwitterIcon";

const Socials = () => {
  return (
    <Flex
      w="100%"
      py="1em"
      px={{ base: "2em", lg: "none" }}
      direction={{ base: "column", md: "row" }}
      border={{ base: "none", md: "1px solid #5D5D5D" }}
      borderRadius=".5em"
      alignItems="center"
      justifyContent={{ base: "flex-start", md: "space-between" }}
    >
      <Box
        color="#5D5D5D"
        minW="320px"
        w="100%"
        textAlign={{ base: "center", md: "start" }}
        borderBottom={{ base: "1px solid #5D5D5D", md: "none" }}
      >
        Join the Movement
      </Box>
      <HStack
        h="100%"
        mt={{ base: ".25em", md: "none" }}
        alignItems="center"
        divider={<StackDivider borderColor="#5D5D5D" />}
      >
        <Link color="#FF003F" href="#" target="_blank" flexWrap="nowrap">
          <MirrorIcon /> Mirror
        </Link>
        <Link
          color="#FF003F"
          href="https://twitter.com/MedDAO_xyz"
          target="_blank"
        >
          <TwitterIcon /> Twitter
        </Link>
        <Link
          color="#FF003F"
          href="https://discord.gg/qwWATcETDq"
          target="_blank"
        >
          <DiscordIcon /> Discord
        </Link>
      </HStack>
    </Flex>
  );
};

export default Socials;
