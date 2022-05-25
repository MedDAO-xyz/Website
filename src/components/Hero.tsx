import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeroTitle = styled.div`
  margin-top: 80px;
  z-index: 2;
`;

const HeroHeader = styled.h1`
  font-size: 92px;
  font-style: "Futura";
  color: #231f1f;
  margin-top: 30;
  margin-bottom: 0;
  text-align: center;
`;

const LogoContainer = styled.div`
  margin-top: 100px;
  width: 239px;
  height: 209px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Wave = styled.img`
  position: absolute;
  top: 149px;
  width: 100%;
  z-index: 0;
`;

const Hero = () => {
  return (
    <Container>
      <HeroTitle>
        <Fade delay={100} triggerOnce>
          <HeroHeader>Medical</HeroHeader>
        </Fade>
        <Slide direction="up" triggerOnce>
          <HeroHeader>Future</HeroHeader>
          <HeroHeader>Now</HeroHeader>
        </Slide>
      </HeroTitle>
      <LogoContainer>
        <Logo src="./MedDAO_Icon_Red.png" />
      </LogoContainer>
      <Wave src="./mesh.svg" />
    </Container>
  );
};

export default Hero;
