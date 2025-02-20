import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet , StatusBar } from "react-native";

const VerificationOTP = ({navigation}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>Verify Your Identity</Text>
      <Text style={styles.subtext}>
        We’ve sent a 4-digit code to 071***05.{"\n"}Please enter it below.
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            value={digit}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(value) => handleChange(value, index)}
          />
        ))}
      </View>

      <Text style={styles.resendText}>
        Didn’t receive a code? <Text style={styles.resendLink}>Resend</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: "#fff",
    // backgroundColor:'black',
    alignItems: "center",
    paddingTop:15,
    paddingRight:15,
    paddingLeft:15
  },
  header: {
    color: "#0B0C15", 
    fontFamily:'Inter',
    fontSize: 24, 
    fontWeight: "700", 
    lineHeight:29, 
    letterSpacing: 0, 
    marginBottom: 20 ,
  },
  subtext: {
    color: "#939393", 
    fontFamily:'Inter',
    fontSize: 14, 
    fontWeight: "500", 
    lineHeight:16, 
    letterSpacing: 0, 
    marginBottom: 20 ,
    textAlign: 'center'
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 20,
   
  },
  otpBox: {
    width: 45,
    height: 50,
    borderColor: "#ccc",
     backgroundColor:'#F5F5F5',
    borderRadius: 6,
    textAlign: "center",
    fontSize: 18,
    color: "#000000",
    fontFamily:'Inter', 
    fontWeight: "500", 
    lineHeight:21, 
    letterSpacing: 0, 
  },
  resendText: {
    textAlign: "center",
    fontSize: 14,
    color: "#9D9EA6",
    fontFamily:'Inter', 
    fontWeight: "500", 
    lineHeight:16, 
    letterSpacing: 0, 
    marginBottom: 20,
  },
  resendLink: {
    color: "#235AFF",
    fontWeight: "500",
    fontFamily:'Inter', 
    fontWeight: "500", 
    lineHeight:14, 
    letterSpacing: 0,
    textAlign: "center",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height:'7%',
    backgroundColor: "#235AFF",
    alignItems: 'center',
    bottom:10,
    position:'absolute',
    // marginBottom:10,
    justifyContent: 'center'
 
  },
  buttonText: {
    color: "#ffffff", 
    fontFamily:'Inter',
    fontSize: 16, 
    fontWeight: "700", 
    lineHeight:19, 
    letterSpacing: 0, 
  },
});

export default VerificationOTP;