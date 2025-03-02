import { StyleSheet, Text, View , ScrollView } from 'react-native';
import React from 'react';
import Header from '../Components/Cart/Header';
import Product from '../Components/Cart/Product';

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
      <ScrollView>
        {products.map((item) => <Product key={item.id} item={item} />)}
      </ScrollView>
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
  
})