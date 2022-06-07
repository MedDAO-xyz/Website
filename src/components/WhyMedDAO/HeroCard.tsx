import { GridItem, Text, VStack } from "@chakra-ui/react";

type HeroCardProps = {
  title: string;
};

export const HeroCard = ({ title }: HeroCardProps) => (
  <>
    <GridItem
      as="li"
      w="100%"
      h="20rem"
      bg={"#FF003F"}
      colSpan={{ sm: 1, md: 2 }}
      listStyleType="none"
      color="black"
    >
      <VStack
        as="section"
        h="100%"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="6xl"
          textAlign={"center"}
          color="white"
          fontWeight={700}
        >
          {title}
        </Text>
      </VStack>
    </GridItem>
  </>
);
