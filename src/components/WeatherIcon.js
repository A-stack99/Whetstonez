import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const getWeatherIcon = (condition) => {
  switch (condition) {
    case 'Clear': return 'weather-sunny';
    case 'Clouds': return 'weather-cloudy';
    case 'Rain': return 'weather-rainy';
    case 'Snow': return 'weather-snowy';
    default: return 'weather-cloudy';
  }
};

const WeatherIcon = ({ condition, size = 50, color = 'blue' }) => {
  return <Icon name={getWeatherIcon(condition)} size={size} color={color} />;
};

export default WeatherIcon;