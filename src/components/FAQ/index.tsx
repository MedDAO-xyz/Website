import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { faq, qa } from "../../constants/daoInfo";
import FullBleed from "../../global/Layout/FullBleed";
import parse from "html-react-parser";

const handleSpecialFAQ = (obj: qa) => {
  return (
    <AccordionPanel mt=".5em" bg="#FFF9FB" pb={4}>
      <Text fontFamily="Neue Montreal" fontWeight="400" whiteSpace="pre-wrap">
        {parse(obj.a)}
      </Text>
    </AccordionPanel>
  );
};

const faqAccordion = faq.map((qa) => (
  <AccordionItem key={qa.id} bg="#fff4f7" color="black" mt="1em">
    <h2>
      <AccordionButton
        bg="white"
        _expanded={{ bg: "#f5f5f5" }}
        borderRadius=".4em"
        minH="90px"
        px={{ sm: ".5em", lg: "1em" }}
      >
        <Box flex="1" textAlign="left">
          <Text fontFamily="IBM Plex Mono" fontWeight="400">
            {qa.q}
          </Text>
        </Box>
        <AccordionIcon w="1.5em" h="1.5em" bg="#fff4f7" borderRadius="50%" />
      </AccordionButton>
    </h2>
    {handleSpecialFAQ(qa)}
  </AccordionItem>
));

const FAQ = () => {
  return (
    <FullBleed>
      <Flex
        id="FAQ"
        scrollMarginTop="3em"
        bg="#fff4f7"
        w="100%"
        direction="column"
        py="2em"
        px=".5em"
        alignItems="center"
        justifyContent="center"
      >
        <Flex maxW="1280px" minW="320px" w="100%">
          <Heading
            fontFamily="IBM Plex Mono"
            as="h3"
            color="black"
            fontWeight={700}
            pl={{ sm: ".2em", lg: ".4em" }}
          >
            FAQs
          </Heading>
        </Flex>

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
