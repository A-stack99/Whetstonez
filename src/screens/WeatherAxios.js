import React, { useEffect, useState } from 'react';
import { View, TextInput, ActivityIndicator, StyleSheet, Text } from 'react-native';
import WeatherDisplay from '../components/WeatherDisplay';
import BackgroundImage from '../components/BackgroundImage';
import Button from '../components/Button';
import { AxiosGetRequest } from '../components/AxiousAPI';

const WeatherAxios = ({ navigation }) => {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await AxiosGetRequest(city); 
      setWeather(res.data);
    } catch (error) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackgroundImage condition={weather?.weather[0]?.main || 'Default'}>
      <View style={styles.container}>
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholder="Enter city"
          style={styles.input}
        />
        <Button title="Get Weather" onPress={getWeather} />
        {loading && <ActivityIndicator size="large" color="blue" />}
        {error && <Text style={styles.error}>{error}</Text>}
        <WeatherDisplay weather={weather} />
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    width: '70%',
    height: '40%',
  },
  input: {
    borderWidth: 0.4,
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default WeatherAxios;
