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
    
      background: string;
      onBackground: string;
    
      primaryVariant: string;
      onPrimaryVariant: string;
    
      error: string;
      onError: string;
    }
  }
}
