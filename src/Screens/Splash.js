import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("SignIn");
    }, 2000); 
  }, []);

  return (
    <View colors={["#3377FF", "#005AFF"]} style={styles.container}>
      <Image source={require("../assests/Images/splashLogo.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor:'blue',
    justifyContent: "center",
     alignItems: "center" 
    },
  logo: {  
    width:'70%',
    height: '10%', 
    marginBottom: 10 ,
  },
  title: {
     color: "#fff", 
     fontSize: 24, 
     fontWeight: "bold" 
    },
});

export default SplashScreen;