import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1024px) {
    width: 904px;

    padding-right: 60px;
    padding-left: 60px;
  }

  @media screen and (min-width: 1170px) {
    width: 1170px;
    padding: 0;
    /* padding-right: 60px;
    padding-left: 60px; */
  }
`;
