import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { faq, qa } from "../../constants/daoInfo";
import FullBleed from "../../global/Layout/FullBleed";
import PannelEight from "./PannelEight";
import PannelFour from "./PannelFour";

const handleSpecialFAQ = (obj: qa) => {
  if (obj.id == 4) {
    return <PannelFour />;
  } else if (obj.id == 8) {
    return <PannelEight />;
  } else {
    return (
      <AccordionPanel mt=".5em" bg="#FFF9FB" pb={4}>
        <Text fontFamily="Neue Montreal" fontWeight="400" whiteSpace="pre-wrap">
          {obj.a}
        </Text>
      </AccordionPanel>
    );
  }
};

const faqAccordion = faq.map((qa) => (
  <AccordionItem key={qa.id} bg="#fff4f7" color="black" mt="1em">
    <h2>
      <AccordionButton
        bg="white"
        _expanded={{ bg: "#f5f5f5" }}
        borderRadius=".4em"
        minH="90px"
      >
        <Box flex="1" textAlign="left">
          <Text fontFamily="Neue Montreal" fontWeight="400">
            {qa.q}
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    {handleSpecialFAQ(qa)}
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
