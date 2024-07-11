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
  margin-bottom: 50px;
`;

export const ContactItem = styled.li`
  padding: 20px;
  border-radius: 10px;
  background: #fff;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

// export const ContactImg = styled.img`
// margin-bottom: 20px;
//   width: 70px;
//   height: 70px;
//   border-radius: 70px;
// `;

export const ContactImg = styled.svg`
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  width: 70px;
  height: 70px;
`;

export const ContactText = styled.p`
  color: var(--text-color);
  text-align: center;

  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  &:not(:last-child) {
    margin-bottom: 20px;
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
  background: var(--primary-color);
`;
