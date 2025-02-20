import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library (e.g., React Native Vector Icons)
import { Header } from '@react-navigation/elements';

const CustomHeader = ({ title, onBackPress, onRightPress, rightIcon, rightText }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Back Button (optional) */}
      {onBackPress && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}

      {/* Title */}
      <Text style={styles.headerTitle}>{title}</Text>

      {/* Right-side Action Button (optional) */}
      {onRightPress && (
        <TouchableOpacity style={styles.rightButton} onPress={onRightPress}>
          {rightIcon ? (
            <Ionicons name={rightIcon} size={24} color="white" />
          ) : (
            <Text style={styles.rightButtonText}>{rightText}</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Account for status bar on iOS
    paddingHorizontal: 15,
    backgroundColor: '#007BFF', // Custom header color
    height: 60,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightButton: {
    padding: 5,
  },
  rightButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CustomHeader;


////////////////////////////////


// Ussge of Header


// import React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import CustomHeader from './CustomHeader'; // Assuming the CustomHeader component is in the same folder

// const SomeScreen = ({ navigation }) => {
//   const handleBackPress = () => {
//     navigation.goBack(); // This can be customized based on your navigation needs
//   };

//   const handleRightPress = () => {
//     alert('Right button pressed!');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Custom Header */}
//       <CustomHeader
//         title="Screen Title"
//         onBackPress={handleBackPress}
//         onRightPress={handleRightPress}
//         rightIcon="settings" // Optional: use an icon (Ionicons)
//         // rightText="Done" // Optional: use text if you prefer a text button
//       />

//       {/* Screen Content */}
//       <View style={styles.content}>
//         <Text>Content goes here</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f9',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default SomeScreen;


{/* <Stack.Screen
name="SomeScreen"
component={SomeScreen}
options={{
  header: (props) => <CustomHeader {...props} title="Custom Screen Title" />,
}}/> */}