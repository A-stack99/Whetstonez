import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import ServiceItem from './ServiceItem';
import Indicator from '../../assests/Svg/Indicator';
import { addSubService } from '../../Utils/API_Axios';

const BookContainer = ({ onServiceSelect = () => {} }) => {
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(1);
  const [subservices, setSubservices] = useState([]);

  useEffect(() => {
    const servicesData = [
      { 
        id: 1, 
        name: 'Hair Cut', 
        icon: require('../../assests/Images/haircut.png'), 
        salon: [{ 
          salonName: 'Hair Avenue',
          location: 'Lakewood, California',
          distance: '2 km',
          rating: '4.7',
          reviews: '312',
          imageUrl: require('../../assests/Images/Salon1.png'),
        },
        {
          salonName: 'Urban Chic Salon',
          location: 'Chicago, Illinois',
          distance: '1.8 km',
          rating: '4.8',
          reviews: '150',
          imageUrl: require('../../assests/Images/Salon3.png'),
        },
        {
          salonName: 'Shear Elegance',
          location: 'Seattle, Washington',
          distance: '5 km',
          rating: '4.6',
          reviews: '190',
          imageUrl: require('../../assests/Images/Salon2.png'),
        }]
      },
      { 
        id: 2, 
        name: 'Hair Styling', 
        icon: require('../../assests/Images/style.png'),
        salon: [{ 
          salonName: 'Beauty Bliss',
          location: 'Los Angeles, California',
          distance: '5 km',
          rating: '4.5',
          reviews: '210',
          imageUrl: require('../../assests/Images/Salon2.png'),
        },
        {
          salonName: 'The Glam Room',
          location: 'Dallas, Texas',
          distance: '3.5 km',
          rating: '4.3',
          reviews: '245',
          imageUrl: require('../../assests/Images/Salon1.png'),
        },
        {
          salonName: 'The Hair Loft',
          location: 'Miami, Florida',
          distance: '6 km',
          rating: '4.4',
          reviews: '275',
          imageUrl: require('../../assests/Images/Salon3.png'),
        }]
      },
      { 
        id: 3, 
        name: 'Nail Art', 
        icon: require('../../assests/Images/polish.png'),
        salon: [{ 
          salonName: 'Nail Studio',
          location: 'Hollywood, California',
          distance: '3 km',
          rating: '4.2',
          reviews: '156',
          imageUrl: require('../../assests/Images/Salon3.png'),
        },
        {
          salonName: 'Glow & Glam',
          location: 'Miami, Florida',
          distance: '2.5 km',
          rating: '4.5',
          reviews: '185',
          imageUrl: require('../../assests/Images/Salon2.png'),
        },
        {
          salonName: 'Luxury Nails',
          location: 'San Francisco, California',
          distance: '4 km',
          rating: '4.9',
          reviews: '320',
          imageUrl: require('../../assests/Images/Salon1.png'),
        }]
      },
      { 
        id: 4, 
        name: 'Hair Drying', 
        icon: require('../../assests/Images/drayer.png'),
        salon: [{ 
          salonName: 'Shine Salon',
          location: 'Santa Monica, California',
          distance: '8 km',
          rating: '4.6',
          reviews: '98',
          imageUrl: require('../../assests/Images/Salon3.png'),
        },
        {
          salonName: 'Vivid Beauty Lounge',
          location: 'Santa Monica, California',
          distance: '5 km',
          rating: '4.5',
          reviews: '80',
          imageUrl: require('../../assests/Images/Salon2.png'),
        },
        {
          salonName: 'Radiant Glow Salon',
          location: 'Beverly Hills, California',
          distance: '15 km',
          rating: '4.9',
          reviews: '340',
          imageUrl: require('../../assests/Images/Salon1.png'),
        }]
      }
    ];

    setServices(servicesData);
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedServiceId(service.id);
    onServiceSelect(service.id);
  };

  const addSubServiceToServer = async (subservice) => {
    try {
      const response = await addSubService(subservice);
      console.log('API Response:', response); 
      if (response.status === 200) {
        Alert.alert('Success', 'Subservice added successfully!');
      } else {
        Alert.alert('Error', 'Failed to add subservice. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error); 
      Alert.alert('Error', 'An error occurred while adding the subservice.');
    }
  };

  const addsubservice = (subservice) => {
    setSubservices(prevSubservices => {
      const isAlreadySelected = prevSubservices.some(item => item.salonName === subservice.salonName);
      if (isAlreadySelected) {
        return prevSubservices.filter(item => item.salonName !== subservice.salonName);
      } else {
        addSubServiceToServer(subservice);  
        return [...prevSubservices, subservice];
      }
    });
  };

  const selectedService = services.find(service => service.id === selectedServiceId);

  return (
    <View style={styles.container}>
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.servicesList}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[styles.serviceItem, service.id === selectedServiceId && styles.activeServiceItem]}
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
        <TouchableOpacity style={styles.viewMapButton}>
          <Indicator style={styles.mapIcon} resizeMode="contain" />
          <Text style={styles.viewMapText}>View on Map</Text>
        </TouchableOpacity>
      </View>

      {selectedService && selectedService.salon && selectedService.salon.length > 0 && (
        <View>
          {selectedService.salon.map((salon, index) => (
            <ServiceItem
              key={index}
              item={salon}
              addsubservice={addsubservice} 
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  servicesSection: {
    marginBottom: 60,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#0B0C15',
    marginBottom: 18,
    paddingHorizontal: 5,
  },
  servicesList: {
    flexDirection: 'row',
    gap: 5,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 3,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
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
    justifyContent: 'space-between',
  },
  viewMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  viewMapText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    color: '#0066ff',
  },
});

export default BookContainer;
