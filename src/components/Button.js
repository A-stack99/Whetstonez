import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    width:'80%',
    height:'60',
    justifyContent:'center',
    left:25,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'poppins',
  },
  
});

export default Button;