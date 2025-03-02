import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Time from '../../assests/Svg/Time';
import Plus from '../../assests/Svg/Plus';
import { useNavigation } from '@react-navigation/native';
import BlueTick from '../../assests/Svg/BlueTick';

const Products = ({ style }) => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Hair Cut');
  const [selectedServices, setSelectedServices] = useState([]);

  const tabs = [
    { name: 'Hair Cut', price: '$10.00', duration: '30 Mins' },
    { name: 'Hair Styling', price: '$20.00', duration: '45 Mins' },
    { name: 'Hair Treatments', price: '$15.00', duration: '40 Mins' },
    { name: 'Combo', price: '$25.00', duration: '60 Mins' },
  ];

  const services = [
    { name: 'Hair Wash', price: '$5.00', duration: '30 Mins' },
    { name: 'Hair Cut', price: '$10.00', duration: '30 Mins' },
  ];

  const toggleService = (serviceName) => {
    setSelectedServices((prevServices) => {
      if (prevServices.includes(serviceName)) {
        return prevServices.filter((service) => service !== serviceName);
      } else {
        return [...prevServices, serviceName];
      }
    });
  };

  const isServiceSelected = (serviceName) => selectedServices.includes(serviceName);

  const TabList = ({ tabs, activeTab, setActiveTab }) => (
    <View style={styles.tabListContainer}>
      {tabs.map((item) => (
        <TouchableOpacity
          key={item.name}
          onPress={() => setActiveTab(item.name)}
          style={styles.tabButton}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === item.name ? styles.activeTabText : styles.inactiveTabText,
            ]}
          >
            {item.name}
          </Text>
          {activeTab === item.name && <BlueTick style={styles.activeIndicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );

  const activeTabDetails = tabs.find((tab) => tab.name === activeTab);

  return (
    <View style={[styles.container, style]}>
      <TabList tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <View style={styles.detailsContainer}>
        <Text style={styles.tabDetailsTitle}>{activeTabDetails.name}</Text>
        <View style={styles.durationContainer}>
          <Text style={styles.detailsText}>{activeTabDetails.price}</Text>
          <Time style={styles.timeIcon} />
          <Text style={styles.detailsText}>{activeTabDetails.duration}</Text>
        </View>
        <TouchableOpacity
  onPress={() => toggleService(activeTabDetails.name)}
  style={styles.iconButton} 
>
  {isServiceSelected(activeTabDetails.name) ? (
    <BlueTick style={[styles.serviceIcon]} />
  ) : (
    <Plus style={styles.serviceIcon} />
  )}
</TouchableOpacity>
      </View>

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
          <TouchableOpacity onPress={() => toggleService(service.name)}>
            {isServiceSelected(service.name) ? (
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
          bottom: -30,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
  tabListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
    gap: 5,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  tabText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#235AFF',
  },
  inactiveTabText: {
    color: '#939393',
  },
  activeIndicator: {
    width: '100%',
    height: 2,
    backgroundColor: '#235AFF',
    marginTop: 4,
  },
  detailsContainer: {
    marginHorizontal: 12,
    marginBottom: -12,
  },
  tabDetailsTitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    color: '#0b0c15',
    marginBottom: 4,
  },
  detailsText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    color: '#939393',
    lineHeight: 19.6,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  timeIcon: {
    width: 14,
    height: 14,
    marginLeft: 4,
  },
  serviceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
    marginTop: -30,
  },
  serviceContent: {
    gap: 2,
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
  serviceDuration: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    color: '#939393',
    lineHeight: 19.6,
    marginLeft: 4,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40, 
    height: 40, 
    marginLeft:293,
    top:-40
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
    position: 'absolute',
    bottom: -20,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Products;
