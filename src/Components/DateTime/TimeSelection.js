import React, { useState } from 'react';
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';

const TimeSelection = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState();
  
  const timeSlots = [
    { time: '9:00 AM', discount: '20% Off' },
    { time: '9:30 AM', discount: '20% Off' },
    { time: '10:00 AM', discount: null },
    { time: '10:30 AM', discount: null },
    { time: '11:00 AM', discount: null },
    { time: '11:30 AM', discount: null },
    { time: '12:00 PM', discount: null },
    { time: '12:30 PM', discount: null },
  ];

  const handleTimeSelect = (index) => {
    setSelectedTime(index);
    onChange(); 
  };

  return (
    <View style={styles.container}>
      <View style={{ gap: 12 , marginBottom:60 }}>
        {timeSlots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 16,
              backgroundColor: selectedTime === index ? '#F5F5F5' : '#FFFFFF',
              borderRadius: 10,
              borderWidth: 1.5,
              borderColor: selectedTime === index ? '#235AFF' : '#FFFFFF',
            }}
            onPress={() => handleTimeSelect(index)}
          >
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#0B0C15' }}>
              {slot.time}
            </Text>
            {slot.discount && (
              <Text style={{ fontSize: 12, fontWeight: '500', color: '#00A860' }}>
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


const styles = StyleSheet.create({

  container: {
    flex: 1,
    minWidth: 343,
  },
  timeSlot: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  selectedTimeSlot: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#235AFF',
  },
  time: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0B0C15',
  },
  discount: {
    fontSize: 12,
    fontWeight: '500',
    color: '#00A860',
  },
  selectedTime: {
    fontSize: 14,
    fontWeight: '500',
    color: '#235AFF',
  },
  selectedDiscount: {
    fontSize: 12,
    fontWeight: '500',
    color: '#235AFF',
  },

});
