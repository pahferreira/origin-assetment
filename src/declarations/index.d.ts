// Typescript Declarations
import * as styledModule from 'styled-components';

type Fonts = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  p: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blueGray10: string;
      blueGray100: string;
      blueGray400: string;
      blueGray600: string;
      blueGray900: string;
      border: string;
      primary: string;
      secondary: string;
      white: string;
    };
    fontSize: {
      desktop: Fonts;
      mobile: Fonts;
    };
  }
  export const styled = styledModule;
}
