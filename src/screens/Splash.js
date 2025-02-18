import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Button from '../components/Button';

const Splash = ({ navigation }) => {
  const [weather, setWeather] = useState(null);

  return (
    <BackgroundImage condition={weather?.weather[0]?.main || 'Default'}>
      <View style={styles.container}>
        <Button title="WeatherApp" onPress={() => navigation.navigate('WeatherApp')} />
        <Button title="WeatherAxios" onPress={() => navigation.navigate('WeatherAxios')} />
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    width: '80%',
    height: '40%',
  },
});

export default Splash;
