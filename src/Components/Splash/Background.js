import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';



const BackgroundImage = () => {
  return (
    <ImageBackground source={require('../../assests/Images/background.jpg')} style={styles.background}>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default BackgroundImage;