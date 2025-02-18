import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const WeatherButtons = ({ weather, postWeatherData, putWeatherData, deleteWeatherData }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Save Weather Data" onPress={() => postWeatherData(weather)} style={styles.button} />
      {weather && <Button title="Update Weather Data" onPress={() => putWeatherData(weather)} style={styles.button} />}
      {weather && <Button title="Delete Weather Data" onPress={() => deleteWeatherData(weather.id)} style={styles.button} />}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column', // Makes buttons stack vertically
    justifyContent: 'center', // Centers buttons vertically in the container
    alignItems: 'center', // Centers buttons horizontally in the container
    margin: 10, // Adjusts margin for overall spacing
  },
  button: {
    width: '80%', // Controls button width (you can tweak this)
    marginBottom: 10, // Adds space between buttons
  },
});

export default WeatherButtons;
