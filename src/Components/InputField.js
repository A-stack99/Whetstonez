import React, { useState } from 'react';
import { View, TextInput, Text, Animated, StyleSheet } from 'react-native';

const CustomInputField = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const labelPosition = useState(new Animated.Value(10))[0]; // Initial label position

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(labelPosition, {
      toValue: -10, // Move the label up
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!inputValue) {
      Animated.timing(labelPosition, {
        toValue: 10, // Reset the label position
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.inputField,
          isFocused || inputValue ? styles.inputFocused : null,
        ]}
        placeholder=""
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChange}
      />
      <Animated.Text
        style={[
          styles.inputLabel,
          {
            top: labelPosition,
            fontSize: isFocused || inputValue ? 12 : 14,
            color: isFocused || inputValue ? '#007BFF' : '#999',
          },
        ]}
      >
        Your Name
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: 300,
  },
  inputField: {
    width: '100%',
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  inputFocused: {
    borderColor: '#007BFF',
    boxShadow: '0 0 8px rgba(0, 123, 255, 0.5)',
  },
  inputLabel: {
    position: 'absolute',
    left: 20,
    fontSize: 14,
    color: '#999',
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
  },
});

export default CustomInputField;
