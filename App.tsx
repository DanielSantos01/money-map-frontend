import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { moneyMapTheme } from './src/styles/theme';
import Routes from './src/routes';

const App: React.FC = () => (
  <ThemeProvider theme={moneyMapTheme}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;

