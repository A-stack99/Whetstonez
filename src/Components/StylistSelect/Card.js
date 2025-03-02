import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Medal from '../../assests/Svg/Medal';
import Person from '../../assests/Svg/Person';
import People from '../../assests/Svg/People';
import BlueTick from '../../assests/Svg/BlueTick';

const Card = ({
  imageUrl,
  name = "Stylist Name",
  description = "Stylist Description",
  isTopRated = false,
  onSelect = () => {},
  useSvg = false,
  svgComponent = null, 
  isSelected = false, 
}) => {
  const imageSource = typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl;

  return (
    <TouchableOpacity 
      style={[styles.container, isSelected && styles.selectedContainer]} 
      onPress={onSelect}
    >
      <View style={styles.contentWrapper}>
        {useSvg ? (
             <View style={[styles.svgWrapper, { backgroundColor: '#235AFF0A', borderRadius:10 }]}>
             {svgComponent || <Person style={styles.personIcon} />}
           </View>
        ) : (
          <Image source={imageSource} style={styles.stylistImage} />
        )}
        
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>

        {isSelected && <BlueTick style={styles.blueTick} />}

        {isTopRated && (
          <View style={styles.topRatedBadge}>
            <Medal style={styles.medalIcon} />
            <Text style={styles.topRatedText}>Top Rated</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 320,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  selectedContainer: {
    borderColor: '#235AFF',  // Highlight the selected card
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  stylistImage: {
    width: 56,
    height: 56,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  nameText: {
    fontSize: 16,
    color: '#0b0c15',
    fontFamily: 'Inter',
  },
  descriptionText: {
    fontSize: 14,
    color: '#939393',
    fontFamily: 'Inter',
  },
  topRatedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7d794',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    gap: 4,
  },
  medalIcon: {
    width: 20,
    height: 20,
  },
  topRatedText: {
    fontSize: 12,
    color: '#333333',
    fontFamily: 'Inter',
    lineHeight: 18,
  },
  blueTick: {
    position: 'absolute',
    top: -10,
    right: -5,
    width: 22,
    height: 22,
  },
});

export default Card;
