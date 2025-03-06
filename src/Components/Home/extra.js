import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Locator from '../../assests/Svg/Locator';
import Star from '../../assests/Svg/Start';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Action/Action';

const ServiceItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = (item) => {
    console.log('Add to Cart', item);
    dispatch(addToCart(item)); // Dispatching the addToCart action
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('SalonDetail', { salonId: item.id })} // Example passing item.id to navigate
      >
        <View style={styles.container}>
          <Image source={item.imageUrl} style={styles.salonImage} resizeMode="contain" />
          <View style={styles.infoContainer}>
            <View style={styles.headerRow}>
              <Text style={styles.salonName}>{item.salonName}</Text>
              <Text style={styles.distance}>{item.distance}</Text>
            </View>

            <View style={styles.locationRow}>
              <Locator style={styles.locationIcon} />
              <Text style={styles.locationText}>{item.location}</Text>
            </View>

            <View style={styles.ratingRow}>
              <Star style={styles.starIcon} />
              <Text style={styles.ratingText}>
                <Text style={styles.rating}>{item.rating}</Text> ({item.reviews})
              </Text>
            </View>

            <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 12,
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
  addToCartButton: {
    marginTop: 10,
    backgroundColor: '#235aff',
    padding: 8,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ServiceItem;
