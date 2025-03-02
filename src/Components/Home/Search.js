
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Search from '../../assests/Svg/Search';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <Search style={styles.searchIcon} />
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        keyboardAppearance="default"
        placeholder="Enter address or city name"
        placeholderTextColor="#a0a0a0"
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 24,
    marginTop: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#000000',
  },
});

export default SearchBar;
