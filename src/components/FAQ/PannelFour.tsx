import { AccordionPanel, Link, Text } from "@chakra-ui/react";
import React from "react";

const PannelFour = () => {
  return (
    <AccordionPanel mt=".5em" bg="#FFF9FB" pb={4}>
      <Text fontFamily="Neue Montreal" fontWeight="400" whiteSpace="pre-wrap">
        All members of the community must go through a Proof of Humanity check.
        Additionally, subDAOs may have their own credentialing requirements. 
        U.S.-licensed healthcare providers’ credentials will be checked against
        the American Board of Medical Specialties database, and once the provider has been approved,
        a non-transferrable NFT (with an expiration date that requires future reverification)
        will be minted to their wallet enabling their entry into the proper subDAO.
        We would like to work with the community to replicate such a process across other geographies.
        
        Please click&nbsp;
        <Link href="https://docs.meddao.xyz/" color="#FF003F">
        here
        </Link>{" "}
        for more information.
      </Text>
    </AccordionPanel>
  );
};

export default PannelFour;
