import { StyleSheet, Text, View } from 'react-native'
import React , {useState , useEffect} from 'react'
import { useSelector } from 'react-redux'


const Component1 = () => {
     const cartData = useSelector(state => state.cart) || [];
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

 
  
  return (
    <View>
      <Text>component1 : {cartItems}</Text>
    </View>
  )
}



export default Component1

const styles = StyleSheet.create({})

