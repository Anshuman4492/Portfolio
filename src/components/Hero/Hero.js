import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate itaque numquam minima. Tempora doloribus aperiam corrupti repellendus ut vel officiis dicta odit. Officiis mollitia odio soluta doloremque atque, aperiam tempora?
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;