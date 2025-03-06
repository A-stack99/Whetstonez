import { StyleSheet, Text, View , ScrollView } from 'react-native';
import React from 'react';
import Header from '../Components/Cart/Header';
import Product from '../Components/Cart/Product';
import Component1 from '../Components/Cart/component1';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Home = () => {
  const products = [
    {id: 1, name: 'Product 1', price: 100 , image: require('../assests/Images/Salon1.png')},
    {id: 2, name: 'Product 2', price: 200 , image: require('../assests/Images/Salon1.png')},
    {id: 3, name: 'Product 3', price: 300 , image: require('../assests/Images/Salon1.png')},
    {id: 4, name: 'Product 4', price: 400 , image: require('../assests/Images/Salon1.png')},
    {id: 5, name: 'Product 5', price: 500 , image: require('../assests/Images/Salon1.png')}
  ];

  return (
    <View style={styles.container}>
      <Header/>
      <Component1 />
      <ScrollView>
        {products.map((item) => <Product key={item.id} item={item} />)}
      </ScrollView>
    </View>
  );
};

export default Home;

<Drawer.Navigator>
<Drawer.Screen name="Dashboard" component={Dashboard} />
<Drawer.Screen name="Profile" component={Profile} />
<Drawer.Screen name="Setting" component={Settings} />
</Drawer.Navigator>


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      // backgroundColor: '#F5F5',
    
    },
  
})

const Dashboard = () => {
  return (
  <View>
      <Text>Dashboard</Text>
  </View>
  )
}

const Profile = () => {
  return (
  <View>
      <Text>Profile</Text>
  </View>
  )
}

const Settings = () => {
  return (
  <View>
      <Text>Settings</Text>
  </View>
  )
}