
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterCircle,
} from "react-icons/ai";

import {
  SocialIcons,
} from "./SocialStyles.js";

function Socials() {
    return (
        <>
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
        </>
    )
}

export default Socials
