import React, { useEffect, useState } from 'react';
import { View, TextInput, ActivityIndicator, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import WeatherDisplay from '../components/WeatherDisplay';
import BackgroundImage from '../components/BackgroundImage';
import { FetchGetRequest } from '../components/fetAPIrequest';
import Button from '../components/Button';


const Splash = () => {
  const [weather, setWeather] = useState(null);


  
  return (
    <BackgroundImage condition={weather?.weather[0]?.main || 'Default'}>
      <View style={styles.container}>
      <Button
            title="Check Weather"
            onPress={() => navigation.navigate('WeatherApp')}
            style={styles.signupButton}
            textStyle={{color: '#3C3B43'}}
          />
      
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 10 , width:'400'},
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: 'red', marginTop: 10 },
});

export default Splash;
