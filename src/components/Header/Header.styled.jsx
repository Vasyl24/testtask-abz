import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 16px 13px;

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
`;

export const ButtonList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const HeaderButton = styled.button`
  width: 100px;
  height: 34px;

  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  background-color: var(--primary-color);
  border-radius: 80px;
`;
