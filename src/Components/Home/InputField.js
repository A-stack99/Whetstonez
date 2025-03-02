import { StyleSheet, Text, View , TextInput , Image } from 'react-native'
import React , {useState} from 'react'
import Search from '../../assests/Svg/Search';

const InputField = () => {
      const [searchQuery, setSearchQuery] = useState('');
    
      const searchResults = [
        {
          salonName: 'Hair Avenue',
          location: 'Lakewood, California',
          distance: '2 km',
          rating: '4.7',
          reviews: '312',
          imageUrl: require('../../assests/Images/Salon1.png'),
        },
        {
          salonName: 'Beauty Bliss',
          location: 'Los Angeles, California',
          distance: '5 km',
          rating: '4.5',
          reviews: '210',
          imageUrl: require('../../assests/Images/Salon2.png'),
        },
      ];
    
      const filteredResults = searchResults.filter(result =>
        result.salonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      const renderSearchResults = () => {
        return filteredResults.map((result, index) => (
          <View key={index} style={styles.searchResult}>
            <Image source={result.imageUrl} style={styles.resultImage} />
            <Text style={styles.resultName}>{result.salonName}</Text>
            <Text>{result.location}</Text>
            <Text>{result.distance} away</Text>
            <Text>Rating: {result.rating} ({result.reviews} reviews)</Text>
          </View>
        ));
      };
  return (
  
    <View>
    {renderSearchResults()} 
  </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    searchSection: {
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingHorizontal: 16,
        height: 50,
        marginBottom: 24,
        marginTop: 15,
      },
      searchIcon: {
        width: 20,
        height: 20,
      },
      searchInput: {
        marginLeft: 8,
        flex: 1,
        fontFamily: 'Inter',
        fontSize: 14,
        color: '#000000',
      },
      searchResult: {
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        width: '80%',
        // justifyContent:'center',
        flexDirection: 'row',
      },
      resultImage: {
        width:90,
        height:90,
        borderRadius: 8,
        marginBottom: 10,
      },
      resultName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
      },
})