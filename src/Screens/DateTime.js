import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TopBar from '../Components/DateTime/TopBar';
import DateSelection from '../Components/DateTime/DateSelection';
import TimeSelection from '../Components/DateTime/TimeSelection';
import CustomStatusBar from '../Components/StatusBar';
import Button from '../Components/CustomButton';

const DateTime = ({ navigation }) => {
  const [buttonColor, setButtonColor] = useState('#D3D3D3'); 

  const handleSelectionChange = () => {
    setButtonColor('#235AFF'); 
  };

  useEffect(() => {
    setButtonColor('#D3D3D3');
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <CustomStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <TopBar style={{ left: 10 }} />
      
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <DateSelection onChange={handleSelectionChange} />
        
        <Text style={styles.sectionHeading}>Select Time</Text>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <TimeSelection onChange={handleSelectionChange} />
        </ScrollView>
        
        <Button
          title="Confirm Appointment"
          style={[styles.continueButton, { backgroundColor: buttonColor }]}
          textStyle={styles.continueButtonText}
          onPress={() => navigation.navigate('Booking')}
        />
      </View>

      <View style={styles.bottomLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    borderRadius: 10,
    padding: 14,
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    bottom: -15,
  },
  continueButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0B0C15',
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 6,
  },
  bottomLine: {
    height: 4,
    backgroundColor: '#000',
    borderRadius: 1,
    width: '35%',
    alignSelf: 'center',
    bottom: -8,
  },
});

export default DateTime;
