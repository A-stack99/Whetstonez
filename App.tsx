import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './src/screens/Splash';
import WeatherAxios from './src/screens/WeatherAxios';
import WeatherApp from './src/screens/WeatherApp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeatherApp"
          component={WeatherApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeatherAxios" 
          component={WeatherAxios}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
