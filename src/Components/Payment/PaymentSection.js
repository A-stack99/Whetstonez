import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Master from '../../assests/Svg/Master';
import Visa from '../../assests/Svg/Visa';
import Vector from '../../assests/Svg/Vector';
import ApplePay from '../../assests/Svg/ApplePay';
import GooglePay from '../../assests/Svg/GooglePay';

const PaymentSection = ({ style }) => {
  const [selectedMethod, setSelectedMethod] = useState('card1');

  const RadioButton = ({ selected }) => (
    <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
      {selected && <View style={styles.radioButtonInner} />}
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <View style={styles.header}>
            <RadioButton selected={selectedMethod === 'card1'} />
            <Text style={styles.headerText}>Credit/ Debit Card</Text>
          </View>
          <View style={styles.cardList}>
            <TouchableOpacity 
              style={styles.cardItem}
              onPress={() => setSelectedMethod('card1')}
            >
              <View style={styles.cardDetails}>
                <Master style={styles.cardMaster} />
                <Text style={styles.cardNumber}>**** 2345</Text>
              </View>
              <RadioButton selected={selectedMethod === 'card1'} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.cardItem}
              onPress={() => setSelectedMethod('card2')}
            >
              <View style={styles.cardDetails}>
                <Visa style={styles.cardVisa } />
                <Text style={styles.cardNumber}>**** 3456</Text>
              </View>
              <RadioButton selected={selectedMethod === 'card2'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addCardButton}>
              <Vector  style={styles.addIcon} />
              <Text style={styles.addCardText}>Add Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.section}
        onPress={() => setSelectedMethod('applePay')}
      >
        <View style={styles.paymentOption}>
          <RadioButton selected={selectedMethod === 'applePay'} />
          <View style={styles.paymentOptionContent}>
            <Text style={styles.paymentText}>Apple Pay</Text>
            <ApplePay  style={styles.paymentLogo} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.section}
        onPress={() => setSelectedMethod('googlePay')}
      >
        <View style={styles.paymentOption}>
          <RadioButton selected={selectedMethod === 'googlePay'} />
          <View style={styles.paymentOptionContent}>
            <Text style={styles.paymentText}>Google Pay</Text>
            <GooglePay  style={styles.paymentLogo} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 343,
    gap: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    marginBottom: 16,
  },
  sectionContent: {
    gap: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  cardList: {
    gap: 12,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardMaster:{
      width: 70,
      height: 30,
      top:5
  },
  cardVisa: {
    width: 70,
    height: 50,
    left:-30,
    top:-15
  },
  cardNumber: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    marginLeft: -18,
    top:-4,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addIcon: {
    width: 24,
    height: 24,
    top: 5,
  },
  addCardText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#235AFF',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentOptionContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
  },
  paymentText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '650',
    color: '#000000',
  },
  paymentLogo: {
    width: 90,
    height: 50,
    top: -10,
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
    borderColor: '#235AFF',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#235AFF',
  },
});

export default PaymentSection;