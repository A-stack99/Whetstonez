import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
  );
};


const styles = {
 
};

export default Button;
