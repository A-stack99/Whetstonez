import React from "react";
import Header from "../Components/Detail/Header";
import Item from "../Components/Detail/Item";
import TabSection from "../Components/Detail/List";
import CustomStatusBar from "../Components/StatusBar";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import Avenue from "../Components/Detail/Avenue";
import Products from "../Components/Detail/Products";

const SalonDetails = () => {
  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header />

      <Image source={require('../assests/Images/Salon3.png')} style={styles.image} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Avenue />
        <Products/>
      </ScrollView>
    </View>
  );
};

export default SalonDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "30%",
    borderRadius: 10,
  },
  scrollContent: {
    flexGrow: 1, 
  },
});
