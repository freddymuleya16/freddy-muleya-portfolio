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
import Socials from "../Socials/Socials";
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
        <Socials/>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
