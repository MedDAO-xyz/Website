import React from "react";
import styled from "styled-components";

const SocialBox = styled.div`
  margin-top: 60px;
  min-width: 80%;
  border: 1px solid #5d5d5d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

const SocialList = styled.ul``;

const SocialLink = styled.a`
  color: #ff003f;
  font-size: 24px;
  border-right: 1px solid #5d5d5d;
  padding-right: 1em;
  margin-right: 1em;
`;

const Socials = () => {
  return (
    <SocialBox>
      <div>Engage with our Community</div>
      <SocialList>
        <SocialLink>Newsletter</SocialLink>
        <SocialLink>Twitter</SocialLink>
        <SocialLink>Discord</SocialLink>
      </SocialList>
    </SocialBox>
  );
};

export default Socials;
