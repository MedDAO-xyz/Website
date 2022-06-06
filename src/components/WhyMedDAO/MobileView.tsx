import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import { ulid } from "ulid";
import cardsContent from "./content.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroCard } from "./HeroCard";
import { Card } from "./Card";
import styled from "@emotion/styled";

type ContentLinkProps = {
  href: string;
};

type ContentProps = {
  title: string;
  paras?: Array<string>;
  link?: ContentLinkProps;
};

const StyledSlider = styled(Slider)`
  & > *.slick-dots {
    display: flex !important;
    width: 100vw;
    position: absolute;
    bottom: 20px;
    left: 0px;
    padding: 0 2rem 0 2rem;
    & > li {
      height: 0.5rem;
      margin-left: 3px;
      margin-right: 3px;
      flex: 0 1 25%;
      border-bottom: 1px solid #231f1f;
      box-shadow: inset 0 0 0 0 #ff003f;
    }
    & > li:first-of-type,
    & > li:last-of-type {
      margin-left: 0px;
      margin-right: 0px;
      flex: 0 1 25%;
      border-bottom: 1px solid #231f1f;
    }
    & > .slick-active {
      box-shadow: inset 100px 0 0 0 #ff003f;
      transition: all ease 5s;
      
    }
  }
`;

export const MobileView = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    useCSS: true,
    customPaging: () => (
      <VStack justifyContent="flex-end" h="3px">
        <Box w="25%" h="0px" />
      </VStack>
    ),
  };
  const [heroCard, ...cards] = cardsContent;
  return (
    <Grid
      as="ul"
      gridTemplateColumns="1fr"
      gridTemplateRows={"20rem 20rem"}
      h="100%"
      w="100vw"
      py="3rem"
    >
      <GridItem w="100vw">
        <HeroCard {...heroCard} />
      </GridItem>
      <GridItem w="100vw">
        <StyledSlider {...settings}>
          {cards &&
            cards.map((card: ContentProps, index: number) => {
              const isEvenCard = index % 2 === 0;
              return (
                <Card
                  key={ulid()}
                  {...card}
                  isEvenCard={isEvenCard}
                  cardIndex={index+1}
                />
              );
            })}
        </StyledSlider>
      </GridItem>
    </Grid>
  );
};
