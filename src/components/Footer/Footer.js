import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:111111111">11111111 </LinkItem>
          
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:111111111">11111111 </LinkItem>
          
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>efficent code</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://LinkedIn.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com">
        <AiFillFacebook size="3rem" />
        
      </SocialIcons>
      <SocialIcons href="https://github.com" >
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com" >
        <AiFillPhone size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;