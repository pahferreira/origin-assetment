// Libraries
import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 18px;
  height: 56px;
  width: 320px;
  font-weight: 600;
  font-family: 'Work Sans';
  color: ${({ theme }) => theme.colors.white};
  line-height: 125%;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: contrast(120%);
  }
`;
