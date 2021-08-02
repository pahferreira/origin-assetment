// Libraries
import styled from 'styled-components';

type TypographyProps = {
  margin?: boolean;
};

export const Description = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.desktop.h4};
  color: ${({ theme }) => theme.colors.blueGray400};
  line-height: 150%;
  margin: 0;
  font-family: 'Work Sans';
  font-weight: 400;
`;

export const Label = styled.h5`
  font-family: 'Work Sans';
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.desktop.h5};
  color: ${({ theme }) => theme.colors.blueGray900};
  line-height: 150%;
  margin: 0 0 4px;
`;

export const Number = styled.h1`
  margin: 0;
  font-family: 'Rubik';
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.desktop.h1};
  line-height: 120%;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Subtitle = styled.h3<TypographyProps>`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blueGray900};
  font-size: ${({ theme }) => theme.fontSize.desktop.h3};
  line-height: 120%;
  margin: ${({ margin }) => (margin ? '24px' : '0')};
`;

export const Text = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.desktop.p};
  line-height: 133%;
  font-weight: 400;
  font-family: 'Work Sans';
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.desktop.h2};
  color: ${({ theme }) => theme.colors.blueGray900};
  line-height: 120%;
  font-family: 'Rubik';
  margin: 0;
`;
