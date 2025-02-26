import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Calender from '../../assests/Svg/Calender';

const DateSelection = ({ dates = [
  { day: 'TUE', date: 'Sep 9', duration: '40 mins', selected: false },
  { day: 'TUE', date: 'Sep 10', duration: '40 mins', selected: false },
  { day: 'THU', date: 'Sep 11', duration: '40 mins', selected: false },
  { isMoreDates: true }
] }) => {

  const renderDateBox = (item, index) => {
    if (item.isMoreDates) {
      return (
        <TouchableOpacity 
          key={`date-${index}`}
          style={{
            width: 70,
            // padding: 12,
            borderRadius: 6,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={{ gap: 4, alignItems: 'center' }}>
            <Calender style={{ width: 24, height: 24 }}/>
            <Text style={{ 
              fontFamily: 'Inter',
              fontSize: 14,
              fontWeight: '500',
              color: '#0B0C15',
              textAlign: 'center',
              lineHeight: 19.6
            }}>
              More dates
            </Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        key={`date-${index}`}
        style={{
          width: 70,
          padding: 12,
          borderRadius: 6,
          backgroundColor: item.selected ? '#235AFF0A' : '#fff',
          borderWidth: item.selected ? 1 : 0,
          borderColor: item.selected ? '#235AFF' : 'transparent',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={{ gap: 4, alignItems: 'center' }}>
          <Text style={{
            fontFamily: 'Inter',
            fontSize: 14,
            fontWeight: '600',
            color: item.selected ? '#235AFF' : '#939393',
            textAlign: 'center',
            lineHeight: 19.6
          }}>
            {item.day}
          </Text>
          <Text style={{
            fontFamily: 'Inter',
            fontSize: 14,
            fontWeight: '500',
            color: item.selected ? '#235AFF' : '#0B0C15',
            textAlign: 'center',
            lineHeight: 19.6
          }}>
            {item.date}
          </Text>
          <Text style={{
            fontFamily: 'Inter',
            fontSize: 12,
            fontWeight: '400',
            color: item.selected ? '#235AFF' : '#939393',
            textAlign: 'center',
            lineHeight: 16.8
          }}>
            {item.duration}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ gap: 15 }}>
      <Text style={{
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: '700',
        color: '#0B0C15',
        marginBottom: 10,
        paddingLeft: 6,
      }}>
        Select Date
      </Text>
      <View style={{ 
        flexDirection: 'row',
        gap: 16,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {dates.map((item, index) => renderDateBox(item, index))}
      </View>
    </View>
  );
};

export default DateSelection;
