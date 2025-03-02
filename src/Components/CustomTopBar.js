import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Back from '../assests/Svg/Back';
import { useNavigation } from '@react-navigation/native';

const TopBar = ({ 
  title = "Title",        
  onBack,                 
  style,                  
  textStyle,              
  leftIcon = true,         
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (onBack) {
      onBack(); 
    } else {
      navigation.goBack();  
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.contentWrapper}>
        {leftIcon && (
          <TouchableOpacity 
            onPress={handleBack}
            style={styles.iconButton}
          >
            <Back width={24} height={24} style={styles.icon} />
          </TouchableOpacity>
        )}
        <Text style={[styles.title, textStyle]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
    top: -15,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#0b0c15',
  },
});

export default TopBar;

// Usage of TopBar is

 <TopBar 
  title="Custom Title"
  style={{ backgroundColor: '#f0f0f0' }}
  textStyle={{ color: '#333', fontWeight: '700' }}
  onBack={() => console.log('Custom Back Action')} 
  leftIcon={false} 
/> 

