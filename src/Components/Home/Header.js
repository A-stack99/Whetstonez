import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Header = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={styles.container}>
    <View style={styles.headerText}>
  <View style={styles.locationContainer}>
    <Image
      source={require('../../assests/Images/locator.png')}  
      style={styles.locationIcon}
    />
    <View>
      <Text style={styles.location}>Location</Text>
      <Text style={styles.locationText}>
        Lakewood, California
        <Image
          source={require('../../assests/Images/downArrow.png')}
          style={{marginLeft: 20, width: 20, height: 20}}
        />
      </Text>
    </View>
  </View>
  <TouchableOpacity>
    <Image
      source={require('../../assests/Images/bell.png')}
      style={styles.bell}
    />
  </TouchableOpacity>
</View>

      <View style={styles.searchContainer}>
        <TouchableOpacity style={{marginLeft: 20}}>
          <Image
            source={require('../../assests/Images/search.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter address or city name"
          placeholderTextColor="#A0A0A0"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { backgroundColor: '#ffffff', marginBottom:10  },
   
        headerText: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        },
        locationContainer: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        locationIcon: {
          width: 25,
          height: 25,
          marginRight: 10, 
        },
        location: {
          fontSize: 14,
          fontWeight: '600',
          color: '#939393',
        },
        locationText: {
          fontSize: 16,
          fontWeight:'600',
          color: '#0B0C15',
          flexDirection: 'row',
          alignItems: 'center',
        },
        bell: {
          width: 25,
          height: 25,
        }, 
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    width: '90%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    marginLeft: 18,
    marginBottom:18
  },
  searchInput: {flex: 1, marginLeft: 15, color: '#ffffff', height: 80},
  filterButton: {
    backgroundColor: '#C67C4E',
    padding: 10,
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  icon: {width: 25, height: 25},
});

export default Header;
