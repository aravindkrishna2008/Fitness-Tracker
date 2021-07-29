import React from 'react'
import {StyleSheet, View, Text, Button, TextInput} from 'react-native'
 
const SignupScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.textStyle}>Enter First Name: </Text>
      <TextInput style={styles.inputStyle}/>
      <Text style={styles.textStyle}>Enter Last Name:</Text>
      <TextInput style={styles.inputStyle}/>
      <Text style={styles.textStyle}>Enter Email: </Text>
      <TextInput style={styles.inputStyle}/>
      <Text style={styles.textStyle}>Enter Password: </Text>
      <TextInput style={styles.inputStyle}secureTextEntry/>
      <Button title="Go to Home Flow" onPress={() => navigation.navigate("HomeFlow")}/>
      <Button title="Go to sign in" onPress={() => navigation.navigate("Signin")}/>
    </View>
  )
}
 
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
    
  
  }, 
  inputStyle: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin:15,
    width:300,
    borderRadius: 20
  },
  textStyle: {
    margin: 10
  }
});
 
export default SignupScreen

