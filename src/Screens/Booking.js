import React from 'react';
import {  StyleSheet, View } from 'react-native';
import TopBar from '../Components/CheckOut/TopBar';
import Card from '../Components/CheckOut/Card';
import BookingDetail from '../Components/CheckOut/BookingDetail';
import PaymentOption from '../Components/CheckOut/PaymentOption';
import PriceDetail from '../Components/CheckOut/PriceDetail';
import CustomStatusBar from '../Components/StatusBar';
import Button from '../Components/CustomButton';

const Booking = ( { navigation }) => {
  return (
    <View style={{
      flex: 1,
      width: '100%',
      padding: 16,
    }}>
        <CustomStatusBar 
          backgroundColor="#FFFFFF"  
          barStyle="dark-content"    
        />
      <TopBar style={{ height: 44, width: '100%' }} />
      <View style={{
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <Card style={{ width: '100%' }} />
        <BookingDetail style={{ width: '100%', marginBottom: 5 }} />
        <PaymentOption style={{ width: '100%',  }} />
        <PriceDetail style={{ width: '100%' }} />
      </View>
      <Button
       title={'Proceed'}
       style={styles.continueButton}
       textStyle={styles.continueButtonText}
       onPress={()=> navigation.navigate('Payment')}/>
        <View style={{ height: 4, backgroundColor: '#000',  borderRadius: 1 , width:'30%' , alignSelf:'center', bottom:-10 }} />
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
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
})