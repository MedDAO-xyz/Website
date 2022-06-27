import { Box, GridItem, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { ulid } from "ulid";

type CardLinkProps = {
  href: string;
};

type CardProps = {
  title: string;
  paras?: Array<string>;
  link?: CardLinkProps;
  isEvenCard: boolean;
  cardIndex: number;
};

export const Card = ({
  title,
  paras,
  link,
  isEvenCard,
  cardIndex,
}: CardProps) => (
  <GridItem
    as="li"
    w="100%"
    h="20rem"
    p="2rem"
    bg={{
      base: !isEvenCard ? "white" : "#FFF4F7",
      md: cardIndex === 1 || cardIndex === 4 ? "white" : "#FFF4F7",
      lg: !isEvenCard ? "white" : "#FFF4F7",
    }}
    colSpan={1}
    boxShadow={"inset 0px 2.74699px 5.49398px rgba(0, 0, 0, 0.25)"}
    listStyleType="none"
    color="black"
  >
    <Text fontSize="2xl" fontFamily="IBM Plex Mono" fontWeight={500}>
      {title}
    </Text>
    {paras &&
      paras.length > 0 &&
      paras.map((para) => (
        <Text key={ulid()} fontSize="l">
          {para}
        </Text>
      ))}
  </GridItem>
);
