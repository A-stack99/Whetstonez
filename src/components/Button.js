import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ getWeather, title }) => (
  <View style={{ width: '60%', alignSelf: 'center', marginTop: 10 }}>
    <TouchableOpacity style={styles.button} onPress={getWeather}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B13B46',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
