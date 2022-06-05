import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import { ulid } from "ulid";
import cardsContent from "./content.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroCard } from "./HeroCard";
import { Card } from "./Card";

type ContentLinkProps = {
  href: string;
};

type ContentProps = {
  title: string;
  paras?: Array<string>;
  link?: ContentLinkProps;
};

export const MobileView = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [heroCard, ...cards] = cardsContent;
  return (
    <Grid
      as="ul"
      gridTemplateColumns="1fr"
      gridTemplateRows={"20rem 20rem"}
      h="100%"
      w="100vw"
    >
      <GridItem w="100vw">
        <HeroCard {...heroCard} />
      </GridItem>
      <GridItem w="100vw">
        <Slider {...settings}>
          {cards &&
            cards.map((card: ContentProps, index: number) => {
              const isEvenCard = index % 2 === 0;
              return (
                <Card
                  key={ulid()}
                  {...card}
                  isEvenCard={isEvenCard}
                  cardIndex={index}
                />
              );
            })}
        </Slider>
      </GridItem>
    </Grid>
  );
};
