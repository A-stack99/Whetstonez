import React from 'react';
import { StatusBar, Platform } from 'react-native';

// Custom StatusBar Component
const CustomStatusBar = ({ backgroundColor, barStyle, hidden = false }) => {
  return (
    <StatusBar
      barStyle={barStyle || 'dark-content'} // 'light-content' for light text, 'dark-content' for dark text
      backgroundColor={backgroundColor || '#007BFF'} // Custom background color (default is blue)
      translucent={Platform.OS === 'ios' ? true : false} // For iOS, you might want a translucent status bar
      hidden={hidden} // To hide the status bar (useful for full-screen apps)
    />
  );
};

export default CustomStatusBar;



/////////////////////////////


// const HomeScreen = () => {
//     return (
//       <View style={styles.container}>
//         {/* Custom StatusBar */}
//         <CustomStatusBar 
//           backgroundColor="#007BFF"  // Background color for the status bar
//           barStyle="light-content"    // Dark content for light background, light-content for dark background
//         />
        
//         <Text style={styles.text}>Welcome to the Home Screen!</Text>
//       </View>
//     );
//   };

///////////////////////



{/* <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    header: () => (
      <>
        {/* Custom StatusBar for Home Screen */}
    //     <CustomStatusBar
    //       backgroundColor="#007BFF" 
    //       barStyle="light-content" 
    //     />
    //   </>
//     ),
//   }}
// /> */}


////////////////////

// for more Advance Usage



// const SettingsScreen = () => {
//     const navigation = useNavigation();
  
//     useLayoutEffect(() => {
//       navigation.setOptions({
//         header: () => (
//           <>
//             {/* Custom StatusBar */}
//             <CustomStatusBar
//               backgroundColor="#f44336"
//               barStyle="light-content"
//             />
//           </>
//         ),
//       });
//     }, [navigation]);
  
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Settings Screen</Text>
//       </View>
//     );
//   };