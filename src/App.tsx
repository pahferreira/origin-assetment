// Libraries
import { GlobalStyle, theme } from 'lib/styled-components/theme';
import { ThemeProvider } from 'styled-components';

// Assets
import LogoPNG from 'assets/images/logo.png';

// Custom
import Header from 'components/Header';

export function App(): JSX.Element {
  return (
    <div data-testid="greetings-container">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header logoUrl={LogoPNG} />
      </ThemeProvider>
    </div>
  );
}
