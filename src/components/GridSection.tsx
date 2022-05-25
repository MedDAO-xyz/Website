import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  margin-top: 60px;
  min-width: 80%;
  background-color: #e2e2e2;
  height: 734px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridSection = () => {
  return <GridContainer>Display Grid here</GridContainer>;
};

export default GridSection;
