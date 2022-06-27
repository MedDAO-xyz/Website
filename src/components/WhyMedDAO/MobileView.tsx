import { Box, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";
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
    width: 100%;
    max-width: 100%;
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
      transition: all ease 11s;
    }
  }
`;

export const MobileView = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
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
    <Flex className="tmp" w="100%" direction="column">
      <Box w="100%" h="3em" bg="#fff4f7" />
      <Grid
        as="ul"
        gridTemplateColumns="1fr"
        gridTemplateRows={"20rem 20rem"}
        // h="100%"
        w="100vw"
        maxW="100%"
      >
        <GridItem w="100%">
          <HeroCard {...heroCard} />
        </GridItem>
        <GridItem w="100vw" maxW="100%">
          <StyledSlider {...settings}>
            {cards &&
              cards.map((card: ContentProps, index: number) => {
                const isEvenCard = index % 2 === 0;
                return (
                  <Card
                    key={ulid()}
                    {...card}
                    isEvenCard={isEvenCard}
                    cardIndex={index + 1}
                  />
                );
              })}
          </StyledSlider>
        </GridItem>
      </Grid>
    </Flex>
  );
};
