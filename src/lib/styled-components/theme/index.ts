// Libraries
import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    blueGray10: '#F4F8FA',
    blueGray100: '#CBD5DC',
    blueGray400: '#708797',
    blueGray600: '#4D6475',
    blueGray900: '#1E2A32',
    primary: '#1B31A8',
    secondary: '#0079FF',
    white: '#fff',
  },
  fontSize: {
    desktop: {
      h1: '32px',
      h2: '24px',
      h3: '20px',
      h4: '16px',
      h5: '14px',
      p: '12px',
    },
    mobile: {
      h1: '24px',
      h2: '20px',
      h3: '18px',
      h4: '14px',
      h5: '12px',
      p: '12px',
    },
  },
};

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background-color: #F4F8FA;
  min-height: 100vh;
  width: 100%;
}
`;
