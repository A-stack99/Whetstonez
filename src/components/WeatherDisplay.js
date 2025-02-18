import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherIcon from './WeatherIcon';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <View style={styles.container}>
      {weather.weather && weather.weather[0] && <WeatherIcon condition={weather.weather[0].main} />}
      <Text style={styles.city}>{weather.name}</Text>
      {weather.main && <Text>Temperature: {weather.main.temp}°C</Text>}
      {weather.main && <Text>Humidity: {weather.main.humidity}%</Text>}
      {weather.weather && weather.weather[0] && <Text>Weather: {weather.weather[0].description}</Text>}
    </View>

  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 20 },
  city: { fontSize: 24, fontWeight: 'bold' },
});

export default WeatherDisplay;