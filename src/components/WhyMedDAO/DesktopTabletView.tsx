import { Box, Grid, GridItem } from "@chakra-ui/react";
import cardsContent from "./content.json";

export const DesktopTabletView = () => (
  <Box as="section" w="100%" h="fit-content" bgColor="yellow" my="8rem">
    <Grid as="ul" gridTemplateColumns={{ lg: "1fr 1fr 1fr" }} w="100%" h="100%">
      {cardsContent &&
        cardsContent.map((card, index) => {
          const isLeadCard = index === 0;
          const isEvenCard = index % 2;
          return (
            <GridItem
              as="li"
              w="100%"
              h="20rem"
              bg={isLeadCard ? "#FF003F" : isEvenCard ? "white" : "#FFF4F7"}
              colSpan={isLeadCard ? 2 : 1}
              boxShadow={
                isLeadCard
                  ? "none"
                  : "inset 0px 2.74699px 5.49398px rgba(0, 0, 0, 0.25)"
              }
              listStyleType='none'
              color='black'
            >
              {card.title}
            </GridItem>
          );
        })}
    </Grid>
  </Box>
);
