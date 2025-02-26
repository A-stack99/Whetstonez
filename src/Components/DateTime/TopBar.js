import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Back from '../../assests/Svg/Back';
import { useNavigation } from '@react-navigation/native';

const TopBar = ({ title = "Date and time" }) => {
  const navigation = useNavigation();
  return (
    <View style={{
      width: '100%',
      height: 50,
      flexDirection: 'row',
      // backgroundColor: '#fff',
      minWidth: 343, 
      top:-15
    }}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          paddingVertical: 10,
        }}
      >
        <Back   style={{
            width: 24,
            height: 24,
          }}/>
        <Text style={{
          fontSize: 16,
          fontWeight: '650',
          lineHeight: 24,
          color: '#0b0c15',
          fontFamily: 'Inter',
        }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
