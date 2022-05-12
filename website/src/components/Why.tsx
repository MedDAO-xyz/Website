import React from "react";
import styled from "styled-components";

const WhyTitleBox = styled.div`
  margin-top: 153px;
  min-width: 80%;
  border: #5d5d5d solid 1px;
  border-bottom: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhyTitle = styled.h2`
  font-family: "Futura";
  font-size: 55px;
  font-weight: 400;
`;

const RedWhy = styled.div`
  min-width: 80%;
  height: 100px;
  margin-top: 0px;
  border-radius: 0px 0px 10px 10px;
  background-color: #ff003f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

const RedWhyTitle = styled.h3`
  font-size: 40px;
  font-weight: 700;
  align-items: center;
  color: white;
`;

const Arrow = styled.img`
  width: 120px;
  height: 25px;
  margin-right: 1em;
`;

const Why = () => {
  return (
    <>
      <WhyTitleBox>
        <WhyTitle>Why MedDAO?</WhyTitle>
      </WhyTitleBox>
      <RedWhy>
        <RedWhyTitle>Find out why</RedWhyTitle>
        <Arrow src="./Arrow.png" />
      </RedWhy>
    </>
  );
};

export default Why;
