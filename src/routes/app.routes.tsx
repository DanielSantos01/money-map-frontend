import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Configuration, Add, Summary} from '../screens';

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Configuration" component={Configuration} />
    <Stack.Screen name="Add" component={Add} />
    <Stack.Screen name="Summary" component={Summary} />
  </Stack.Navigator>
);

export default AppRoutes;
