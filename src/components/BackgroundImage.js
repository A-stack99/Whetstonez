import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const getBackgroundImage = (condition) => {
  switch (condition) {
    case 'Clear': return require('../assests/images/sunny.jpg');
    case 'Clouds': return require('../assests/images/cloudy.jpg');
    case 'Rain': return require('../assests/images/rainy.jpg');
    case 'Snow': return require('../assests/images/snowy.jpg');
    default: return require('../assests/images/default.jpg');
  }
};

const BackgroundImage = ({ condition, children }) => {
  return (
    <ImageBackground source={getBackgroundImage(condition)} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default BackgroundImage;