import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import FullBleed from "../global/Layout/FullBleed";
import { faq } from "../constants/daoInfo";

const faqAccordion = faq.map((qa) => (
  <AccordionItem key={qa.id} bg="white" color="black" mt="1em">
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {qa.q}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>{qa.a}</AccordionPanel>
  </AccordionItem>
));

const FAQ = () => {
  return (
    <FullBleed>
      <Flex
        bg="#fff4f7"
        w="100%"
        direction="column"
        p="2em"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h3" color="black">
          FAQ
        </Heading>
        <Accordion
          maxW="1280px"
          minW="320px"
          w="100%"
          allowMultiple
          allowToggle
        >
          {faqAccordion}
        </Accordion>
      </Flex>
    </FullBleed>
  );
};

export default FAQ;
