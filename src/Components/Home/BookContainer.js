import { View, Text, StyleSheet , Image , TouchableOpacity , ImageBackground } from 'react-native'
import React from 'react'

const BookContainer = () => {
  return (
     <View
            style={styles.bookContainer}>
      <ImageBackground
        source={require('../../assests/Images/homeBG.png')}
        style={styles.bgImage}
        // blurRadius={1} 
      >
        <View style={styles.overlay} />
        
        <View style={styles.containerText}>
              <Text style={styles.title}>
                Morning Special!
              </Text>
              <Text style={styles.subtitle}>Get 20% Off</Text>
              <Text style={{fontSize:12 , fontWeight:'400', color:'#FFFFFF'}}>on All Haircuts Between 9-10 AM</Text>
              <TouchableOpacity
                style={styles.book}>
                <Text style={{color: '#0B0C15', backgroundColor:'#FFFFFF', fontSize:14, fontWeight:'500', }}>Book Now</Text>
              </TouchableOpacity>
            </View>
      </ImageBackground>
    </View>
       
  )
}

export default BookContainer

const styles = StyleSheet.create({
    bookContainer: {
        marginHorizontal: 25, 
        borderRadius: 8, 
        overflow: 'hidden',
        flex: 1,
      },
      bgImage:{
        width: '100%',
         height: 160 , 
         alignSelf:'center',
         justifyContent: 'center',
         resizeMode:'contain'
      },
    
      overlay: {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: 'rgba(0, 0, 0, 0.4)' 
      },
      containerText: {
        position: 'absolute',
         top: 20, 
         left: 20
      },
      title: {
        color: '#FFFFFF', 
        fontSize: 16,
         fontWeight: '800'
      },
      subtitle:{
        color: '#FFFFFF', 
        fontSize: 28,
        fontWeight:'800'
      },
      book:{
        backgroundColor: '#fff',
        padding: 6,
        textAlign:'center',
        borderRadius: 8,
        marginTop:10,
    //    bottom:-40,
        width:'45%',
        color:'#0B0C15',
        fontSize:12,
        fontWeight:'600'
      }
})