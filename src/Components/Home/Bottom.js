import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import Home from '../../assests/Svg/Home'; 
import Calender1 from '../../assests/Svg/Calender1'; 
import Person1 from '../../assests/Svg/Person1'; 
import Heart from '../../assests/Svg/Heart'; 
import Heart1 from '../../assests/Svg/Heart1';

const Bottom = ({ style }) => {
  const [activeTab, setActiveTab] = useState('Home'); 
  const [modalVisible, setModalVisible] = useState(false); 
  
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home />, 
    },
    {
      id: 'bookings',
      label: 'Bookings',
      icon: <Calender1 />, 
    },
    {
      id: 'favourites',
      label: 'Favourites',
      icon: <Heart1 />, 
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <Person1 />,
    }
  ];

  const handleItemPress = (itemLabel) => {
    setActiveTab(itemLabel);
    setModalVisible(true); 
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <View style={styles.navItems}>
          {navItems.map((item) => (
            <TouchableOpacity 
              key={item.id}
              style={styles.navItem}
              onPress={() => handleItemPress(item.label)} 
            >
              <View 
                style={[styles.iconWrapper, { 
                  backgroundColor: activeTab === item.label ? '#fff' : 'transparent',
                }]}
              >
                {item.icon}
              </View>
              <Text style={[styles.label, { color: activeTab === item.label ? '#235aff' : '#939393' }]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 4, backgroundColor: '#000', marginBottom: 10, borderRadius: 1, width:'35%', alignSelf:'center', bottom:-7 }} />
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Here is Your {activeTab}!</Text>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    justifyContent: 'center',
    // flex:1,
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    // position:'static'
  },
  content: {
    width: '100%',
    // height:70,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  navItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:'100%'
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 38, 
    height: 35, 
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 12, 
    padding: 5, 
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 12, 
    fontWeight: '500',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#235aff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Bottom;
