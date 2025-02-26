
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Locator from '../../assests/Svg/Locator';
import Star from '../../assests/Svg/Start';

const Card = ({
  style,
  salonName = 'Hair Avenue',
  distance = '2 km',
  location = 'Moratuwa, Colombo',
  rating = '4.7 (312)'
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.contentWrapper}>
        <Image 
          source={require('../../assests/Images/Salon1.png')}
          style={styles.salonImage}
        />
        <View style={styles.infoContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.salonName}>{salonName}</Text>
            <Text style={styles.distance}>{distance}</Text>
          </View>
          
          <View style={styles.locationContainer}>
            <Locator style={styles.locationIcon}/>
            <Text style={styles.locationText}>{location}</Text>
          </View>

          <View style={styles.ratingContainer}>
            <Star  style={styles.starIcon}/>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    minWidth: 343,
    width: '100%',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  contentWrapper: {
    flexDirection: 'row',
    gap: 16,
  },
  salonImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 9,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salonName: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '550',
    color: '#0B0C15',
  },
  distance: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    color: '#939393',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  locationIcon: {
    width: 19,
    height: 19,
  },
  locationText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#939393',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  starIcon: {
    width: 18,
    height: 18,
  },
  ratingText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
});

export default Card;