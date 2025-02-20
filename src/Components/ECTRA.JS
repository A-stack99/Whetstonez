// OTPScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Enter OTP</Text>
      <TextInput
        style={{ borderBottomWidth: 1, width: '80%', textAlign: 'center', fontSize: 20, marginVertical: 20 }}
        keyboardType="numeric"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: '#000', padding: 12, borderRadius: 5 }}>
        <Text style={{ color: '#fff' }}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPScreen;

// HomeScreen.js
import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import BottomIndicator from '../components/BottomIndicator';
import LocationHeader from '../components/LocationHeader';
import ServicesList from '../components/ServicesList';
import SalonList from '../components/SalonList';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <LocationHeader location="Lakewood, California" />
        <ServicesList />
        <SalonList navigation={navigation} />
      </ScrollView>
      <BottomIndicator />
    </View>
  );
};

export default HomeScreen;

// SalonDetailsScreen.js
import React from 'react';
import { View, Text, Image, FlatList, StatusBar } from 'react-native';
import BottomIndicator from '../components/BottomIndicator';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const SalonDetailsScreen = ({ route }) => {
  const { salon } = route.params;
  const services = [
    { id: '1', name: 'Hair Cut', price: '10.00', duration: 30 },
    { id: '2', name: 'Hair Wash', price: '5.00', duration: 30 },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <Header title={salon.name} />
      <Image source={{ uri: salon.image }} style={{ width: '100%', height: 200 }} />
      <Text style={{ padding: 16, fontSize: 16 }}>{salon.location}</Text>
      <FlatList data={services} renderItem={({ item }) => <ServiceCard service={item} />} keyExtractor={(item) => item.id} />
      <BottomIndicator />
    </View>
  );
};

export default SalonDetailsScreen;