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
    <HStack as="section" h="fit-content" justifyContent="flex-end">
      {link && link.href && (
        <NextLink href={link.href} passHref={true}>
          <Link as="a" isExternal={true}>
            <Box h="2rem" w="2rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  fill="#000"
                  d="M19 13h-1v6.5c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-11C4 7.7 4.7 7 5.5 7H12V6H5.5A2.5 2.5 0 0 0 3 8.5v11C3 20.9 4.1 22 5.5 22h11c1.4 0 2.5-1.1 2.5-2.5V13Z"
                />
                <path
                  fill="#000"
                  d="M22 3h-7v1h5.3L11 13.3l.7.7L21 4.7V10h1V3Z"
                />
              </svg>
            </Box>
          </Link>
        </NextLink>
      )}
    </HStack>
    <Text fontSize="2xl">{title}</Text>
    {paras &&
      paras.length > 0 &&
      paras.map((para) => (
        <Text key={ulid()} fontSize="l">
          {para}
        </Text>
      ))}
  </GridItem>
);
