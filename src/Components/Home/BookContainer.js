import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ServiceItem from './ServiceItem';
import Indicator from '../../assests/Svg/Indicator';

const BookContainer = ({ 
  onBookNow = () => {}, 
  onServiceSelect = () => 'SalonDetail', 
  onViewMap = () => {} 
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const services = [
    { 
      id: 1, 
      name: 'Hair Cut', 
      icon: require('../../assests/Images/haircut.png'), 
      salon: { 
        salonName: 'Hair Avenue',
        location: 'Lakewood, California',
        distance: '2 km',
        rating: '4.7',
        reviews: '312',
        imageUrl: require('../../assests/Images/Salon1.png'),
      }
    },  
    { 
      id: 2, 
      name: 'Hair Styling', 
      icon: require('../../assests/Images/style.png'),
      salon: { 
        salonName: 'Beauty Bliss',
        location: 'Los Angeles, California',
        distance: '5 km',
        rating: '4.5',
        reviews: '210',
        imageUrl: require('../../assests/Images/Salon2.png'),
      }
    },
    { 
      id: 3, 
      name: 'Nail Art', 
      icon: require('../../assests/Images/polish.png'),
      salon: { 
        salonName: 'Nail Studio',
        location: 'Hollywood, California',
        distance: '3 km',
        rating: '4.2',
        reviews: '156',
        imageUrl: require('../../assests/Images/Salon3.png'),
      }
    },
    { 
      id: 4, 
      name: 'Hair Cut', 
      icon: require('../../assests/Images/drayer.png'),
      salon: { 
        salonName: 'Shine Salon',
        location: 'Santa Monica, California',
        distance: '8 km',
        rating: '4.6',
        reviews: '98',
        imageUrl: require('../../assests/Images/Salon3.png'),
      }
    }
  ];
 
  const handleServiceSelect = (service) => {
    setSelectedServiceId(service.id); 
    onServiceSelect(service.id);
  };

  const selectedService = services.find(service => service.id === selectedServiceId); 

  return (
    <>
      <View style={[styles.container]}>
        <View style={styles.promotionBanner}>
          <View style={styles.ellipseBackground} />
          <Image source={require('../../assests/Images/homeBG.png')} style={styles.bannerImage} resizeMode="cover" />
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
     
        <View style={styles.servicesList}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={[ 
              styles.serviceItem,
              service.id === selectedServiceId && styles.activeServiceItem, 
            ]}
            onPress={() => handleServiceSelect(service)}
          >
            <Image source={service.icon} style={styles.serviceIcon} />
            <Text style={[styles.serviceText, service.id === selectedServiceId && styles.activeServiceText]}>
              {service.name}
            </Text>
          </TouchableOpacity>
        ))}
        </View>
   
      </View>
      <View style={styles.nearbySalonsSection}>
        <Text style={styles.sectionTitle}>Nearby Salons</Text>
        <TouchableOpacity style={styles.viewMapButton} onPress={onViewMap}>
          <Indicator style={styles.mapIcon}  resizeMode="contain"/>
          <Text style={styles.viewMapText}>View on Map</Text>
        </TouchableOpacity>
      </View>

      {selectedService && (
        <ServiceItem 
          salonName={selectedService.salon.salonName} 
          location={selectedService.salon.location}
          distance={selectedService.salon.distance}
          rating={selectedService.salon.rating} 
          reviews={selectedService.salon.reviews}
          imageUrl={selectedService.salon.imageUrl} 
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 2,
    width: '100%',
    maxWidth: '100%',  
    backgroundColor: '#ffffff',
    // backgroundColor:'#000000',
    marginBottom: 28,
    // paddingHorizontal: 20,
  },
  promotionBanner: {
    width: '92%',
    height: 'auto',
    borderRadius: 10,
    overflow: 'hidden',
    left:15,
    justifyContent: 'center',
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
    paddingHorizontal: 10,
    // paddingHorizontal: 8,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#0B0C15',
    marginBottom: 18,
    paddingHorizontal:5,
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
    padding: 5,
    // paddingHorizontal: 10,
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
    paddingHorizontal:12,
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
