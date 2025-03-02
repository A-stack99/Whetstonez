import { StyleSheet, Text, View , Image , Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from'react-redux'
import { AddToCart } from '../../Redux/Action/Action'


const Product = (props) => {
  
    const { item } = props;
    const dispatch = useDispatch();

    const handleAddCart = (item) => {
        console.log('Add to Cart', item);
        dispatch(AddToCart(item))
    }
  return (
   <View style={styles.container}>
            <Text style={{fontSize:20}}>{item.name}</Text>
            <Text style={{fontSize:20}}>{item.price}</Text>
            <Image source={item.image} style={{width: 100, height: 100}} />
            <Button title='Add to Cart' onPress={()=> handleAddCart(item)}/>
           </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:2,
        borderBottomColor:'#ddd',
        padding:10
    }
})