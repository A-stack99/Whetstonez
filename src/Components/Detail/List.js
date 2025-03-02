import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Time from '../../assests/Svg/Time'; 
import { useNavigation } from '@react-navigation/native';
import BlueTick from '../../assests/Svg/BlueTick'; 

const TabSection = ({ style }) => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Hair Cut');

  const tabs = [
    { name: 'Hair Cut', price: '$10.00', duration: '30 Mins' },
    { name: 'Hair Styling', price: '$20.00', duration: '45 Mins' },
    { name: 'Hair Treatments', price: '$15.00', duration: '40 Mins' },
    { name: 'Combo', price: '$25.00', duration: '60 Mins' },
  ];

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
      </View>
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
    marginBottom: 20,
    gap: 6,
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
    marginHorizontal: 10,
  },
  tabDetailsTitle: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    color: '#0b0c15',
    marginBottom: 4,
  },
  detailsText: {
    fontFamily: 'Inter',
    fontSize: 14,
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
    marginRight: -2,
  },
});

export default TabSection;
