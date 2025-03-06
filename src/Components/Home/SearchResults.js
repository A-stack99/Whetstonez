import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Locator from '../../assests/Svg/Locator';
import Star from '../../assests/Svg/Start';
import { useNavigation } from '@react-navigation/native';

const SearchResult = ({ result }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchResult}>
      <Image source={result.imageUrl} style={styles.resultImage} />
      <View style={styles.resultDetails}>
        <Text style={styles.resultName}>{result.salonName}</Text>
        <View style={styles.locationRow}>
          <Locator style={styles.Icon} />
          <Text style={styles.location}>{result.location}</Text>
        </View>
        <View style={styles.ratingRow}>
          <Star style={styles.Icon} />
          <Text style={styles.rating}>
            {result.rating}
            <Text style={{ color: '#939393' }}> ({result.reviews}) </Text>
          </Text>
        </View>
      </View>
      <Text style={styles.distance}>{result.distance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchResult: {
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 16,
    alignSelf: 'stretch',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  resultImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  resultDetails: {
    flex: 1,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0b0c15',
    fontFamily: 'Inter',
    top: -12,
    letterSpacing: 0.5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  Icon: {
    width: 18,
    height: 18,
    top: -11,
  },
  location: {
    color: '#939393',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 2,
    top: -10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  rating: {
    color: '#0B0C15',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
    top: -10,
  },
  distance: {
    position: 'absolute',
    top: 18,
    right: 18,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 12,
    color: '#939393',
  },
});

export default SearchResult;
