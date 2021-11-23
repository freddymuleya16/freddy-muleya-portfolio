import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Freddy,<br />
        Muleya.
      </SectionTitle>
      <SectionText>
        An experienced software engineer who constantly seeks out innovative solutions to everyday problems. In my 4 years in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team.
      </SectionText>
      <Button onClick={()=>window.location="mailto:freddymuleya16@gmail.com"}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;