import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';
import Counter from './src/Screens/Counter';
import Home from './src/Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Counter"
            component={Counter}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;


