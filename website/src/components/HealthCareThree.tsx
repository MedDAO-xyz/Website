import React from "react";
import styled from "styled-components";

const GradientContainer = styled.div`
  margin-top: 114px;
  width: 100vw;
  min-height: 40vh;
  padding: 1em;
  background: linear-gradient(180deg, #ff003f 0%, #0b0006 211.38%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h3`
  font-size: 2.5rem;
  font-style: Neue Montreal;
  color: white;
`;

const Container = styled.div`
  background-color: white;
  width: 75%;
  min-height: 300px;
`;

const HealthCareThree = () => {
  return (
    <GradientContainer>
      <Header>Web 3 > Healthcare 3.0</Header>
      <Container />
    </GradientContainer>
  )
};

export default HealthCareThree;
