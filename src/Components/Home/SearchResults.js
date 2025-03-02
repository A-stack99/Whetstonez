
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SearchResult = ({ result }) => {
  return (
    <View style={styles.searchResult}>
      <Image source={result.imageUrl} style={styles.resultImage} />
      <View>
        <Text style={styles.distance}>{result.distance} </Text>
        <Text style={styles.resultName}>{result.salonName}</Text>
        <Text style={styles.location}>{result.location}</Text>

        <Text style={styles.rating}>
          {result.rating}
          <Text style={{ color: '#939393' }}> ({result.reviews}) </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchResult: {
    padding: 8,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: '92%',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  resultImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0b0c15',
    fontFamily: 'Inter',
    top: -12,
    letterSpacing: 0.5,
  },
  location: {
    color: '#939393',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 2,
    top: -10,
  },
  distance: {
    color: '#939393',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    justifyContent: 'flex-end',
    left: 195,
    bottom: -8,
  },
  rating: {
    color: '#0B0C15',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
    top: -10,
  },
});

export default SearchResult;
