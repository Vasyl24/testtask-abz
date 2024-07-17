import styled from 'styled-components';

export const ContactSection = styled.section`
  padding-top: 140px;
`;

export const ContactTitle = styled.h2`
  margin-bottom: 50px;

  color: var(--text-color);
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: calc(40 / 40);
`;

export const ContactList = styled.ul`
  margin-bottom: ${props =>
    props.status === 'resolved' && props.page < props.totalPages
      ? '0px'
      : '50px'};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  @media screen and (min-width: 1024px) {
    gap: 29px;
  }
`;

export const ContactItem = styled.li`
  padding: 20px;
  border-radius: 10px;
  background: #fff;

  @media screen and (max-width: 767.98px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 344px;
  }

  @media screen and (min-width: 1024px) {
    width: 282px;
  }

  @media screen and (min-width: 1170px) {
    width: 370px;
  }
`;

export const ContactImg = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  width: 70px;
  height: 70px;
  border-radius: 70px;
`;

export const ContactName = styled.p`
  margin-bottom: 20px;

  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);
  text-align: center;
`;

export const Tooltip = styled.span`
  position: absolute;
  left: 80px;
  top: 25px;
  z-index: 1;

  padding: 3px 16px;

  color: var(--secondary-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);
  text-align: center;

  border-radius: 4px;
  background: var(--text-color);
  visibility: hidden;
`;

export const ContactText = styled.p`
  position: relative;

  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);
  text-align: center;

  &:hover ${Tooltip} {
    visibility: visible;
  }
`;

export const ContactButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 120px;
  height: 34px;

  color: var(--text-color);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  border-radius: 80px;
  background-color: var(--primary-color);
  transition: background-color 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75) 0s;

  &:hover {
    background-color: var(--hover-btn);
  }
`;
