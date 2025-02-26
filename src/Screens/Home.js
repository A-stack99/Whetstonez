import React from 'react';
import { View, StatusBar } from 'react-native';
import Header from '../Components/Home/Header';
import BookContainer from '../Components/Home/BookContainer';
import ServiceItem from '../Components/Home/ServiceItem';
import Bottom from '../Components/Home/Bottom';
import CustomStatusBar from '../Components/StatusBar';

const Home = ({ navogation }) => {
  return (
    <View style={styles.container}>
         <CustomStatusBar 
          backgroundColor="#FFFFFF"  
          barStyle="dark-content"    
        />
      <Header style={styles.locationHeader} />
      <BookContainer style={styles.mainContent} />
        <ServiceItem style={styles.salonPreviewCard} />
      <Bottom style={styles.bottom} />
        
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    minHeight: '100vh',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 8,
  },
  
  mainContent: {
    // flexGrow: 1,
    width: '100%',
    // height: 'auto',
    padding:10,
   
    
  },
 

 
};

export default Home;
