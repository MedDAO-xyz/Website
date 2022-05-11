import React from "react";
import styled from "styled-components";

type Props = {};

const Nav = styled.nav`
  min-width: 80vw;
  height: 50px;
  margin-top: 50px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`;

const Logo = styled.img`
  max-height: 50px;
  width: auto;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Link = styled.a`
  margin-right: 37px;
  font-family: "Futura";
  font-size: 24px;
  color: #5d5d5d;
`;

const JoinBttn = styled.button`
  min-height: 50px;
  width: 150px;
  border-radius: 5px;
  background-color: #ff003f;
  border: none;
  color: white;
  font-family: "Futura";
  font-size: 24px;
  font-weight: 700;
`;

const Navbar = (props: Props) => {
  return (
    <Nav>
      <Logo src="./MedDAO_Logo_WName.png" />
      <Links>
        <Link>Benifits</Link>
        <Link>Concepts</Link>
        <Link>Roadmaps</Link>
      </Links>
      <JoinBttn>Join Us</JoinBttn>
    </Nav>
  );
};

export default Navbar;
