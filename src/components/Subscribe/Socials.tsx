import { Box, Flex, HStack, Link, StackDivider } from "@chakra-ui/react";
import React from "react";
import { DiscordIcon } from "./DiscordIcon";
import { MirrorIcon } from "./MirrorIcon";
import { TwitterIcon } from "./TwitterIcon";

const Socials = () => {
  return (
    <Flex
      w="100%"
      h="4em"
      p="1em"
      direction="row"
      border="1px solid #5D5D5D"
      borderRadius=".5em"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <Box color="#5D5D5D" minW="325px">
        Join the Movement
      </Box>
      <HStack
        h="100%"
        alignItems="center"
        divider={<StackDivider borderColor="#5D5D5D" />}
      >
        <Link color="#FF003F" href="#" target="_blank">
          <MirrorIcon /> Mirror
        </Link>
        <Link color="#FF003F" href="#" target="_blank">
          <TwitterIcon /> Twitter
        </Link>
        <Link
          color="#FF003F"
          href="https://discord.gg/ZHE7BrQD"
          target="_blank"
        >
          <DiscordIcon /> Discord
        </Link>
      </HStack>
    </Flex>
  );
};

export default Socials;
