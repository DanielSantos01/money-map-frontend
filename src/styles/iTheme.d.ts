import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      onPrimary: string;
    
      secondary: string;
      onSecondary: string;
    
      surface: string;
      onSurface: string;

      primaryGray: string;
      placeholder: string;
    
      background: string;
      onBackground: string;
    
      primaryVariant: string;
      onPrimaryVariant: string;
    
      error: string;
      onError: string;
    };

    fonts: {
      raleway: {
        bold: string;
        semibold: string;
        regular: string;
        medium: string;
        thin: string;
      }
    };
  }
}
