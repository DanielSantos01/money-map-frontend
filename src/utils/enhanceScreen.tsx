import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { moneyMapTheme } from '../styles/theme';

export const enhanceScreen = (Screen: React.FC): JSX.Element => (
  <ThemeProvider theme={moneyMapTheme}>
    <NavigationContainer>
      <Screen />
    </NavigationContainer>
  </ThemeProvider>
);
