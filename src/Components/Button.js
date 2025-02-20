import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

// CustomButton Component
const CustomButton = ({
  onPress,
  title,
  backgroundColor = '#007BFF', // Default blue color
  textColor = 'white',
  borderRadius = 8,
  paddingVertical = 12,
  paddingHorizontal = 20,
  fontSize = 16,
  fontWeight = 'bold',
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderRadius, paddingVertical, paddingHorizontal }, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor, fontSize, fontWeight }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// Default styles for the button
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 150,
    height: 50,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default CustomButton;


/////////////////////////////


// usage 

{/* <CustomButton
title="Primary Button"
onPress={handlePress}
backgroundColor="#007BFF" // Blue background
textColor="white" // White text
borderRadius={8}
/> */}

{/* <CustomButton
title="Secondary Button"
onPress={handlePress}
backgroundColor="#f44336" // Red background
textColor="white"
borderRadius={8}
fontSize={18} // Larger font size
/> */}

{/* <CustomButton
title="Outline Button"
onPress={handlePress}
backgroundColor="transparent" // Transparent background for outline style
textColor="#007BFF" // Blue text color for outline
borderRadius={8}
fontSize={16}
borderWidth={2}
borderColor="#007BFF"
/> */}


//////////////////// Button with Icon //////////////////


// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Using Ionicons as an example

// const CustomButton = ({
//   onPress,
//   title,
//   backgroundColor = '#007BFF',
//   textColor = 'white',
//   borderRadius = 8,
//   paddingVertical = 12,
//   paddingHorizontal = 20,
//   fontSize = 16,
//   fontWeight = 'bold',
//   icon,
//   iconPosition = 'left', // 'left' or 'right'
//   iconSize = 20,
//   style,
// }) => {
//   return (
//     <TouchableOpacity
//       style={[styles.button, { backgroundColor, borderRadius, paddingVertical, paddingHorizontal }, style]}
//       onPress={onPress}
//     >
//       {icon && iconPosition === 'left' && (
//         <Ionicons name={icon} size={iconSize} color={textColor} style={styles.icon} />
//       )}
//       <Text style={[styles.buttonText, { color: textColor, fontSize, fontWeight }]}>
//         {title}
//       </Text>
//       {icon && iconPosition === 'right' && (
//         <Ionicons name={icon} size={iconSize} color={textColor} style={styles.icon} />
//       )}
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minWidth: 150,
//     height: 50,
//     marginVertical: 10,
//   },
//   buttonText: {
//     textAlign: 'center',
//   },
//   icon: {
//     marginRight: 8, // Default space for left icon
//   },
// });

// export default CustomButton;


//////////// Usage //////////////

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import CustomButton from './CustomButton'; // Assuming CustomButton is in the same directory

// const HomeScreen = () => {
//   const handlePress = () => {
//     alert('Button Pressed!');
//   };

//   return (
//     <View style={styles.container}>
//       <CustomButton
//         title="Next"
//         onPress={handlePress}
//         icon="arrow-forward" // Ionicons icon name
//         backgroundColor="#007BFF"
//         textColor="white"
//         iconPosition="left" // Icon appears on the left of the text
//       />

//       <CustomButton
//         title="Cancel"
//         onPress={handlePress}
//         icon="close" // Ionicons icon name
//         backgroundColor="#f44336"
//         textColor="white"
//         iconPosition="right" // Icon appears on the right of the text
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f4f4f9',
//   },
// });

// export default HomeScreen;

