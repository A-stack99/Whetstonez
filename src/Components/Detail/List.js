import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , S } from 'react-native';

const TabSection = ({ style }) => {
  const [activeTab, setActiveTab] = useState('Hair Cut');

 
  const tabs = [
    'Hair Cut',
    'Hair Styling',
    'Hair Treatments',
    'Combo'
  ];

  const TabList = ({ tabs, activeTab, setActiveTab }) => {
    return (
      <View style={styles.tabListContainer}>
        {tabs.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setActiveTab(item)}
            style={styles.tabContainer}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === item ? styles.activeTabText : styles.inactiveTabText
              ]}
            >
              {item}
            </Text>
            {activeTab === item && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <TabList tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  tabListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    marginTop: 5,
  },
 

 
 
 
});

export default TabSection;
