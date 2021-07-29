import React, {useState, useContext} from 'react'
import {StyleSheet, View, Text, Button, TextInput, ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Context as AuthContext } from '../context/AuthContext'
import { navigate } from '../navigationRef'

const SignupScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const { state, signup, clearErrorMessage} = useContext(
    AuthContext
  );

  const actualSignUp = () => {
    signup({ firstName, lastName, email, password})

    if (state.errorMessage == '') {
      navigation.navigate("HomeFlow")
    }
  }

  return(
    <View style={styles.container2}>
      <ScrollView style={styles.container}>
        <Text style={styles.textStyle}>Enter First Name: </Text>
        <View style={styles.inputStyle}>
          <Ionicons name="person-outline" size={25} />
          <Text>  </Text>
          <TextInput style={{width: 1000}} value={firstName} onChangeText={setFirstName}/>
        </View>
        <Text style={styles.textStyle}>Enter Last Name:</Text>
        <View style={styles.inputStyle}>
          <Ionicons name="person-outline" size={25} />
          <Text>  </Text>
          <TextInput style={{width: 1000}} value={lastName} onChangeText={setLastName}/>
        </View>
        <Text style={styles.textStyle}>Enter Email: </Text>
        <View style={styles.inputStyle}>
          <Ionicons name="mail-outline" size={25} />
          <Text>  </Text>
          <TextInput style={{width: 1000}} value={email} onChangeText={setEmail}  keyboardType="email-address"/>
        </View>
        <Text style={styles.textStyle}>Enter Password: </Text>
        <View style={styles.inputStyle}>
          <Ionicons name="key-outline" size={25} />
          <Text>  </Text>
          <TextInput style={{width: 1000}} secureTextEntry value={password} onChangeText={setPassword}/>
        </View>
        <Button title="Go to Home Flow" onPress={() => signup({ firstName, lastName, email, password})}/>
        <Button title="Go to sign in" onPress={() => navigation.navigate("Signin")}/>
      </ScrollView>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    marginTop: 50
    
  
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10
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
 
export default SignupScreen

