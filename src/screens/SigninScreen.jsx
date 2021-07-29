import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const SigninScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Signin Screen!</Text>
      <Button title="Go back" onPress={() => {navigation.navigate("signup")}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SigninScreen