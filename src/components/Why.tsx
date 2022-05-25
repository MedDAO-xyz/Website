import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 80%;
  min-height: 434px;
  background-color: red;
`;

const Why = () => {
  return (
    <Section>
      <Slide direction="up" duration={10}>
        <div>
          <Container>Why</Container>
        </div>
      </Slide>
    </Section>
  );
};

export default Why;
