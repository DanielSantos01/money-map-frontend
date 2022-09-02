import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { moneyMapTheme } from './src/styles/theme';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={moneyMapTheme}>
      <View style={styles.container}>
        <Text>You are running MoneyMap!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
