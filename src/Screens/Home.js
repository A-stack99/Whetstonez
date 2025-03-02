import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Header from '../Components/Home/Header';
import BookContainer from '../Components/Home/BookContainer';
import Bottom from '../Components/Home/Bottom';
import CustomStatusBar from '../Components/StatusBar';
import Search from '../assests/Svg/Search';

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

  const SearchResult = () => {
    return filteredResult.map((result, index) => (
      <View key={index} style={styles.searchResult}>
        <Image source={result.imageUrl} style={styles.resultImage} />
        <View>
          <Text style={styles.distance}>{result.distance} </Text>
          <Text style={styles.resultName}>{result.salonName}</Text>
          <Text style={styles.location}>{result.location}</Text>

          <Text style={styles.rating}>
            {result.rating}
            <Text style={{color: '#939393'}}> ({result.reviews}) </Text>
          </Text>

          <Text></Text>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header />
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Search style={styles.searchIcon} />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            keyboardAppearance="default"
            placeholder="Enter address or city name"
            placeholderTextColor="#a0a0a0"
            style={styles.searchInput}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BookContainer />
        {SearchResult()}
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
    padding: 8,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    // backgroundColor:'#000000',
    borderRadius: 8,
    width: '92%',
    alignItems: 'center',
    alignSelf: 'center',
    // left: -20,
    flexDirection: 'row',
    gap: 16,
    // flex:1
  },
  resultImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    // marginBottom: 10,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0b0c15',
    fontFamily: 'Inter',
    top: -12,
    letterSpacing: 0.5,
  },
  location: {
    color: '#939393',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 2,
    top: -10,
  },
  distance: {
    color: '#939393',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    justifyContent: 'flex-end',
    left: 195,
    bottom: -8,
  },
  rating: {
    color: '#0B0C15',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
    top: -10,
  },
});

export default Home;
