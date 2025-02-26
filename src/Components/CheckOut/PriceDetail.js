import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PriceDetail = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Pricing Details</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.serviceText}>Hair Cut</Text>
          <Text style={styles.priceText}>$10.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serviceText}>Hair Wash</Text>
          <Text style={styles.priceText}>$5.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serviceText}>Discount</Text>
          <Text style={styles.priceText}>$3.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>$12.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 343,
    backgroundColor: 'transparent',
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#0B0C15',
    marginBottom: 12,
  },
  detailsContainer: {
    gap: 10,
    flexDirection: 'column',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '450',
    color: '#939393',
  },
  priceText: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '450',
    color: '#939393',
  },
  totalRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#0B0C15',
  },
  totalAmount: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#0B0C15',
  },
});



export default PriceDetail;
