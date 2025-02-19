import { View, Text , Button , TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
  return (
    <View>
     <View>
        <Text>Welcome to the Home Screen</Text>
            <TouchableOpacity 
                  style={styles.button} 
                  onPress={() => navigation.navigate('Counter')}
                >
                  <Text style={styles.buttonText}>Go On Counter</Text>
                </TouchableOpacity>
     </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'gray',
        color: 'white',
        paddingVertical: 12,
        paddingHorizontal:20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
        width: '90%',
        height: 50,
        alignSelf: 'center',
        },
        buttonText:{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#fff',
        }
})