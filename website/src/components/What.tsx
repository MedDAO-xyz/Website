import React from "react";
import styled from "styled-components";

type Props = {};

const WhatSection = styled.section`
  width: 100%;
  min-height: 400px;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  min-width: 400;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320;
  width: 40%;
`;

const LearnHeader = styled.h3`
  font-size: 55px;
  font-weight: bold;
  margin: 0px;
`;

const LearnBttn = styled.button`
  min-height: 3em;
  width: 50%;
  border-radius: 0.5em;
  background-color: #ff003f;
  border: none;
  color: white;
  font-family: "Futura";
  font-size: 24px;
  font-weight: 700;
`;

const VidBox = styled.div`
  min-width: 320px;
  width: 50%;
  max-height: 50%;
  display: flex;
  margin-left: 2em;
  align-items: center;
  position: relative;
`;

const Grid = styled.img`
  object-fit: contain;
`;

const Outline = styled.div`
  width: 70%;
  min-height: 80%;
  position: absolute;
  left: 2em;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Vid = styled.video`
  width: 80%;
  height: auto;
`;

const highFive =
  "https://image1.masterfile.com/getImage/NjQwLTA2MDUwNzc4ZW4uMDAwMDAwMDA=AK5V19/640-06050778en_Masterfile.jpg";

const What = () => {
  return (
    <WhatSection>
      <Container>
        <Description>
          <LearnHeader>What We Do</LearnHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            laborum a eum possimus assumenda, magni unde amet quasi, consequatur
            in fuga commodi minus ratione illo, provident ab nostrum nulla.
            Tempore.
          </p>
          <LearnBttn>Learn More</LearnBttn>
        </Description>
        <VidBox>
          <Grid src="./grid.svg" />
          <Outline>
            <Vid src="#" poster={highFive} />
          </Outline>
        </VidBox>
      </Container>
    </WhatSection>
  );
};

export default What;
