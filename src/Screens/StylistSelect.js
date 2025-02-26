import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Card from '../Components/StylistSelect/Card';
import Button from '../Components/CustomButton';
import People from '../assests/Svg/People';
import Person from '../assests/Svg/Person';
import CustomStatusBar from '../Components/StatusBar';
import TopBar from '../Components/CustomTopBar';

const StylistSelect = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <TopBar
        title="Choose your stylist"
        style={{top:-5}}
      />
      <View style={styles.contentContainer}>
        <Card
          name="Any Stylist"
          description="Next available stylist"
          useSvg={true}
          svgComponent={
            <People style={{width: 55, height: 55, top: 12, right: -10}} />
          }
          onSelect={() => console.log('Card selected')}
        />
        <Card
          name="Multiple Stylists"
          description="Choose per service"
          useSvg={true}
          svgComponent={
            <Person style={{width: 55, height: 55, top: 12, right: -10}} />
          }
          onSelect={() => console.log('Card selected')}
        />

        <Card
          imageUrl={require('../assests/Images/person1.png')}
          name="John Doe"
          description="Hair Specialist"
          isTopRated={true}
        />
        <Card
          imageUrl={require('../assests/Images/person2.png')}
          name="Anna Lee"
          description="Hair Dresser"
          isTopRated={true}
        />
        <Card
          imageUrl={require('../assests/Images/person3.png')}
          name="Ella Ford"
          description="Hair Specialist"
        />
        <Card
          imageUrl={require('../assests/Images/person4.png')}
          name="Marsh Donnell"
          description="Hair Specialist"
        />
      </View>
      <Button
      title={'Select & Continue'}
      style={styles.continueButton}
      textStyle={styles.continueButtonText}
      onPress={()=> navigation.navigate('DateTime')}
      />
      <View
        style={{
          height: 4,
          backgroundColor: '#000',
          marginBottom: 10,
          borderRadius: 1,
          width: '35%',
          alignSelf: 'center',
          bottom: -7,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#f8f8f8',
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    padding: 16,
    paddingTop: 8,
  },
});

export default StylistSelect;
