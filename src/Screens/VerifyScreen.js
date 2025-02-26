import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import CustomStatusBar from '../Components/StatusBar';
import Button from '../Components/CustomButton';
const VerifyScreen = ({ phoneNumber = "071***05", onResend = () => {} , navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    
    if (text && index < 3) {
      inputs[index + 1].focus();
    }
  };

  const inputs = [];

  return (
    <View style={styles.container}>
      <CustomStatusBar 
          backgroundColor="#FFFFFF"  
          barStyle="dark-content"    
        />
      
      <View style={styles.content}>
        <Text style={styles.title}>Verify Your Identity</Text>
        <Text style={styles.subtitle}>
          We've sent a 4-digit code to {phoneNumber}.{'\n'} Please enter it below.
        </Text>

        <View style={styles.otpContainer}>
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              ref={(input) => inputs[index] = input}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              value={code[index]}
              onChangeText={(text) => handleCodeChange(text, index)}
            />
          ))}
        </View>

        <TouchableOpacity onPress={onResend}>
          <Text style={styles.resendText}>
            Didn't receive a code? <Text style={styles.resendLink}>Resend</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <Button
      title={'Continue'}
      style={styles.continueButton}
      textStyle={styles.continueButtonText}
      onPress={()=> navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
    color: '#0B0C15',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#939393',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 17,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 24,
  },
  otpInput: {
    width: 50,
    height: 55,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  resendText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#9D9EA6',
    marginTop: 24,
    textAlign: 'center',
  },
  resendLink: {
    color: '#235AFF',
  },
  continueButton: {
    backgroundColor: '#235AFF',
    borderRadius: 10,
    padding: 14,
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    bottom: -2,
  },
  continueButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default VerifyScreen;