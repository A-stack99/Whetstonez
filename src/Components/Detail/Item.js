import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Time from '../../assests/Svg/Time';
import Plus from '../../assests/Svg/Plus';
import { useNavigation } from '@react-navigation/native';
import BlueTick from '../../assests/Svg/BlueTick';

const List = ({ style }) => {
  const navigation = useNavigation();
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    {
      name: 'Hair Cut',
      price: '$10.00',
      duration: '30 Mins',
    },
    {
      name: 'Hair Wash',
      price: '$5.00',
      duration: '30 Mins',
    },
  ];

  const toggleService = (service) => {
    setSelectedServices((prevSelected) => {
      const isSelected = prevSelected.some((item) => item.name === service.name);

      if (isSelected) {
        return prevSelected.filter((item) => item.name !== service.name);
      } else {
        return [...prevSelected, service];
      }
    });
  };

  const isServiceSelected = (service) => {
    return selectedServices.some((item) => item.name === service.name);
  };

  return (
    <View style={[styles.container, style]}>
      {services.map((service, index) => (
        <View key={index} style={styles.serviceCard}>
          <View style={styles.serviceContent}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <View style={styles.serviceDetails}>
              <Text style={styles.servicePrice}>{service.price}</Text>
              <View style={styles.durationContainer}>
                <Time style={styles.timeIcon} />
                <Text style={styles.serviceDuration}>{service.duration}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => toggleService(service)}>
            {isServiceSelected(service) ? (
              <BlueTick style={styles.serviceIcon} />
            ) : (
              <Plus style={styles.serviceIcon} />
            )}
          </TouchableOpacity>
        </View>
      ))}
      
      {selectedServices.length > 0 && (
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('StylistSelect')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {`Continue (${selectedServices.length})`}
          </Text>
        </TouchableOpacity>
      )}

      <View
        style={{
          height: 4,
          backgroundColor: '#000',
          marginBottom: 2,
          borderRadius: 1,
          width: '35%',
          alignSelf: 'center',
          bottom: -7,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 6,
    backgroundColor: '#ffffff',
  },
  serviceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '100%',
  },
  serviceContent: {
    gap: 4,
    flex: 1,
  },
  serviceName: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#0b0c15',
    lineHeight: 19.6,
  },
  serviceDetails: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 4,
  },
  servicePrice: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    color: '#939393',
    lineHeight: 19.6,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeIcon: {
    width: 14,
    height: 14,
  },
  serviceDuration: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    color: '#939393',
    lineHeight: 19.6,
    marginLeft: 4,
  },
  serviceIcon: {
    width: 22,
    height: 22,
  },
  continueButton: {
    backgroundColor: '#235aff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    marginTop: -15,
    position: 'fixed',
    bottom: -5,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default List;
