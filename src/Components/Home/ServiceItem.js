import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Locator from '../../assests/Svg/Locator';
import Star from '../../assests/Svg/Start';
import { useNavigation } from '@react-navigation/native';

const ServiceItem = ({
  salonName = 'Hair Avenue',
  location = 'Lakewood, California',
  distance = '2 km',
  rating = '4.7',
  reviews = '312',
  imageUrl = require('../../assests/Images/Salon1.png'),
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SalonDetail')}>
        <View style={styles.container}>
          <Image source={imageUrl} style={styles.salonImage} resizeMode="contain" />
          <View style={styles.infoContainer}>
            <View style={styles.headerRow}>
              <Text style={styles.salonName}>{salonName}</Text>
              <Text style={styles.distance}>{distance}</Text>
            </View>

            <View style={styles.locationRow}>
              <Locator style={styles.locationIcon} />
              <Text style={styles.locationText}>{location}</Text>
            </View>

            <View style={styles.ratingRow}>
              <Star style={styles.starIcon} />
              <Text style={styles.ratingText}>
                <Text style={styles.rating}>{rating}</Text> ({reviews})
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    // backgroundColor:'#000',
    borderRadius: 10,
    width: '92%',
    marginBottom: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // left:-20
  },
  container: {
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
    gap: 8,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salonName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0b0c15',
    fontFamily: 'Inter',
  },
  distance: {
    fontSize: 12,
    fontWeight: '500',
    color: '#939393',
    fontFamily: 'Inter',
    left: -10,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationIcon: {
    width: 18,
    height: 18,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#939393',
    fontFamily: 'Inter',
    marginLeft: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontWeight: 'bold',
    color: '#0b0c15',
  },
  reviews: {
    color: '#888',
    marginLeft: -4,
  },
  starIcon: {
    width: 18,
    height: 18,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Inter',
    marginLeft: 4,
  },
});

export default ServiceItem;
