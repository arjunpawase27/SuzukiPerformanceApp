import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import SuzukiPostDetails from '../components/SuzukiPostDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PostDetails" component={SuzukiPostDetails} options={{
          title: 'Post Details', 
          headerStyle: {
            backgroundColor: 'transparent', 
          },
          headerTintColor: '#3498db', 
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
