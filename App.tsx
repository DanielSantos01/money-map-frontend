import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { moneyMapTheme } from './src/styles/theme';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

const App: React.FC = () => (
  <ThemeProvider theme={moneyMapTheme}>
    <NavigationContainer>
      <StatusBar translucent barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;

