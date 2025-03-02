import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect } from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.cart) || [];
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: '#000', textAlign: 'right' }}>
        Items: {cartItems}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    padding: 40,
    justifyContent: 'center',
  },
});