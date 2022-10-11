import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, Login, Register, Home, Configuration, Add } from '../screens';

const Stack = createNativeStackNavigator();

const SignInRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Configuration" component={Configuration} />
    <Stack.Screen name="Add" component={Add} />
  </Stack.Navigator>
);

export default SignInRoutes;