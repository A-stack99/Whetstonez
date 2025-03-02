import React from 'react';

import Splash from './src/Screens/Splash';
import SignIn from './src/Screens/SignIn';
import VerifyScreen from './src/Screens/VerifyScreen';
import Home from './src/Screens/Home';
import SalonDetail from './src/Screens/SalonDetail';
import StylistSelect from './src/Screens/StylistSelect';
import DateTime from './src/Screens/DateTime';
import Booking from './src/Screens/Booking';
import Payment from './src/Screens/Payment';
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
            name="VerifyScreen"
            component={VerifyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
           name='Home'
           component={Home}
            options={{ headerShown: false }}
          />
             <Stack.Screen
           name='SalonDetail'
           component={SalonDetail}
            options={{ headerShown: false }}
          />
             <Stack.Screen
           name='StylistSelect'
           component={StylistSelect}
            options={{ headerShown: false }}
          />
             <Stack.Screen
           name='DateTime'
           component={DateTime}
            options={{ headerShown: false }}
          />
              <Stack.Screen
           name='Booking'
           component={Booking}
            options={{ headerShown: false }}
          />
              <Stack.Screen
           name='Payment'
           component={Payment}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;


// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './src/Redux/Store';
// import Home from './src/Screens/AddToCart';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Home />
//     </Provider>
//   );
// };

// export default App;


