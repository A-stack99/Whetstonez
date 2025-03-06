import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../Components/SignIn/Button";
import Apple from "../assests/Svg/Apple";
import Google from "../assests/Svg/Google";
import CustomStatusBar from "../Components/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { AxiosPostRequest } from "../Utils/API_Axios";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000); 
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (values) => {
    setLoading(true);
    setError(null);

    try {
      const response = await AxiosPostRequest({
        email: values.email,
        password: values.password,
      });

      if (response.status === 200) {
        console.log("Form Submitted: ", values.email);
        navigation.navigate("VerifyScreen");
      } else {
        setError("Something went wrong, please try again!");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 503) {
          setError("The server is temporarily unavailable. Please try again later.");
        } else {
          setError(`An error occurred: ${error.response.status}. Please try again later.`);
        }
      } else if (error.request) {
        setError("Network error. Please check your internet connection and try again.");
      } 
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../assests/Images/SalonBg.png")}
      style={styles.container}
    >
      <CustomStatusBar backgroundColor="transparent" barStyle="light-content" />

      <View style={styles.overlay}>
        <Text style={styles.heading}>Book Your Perfect {"\n"}Look in Minutes!</Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            isValid,
            dirty,
            handleSubmit,
          }) => (
            <>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#A0A0A0"
                style={styles.input}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#A0A0A0"
                style={styles.input}
                secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              {error && <Text style={styles.errorText}>{error}</Text>}

              <Button
                onPress={handleSubmit}
                title={loading ? "Loading..." : "Continue"}
                style={styles.button}
                textStyle={styles.buttonText}
                disabled={!isValid || !dirty || loading}
              />
              <Text style={styles.orText}>Or</Text>
              <TouchableOpacity style={styles.appleButton}>
                <Apple style={styles.apple} />
                <Text style={styles.appleButtonText}>Continue with Apple</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.googleButton}>
                <Google style={styles.google} />
                <Text style={styles.googleButtonText}>Continue with Google</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>

      <View
        style={{
          height: 4,
          backgroundColor: "#ffffff",
          marginBottom: 10,
          borderRadius: 1,
          width: "30%",
          alignSelf: "center",
          bottom: -190,
        }}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    padding: 4,
    width: "95%",
    height: "50%",
    alignSelf: "center",
    bottom: -110,
  },
  heading: {
    color: "#ffffff",
    fontFamily: "Inter",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 39,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderRadius: 10,
    marginBottom: 22,
    width: "100%",
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    height: "13%",
    backgroundColor: "#005AFF",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  orText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    marginVertical: 10,
  },
  appleButton: {
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "13%",
    justifyContent: "center",
    flexDirection: "row",
  },
  appleButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
  },
  googleButton: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
    height: "13%",
    justifyContent: "center",
    flexDirection: "row",
  },
  googleButtonText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "650",
    textAlign: "center",
  },
  apple: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  google: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default SignIn;
