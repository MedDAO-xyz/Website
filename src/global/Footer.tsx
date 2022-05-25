import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  bottom: 0;
  height: 133px;
  width: 100%;
  margin-top: 70px;
  background-color: #1d1d1d;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterLeft = styled.div`
  color: white;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-height: 65px;
  width: auto;
`;

const OrgInfo = styled.div`
  margin-left: 2em;
`;

const ConsultingLink = styled.a`
  color: red;
  margin-left: 0.5em;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <Logo src="./logo_wName_White.png" />
      </FooterLeft>
      <FooterRight>
        <OrgInfo>MedDAO Healthcare © 2022</OrgInfo>
        <OrgInfo>Built with ❤️ by</OrgInfo>
        <ConsultingLink href="https://www.banklessconsulting.com/">
          Bankless Consulting
        </ConsultingLink>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
