import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import Header from '../Components/Home/Header';
import BookContainer from '../Components/Home/BookContainer';
import ServicesList from '../Components/Home/ServicesList';
import ServiceItem from '../Components/Home/ServiceItem';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>

      <ScrollView>
        <BookContainer/>
        <ServicesList/>

        <ServiceItem/>
      </ScrollView>

      
        <View
          style={{
            height: 4,
            backgroundColor: '#000',
            marginBottom: 10,
            borderRadius: 1,
            width: '30%',
            alignSelf: 'center',
            bottom: 10,
          }}
        />
      
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        },
  
});