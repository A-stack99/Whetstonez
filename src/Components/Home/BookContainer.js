import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Search from '../../assests/Svg/Search';
import Indicator from '../../assests/Svg/Indicator';

const BookContainer = ({ 
  style,
  onSearch = () => {},
  onBookNow = () => {},
  onServiceSelect = () => 'SalonDetail',
  onViewMap = () => {},
}) => {
  const services = [
      { id: 1, name: 'Hair Cut', icon: require('../../assests/Images/haircut.png'), active: true },  
      { id: 2, name: 'Hair Styling', icon: require('../../assests/Images/style.png'), active: false }, 
      { id: 3, name: 'Nail Art', icon: require('../../assests/Images/polish.png'), active: false },
      { id: 4, name: 'Hair Cut', icon: require('../../assests/Images/drayer.png'), active: false }
    ];

  return (
    <>
     <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <Search style={styles.searchIcon} />
        <TextInput
          placeholder="Enter address or city name"
          placeholderTextColor="#a0a0a0"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.promotionBanner}>
        <View style={styles.ellipseBackground} />
        <Image source={require('../../assests/Images/homeBG.png')}   style={styles.bannerImage}
          resizeMode="cover"/>
        <View style={styles.bannerOverlay} />
        <View style={styles.bannerContent}>
          <Text style={styles.specialText}>Morning Special!</Text>
          <Text style={styles.discountText}>Get 20% Off</Text>
          <Text style={styles.descriptionText}>on All Haircuts Between 9-10 AM.</Text>
          <TouchableOpacity style={styles.bookButton} onPress={onBookNow}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>

 
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Services</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.servicesScrollView}
        >
          <View style={styles.servicesList}>
            {services.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={[
                  styles.serviceItem,
                  service.active && styles.activeServiceItem,
                ]}
                onPress={() => onServiceSelect(service.id)}
              >
                <Image source={service.icon} style={styles.serviceIcon} />
                <Text style={[
                  styles.serviceText,
                  service.active && styles.activeServiceText,
                ]}>
                  {service.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.nearbySalonsSection}>
        <Text style={styles.sectionTitle}>Nearby Salons</Text>
        <TouchableOpacity style={styles.viewMapButton} onPress={onViewMap}>
          <Indicator style={styles.mapIcon}  resizeMode="contain"/>
          <Text style={styles.viewMapText}>View on Map</Text>
        </TouchableOpacity>
      </View>
       </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderRadius: 2,
    width: '100%',
    height: '32%',
    backgroundColor: '#ffffff',
    marginBottom: 28,
    paddingHorizontal: 20,
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
  iconWrapper: {
    width: 30, 
    height: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
  promotionBanner: {
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    // marginBottom: 30,
  },
  ellipseBackground: {
    position: 'absolute',
    width: 354,
    height: 354,
    backgroundColor: 'rgba(35, 90, 255, 0.25)',

    borderRadius: 177,
    left: -130,
    top: -177,
    zIndex: 1,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 2,
  },
  bannerContent: {
    padding: 15,
    zIndex: 3,
  },
  specialText: {
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 4,
  },
  discountText: {
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 4,
  },
  descriptionText: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 12,
  },
  bookButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    top: -3,
  },
  bookButtonText: {
    fontFamily: 'Inter',
    fontWeight: '650',
    fontSize: 12,
    color: '#0b0c15',
  },
  servicesSection: {
    marginBottom: 60,
    paddingHorizontal: 18,

  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#0B0C15',
    marginBottom: 18,
  },
  servicesScrollView: {
    flexGrow: 0,
  },
  servicesList: {
    flexDirection: 'row',
    gap: 8,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 10,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 0.5,
  },
  activeServiceItem: {
    backgroundColor: '#235aff',
  },
  serviceIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  serviceText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 12,
    color: '#a0a0a0',
  },
  activeServiceText: {
    color: '#ffffff',
  },
  nearbySalonsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    gap:138,
    top:-25,
  },
  viewMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    top: -9,
  },
  mapIcon: {
    width: 16,
    height: 16,
  },
  viewMapText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 12,
    color: '#235aff',
  },
});

export default BookContainer;
