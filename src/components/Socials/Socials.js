import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { SocialIcons } from "./SocialStyles.js";

function Socials() {
  return (
    <>
      <SocialIcons href="https://github.com/freddymuleya16">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/freddy_muleya/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/freddy-muleya-994341116/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/freddy.muleya.9/">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/freddy_muleya1">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </>
  );
}

export default Socials;
