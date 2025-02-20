import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const CustomInputField = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
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
      <Text
        style={[
          styles.inputLabel,
          (isFocused || inputValue) && styles.labelFocused,
        ]}
      >
        Your Name
      </Text>
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
    transition: 'all 0.3s ease',
  },
  inputFocused: {
    borderColor: '#007BFF',
    boxShadow: '0 0 8px rgba(0, 123, 255, 0.5)',
  },
  inputLabel: {
    position: 'absolute',
    top: 10,
    left: 20,
    fontSize: 14,
    color: '#999',
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
  },
  labelFocused: {
    top: -10,
    fontSize: 12,
    color: '#007BFF',
  },
});

export default CustomInputField;
