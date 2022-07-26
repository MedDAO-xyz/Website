import { AccordionPanel, Link, Text } from "@chakra-ui/react";
import React from "react";

const PannelFour = () => {
  return (
    <AccordionPanel mt=".5em" bg="#FFF9FB" pb={4}>
      <Text fontFamily="Neue Montreal" fontWeight="400" whiteSpace="pre-wrap">
        All members of the community must go through a KYC/Proof of Humanity
        check. Additionally, subDAOs may have additional credentialing
        requirements. Providers will be credentialed using a 3rd party provider,
        once the provider has been approved a non-transferrable NFT will be
        minted to their wallet enabling their entry into the proper subDAO.
        Please click&nbsp;
        <Link href="https://docs.meddao.xyz/" color="#FF003F">
        here
        </Link>{" "}
        for more information,
      </Text>
    </AccordionPanel>
  );
};

export default PannelFour;
