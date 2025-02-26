import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Button = ({ 
  title ,  
  onPress,                    
  style,                        
  textStyle,                    
}) => {
  const navigation = useNavigation(); 


  const handlePress = () => {
    if (onPress) {
      onPress(); 
    } else {
      navigation.navigate('');
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={handlePress} 
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#235AFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    minWidth: 353,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default Button;

//  Usage of Button 

{/* <Button 
  title="Custom Button"
  style={{ backgroundColor: 'green', height: 50 }}
  textStyle={{ fontSize: 18 }}
  onPress={() => navigation.navigate('DateTime')}
/> */}
