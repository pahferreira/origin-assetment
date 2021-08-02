// Libraries
import styled from 'styled-components';

export const Block = styled.div`
  height: 100%;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 6px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 35px 40px 40px;
  width: fit-content;
  display: grid;
  grid-row-gap: 24px;
  grid-column-gap: 16px;
  grid-template-areas:
    'header header'
    'amount date'
    'result result'
    'footer footer';
  grid-template-columns: 1.4fr 1fr;
`;

export const DateContainer = styled.div`
  grid-area: date;
`;

export const Footer = styled.div`
  grid-area: footer;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InputContainer = styled.div`
  grid-area: amount;
`;

export const ResultContainer = styled.div`
  grid-area: result;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ResultDescription = styled.div`
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.blueGray10};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResultMonthly = styled.div`
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
