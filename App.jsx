import React from 'react';
// import Store from './src/Redux/Store';
// import Counter from './src/Screens/Counter';
import Splash from './src/Screens/Splash';
import SignIn from './src/Screens/SignIn';
import Home from './src/Screens/Home';
import SalonDetail from './src/Screens/SalonDetail';
import VerificationOTP from './src/Screens/VerifyScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" > 
         <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VerificationOTP"
            component={VerificationOTP}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
             <Stack.Screen
           name='SalonDetail'
           component={SalonDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;


