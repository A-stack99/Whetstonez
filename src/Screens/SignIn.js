import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import Button from "../Components/SignIn/Button";
import Apple from "../assests/Svg/Apple";
import Google from "../assests/Svg/Google";
import CustomStatusBar from "../Components/StatusBar";

const SignIn = ({ navigation }) => {
   
  return (
    <ImageBackground
      source={require("../assests/Images/SalonBg.png")}
      style={styles.container}
    >
          <CustomStatusBar 
          backgroundColor="transparent"  
          barStyle="light-content"    
        />

      <View style={styles.overlay}>
        <Text style={styles.heading}>Book Your Perfect {"\n"}Look in Minutes!</Text>
        <TextInput
          placeholder="Enter your email or phone number"
          placeholderTextColor="#A0A0A0"
          
          style={styles.input}
        />
       <Button 
              onPress={() => navigation.navigate('VerifyScreen')} 
              title="Continue" 
              style={styles.button} 
              textStyle={styles.buttonText} 
            />
      
            <Text style={styles.orText}>Or</Text> 
            <TouchableOpacity
        style={styles.appleButton}>
          <Apple style={styles.apple}/>
        <Text style={styles.appleButtonText}>Continue with Apple</Text>
      </TouchableOpacity>
                     
      <TouchableOpacity
        style={styles.googleButton}>
           <Google style={styles.google}/>
        <Text style={styles.googleButtonText}>Continue with Apple</Text>
      </TouchableOpacity>
        
              
      </View>
      <View style={{ height: 4, backgroundColor: '#ffffff', marginBottom: 10, borderRadius: 1 , width:'30%' , alignSelf:'center', bottom:-190 }} />

   </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    width:'100%',
  
    
   },
  overlay: { 
    backgroundColor: "rgba(0, 0, 0, 0.0)", 
    padding:4,
    width: "95%",
    height: "50%", 
    alignSelf:'center',
    // borderRadius: 10 
    bottom: -180, 
  },
  heading: { 
    color: "#ffffff", 
    fontFamily:'Inter',
    fontSize: 28, 
    fontWeight: "700", 
    lineHeight:39, 
    letterSpacing: 0, 
    marginBottom: 20 ,
  },
  input: { 
    backgroundColor: "#F5F5F5",
     padding: 12, 
     borderRadius: 10, 
     marginBottom: 22 ,
     width:'100%',
    },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: "100%",
    height:'13%',
    backgroundColor: "#005AFF",
     justifyContent:'center'
 
  },
  buttonText: {
    color: "#ffffff", 
    fontFamily:'Inter',
    fontSize: 16, 
    fontWeight: "700", 
    lineHeight:19, 
    letterSpacing: 0, 
    alignItems:'center',
    textAlign:'center',
  },
  orText: { 
    textAlign: "center", 
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    lineHeight:19, 
    letterSpacing: 0, 
    marginVertical: 10
   },
  appleButton: { 
    backgroundColor: "#000", 
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    textAlign:'center',
    width: "100%",
    height:'13%',
    justifyContent:'center',
    flexDirection:'row'
  
   },
  appleButtonText: { 
    color: "#ffffff", 
    textAlign: "center", 
    alignItems:'center',
    fontFamily:'Inter',
    fontSize: 16,
     fontWeight: "600" , 
    lineHeight:19, 
    letterSpacing: 0, 
  },
  googleButton: { 
    backgroundColor: "#ffffff", 
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: "100%",
    height:'13%',
    justifyContent:'center',
    flexDirection:'row'
  },
  googleButtonText: { 
    color: "#000", 
    fontFamily:'Inter',
    fontSize: 16, 
    fontWeight: "650", 
    lineHeight:19, 
    letterSpacing: 0, 
    alignItems:'center'
  },
  apple:{
    width:20,
    height:20,
    marginRight:10,
    resizeMode:'contain'
  },
  google:{
    width:20,
    height:20,
    marginRight:10,
    resizeMode:'contain'
  }
});

export default SignIn;