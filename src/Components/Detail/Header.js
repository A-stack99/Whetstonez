import { View, Text, StyleSheet , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import Heart from '../../assests/Svg/Heart'
import Back from '../../assests/Svg/Back'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.icon}
           onPress={() => navigation.goBack()}>
              <Back style={styles.back}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Heart style={styles.heart}/>
            </TouchableOpacity>
          </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginBottom:10
       },
     icon:{
       borderColor:'black',
       borderWidth:1,
       borderColor:'#F5F5F5',
       width:45,
       height:45,
       alignItems: "center",
       justifyContent: "center",
       borderRadius:8,
     
     },
       back: {
         width: 24,
         height: 24,
       },
       heart: {
         width: 24,
         height: 24,
       },
})