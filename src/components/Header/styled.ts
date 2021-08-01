// Libraries
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  padding: 24px 56px;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 450px) {
    padding: 16px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 32px;
  @media screen and (max-width: 450px) {
    width: 75px;
    height: 24px;
  }
`;
