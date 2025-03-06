import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'
import React from 'react'

const ImageBanner = () => {
  return (
   <View style={[styles.container]}>
        <View style={styles.promotionBanner}>
          <View style={styles.ellipseBackground} />
          <Image source={require('../../assests/Images/homeBG.png')} style={styles.bannerImage} resizeMode="cover" />
          <View style={styles.bannerOverlay} />
          <View style={styles.bannerContent}>
            <Text style={styles.specialText}>Morning Special!</Text>
            <Text style={styles.discountText}>Get 20% Off</Text>
            <Text style={styles.descriptionText}>on All Haircuts Between 9-10 AM.</Text>
            <TouchableOpacity style={styles.bookButton} >
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> 
  )
}

export default ImageBanner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 2,
        width: '100%',
        maxWidth: '100%',  
        // backgroundColor: '#ffffff',
        // backgroundColor:'#000000',
        marginBottom: 28,
      },
      promotionBanner: {
        width: '100%',
        // height: 'auto',
        borderRadius: 10,
        overflow: 'hidden',
        // left: 15,
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
})