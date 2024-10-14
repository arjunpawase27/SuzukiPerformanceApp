import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SuzukiPostDetails from '../components/SuzukiPostDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SuzukiPostDetails" component={SuzukiPostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
