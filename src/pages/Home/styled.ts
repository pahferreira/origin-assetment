// Libraries
import styled from 'styled-components';

export const Main = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 450px) {
    justify-content: flex-start;
  }
`;
