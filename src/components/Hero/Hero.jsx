// import image from '../../assets/images/field.jpeg';

import { HeroSection, HeroTitle, HeroText, RegisterBtn } from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>Test assignment for front-end developer</HeroTitle>
      <HeroText>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </HeroText>

      <RegisterBtn href='#signup'>Sign up</RegisterBtn>
    </HeroSection>
  );
};
export default Hero;
