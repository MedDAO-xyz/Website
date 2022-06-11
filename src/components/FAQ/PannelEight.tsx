import { AccordionPanel, Link, Text } from "@chakra-ui/react";
import React from "react";

const PannelEight = () => {
  return (
    <AccordionPanel mt=".5em" bg="#FFF9FB" pb={4}>
      <Text fontFamily="Neue Montreal" fontWeight="400" whiteSpace="pre-wrap">
        So we&apos;ve piqued your interest and now you want to get involved.
        Maybe you&apos;re a healthcare provider and want to truly be part of a
        vision to utilize blockchain technology and shared ownership to better
        share and deliver healthcare knowledge. Maybe you are a patient or
        advocate who wants to take on a more of an active role in how medical
        expertise is shared. Or perhaps, you are just interested in learning
        more about or contributing to the conversation on Web3, blockchain and
        DAOs as they pertain to healthcare.
        <br />
        <br />
        If you&apos;re interested in learning more you can find the core MedDAO
        documents on our Gitbook linked &nbsp;
        <Link href="https://docs.meddao.xyz/" color="#FF003F">
          here.
        </Link>{" "}
        We&apos;ve also linked to several of our favorite articles about DAOs,
        Web3 and healthcare.
        <br />
        <br />
        We encourage you to sign up for our email list and follow our socials to
        receive updates regarding progress of MedDAO and, community events.
        <br />
        <br />
        If you&apos;ve made it this far we would recommend you sign up for our
        Discord server. This is the primary platform for engagement with MedDAO.
        Here you will become part of the conversation and a member of the team
        actually making this vision a reality. Detailed instructions and
        walkthrough are provided on the Discord server. Please reach out to our
        Community Management Team with technical difficulties.
      </Text>
    </AccordionPanel>
  );
};

export default PannelEight;
