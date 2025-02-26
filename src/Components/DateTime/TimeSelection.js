import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TimeSelection = () => {
  // const [selectedTime, setSelectedTime] = useState();
  const navigation = useNavigation(); 

  const timeSlots = [
    { time: '9:00 AM', discount: '20% Off' },
    { time: '9:30 AM', discount: '20% Off' },
    { time: '10:00 AM', discount: null },
    { time: '10:30 AM', discount: null },
    { time: '11:00 AM', discount: null },
    { time: '11:30 AM', discount: null },
    { time: '12:00PM', discount: null },
    { time: '12:30PM', discount: null },
  ];

  const handleTimeSelect = (index) => {
    setSelectedTime(index);
  };

  return (
    <View style={{ flex: 1, minWidth: 343 }}>
     

      <View style={{ gap: 12 }}>
        {timeSlots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 16,
              // backgroundColor: selectedTime === index ? '#F5F5F5' : '#FFFFFF',
              borderRadius: 10,
            }}
          >
            <Text style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#0B0C15'
            }}>
              {slot.time}
            </Text>
            {slot.discount && (
              <Text style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#00A860'
              }}>
                {slot.discount}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      
    </View>
  );
};

export default TimeSelection;
