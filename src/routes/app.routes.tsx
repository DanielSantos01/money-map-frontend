import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens';
import { Configuration, Add } from '../screens';

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Configuration" component={Configuration} />
    <Stack.Screen name="Add" component={Add} />
  </Stack.Navigator>
);

export default AppRoutes;
