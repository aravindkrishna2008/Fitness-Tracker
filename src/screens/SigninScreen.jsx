import React from 'react'
import {StyleSheet, View, Text, Button,TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const SigninScreen = ({navigation}) => {
  return(
    <View style={styles.container2}>
      <View style={styles.container}>
      <Text style={styles.textStyle}>Enter Email: </Text>
      <View style={styles.inputStyle}>
        <Ionicons name="mail-outline" size={25} />
        <Text>  </Text>
        <TextInput style={{width: 1000}}/>
      </View>
      <Text style={styles.textStyle}>Enter Password: </Text>
      <View style={styles.inputStyle}>
        <Ionicons name="key-outline" size={25} />
        <Text>  </Text>
        <TextInput style={{width: 1000}} secureTextEntry/>
      </View>
      <Button title="Go back" onPress={() => navigation.navigate("signup")}/>
    </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white'
    
  
  },
  container2: {
    flex: 1,
    backgroundColor: 'white'
  }, 
  inputStyle: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin:15,
    width:300,
    borderRadius: 20,
    flexDirection: 'row'
  },
  textStyle: {
    margin: 10
  }
});
 
export default SigninScreen
