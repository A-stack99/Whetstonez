import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import TopBar from '../Components/Payment/TopBar';
import Button from '../Components/Payment/Button';
import PaymentSection from '../Components/Payment/PaymentSection';
import CustomStatusBar from '../Components/StatusBar';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
          <CustomStatusBar 
          backgroundColor="#FFFFFF"  
          barStyle="dark-content"    
        />
      <TopBar style={styles.appBar} />
      <View style={styles.paymentMethodContainer}>
        <PaymentSection style={styles.paymentMethodSelection} />
      </View>
      <Button style={styles.primaryButton} />
       <View style={{ height: 4, backgroundColor: '#000', marginBottom: 10, borderRadius: 1 , width:'30%' , alignSelf:'center', bottom:-2 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100vh',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  appBar: {
    width: '100%',
    height: 44,
  },
  paymentMethodContainer: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  paymentMethodSelection: {
    width: '100%',
    height: 'auto',
  },
  primaryButton: {
    width: '90%',
    height: 48,
    marginBottom: 5,
  },
});

export default PaymentScreen;