import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Locator from '../../assests/Svg/Locator';
import Clock from '../../assests/Svg/Clock';
import Star from '../../assests/Svg/Start';

const Avenue = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Hair Avenue</Text>

    
      <View style={styles.row}>
        <Locator style={styles.icon} />
        <Text style={styles.subtitle}>No 03, Kadalana Road, Kadolana, Moratuwa</Text>
      </View>

      <View style={styles.row}>
        <Clock style={styles.icon} />
        <Text style={styles.subtitle1}>9AM - 10PM, Mon - Sun</Text>
      </View>

      <View style={styles.row}>
        <Star style={styles.icon} />
        <Text style={styles.subtitle1}>4.7 (312)</Text>
      </View>

      <Text style={styles.description}>
        Hair Avenue provides expert haircuts, styling, along with services like facials, cleanups, skincare, and makeup to keep you looking your best.
      </Text>
    </View>
  );
};

export default Avenue;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    fontFamily: 'Inter',
    lineHeight: 26,
    color: '#0B0C15',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: 'Inter',
    lineHeight: 16,
    color: '#939393',
    marginBottom: 5,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: 'Inter',
    lineHeight: 16,
    color: '#939393',
    marginBottom: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,  
    top: -3,
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 8,
  },
  description: {
    margin: 5,
    color: "#939393",
    fontSize: 14,
    fontWeight:'500',
    lineHeight: 22,
    fontFamily: 'Inter',
  }
});
