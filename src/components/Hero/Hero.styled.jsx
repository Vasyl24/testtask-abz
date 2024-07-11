import styled from 'styled-components';
import image from '../../assets/images/field.jpeg';

export const HeroSection = styled.section`
  margin: 0 auto;
  height: 500px;
  padding: 40px 16px 70px;

  background-image: url(${image});
  background-color: var(--secondary-color);
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 20px;

  color: var(--secondary-text-color);
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: (40/ 40);
`;

export const HeroText = styled.p`
  margin-bottom: 32px;

  color: var(--secondary-text-color);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);
`;

export const RegisterBtn = styled.button`
  width: 100px;
  height: 34px;

  color: var(--text-color);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  border-radius: 80px;
  background: var(--primary-color);
`;
