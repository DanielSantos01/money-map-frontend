import React, { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { moneyMapTheme } from './src/styles/theme';
import Routes from './src/routes';
import { AuthProvider } from '@/hooks';

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'raleway-bold': require('./assets/fonts/raleway-bold.ttf'),
    'raleway-medium': require('./assets/fonts/raleway-medium.ttf'),
    'raleway-regular': require('./assets/fonts/raleway-regular.ttf'),
    'raleway-semibold': require('./assets/fonts/raleway-semibold.ttf'),
    'raleway-thin': require('./assets/fonts/raleway-thin.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if(!fontsLoaded) return;
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if(!fontsLoaded) return null;

  return (
    <ThemeProvider theme={moneyMapTheme}>
      <AuthProvider>
        <NavigationContainer>
          <StatusBar barStyle='light-content' backgroundColor="#121212" />
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

