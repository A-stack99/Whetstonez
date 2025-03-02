import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Back from '../../assests/Svg/Back';
import { useNavigation } from '@react-navigation/native';

const TopBar = ({ onBack = () => {}, title = "Booking summary", style }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity 
           onPress={() => navigation.goBack()}
          style={styles.iconButton}
        >
          <Back style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    top:-15
    // backgroundColor: '#ffffff',
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 24,
    color: '#0b0c15',
  },
});

export default TopBar;
