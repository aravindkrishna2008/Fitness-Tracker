import React, {useState, useContext, useEffect} from 'react'
import {StyleSheet, View, Text } from 'react-native'
import { TextInput, Button, Title } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import {Context as AuthContext} from '../context/AuthContext'
import {NavigationEvents} from '@react-navigation/native'

const SigninScreen = ({navigation}) => {
  const { state, signin, clearErrorMessage} = useContext(
    AuthContext
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => clearErrorMessage());

    return unsubscribe;
  }, [navigation]);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <View style={styles.container2}>
      
      <View style={styles.container}>
      <Title style={{alignSelf: 'center', fontSize: 25}}>Sign in for Fitlance</Title>
      <Ionicons name="fitness" size={75} color="red" style={{alignSelf: 'center'}}/>
      {/* <Text style={styles.textStyle}>Enter Email: </Text> */}
          <TextInput 
            style={{ margin: 10}} 
            value={email} 
            onChangeText={setEmail}  
            keyboardType="email-address"
            left={<TextInput.Icon name={() => <Ionicons name="mail-outline" size={25} />} />}
            label={'Email'}
            mode='outlined'
            theme={{
              roundness: 20,
              colors: {
                primary:'#30bfbf',
                underlineColor:'transparent',
              }
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {/* <Text style={styles.textStyle}>Enter Password: </Text> */}
          <TextInput 
            style={{ margin: 10}} 
            secureTextEntry value={password} 
            onChangeText={setPassword} 
            left={<TextInput.Icon name={() => <Ionicons name="key-outline" size={25} />} />}
            label={'Password'}
            mode='outlined'
            theme={{
              roundness: 20,
              colors: {
                primary:'#30bfbf',
                underlineColor:'transparent',
              }
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Text></Text>
      <Button dark={true} mode="contained" color={"#30bfbf"} onPress={() => signin({ email, password})}>Sign in</Button>
        <Button mode='text' onPress={() => navigation.navigate("signup")}>Need an account? Sign up instead</Button>
    </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    
  
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
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10
  }
});
 
export default SigninScreen
