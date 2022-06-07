import { Box, Grid } from "@chakra-ui/react";
import cardsContent from "./content.json";
import { HeroCard } from "./HeroCard";
import { Card } from "./Card";
import { ulid } from "ulid";

type ContentLinkProps = {
  href: string;
};

type ContentProps = {
  title: string;
  paras?: Array<string>;
  link?: ContentLinkProps;
};

export const DesktopTabletView = () => (
  <Box as="section" w="100%" h="fit-content" my="8rem">
    <Grid
      as="ul"
      gridTemplateColumns={{ md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
      w="100%"
      h="100%"
    >
      {cardsContent &&
        cardsContent.map((card: ContentProps, index: number) => {
          const isLeadCard = index === 0;
          const isEvenCard = index % 2 === 0;

          if (isLeadCard) {
            return <HeroCard key={ulid()} {...card} />;
          } else {
            return <Card key={ulid()} {...card} isEvenCard={isEvenCard} cardIndex={index} />;
          }
        })}
    </Grid>
  </Box>
);
