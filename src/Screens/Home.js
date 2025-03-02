import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../Components/Home/Header';
import BookContainer from '../Components/Home/BookContainer';
import Bottom from '../Components/Home/Bottom';
import CustomStatusBar from '../Components/StatusBar';
import SearchBar from '../Components/Home/Search';
import SearchResult from '../Components/Home/SearchResults';

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = [
    {
      salonName: 'Hair Avenue',
      location: 'Lakewood, California',
      distance: '2 km',
      rating: '4.7',
      reviews: '312',
      imageUrl: require('../assests/Images/Salon1.png'),
    },
    {
      salonName: 'Beauty Bliss',
      location: 'Los Angeles, California',
      distance: '5 km',
      rating: '4.5',
      reviews: '210',
      imageUrl: require('../assests/Images/Salon2.png'),
    },
    {
      salonName: 'Nail Studio',
      location: 'Hollywood, California',
      distance: '3 km',
      rating: '4.2',
      reviews: '156',
      imageUrl: require('../assests/Images/Salon3.png'),
    },
    {
      salonName: 'Shine Salon',
      location: 'Santa Monica, California',
      distance: '8 km',
      rating: '4.6',
      reviews: '98',
      imageUrl: require('../assests/Images/Salon3.png'),
    },
  ];

  const filteredResult = searchResults.filter(result =>
    result.salonName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header />
      <View style={styles.searchSection}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BookContainer />
        {filteredResult.map((result, index) => (
          <TouchableOpacity
          onPress={() => navigation.navigate('SalonDetail')}>
          <SearchResult key={index} result={result} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Bottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchSection: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
