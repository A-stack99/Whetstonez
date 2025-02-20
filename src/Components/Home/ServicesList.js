import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const coffeeNames = ['Hair Cut', 'Hair Styling', 'Nail Art', 'Manicure'];
const categoryImages = {
  'Hair Cut': require('../../assests/Images/haircut.png'), 
  'Hair Styling': require('../../assests/Images/style.png'),
  'Nail Art': require('../../assests/Images/polish.png'),
  'Manicure': require('../../assests/Images/drayer.png'),
};

const ServicesList = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (item) => {
    setSelectedCategory(item);
    console.log(`Category clicked: ${item}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <FlatList
        style={styles.categoryContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={coffeeNames}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
              item === selectedCategory && styles.categoryItemSelected,
            ]}
            onPress={() => handleCategoryPress(item)}
          >
            <Image
              source={categoryImages[item]}
              style={styles.categoryImage} 
            />
            <Text
              style={[
                styles.categoryText,
                item === selectedCategory && styles.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F9',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 30,
    marginLeft: 22,
    color: '#0B0C15',
  },
  categoryContainer: {
    marginTop: 20,
    marginLeft: 22,
    marginBottom: 30,
  },
  categoryItem: {
    flexDirection: 'row', // Align image and text horizontally
    alignItems: 'center', // Center align the items vertically
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  categoryItemSelected: {
    backgroundColor: '#235AFF',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#A0A0A0',
    marginLeft: 8, // Add some space between the image and the text
  },
  categoryTextSelected: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 17,
  },
  categoryImage: {
    width: 24, // Adjust image width
    height: 24, // Adjust image height
    resizeMode: 'contain', // Ensure image fits well
  },
});

export default ServicesList;
