import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingDetail = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Booking details</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailGroup}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>Wed, Sep 10 at 9:30 AM</Text>
        </View>
        <View style={styles.detailGroup}>
          <Text style={styles.label}>Stylist</Text>
          <Text style={styles.value}>Any stylist - 40 Mins</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 328,
    flexDirection: 'column',
    marginTop:15
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22.4,
    color: '#0B0C15',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  detailGroup: {
    flexDirection: 'column',
    gap: 4,
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '650',
    color: '#0B0C15',
  },
  value: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '450',
    color: '#939393',
  },
});

BookingDetail.defaultProps = {
  style: {},
};

export default BookingDetail;