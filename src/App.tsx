// Libraries
import { GlobalStyle, theme } from 'lib/styled-components/theme';
import { ThemeProvider } from 'styled-components';

// Assets
import LogoPNG from 'assets/images/logo.png';

// Custom
import Header from 'components/Header';
import Home from 'pages/Home';

export function App(): JSX.Element {
  return (
    <main data-testid="main">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header logoUrl={LogoPNG} />
        <Home />
      </ThemeProvider>
    </main>
  );
}
