import { AccordionPanel, Link, Text } from "@chakra-ui/react";
import React from "react";

const PannelEight = () => {
  return (
    <AccordionPanel mt=".5em" bg="#FFF9FB" pb={4}>
      <Text fontFamily="Neue Montreal" fontWeight="400" whiteSpace="pre-wrap">   
        If we’ve piqued your interest, we encourage you to learn more by reading our 
        <Link href="https://docs.meddao.xyz/" color="#FF003F">
        documentation,
        </Link>{" "}subscribing to our newsletter (below) and joining our           
        <Link href="https://discord.com/invite/qwWATcETDq" color="#FF003F">
        Discord server.
        </Link>{" "}(our initial primary engagement platform).
      </Text>
    </AccordionPanel>
  );
};

export default PannelEight;
