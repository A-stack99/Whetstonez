import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity , TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Locator1 from '../../assests/Svg/Locator1';
import Notification from '../../assests/Svg/Notification';


const Header = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.locationContainer}>
        <Locator1 style={styles.locationIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.locationLabel}>Location</Text>
          <Text style={styles.locationText}>Lakewood, California</Text>
        </View>
        <Image 
          source={require('../../assests/Images/downArrow.png')}
          style={styles.dropdownIcon}
        />
      </View>
      
      <TouchableOpacity 
        style={styles.notificationButton}
      >
        <View style={styles.iconContainer}>
          <Image 
            source={require('../../assests/Images/bell.png')}
            style={styles.notificationIcon}
          />
          {/* <Notification style={styles.notificationIcon} /> */}
          {/* <View style={styles.notificationDot} /> */}
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 55,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
   
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationIcon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 4,
  },
  locationLabel: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#939393',
  },
  locationText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#0B0C15',
  },
  dropdownIcon: {
    width: 24,
    height: 24,
    top: 12,
    left: -8,
    // marginLeft: 8,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  notificationDot: {
    position: 'absolute',
    top: 1,
    right: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E74C3C',
  },

});


export default Header;
