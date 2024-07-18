import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 14px; */
  padding: 16px 13px;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1024px) {
    padding-right: 60px;
    padding-left: 60px;
  }

  @media screen and (min-width: 1170px) {
    width: 1170px;
    margin: 0 auto;
    padding-right: 0;
    padding-left: 0;
  }
`;

export const Logo = styled.svg`
  width: 104px;
  height: 26px;

  @media screen and (max-width: 359.98px) {
    width: 74px;
  }
`;

export const ButtonList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const HeaderButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 34px;

  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  background-color: var(--primary-color);
  border-radius: 80px;

  transition: background-color 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75) 0s;

  &:hover {
    background-color: var(--hover-btn);
  }
`;
