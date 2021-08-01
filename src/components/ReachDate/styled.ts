// Libraries
import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: transparent;
  width: fit-content;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 6px 20px;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.img`
  width: 8px;
  height: 14px;
`;

export const Month = styled.p`
  font-size: ${({ theme }) => theme.fontSize.desktop.h4};
  color: ${({ theme }) => theme.colors.blueGray900};
  line-height: 150%;
  margin: 0;
  font-family: 'Work Sans';
  font-weight: 600;
`;

export const Year = styled.p`
  font-size: ${({ theme }) => theme.fontSize.desktop.h4};
  color: ${({ theme }) => theme.colors.blueGray400};
  line-height: 150%;
  margin: 0;
  font-family: 'Work Sans';
  font-weight: 400;
`;
