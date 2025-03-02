import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Calender from '../../assests/Svg/Calender'; 

const DateSelection = ({ onChange, 
  dates = [
  { day: 'TUE', date: 'Sep 9', duration: '40 mins', selected: false },
  { day: 'TUE', date: 'Sep 10', duration: '40 mins', selected: false },
  { day: 'THU', date: 'Sep 11', duration: '40 mins', selected: false },
  { isMoreDates: true }
] }) => {
  const [selectedDates, setSelectedDates] = useState(dates);

  const handleDateSelect = (index) => {
    const newDates = selectedDates.map((item, i) => {
      if (i === index) {
        return { ...item, selected: true }; 
      } else {
        return { ...item, selected: false };
      }
    });
    setSelectedDates(newDates);
    onChange(); 
  };

  const renderDateBox = (item, index) => {
    if (item.isMoreDates) {
      return (
        <TouchableOpacity key={`date-${index}`} style={styles.moreDatesBox}>
          <View style={{ gap: 4, alignItems: 'center' }}>
            <Calender style={styles.calendarIcon} />
            <Text style={styles.moreDatesText}>More dates</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        key={`date-${index}`}
        onPress={() => handleDateSelect(index)}
        style={[
          styles.dateBox,
          item.selected && styles.selectedDateBox,
        ]}
      >
        <View style={{ gap: 4, alignItems: 'center' }}>
          <Text style={[styles.dayText, item.selected && styles.selectedDateText]}>
            {item.day}
          </Text>
          <Text style={[styles.dateText, item.selected && styles.selectedDateText]}>
            {item.date}
          </Text>
          <Text style={[styles.durationText, item.selected && styles.selectedDateText]}>
            {item.duration}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ gap: 15 }}>
      <Text style={styles.heading}>Select Date</Text>
      <View style={styles.dateBoxContainer}>
        {selectedDates.map((item, index) => renderDateBox(item, index))}
      </View>
    </View>
  );
};

const styles = {
  moreDatesBox: {
    width: 70,
    borderRadius: 6,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
  moreDatesText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#0B0C15',
    textAlign: 'center',
    lineHeight: 19.6,
  },
  dateBox: {
    width: 70,
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDateBox: {
    backgroundColor: '#235AFF14',
    borderColor: '#235AFF',
  },
  dateText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#0B0C15',
    textAlign: 'center',
    lineHeight: 19.6,
  },
  selectedDateText: {
    color: '#235AFF',
  },
  durationText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    color: '#939393',
    textAlign: 'center',
    lineHeight: 16.8,
  },
  heading: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '700',
    color: '#0B0C15',
    marginBottom: 10,
    paddingLeft: 6,
  },
  dateBoxContainer: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default DateSelection;
