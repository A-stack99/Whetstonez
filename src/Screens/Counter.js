import {View, Text , StyleSheet , TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../Redux/Slices/Counter/Reducer';


const Counter = ({}) => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View>
      <Text style={styles.Text}>My Count is : {count}</Text>
   
      <View style={styles.buttonContainer}>
    
        <TouchableOpacity 
      style={styles.button} 
      onPress={() => dispatch(increment())}
    >
      <Text style={styles.buttonText}>Increment</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.button} 
      onPress={() => dispatch(decrement())}
    >
      <Text style={styles.buttonText}>Decrement</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({  
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width:"90%",
    height:"20%",
    alignSelf: 'center' 
  },
  buttonContainer: {
    borderRadius: 10, 
    marginVertical:20,
    marginHorizontal:20,
    paddingHorizontal:10,
  },
  button:{
  backgroundColor: '#2f4f4f',
  color: 'white',
  paddingVertical: 12,
  paddingHorizontal:20,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  marginBottom: 10,
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  }
});




