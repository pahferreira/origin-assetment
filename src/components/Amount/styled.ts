// Libraries
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  height: 56px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  margin-right: 8px;
  position: absolute;
`;

export const InputNumber = styled(NumberFormat)`
  height: 100%;
  flex-grow: 1;
  padding: 16px;
  padding-left: 44px;
  border: none;
  z-index: 1;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.desktop.h3};
  color: ${({ theme }) => theme.colors.blueGray600};
`;
