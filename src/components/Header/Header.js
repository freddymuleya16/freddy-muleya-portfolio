import Link from "next/link";
import React from "react";
import { DiCssdeck } from "react-icons/di";
import Socials from "../Socials/Socials";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { Span } from "./HeaderStyles";
const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white",marginBottom:"20px" }}>
          <DiCssdeck size="3em" />
          <Span>Freddy's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" >
          <NavLink style={{ display: "flex",marginTop:"10px" }}>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" >
          <NavLink style={{ display: "flex",marginTop:"10px" }}>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink style={{ display: "flex",marginTop:"10px" }}>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <Socials/>
    </Div3>
  </Container>
);

export default Header;
