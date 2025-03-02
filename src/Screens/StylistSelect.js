import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Card from '../Components/StylistSelect/Card';
import Button from '../Components/CustomButton';
import People from '../assests/Svg/People';
import Person from '../assests/Svg/Person';
import CustomStatusBar from '../Components/StatusBar';
import TopBar from '../Components/CustomTopBar';
import BlueTick from '../assests/Svg/BlueTick'; 

const StylistSelect = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = cardName => {
    setSelectedCard(cardName);
    console.log(`${cardName} selected`);
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <TopBar title="Choose your stylist" style={{ top: -5 }} />
      <View style={styles.contentContainer}>
        <Card
          name="Any Stylist"
          description="Next available stylist"
          useSvg={true}
          svgComponent={
            <People style={{ width: 55, height: 55, top:15, left:15 }} />
            
          }
          onSelect={() => handleCardSelect('Any Stylist')}
          isSelected={selectedCard === 'Any Stylist'}
          style={[
            selectedCard === 'Any Stylist' ? styles.selectedCard : styles.card,
            { borderColor: selectedCard === 'Any Stylist' ? '#235AFF' : '#ccc' },
          ]}
        >
          
         
        </Card>

        <Card
          name="Multiple Stylists"
          description="Choose per service"
          useSvg={true}
          svgComponent={
            <Person style={{ width: 55, height: 55,  top:15, left:15}} />
          }
          onSelect={() => handleCardSelect('Multiple Stylists')}
          isSelected={selectedCard === 'Multiple Stylists'}
          style={[
            selectedCard === 'Multiple Stylists' ? styles.selectedCard : styles.card,
            { borderColor: selectedCard === 'Multiple Stylists' ? '#235AFF' : '#ccc' },
          ]}
        >
        </Card>

        <Card
          imageUrl={require('../assests/Images/person1.png')}
          name="John Doe"
          description="Hair Specialist"
          isTopRated={true}
          onSelect={() => handleCardSelect('John Doe')}
          isSelected={selectedCard === 'John Doe'}
          style={[
            selectedCard === 'John Doe' ? styles.selectedCard : styles.card,
            { borderColor: selectedCard === 'John Doe' ? '#235AFF' : '#ccc' },
          ]}
        >
        </Card>

        <Card
          imageUrl={require('../assests/Images/person2.png')}
          name="Anna Lee"
          description="Hair Dresser"
          isTopRated={true}
          onSelect={() => handleCardSelect('Anna Lee')}
          isSelected={selectedCard === 'Anna Lee'}
          style={[
            selectedCard === 'Anna Lee' ? styles.selectedCard : styles.card,
            { borderColor: selectedCard === 'Anna Lee' ? '#235AFF' : '#ccc' },
          ]}
        >
        </Card>

        <Card
          imageUrl={require('../assests/Images/person3.png')}
          name="Ella Ford"
          description="Hair Specialist"
          onSelect={() => handleCardSelect('Ella Ford')}
          isSelected={selectedCard === 'Ella Ford'}
          style={[
            selectedCard === 'Ella Ford' ? styles.selectedCard : styles.card,
            { borderColor: selectedCard === 'Ella Ford' ? '#235AFF' : '#ccc' },
          ]}
        >
        </Card>

        <Card
          imageUrl={require('../assests/Images/person4.png')}
          name="Marsh Donnell"
          description="Hair Specialist"
          onSelect={() => handleCardSelect('Marsh Donnell')}
          isSelected={selectedCard === 'Marsh Donnell'}
          style={[
            selectedCard === 'Marsh Donnell' ? styles.selectedCard : styles.card,
            { borderColor: selectedCard === 'Marsh Donnell' ? '#235AFF' : '#ccc' },
          ]}
        >
        </Card>
      </View>

      <Button
        title={'Select & Continue'}
        style={[
          styles.continueButton,
          { backgroundColor: selectedCard ? '#235AFF' : '#CCCCCC' },
        ]}
        textStyle={styles.continueButtonText}
        onPress={() => navigation.navigate('DateTime')}
        disabled={!selectedCard}
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
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    position: 'relative', 
  },
  selectedCard: {
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: '#235AFF', 
  },
  continueButton: {
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 15,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  blueTick: {
    top: -160,   
    width: 20,  
    height: 20, 
    zIndex:1
  },
});

export default StylistSelect;
