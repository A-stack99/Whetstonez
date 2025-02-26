import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Back from '../../assests/Svg/Back';
import { useNavigation } from '@react-navigation/native';

const TopBar = ({ title = "Select payment method" }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity 
           onPress={() => navigation.goBack()}
          style={styles.iconButton}
        >
            <Back style={styles.icon}/>
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
    // backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#0b0c15',
    marginLeft: 8,
  },
});

export default TopBar;