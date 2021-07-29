import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const SigninScreen = () => {
  return(
    <View style={styles.container}>
      <Text>Signin Screen!</Text>
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