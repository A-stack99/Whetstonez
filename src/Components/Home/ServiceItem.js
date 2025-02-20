import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 

const ServiceItem = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Nearby Salons</Text>
        <View style={styles.containerIndicator}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../assests/Images/indicator.png')}
              style={styles.icon}
            />
            <Text style={{color: '#0057ff'}}>View on Map</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SalonDetail')}>
        <View style={{marginTop: 20, borderRadius: 10}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Image
              source={require('../../assests/Images/Salon1.png')}
              style={{width: 90, height: 90, borderRadius: 10}}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                  color: '#0B0C15',
                  lineHeight: 19,
                  fontFamily: 'Inter',
                  letterSpacing: 0,
                }}>
                Hair Avenue
              </Text>
              <View style={styles.locationContainer}>
                <Image
                  source={require('../../assests/Images/locator1.png')}
                  style={styles.locationIcon}
                />
                <Text
                  style={{fontSize: 14, fontWeight: '500', color: '#939393'}}>
                  Lakewood, California
                </Text>
              </View>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#0B0C15'}}>
                ⭐ 4.7 (<Text style={{color: '#939393'}}>312</Text>)
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{marginTop: 20, borderRadius: '10'}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginBottom: 10,
          }}>
          <Image
            source={require('../../assests/Images/Salon1.png')}
            style={{width: 90, height: 90, borderRadius: 10}}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: '#0B0C15',
                lineHeight: 19,
                fontFamily: 'Inter',
                letterSpacing: 0,
              }}>
              Hair Avenue
            </Text>
            <View style={styles.locationContainer}>
              <Image
                source={require('../../assests/Images/locator1.png')}
                style={styles.locationIcon}
              />
              <Text style={{fontSize: 14, fontWeight: '500', color: '#939393'}}>
                Lakewood, California
              </Text>
            </View>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#0B0C15'}}>
              ⭐ 4.7 (<Text style={{color: '#939393'}}>312</Text>)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginHorizontal: 15,
    marginTop: 16,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0B0C15',
  },
  containerIndicator: {
    // flex: 1,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  header: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
});
