import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentOption = ({ style }) => {
  const [selectedOption, setSelectedOption] = useState('online');

  const RadioButton = ({ selected }) => (
    <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
      {selected && <View style={styles.radioButtonInner} />}
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Payment</Text>
      
      <View style={styles.optionsContainer}>
    
        <TouchableOpacity 
          style={styles.optionRow}
          onPress={() => setSelectedOption('online')}
        >
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Pay Online Now</Text>
            <Text style={styles.optionDescription}>Secure your booking instantly</Text>
          </View>
          <RadioButton selected={selectedOption === 'online'} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.optionRow}
          onPress={() => setSelectedOption('salon')}
        >
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Pay at Salon</Text>
            <Text style={styles.optionDescription}>Settle payment after your appointment</Text>
          </View>
          <RadioButton selected={selectedOption === 'salon'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 328,
    paddingVertical: 16,
    gap: 10,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    color: '#0B0C15',
  },
  optionsContainer: {
    gap: 12,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5,
  },
  optionContent: {
    flex: 1,
    gap: 2,
  },
  optionTitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '450',
    color: '#0B0C15',
  },
  optionDescription: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '450',
    color: '#939393',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#636366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#007AFF',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
});

export default PaymentOption;