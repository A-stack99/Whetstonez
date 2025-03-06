import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomStatusBar from '../Components/StatusBar';
import Button from '../Components/CustomButton';

const VerifyScreen = ({ phoneNumber = "071***05", navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleCodeChange = (text, index) => {
    const numericText = text.replace(/[^0-9]/g, ''); 
    const newCode = [...code];
    newCode[index] = numericText;
    setCode(newCode);

    if (numericText && index < 3) {
      inputs[index + 1].focus();
    }
  };

  const inputs = [];

  const validationSchema = Yup.object().shape({
    otp: Yup.array().of(Yup.string().length(1, 'Must be a single digit').required('OTP is required')),
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <CustomStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View style={styles.content}>
        <Text style={styles.title}>Verify Your Identity</Text>
        <Text style={styles.subtitle}>
          We've sent a 4-digit code to {phoneNumber}.{'\n'} Please enter it below.
        </Text>

        <Formik
          initialValues={{ otp: ['', '', '', ''] }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            navigation.navigate('Home');
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <>
              <View style={styles.otpContainer}>
                {[0, 1, 2, 3].map((index) => (
                  <View key={index} style={{ alignItems: 'center' }}>
                    <TextInput
                      ref={(input) => inputs[index] = input}
                      style={styles.otpInput}
                      maxLength={1}
                      keyboardType="numeric"
                      value={values.otp[index]}
                      onChangeText={(text) => {
                        handleCodeChange(text, index); 
                        handleChange(`otp[${index}]`)(text);
                      }}
                    />
                  </View>
                ))}
              </View>

              {touched.otp && errors.otp && (
                <Text style={styles.errorText}>{errors.otp[0]}</Text>
              )}

              <TouchableOpacity>
                <Text style={styles.resendText}>
                  Didn't receive a code? <Text style={styles.resendLink}>Resend</Text>
                </Text>
              </TouchableOpacity>

              <Button
                title={'Continue'}
                style={styles.continueButton}
                textStyle={styles.continueButtonText}
                onPress={handleSubmit}
                disabled={Object.values(errors).some((error) => error)}
              />
            </>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    paddingBottom: 24, 
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
    justifyContent: 'center',
    position:'static',
    marginTop: 450, 
  },
  continueButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default VerifyScreen;
